import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Restricted Square Fractal using chaos game
 */
export class RestrictedSquareFractal extends ChaosGameBase {
    private points: Point[];
    
    /**
     * Constructor for the Restricted Square fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 10000) {
        super(canvasId, iterations);
        this.points = [];
    }
    
    /**
     * Initialize the Restricted Square fractal
     * Override to set up square vertices
     */
    public initialize(): void {
        super.initialize();
        
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Set up square points
        this.points = [
            [20, 20],          // top-left (0)
            [w - 20, 20],      // top-right (1)
            [20, h - 20],      // bottom-left (2)
            [w - 20, h - 20]   // bottom-right (3)
        ];
        
        // Clear canvas before plotting vertices
        this.clear();
        
        // Draw the vertices
        this.points.forEach(p => this.plot(p, 3));
    }
    
    /**
     * Generates the Restricted Square fractal using the chaos game algorithm
     * with restrictions that prevent movement to opposite corners
     */
    public generate(): void {
        this.initialize();
        
        let currentPoint = this.startingPoint;
        this.plot(currentPoint);
        let previousVertex = -1;
        
        // Restriction rules - cannot move to opposite corner
        const restrictions: {[key: number]: number} = {
            0: 3, // can't go from top-left to bottom-right
            1: 2, // can't go from top-right to bottom-left
            2: 1, // can't go from bottom-left to top-right
            3: 0  // can't go from bottom-right to top-left
        };
        
        for (let i = 0; i < this.iterationsCount; i++) {
            // Pick a random vertex that isn't restricted
            let randomIndex: number;
            do {
                randomIndex = Math.floor(Math.random() * 4);
            } while (previousVertex !== -1 && randomIndex === restrictions[previousVertex]);
            
            const targetPoint = this.points[randomIndex];
            
            // Move halfway to that vertex
            currentPoint = this.midpoint(currentPoint, targetPoint);
            this.plot(currentPoint);
            previousVertex = randomIndex;
        }
    }
    
    /**
     * Returns information about the Restricted Square fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Restricted Square Fractal',
            description: 'A square fractal with restrictions that prevent certain vertex combinations, creating interesting patterns.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i cannot be opposite to the previously chosen vertex'
        };
    }
} 