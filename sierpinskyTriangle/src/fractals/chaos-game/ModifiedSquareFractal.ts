import { ChaosGameBase } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of a Modified Square fractal with altered positioning rules
 */
export class ModifiedSquareFractal extends ChaosGameBase {
    /**
     * Constructor for the Modified Square fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 50000) {
        super(canvasId, iterations);
    }
    
    /**
     * Generates the Modified Square fractal
     */
    public generate(): void {
        this.clear();
        
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Define the vertices of a modified square (slightly offset from regular square)
        const padding = 50;
        const vertices = [
            { x: padding, y: padding }, // top-left
            { x: width - padding, y: padding * 1.2 }, // top-right
            { x: width - padding * 1.2, y: height - padding }, // bottom-right
            { x: padding * 1.1, y: height - padding * 1.1 } // bottom-left
        ];
        
        // Draw the vertices
        this.ctx.fillStyle = '#FF5555';
        vertices.forEach(vertex => {
            this.ctx.beginPath();
            this.ctx.arc(vertex.x, vertex.y, 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        // Choose random initial point
        let x = Math.random() * width;
        let y = Math.random() * height;
        
        // Set drawing style
        this.ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        
        // Track the previous vertex index
        let prevIndex = -1;
        
        // Run the chaos game with a twist
        for (let i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex with constraints
            let randomIndex;
            
            // Modified selection rule: vertices are chosen with varying probabilities and constraints
            if (prevIndex === -1) {
                // First iteration - choose any vertex
                randomIndex = Math.floor(Math.random() * vertices.length);
            } else if (prevIndex === 0) {
                // If previous was top-left, can't go to bottom-right
                randomIndex = Math.floor(Math.random() * 3);
                if (randomIndex >= 2) randomIndex = 3; // Skip the forbidden vertex
            } else if (prevIndex === 2) {
                // If previous was bottom-right, can't go to top-left
                randomIndex = 1 + Math.floor(Math.random() * 3);
                if (randomIndex >= 4) randomIndex = 0; // Wrap around
            } else {
                // Otherwise, any vertex is possible, but with different probabilities
                const r = Math.random();
                if (r < 0.4) {
                    // 40% chance of choosing the vertex opposite to the previous
                    randomIndex = (prevIndex + 2) % 4;
                } else {
                    // 60% chance of choosing one of the adjacent vertices
                    randomIndex = (prevIndex + (Math.random() < 0.5 ? 1 : 3)) % 4;
                }
            }
            
            prevIndex = randomIndex;
            const vertex = vertices[randomIndex];
            
            // Different contraction rates for different vertices
            const rate = randomIndex % 2 === 0 ? 0.5 : 0.55; // Different rates for different corners
            x = (1 - rate) * x + rate * vertex.x;
            y = (1 - rate) * y + rate * vertex.y;
            
            // Skip the first 20 iterations (transient phase)
            if (i > 20) {
                // Draw a point with different sizes based on vertex
                const pointSize = randomIndex % 2 === 0 ? 1 : 1.5;
                this.ctx.beginPath();
                this.ctx.rect(x, y, pointSize, pointSize);
                this.ctx.fill();
            }
        }
    }
    
    /**
     * Returns information about the Modified Square fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Modified Square',
            description: 'A modified square fractal with altered vertex positions and selection rules, creating asymmetric patterns.',
            formula: 'P_{n+1} = (1-r) * P_n + r * V_i\nwith altered vertex positions and variable contraction rates'
        };
    }
} 