import { MathFractalBase } from './MathFractalBase';
import { Complex } from '../Complex';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Burning Ship Fractal
 */
export class BurningShipFractal extends MathFractalBase {
    /**
     * Constructor for the Burning Ship fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 100) {
        super(canvasId, maxIterations);
        this.centerX = -0.5;
        this.centerY = -0.5;
    }
    
    /**
     * Generates the Burning Ship fractal
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
                let z = new Complex(0, 0);
                
                let iterations = 0;
                
                // Burning Ship iteration: z = (|Re(z)| + i|Im(z)|)^2 + c
                while (iterations < this.maxIterations && z.abs() < 2) {
                    // Take absolute value of real and imaginary parts before squaring
                    const absRe = Math.abs(z.real);
                    const absIm = Math.abs(z.imag);
                    
                    const zAbs = new Complex(absRe, absIm);
                    z = zAbs.square().add(c);
                    
                    iterations++;
                }
                
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                } else {
                    // Point is outside the set - create a fiery color scheme
                    // Use a smooth coloring algorithm
                    const smoothColor = iterations + 1 - Math.log2(Math.log2(z.abs()));
                    const normalized = smoothColor / this.maxIterations;
                    
                    // Fiery color scheme
                    let r, g, b;
                    
                    if (normalized < 0.5) {
                        // Black to red
                        r = Math.floor(normalized * 2 * 255);
                        g = 0;
                        b = 0;
                    } else if (normalized < 0.75) {
                        // Red to yellow
                        r = 255;
                        g = Math.floor((normalized - 0.5) * 4 * 255);
                        b = 0;
                    } else {
                        // Yellow to white
                        r = 255;
                        g = 255;
                        b = Math.floor((normalized - 0.75) * 4 * 255);
                    }
                    
                    this.setPixelDirectColor(data, x, y, width, r, g, b);
                }
            }
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
    
    /**
     * Returns information about the Burning Ship fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Burning Ship Fractal',
            description: 'The Burning Ship fractal modifies the Mandelbrot formula by taking the absolute value of real and imaginary components before squaring.',
            formula: 'z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)^2 + c\nz_0 = 0'
        };
    }
} 