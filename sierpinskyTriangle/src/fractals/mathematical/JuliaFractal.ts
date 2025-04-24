import { MathFractalBase } from './MathFractalBase';
import { Complex } from '../Complex';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Julia Set fractal
 */
export class JuliaFractal extends MathFractalBase {
    private juliaConstant: Complex;
    
    /**
     * Constructor for the Julia fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 100) {
        super(canvasId, maxIterations);
        this.juliaConstant = new Complex(-0.7, 0.27); // Default value for interesting Julia set
    }
    
    /**
     * Sets the complex parameter for the Julia set
     * 
     * @param real - Real part of the complex parameter
     * @param imag - Imaginary part of the complex parameter
     */
    public setParameters(real: number, imag: number): void {
        this.juliaConstant = new Complex(real, imag);
        this.generate();
    }
    
    /**
     * Generates the Julia set fractal
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
                // Map canvas coordinates to complex plane
                let z = this.mapToComplex(x, y);
                
                let iterations = 0;
                
                // Julia set iteration: z = z^2 + c, where c is a constant
                while (iterations < this.maxIterations && z.abs() < 2) {
                    z = z.square().add(this.juliaConstant);
                    iterations++;
                }
                
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                } else {
                    // Point is outside the set - color based on how quickly it escaped
                    // Use a smooth coloring algorithm
                    const smoothColor = (iterations + 1 - Math.log2(Math.log2(z.abs()))) / this.maxIterations;
                    const hue = ((360 * smoothColor) % 360) / 360;
                    const saturation = 0.8;
                    const lightness = 0.5;
                    
                    // Convert HSL to RGB for direct color setting
                    const [r, g, b] = this.hslToRgb(hue, saturation, lightness);
                    
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
     * Returns information about the Julia fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Julia Set',
            description: 'Julia sets are related to the Mandelbrot set, but with a fixed complex parameter. Different parameters create wildly different patterns.',
            formula: 'z_{n+1} = z_n^2 + c\nwhere c is fixed and z_0 is the point being tested'
        };
    }
} 