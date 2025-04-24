import { MathFractalBase } from './MathFractalBase';
import { Complex } from '../Complex';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of Newton's method fractal
 */
export class NewtonFractal extends MathFractalBase {
    private power: number = 3;
    
    /**
     * Constructor for the Newton fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 30) {
        super(canvasId, maxIterations);
        this.centerX = 0;
        this.centerY = 0;
    }
    
    /**
     * Set the power for the polynomial
     */
    public setPower(power: number): void {
        this.power = power;
        this.generate();
    }
    
    /**
     * Generates the Newton fractal
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
        
        // Precompute the roots of the polynomial z^n - 1
        const roots: Complex[] = [];
        for (let i = 0; i < this.power; i++) {
            const angle = (2 * Math.PI * i) / this.power;
            roots.push(new Complex(Math.cos(angle), Math.sin(angle)));
        }
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const z0 = this.mapToComplex(x, y);
                let z = z0.copy();
                
                // Newton's method iterations
                let iterations = 0;
                let rootIndex = -1;
                
                for (iterations = 0; iterations < this.maxIterations; iterations++) {
                    // f(z) = z^n - 1
                    // f'(z) = n * z^(n-1)
                    
                    // Newton's method: z = z - f(z) / f'(z)
                    const zPower = z.pow(this.power);
                    const numerator = zPower.subtract(new Complex(1, 0));
                    const denominator = new Complex(this.power, 0).multiply(z.pow(this.power - 1));
                    
                    const fraction = numerator.divide(denominator);
                    const newZ = z.subtract(fraction);
                    
                    // Check if we're close to any root
                    for (let i = 0; i < roots.length; i++) {
                        if (newZ.subtract(roots[i]).abs() < 1e-6) {
                            rootIndex = i;
                            break;
                        }
                    }
                    
                    if (rootIndex != -1) break;
                    
                    // Check if we're converging
                    if (z.subtract(newZ).abs() < 1e-10) {
                        // Find closest root
                        let minDist = Infinity;
                        for (let i = 0; i < roots.length; i++) {
                            const dist = newZ.subtract(roots[i]).abs();
                            if (dist < minDist) {
                                minDist = dist;
                                rootIndex = i;
                            }
                        }
                        break;
                    }
                    
                    z = newZ;
                }
                
                if (rootIndex != -1) {
                    // Color based on which root we converged to
                    const hue = (360 * rootIndex / this.power) % 360;
                    const saturation = 100;
                    // Adjust lightness based on iterations
                    const lightness = 50 - (iterations / this.maxIterations) * 30;
                    
                    const [r, g, b] = this.hslToRgb(hue/360, saturation/100, lightness/100);
                    this.setPixelDirectColor(data, x, y, width, 
                        Math.round(r * 255), 
                        Math.round(g * 255), 
                        Math.round(b * 255));
                } else {
                    // Black for non-converging points
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
            }
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
    
    /**
     * Returns information about the Newton fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Newton Fractal',
            description: 'Visualizes Newton\'s method for finding roots of complex polynomials. Colors represent which root the algorithm converges to.',
            formula: 'z_{n+1} = z_n - f(z_n)/f\'(z_n)\nwhere f(z) = z^n - 1'
        };
    }
} 