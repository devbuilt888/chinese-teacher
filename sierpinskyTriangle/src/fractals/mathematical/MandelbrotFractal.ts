import { MathFractalBase } from './MathFractalBase';
import { Complex } from '../Complex';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Mandelbrot Set fractal
 */
export class MandelbrotFractal extends MathFractalBase {
    /**
     * Constructor for the Mandelbrot fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 100) {
        super(canvasId, maxIterations);
        this.centerX = -0.5; // Center of the Mandelbrot set
        this.centerY = 0;
    }
    
    /**
     * Generates the Mandelbrot set fractal
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
                let smooth = 0;
                
                // Mandelbrot iteration: z = z^2 + c
                while (iterations < this.maxIterations && z.abs() < 2) {
                    z = z.square().add(c);
                    iterations++;
                }
                
                // Smooth coloring logarithmic bands
                if (iterations < this.maxIterations) {
                    smooth = z.abs();
                }
                
                // Get color
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                } else {
                    // Point is outside the set - color based on how quickly it escaped
                    const hue = (360 * iterations / this.maxIterations) % 360;
                    const saturation = 100;
                    const lightness = 50;
                    
                    // Convert HSL to RGB
                    const [r, g, b] = this.hslToRgb(hue/360, saturation/100, lightness/100);
                    this.setPixelDirectColor(data, x, y, width, 
                        Math.round(r * 255), 
                        Math.round(g * 255), 
                        Math.round(b * 255));
                }
            }
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
    
    /**
     * Returns information about the Mandelbrot fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Mandelbrot Set',
            description: 'The famous Mandelbrot set is formed by iterating z = z² + c and observing which complex values of c cause the sequence to remain bounded.',
            formula: 'z_{n+1} = z_n^2 + c\nz_0 = 0\nSet contains c where |z_n| remains bounded as n→∞'
        };
    }
} 