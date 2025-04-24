import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Sierpinski Carpet using chaos game
 */
export class SierpinskiCarpet extends ChaosGameBase {
    private points: Point[];
    
    /**
     * Constructor for the Sierpinski Carpet fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 50000) {
        super(canvasId, iterations);
        this.points = [];
        this.colorPalette = ["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00"];
    }
    
    /**
     * Initialize the Sierpinski Carpet fractal
     * Override to set up the 8 vertices of the carpet
     */
    public initialize(): void {
        super.initialize();
        
        const w = this.canvas.width;
        const h = this.canvas.height;
        const padding = 20;
        
        // Set up 8 points around a square (excluding the center)
        this.points = [
            [padding, padding],                   // top-left (0)
            [w/2, padding],                       // top-middle (1)
            [w - padding, padding],               // top-right (2)
            [w - padding, h/2],                   // middle-right (3)
            [w - padding, h - padding],           // bottom-right (4)
            [w/2, h - padding],                   // bottom-middle (5)
            [padding, h - padding],               // bottom-left (6)
            [padding, h/2]                        // middle-left (7)
        ];
        
        // Clear canvas before plotting vertices
        this.clear();
        
        // Draw the vertices
        this.points.forEach((p, i) => {
            this.ctx.fillStyle = this.colorPalette[i % this.colorPalette.length];
            this.ctx.beginPath();
            this.ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    /**
     * Generates the Sierpinski Carpet fractal using the chaos game algorithm
     * with a 2/3 ratio instead of 1/2
     */
    public generate(): void {
        this.initialize();
        
        let currentPoint = this.startingPoint;
        let previousVertex = -1;
        
        // Skip first 20 iterations (transient phase)
        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * 8);
            const targetPoint = this.points[randomIndex];
            
            // Move 2/3 of the way to the chosen vertex
            currentPoint = [
                currentPoint[0] + (targetPoint[0] - currentPoint[0]) * (2/3),
                currentPoint[1] + (targetPoint[1] - currentPoint[1]) * (2/3)
            ];
            previousVertex = randomIndex;
        }
        
        // Main iteration loop
        for (let i = 0; i < this.iterationsCount; i++) {
            // Pick a random vertex
            const randomIndex = Math.floor(Math.random() * 8);
            const targetPoint = this.points[randomIndex];
            
            // Move 2/3 of the way to the chosen vertex
            currentPoint = [
                currentPoint[0] + (targetPoint[0] - currentPoint[0]) * (2/3),
                currentPoint[1] + (targetPoint[1] - currentPoint[1]) * (2/3)
            ];
            
            // Use a color that relates to the vertex chosen
            this.ctx.fillStyle = this.colorPalette[randomIndex % this.colorPalette.length];
            
            // Draw a point (smaller for more detail)
            this.ctx.beginPath();
            this.ctx.rect(currentPoint[0], currentPoint[1], 1, 1);
            this.ctx.fill();
            
            previousVertex = randomIndex;
        }
    }
    
    /**
     * Returns information about the Sierpinski Carpet fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Sierpinski Carpet',
            description: 'A 2D generalization of the Sierpinski Triangle. This fractal uses 8 vertices arranged in a square pattern and a 2/3 contraction ratio to create a self-similar pattern with a square hole in the middle.',
            formula: 'P_{n+1} = P_n + 2/3(V_i - P_n)\nwhere V_i is a randomly chosen vertex from the 8 vertices'
        };
    }
} 