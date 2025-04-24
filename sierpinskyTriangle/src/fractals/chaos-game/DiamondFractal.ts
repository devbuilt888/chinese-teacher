import { ChaosGameBase } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of a Diamond fractal using chaos game
 */
export class DiamondFractal extends ChaosGameBase {
    /**
     * Constructor for the Diamond fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 50000) {
        super(canvasId, iterations);
    }
    
    /**
     * Generates the Diamond fractal
     */
    public generate(): void {
        this.clear();
        
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Define the vertices of a diamond
        const padding = 50;
        const vertices = [
            { x: width / 2, y: padding }, // top
            { x: width - padding, y: height / 2 }, // right
            { x: width / 2, y: height - padding }, // bottom
            { x: padding, y: height / 2 } // left
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
        
        // Track the previous vertex index
        let prevIndex = -1;
        
        // Set drawing style
        this.ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        
        // Run the chaos game
        for (let i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex (not the same as the previous one)
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * vertices.length);
            } while (randomIndex === prevIndex);
            
            prevIndex = randomIndex;
            const vertex = vertices[randomIndex];
            
            // Move halfway to the chosen vertex
            x = (x + vertex.x) / 2;
            y = (y + vertex.y) / 2;
            
            // Skip the first 20 iterations (transient phase)
            if (i > 20) {
                // Draw a point
                this.ctx.beginPath();
                this.ctx.rect(x, y, 1, 1);
                this.ctx.fill();
            }
        }
    }
    
    /**
     * Returns information about the Diamond fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Diamond Fractal',
            description: 'A four-point chaos game with a diamond shape, creating unique patterns. Points cannot move to the previously chosen vertex.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i cannot be the same as the previous vertex'
        };
    }
} 