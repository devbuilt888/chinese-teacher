import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Square Fractal using chaos game
 */
export class SquareFractal extends ChaosGameBase {
    private points: Point[];
    
    /**
     * Constructor for the Square fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 10000) {
        super(canvasId, iterations);
        this.points = [];
    }
    
    /**
     * Initialize the Square fractal
     * Override to set up square vertices
     */
    public initialize(): void {
        super.initialize();
        
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Set up square points
        this.points = [
            [20, 20],          // top-left
            [w - 20, 20],      // top-right
            [20, h - 20],      // bottom-left
            [w - 20, h - 20]   // bottom-right
        ];
        
        // Clear canvas before plotting vertices
        this.clear();
        
        // Draw the vertices
        this.points.forEach(p => this.plot(p, 3));
    }
    
    /**
     * Generates the Square fractal using the chaos game algorithm
     */
    public generate(): void {
        this.initialize();
        
        let currentPoint = this.startingPoint;
        this.plot(currentPoint);
        let previousVertex = -1;
        
        for (let i = 0; i < this.iterationsCount; i++) {
            // Pick a random vertex
            const randomIndex = Math.floor(Math.random() * 4);
            const targetPoint = this.points[randomIndex];
            
            // Move halfway to that vertex
            currentPoint = this.midpoint(currentPoint, targetPoint);
            this.plot(currentPoint);
            previousVertex = randomIndex;
        }
    }
    
    /**
     * Returns information about the Square fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Square Fractal',
            description: 'A square-based chaos game that generates a filled square through random midpoint selection.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is a randomly chosen vertex'
        };
    }
} 