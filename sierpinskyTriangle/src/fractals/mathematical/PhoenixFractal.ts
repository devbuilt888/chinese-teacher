import { MathFractalBase } from './MathFractalBase';
import { Complex } from '../Complex';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Phoenix fractal
 */
export class PhoenixFractal extends MathFractalBase {
    private p: number = 0.56;
    
    /**
     * Constructor for the Phoenix fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 100) {
        super(canvasId, maxIterations);
        this.centerX = 0;
        this.centerY = 0;
        this.zoom = 0.8;
    }
    
    /**
     * Set the parameter 'p' for the Phoenix fractal
     */
    public setParameter(p: number): void {
        this.p = p;
        this.generate();
    }
    
    /**
     * Generates the Phoenix fractal
     */
    public generate(): void {
        this.clear();
        
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        const imageData = this.ctx.createImageData(width, height);
        const data = imageData.data;
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const c = this.mapToComplex(x, y);
                
                // Initial values
                let z = new Complex(0, 0);
                let zPrev = new Complex(0, 0);
                
                let iterations = 0;
                let smooth = 0;
                
                // Phoenix iteration: z = z^2 + c + p*zPrev
                while (iterations < this.maxIterations && z.abs() < 4) {
                    // Store previous z for next iteration
                    const zTemp = z;
                    
                    // Phoenix formula
                    z = z.square().add(c).add(zPrev.multiply(new Complex(this.p, 0)));
                    zPrev = zTemp;
                    
                    iterations++;
                }
                
                // Log escape time for smooth coloring
                if (iterations < this.maxIterations) {
                    const log_zn = Math.log(z.abs()) / 2;
                    const nu = Math.log(log_zn / Math.log(2)) / Math.log(2);
                    smooth = iterations + 1 - nu;
                }
                
                // Get color
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                } else {
                    // Point is outside the set - color based on escape time
                    // Use a fire-like palette for phoenix
                    const t = smooth / this.maxIterations;
                    
                    // Fire color palette
                    const r = Math.min(255, Math.round(255 * Math.pow(t, 0.5)));
                    const g = Math.min(255, Math.round(128 * Math.pow(t, 0.8)));
                    const b = Math.min(255, Math.round(64 * Math.pow(t, 2)));
                    
                    this.setPixelDirectColor(data, x, y, width, r, g, b);
                }
            }
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
    
    /**
     * Returns information about the Phoenix fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Phoenix Fractal',
            description: 'A generalization of the Mandelbrot set that incorporates previous iteration values, creating flame-like patterns.',
            formula: 'z_{n+1} = z_n^2 + c + p·z_{n-1}\nwhere p is a complex parameter'
        };
    }
} 