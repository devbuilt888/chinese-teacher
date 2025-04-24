/**
 * Adjacent Restriction Fractal
 * 
 * This fractal is a variation of the chaos game played on a hexagon.
 * The restriction is that when choosing the next vertex, you cannot select
 * a vertex that is adjacent to the previously chosen one.
 */

import { FractalGenerator } from '../utils/fractal-generator';

export class AdjacentRestrictionFractal extends FractalGenerator {
    constructor(canvas) {
        super(canvas);
        this.name = 'Adjacent Restriction';
        this.description = 'A variation of the chaos game with adjacent vertex restrictions on a hexagon.';
        
        // Define vertices of a regular hexagon
        this.vertices = [];
        this.colors = [
            '#FF5252', // Red
            '#FFEB3B', // Yellow
            '#69F0AE', // Green
            '#40C4FF', // Light Blue
            '#7C4DFF', // Purple
            '#FF4081'  // Pink
        ];
        
        // The ratio of distance to move toward the chosen vertex
        this.ratio = 2/3;
        
        // Track last vertex for restriction rule
        this.lastVertexIndex = null;
    }
    
    initialize() {
        // Calculate vertices of a regular hexagon
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.4;
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        this.vertices = [];
        
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2 / 6) - Math.PI / 2; // Start from top (270 degrees)
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            this.vertices.push({ x, y });
        }
        
        // Start with a random point inside the hexagon
        this.currentPoint = {
            x: centerX,
            y: centerY
        };
        
        // Clear canvas
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw hexagon outline
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        this.ctx.beginPath();
        this.ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
        for (let i = 1; i < this.vertices.length; i++) {
            this.ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Reset last vertex index
        this.lastVertexIndex = null;
    }
    
    generateNextPoint() {
        // Choose a random vertex that is not adjacent to the last one
        let index;
        if (this.lastVertexIndex === null) {
            // First iteration, any vertex is fine
            index = Math.floor(Math.random() * 6);
        } else {
            // Get forbidden adjacent indices
            const forbiddenIndices = [
                this.lastVertexIndex,
                (this.lastVertexIndex + 1) % 6,
                (this.lastVertexIndex + 5) % 6 // -1 in modulo arithmetic
            ];
            
            // Pick from allowed indices
            const allowedIndices = Array.from({length: 6}, (_, i) => i)
                .filter(i => !forbiddenIndices.includes(i));
            
            index = allowedIndices[Math.floor(Math.random() * allowedIndices.length)];
        }
        
        // Update last vertex
        this.lastVertexIndex = index;
        
        // Get the chosen vertex
        const vertex = this.vertices[index];
        
        // Move 2/3 of the way to the chosen vertex
        this.currentPoint.x = this.currentPoint.x + this.ratio * (vertex.x - this.currentPoint.x);
        this.currentPoint.y = this.currentPoint.y + this.ratio * (vertex.y - this.currentPoint.y);
        
        // Return the new point and color
        return {
            x: this.currentPoint.x,
            y: this.currentPoint.y,
            color: this.colors[index]
        };
    }
    
    plotPoint(point) {
        this.ctx.fillStyle = point.color;
        this.ctx.fillRect(point.x, point.y, 1, 1);
    }
    
    // Override the render method to optimize rendering
    render(iterations) {
        // Initialize if needed
        if (!this.isInitialized) {
            this.initialize();
            this.isInitialized = true;
        }
        
        // Batch rendering for better performance
        const batchSize = 1000;
        const totalBatches = Math.ceil(iterations / batchSize);
        
        const renderBatch = (batchIndex) => {
            if (batchIndex >= totalBatches || this.stopped) {
                return;
            }
            
            const pointsToRender = Math.min(batchSize, iterations - batchIndex * batchSize);
            
            // Create an ImageData object for batch drawing
            const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            const data = imageData.data;
            
            for (let i = 0; i < pointsToRender; i++) {
                const point = this.generateNextPoint();
                
                // Only plot if the point is within canvas bounds
                if (point.x >= 0 && point.x < this.canvas.width && 
                    point.y >= 0 && point.y < this.canvas.height) {
                    
                    // Convert color to RGB
                    const rgb = this.hexToRgb(point.color);
                    
                    // Calculate the index in the ImageData array
                    const index = (Math.floor(point.y) * this.canvas.width + Math.floor(point.x)) * 4;
                    
                    // Set pixel color (RGBA)
                    data[index] = rgb.r;     // Red
                    data[index + 1] = rgb.g; // Green
                    data[index + 2] = rgb.b; // Blue
                    data[index + 3] = 255;   // Alpha (fully opaque)
                }
            }
            
            this.ctx.putImageData(imageData, 0, 0);
            
            // Schedule the next batch
            setTimeout(() => renderBatch(batchIndex + 1), 0);
        };
        
        // Start rendering batches
        renderBatch(0);
    }
    
    // Utility method to convert hex color to RGB
    hexToRgb(hex) {
        // Remove # if present
        hex = hex.replace(/^#/, '');
        
        // Parse the hex values
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        
        return { r, g, b };
    }
}

// Register the fractal with the global object for initialization
if (typeof window !== 'undefined') {
    window.initAdjacentRestrictionFractal = (iterations = 50000) => {
        const canvas = document.getElementById('adjacent-canvas');
        if (!canvas) return;
        
        const fractal = new AdjacentRestrictionFractal(canvas);
        fractal.initialize();
        fractal.render(iterations);
        
        return fractal;
    };
}

export default AdjacentRestrictionFractal; 