import { MathFractalBase } from './MathFractalBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Lyapunov fractal
 */
export class LyapunovFractal extends MathFractalBase {
    private sequence: string = 'AB';
    
    /**
     * Constructor for the Lyapunov fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 100) {
        super(canvasId, maxIterations);
        this.centerX = 0;
        this.centerY = 0;
    }
    
    /**
     * Set the sequence string
     */
    public setSequence(sequence: string): void {
        this.sequence = sequence.toUpperCase();
        this.generate();
    }
    
    /**
     * Generates the Lyapunov fractal
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
        
        // Define the range for r values
        const minA = 2.0;
        const maxA = 4.0;
        const minB = 2.0;
        const maxB = 4.0;
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                // Map canvas coordinates to parameter space
                const a = minA + (maxA - minA) * x / width;
                const b = minB + (maxB - minB) * (height - y) / height;
                
                // Calculate Lyapunov exponent
                const lyapunov = this.calculateLyapunovExponent(a, b);
                
                // Color based on Lyapunov exponent
                if (isNaN(lyapunov)) {
                    // Black for undefined
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                } else if (lyapunov < 0) {
                    // Stable (negative exponent) - blue to green scale
                    const intensity = Math.min(1.0, Math.abs(lyapunov / 2));
                    const r = 0;
                    const g = Math.round(255 * intensity);
                    const b = Math.round(255 * (1 - intensity));
                    this.setPixelDirectColor(data, x, y, width, r, g, b);
                } else {
                    // Chaotic (positive exponent) - yellow to red scale
                    const intensity = Math.min(1.0, lyapunov);
                    const r = 255;
                    const g = Math.round(255 * (1 - intensity));
                    const b = 0;
                    this.setPixelDirectColor(data, x, y, width, r, g, b);
                }
            }
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
    
    /**
     * Calculate the Lyapunov exponent for given parameters
     */
    private calculateLyapunovExponent(a: number, b: number): number {
        // Initial value
        let x = 0.5;
        
        // Parameters array based on the sequence
        const rValues: number[] = [];
        for (let i = 0; i < this.sequence.length; i++) {
            rValues.push(this.sequence[i] === 'A' ? a : b);
        }
        
        // Warmup iterations to get on the attractor
        const warmup = Math.min(100, this.maxIterations / 2);
        for (let i = 0; i < warmup; i++) {
            const r = rValues[i % rValues.length];
            x = r * x * (1 - x);
            if (x <= 0 || x >= 1 || isNaN(x)) {
                return NaN; // Diverged
            }
        }
        
        // Calculate Lyapunov exponent
        let sum = 0;
        for (let i = 0; i < this.maxIterations; i++) {
            const r = rValues[i % rValues.length];
            const derivative = Math.abs(r * (1 - 2 * x));
            sum += Math.log(derivative);
            
            // Next iteration
            x = r * x * (1 - x);
            if (x <= 0 || x >= 1 || isNaN(x)) {
                return NaN; // Diverged
            }
        }
        
        return sum / this.maxIterations;
    }
    
    /**
     * Returns information about the Lyapunov fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Lyapunov Fractal',
            description: 'Maps the stability of a dynamical system with regions of chaos (positive exponents) and stability (negative exponents).',
            formula: 'x_{n+1} = r·x_n·(1-x_n)\nLyapunov exponent: λ = lim_{n→∞} (1/n)∑ln|r(1-2x_k)|'
        };
    }
} 