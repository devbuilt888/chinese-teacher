import { MathFractalBase } from './MathFractalBase';
import { Complex } from '../Complex';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Sierpinski Triangle fractal using a deterministic approach
 */
export class SierpinskiTriangleFractal extends MathFractalBase {
    private depth: number = 6;
    
    /**
     * Constructor for the Sierpinski Triangle fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum depth of the recursion
     */
    constructor(canvasId: string, maxDepth: number = 6) {
        super(canvasId, maxDepth);
        this.depth = maxDepth;
        this.zoom = 0.9; // Default zoom level
    }
    
    /**
     * Sets the depth for the Sierpinski Triangle
     */
    public setDepth(depth: number): void {
        this.depth = depth;
        this.generate();
    }
    
    /**
     * Helper method to draw a filled triangle
     */
    private drawTriangle(p1: [number, number], p2: [number, number], p3: [number, number], fillColor: string): void {
        this.ctx.beginPath();
        this.ctx.moveTo(p1[0], p1[1]);
        this.ctx.lineTo(p2[0], p2[1]);
        this.ctx.lineTo(p3[0], p3[1]);
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
    }
    
    /**
     * Calculates the midpoint between two points
     */
    private midpoint(p1: [number, number], p2: [number, number]): [number, number] {
        return [
            (p1[0] + p2[0]) / 2,
            (p1[1] + p2[1]) / 2
        ];
    }
    
    /**
     * Recursively draws the Sierpinski triangle
     */
    private sierpinski(p1: [number, number], p2: [number, number], p3: [number, number], depth: number): void {
        if (depth === 0) {
            // Generate a color based on position for visual appeal
            const hue = (p1[0] * 0.7 + p1[1] * 0.3) % 360;
            const color = `hsl(${hue}, 100%, 50%)`;
            this.drawTriangle(p1, p2, p3, color);
            return;
        }
        
        const p12 = this.midpoint(p1, p2);
        const p23 = this.midpoint(p2, p3);
        const p31 = this.midpoint(p3, p1);
        
        // Recursively draw three smaller triangles
        this.sierpinski(p1, p12, p31, depth - 1);
        this.sierpinski(p12, p2, p23, depth - 1);
        this.sierpinski(p31, p23, p3, depth - 1);
    }
    
    /**
     * Generates the Sierpinski Triangle fractal
     */
    public generate(): void {
        this.clear();
        
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Calculate the size based on zoom
        const size = Math.min(width, height) * 0.85 * this.zoom;
        
        // Calculate the vertices of the main triangle
        // Centered in the canvas
        const centerX = width / 2;
        const centerY = height / 2;
        const halfSize = size / 2;
        const height30 = size * Math.sin(Math.PI / 3); // Height of equilateral triangle
        
        const vertices: [number, number][] = [
            [centerX, centerY - height30 / 1.5], // Top vertex
            [centerX - halfSize, centerY + height30 / 3], // Bottom left
            [centerX + halfSize, centerY + height30 / 3]  // Bottom right
        ];
        
        // Draw the Sierpinski triangle recursively
        this.sierpinski(vertices[0], vertices[1], vertices[2], this.depth);
    }
    
    /**
     * Returns information about the Sierpinski Triangle fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Sierpinski Triangle',
            description: 'The Sierpinski Triangle is a fractal pattern created by recursively removing the center triangle from equilateral triangles.',
            formula: 'Recursive subdivision: Begin with an equilateral triangle, divide into 4 equal triangles, remove center triangle, repeat for remaining triangles.'
        };
    }
} 