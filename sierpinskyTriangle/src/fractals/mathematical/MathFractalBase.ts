import { FractalBase } from '../FractalBase';
import { Complex } from '../Complex';

/**
 * Base class for mathematical fractals
 */
export abstract class MathFractalBase extends FractalBase {
    protected maxIterations: number = 100;
    protected zoom: number = 1.0;
    protected centerX: number = 0;
    protected centerY: number = 0;
    protected colorMode: string = 'smooth'; // 'smooth' or 'discrete'
    protected colorPalette: string[];
    
    /**
     * Constructor for the mathematical fractal base class
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    constructor(canvasId: string, maxIterations: number = 100) {
        super(canvasId);
        this.maxIterations = maxIterations;
        this.colorPalette = [
            '#ff0000', '#ff7f00', '#ffff00', '#00ff00', 
            '#0000ff', '#4b0082', '#8f00ff', '#ff00ff'
        ];
    }
    
    /**
     * Sets the maximum iterations for the fractal
     */
    public setMaxIterations(iterations: number): void {
        this.maxIterations = iterations;
        this.generate();
    }
    
    /**
     * Sets the zoom level for the fractal
     */
    public setZoom(zoom: number): void {
        this.zoom = zoom;
        this.generate();
    }
    
    /**
     * Sets the center point for the fractal
     */
    public setCenter(x: number, y: number): void {
        this.centerX = x;
        this.centerY = y;
        this.generate();
    }
    
    /**
     * Gets the color for a point based on iteration count
     */
    protected getColor(iterations: number, maxIterations: number, smooth: number = 0): string {
        if (iterations === maxIterations) {
            return '#000000'; // Black for points in the set
        }
        
        if (this.colorMode === 'smooth') {
            // Smooth coloring formula
            let hue = 360 * (iterations + 1 - Math.log2(Math.log2(smooth))) / maxIterations;
            hue = hue % 360;
            return `hsl(${hue}, 100%, 50%)`;
        } else {
            // Discrete coloring
            const colorIndex = iterations % this.colorPalette.length;
            return this.colorPalette[colorIndex];
        }
    }
    
    /**
     * Maps a canvas coordinate to a complex plane point
     */
    protected mapToComplex(x: number, y: number): Complex {
        if (!this.canvas) {
            this.initialize();
        }
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Aspect ratio correction
        const aspectRatio = width / height;
        const scale = 2.0 / (this.zoom * Math.min(width, height));
        
        const real = (x - width / 2) * scale * aspectRatio + this.centerX;
        const imag = (y - height / 2) * scale + this.centerY;
        
        return new Complex(real, imag);
    }
    
    /**
     * Helper function to convert HSL to RGB
     */
    protected hslToRgb(h: number, s: number, l: number): [number, number, number] {
        let r, g, b;
        
        if (s === 0) {
            r = g = b = l; // Achromatic
        } else {
            const hue2rgb = (p: number, q: number, t: number): number => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        
        return [r, g, b];
    }
    
    /**
     * Helper function to set pixel color directly in image data
     */
    protected setPixelDirectColor(
        data: Uint8ClampedArray, 
        x: number, 
        y: number, 
        width: number, 
        r: number, 
        g: number, 
        b: number
    ): void {
        const idx = (y * width + x) * 4;
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
        data[idx + 3] = 255; // Alpha
    }
} 