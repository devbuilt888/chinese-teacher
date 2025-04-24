import { FractalBase } from '../FractalBase';

/**
 * Type for representing a 2D point
 */
export type Point = [number, number];

/**
 * Base class for chaos game fractals
 */
export abstract class ChaosGameBase extends FractalBase {
    protected iterationsCount: number;
    protected startingPoint: Point;
    protected colorPalette: string[];
    
    /**
     * Constructor for the chaos game fractal base class
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 10000) {
        super(canvasId);
        this.iterationsCount = iterations;
        this.colorPalette = ["#0ff", "#f0f", "#0f0"];
    }
    
    /**
     * Initialize the fractal
     * Override parent method to add setup specific to chaos game fractals
     */
    public initialize(): void {
        super.initialize();
        
        // Set the starting point to center of canvas
        this.startingPoint = [this.canvas.width / 2, this.canvas.height / 2];
    }
    
    /**
     * Sets the number of iterations for the fractal
     */
    public setIterations(iterations: number): void {
        this.iterationsCount = iterations;
        this.generate();
    }
    
    /**
     * Plots a point on the canvas
     */
    protected plot(point: Point, size: number = 1): void {
        const [x, y] = point;
        const currentColor = Math.floor(Math.random() * this.colorPalette.length);
        this.ctx.fillStyle = this.colorPalette[currentColor];
        this.ctx.fillRect(x - size/2, y - size/2, size, size);
    }
    
    /**
     * Calculates the midpoint between two points
     */
    protected midpoint(p1: Point, p2: Point): Point {
        return [
            (p1[0] + p2[0]) / 2,
            (p1[1] + p2[1]) / 2
        ];
    }
} 