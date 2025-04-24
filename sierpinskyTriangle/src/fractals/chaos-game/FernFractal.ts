import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of a Fern-like fractal using weighted chaos game
 */
export class FernFractal extends ChaosGameBase {
    private transformations: Array<{
        prob: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        color: string;
    }>;
    
    /**
     * Constructor for the Fern fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 50000) {
        super(canvasId, iterations);
        
        // Define the transformations for the Barnsley fern
        this.transformations = [
            { prob: 0.01, a: 0.00, b: 0.00, c: 0.00, d: 0.16, e: 0.00, f: 0.00, color: '#1AFF1A' }, // Stem
            { prob: 0.85, a: 0.85, b: 0.04, c: -0.04, d: 0.85, e: 0.00, f: 1.60, color: '#00CC00' }, // Successive smaller leaflets
            { prob: 0.07, a: 0.20, b: -0.26, c: 0.23, d: 0.22, e: 0.00, f: 1.60, color: '#33FF33' }, // Largest left leaflet
            { prob: 0.07, a: -0.15, b: 0.28, c: 0.26, d: 0.24, e: 0.00, f: 0.44, color: '#00FF00' }  // Largest right leaflet
        ];
        
        // Override the color palette
        this.colorPalette = ["#00FF00", "#33FF33", "#66FF66", "#99FF99"];
    }
    
    /**
     * Initialize the Fern fractal
     */
    public initialize(): void {
        super.initialize();
        
        // Clear the canvas
        this.clear();
        
        // Set initial point
        this.startingPoint = [0, 0];
    }
    
    /**
     * Apply a transformation to a point
     */
    private transform(point: Point, tx: any): Point {
        const [x, y] = point;
        return [
            tx.a * x + tx.b * y + tx.e,
            tx.c * x + tx.d * y + tx.f
        ];
    }
    
    /**
     * Gets a random transformation based on probability weights
     */
    private getRandomTransformation(): any {
        const r = Math.random();
        let sumProb = 0;
        
        for (const tx of this.transformations) {
            sumProb += tx.prob;
            if (r <= sumProb) {
                return tx;
            }
        }
        
        return this.transformations[0];  // Fallback
    }
    
    /**
     * Generates the Fern fractal using the chaos game algorithm with affine transformations
     */
    public generate(): void {
        this.initialize();
        
        let currentPoint = this.startingPoint;
        
        // Skip first 20 iterations (transient phase)
        for (let i = 0; i < 20; i++) {
            const tx = this.getRandomTransformation();
            currentPoint = this.transform(currentPoint, tx);
        }
        
        // Calculate scaling to fit the canvas
        const w = this.canvas.width;
        const h = this.canvas.height;
        const scale = h / 12;  // Fern's height is about 10 units
        const offsetX = w / 2;
        const offsetY = h - 20;  // Position at bottom of canvas
        
        // Main iteration loop
        for (let i = 0; i < this.iterationsCount; i++) {
            // Pick a random transformation based on probability weights
            const tx = this.getRandomTransformation();
            
            // Apply the transformation
            currentPoint = this.transform(currentPoint, tx);
            
            // Map the point to the canvas space
            const canvasX = offsetX + scale * currentPoint[0];
            const canvasY = offsetY - scale * currentPoint[1];  // Y is inverted in canvas
            
            // Use the color associated with the transformation
            this.ctx.fillStyle = tx.color;
            
            // Draw a small point
            this.ctx.beginPath();
            this.ctx.rect(canvasX, canvasY, 1, 1);
            this.ctx.fill();
        }
    }
    
    /**
     * Returns information about the Fern fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Barnsley Fern',
            description: 'A fern-like fractal generated using a chaos game with probabilistic affine transformations. Each part of the fern (stem, leaflets) is created by applying specific transformations with varying probabilities.',
            formula: 'x_{n+1} = a_i·x_n + b_i·y_n + e_i\ny_{n+1} = c_i·x_n + d_i·y_n + f_i\nwhere i is chosen with probability p_i'
        };
    }
} 