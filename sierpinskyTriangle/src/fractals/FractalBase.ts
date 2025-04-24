/**
 * Base class for all fractals
 */
export abstract class FractalBase {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    public canvasId: string;

    /**
     * Constructor for the base fractal class
     * 
     * @param canvasId - The ID of the canvas element to render on
     */
    constructor(canvasId: string) {
        this.canvasId = canvasId;
    }

    /**
     * Initialize the canvas element and context
     * This is called after the canvas is created by the FractalCard
     */
    public initialize(): void {
        this.canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
        if (!this.canvas) {
            throw new Error(`Canvas element with ID ${this.canvasId} not found`);
        }
        
        const context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error(`Could not get 2D context for canvas ${this.canvasId}`);
        }
        
        this.ctx = context;
        this.clear();
    }

    /**
     * Clears the canvas with a black background
     */
    public clear(): void {
        if (!this.ctx) {
            this.initialize();
        }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Abstract method to generate the fractal
     * Must be implemented by all derived classes
     */
    public abstract generate(): void;

    /**
     * Get description data for this fractal
     * Should be implemented by derived classes to provide information
     */
    public abstract getInfo(): FractalInfo;
}

/**
 * Interface for fractal information
 */
export interface FractalInfo {
    title: string;
    description: string;
    formula: string;
} 