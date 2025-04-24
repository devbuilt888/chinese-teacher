import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implements a hexagon-based chaos game with variable contraction ratios
 * based on vertex position, creating stunning spiral patterns
 */
export class HexagonSpiralFractal extends ChaosGameBase {
    private lastVertexIndex: number = -1;
    private vertices: Point[] = [];
    private vertexCount: number = 6; // Hexagon
    private contractionRatios: number[] = [0.55, 0.6, 0.65, 0.7, 0.75, 0.8];
    private currentPoint: Point;
    private animationId: number | null = null;
    private animationStep: number = 0;
    private skipCount: number = 20; // Skip initial iterations for transient phase
    private colorIntensity: number = 0.85; // Default color intensity
    private hueRotation: number = 0.1; // Default hue rotation speed

    /**
     * Constructor for the Hexagon Spiral fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 50000) {
        super(canvasId, iterations);
        // Use a stunning color palette for this fractal
        this.colorPalette = [
            "#FF3366", "#FF6633", "#FFCC33", 
            "#33CC99", "#3399FF", "#9966FF"
        ];
        this.currentPoint = [0, 0]; // Will be set in initialize
    }
    
    /**
     * Initialize the fractal
     * Override to set up hexagon vertices
     */
    public initialize(): void {
        super.initialize();
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        const radius = Math.min(width, height) * 0.45;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Create hexagon vertices
        this.vertices = [];
        for (let i = 0; i < this.vertexCount; i++) {
            const angle = (Math.PI / 3) * i; // 60° between vertices (360° / 6 = 60°)
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            this.vertices.push([x, y]);
        }
        
        // Clear canvas before plotting vertices
        this.clear();
        
        // Draw the hexagon boundary with gradient
        this.ctx.strokeStyle = "#FFFFFF";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.vertices[0][0], this.vertices[0][1]);
        for (let i = 1; i <= this.vertexCount; i++) {
            const idx = i % this.vertexCount;
            this.ctx.lineTo(this.vertices[idx][0], this.vertices[idx][1]);
        }
        this.ctx.stroke();
        
        // Draw the vertices with different colors
        this.vertices.forEach((p, idx) => {
            this.ctx.fillStyle = this.colorPalette[idx % this.colorPalette.length];
            this.ctx.beginPath();
            this.ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        // Reset animation state
        this.animationStep = 0;
        this.lastVertexIndex = -1;
        
        // Set starting point to center of canvas
        this.currentPoint = this.startingPoint;
    }
    
    /**
     * Moves a point towards the target by the specified contraction ratio
     */
    protected moveTowardsTarget(p1: Point, p2: Point, ratio: number): Point {
        return [
            p1[0] + ratio * (p2[0] - p1[0]),
            p1[1] + ratio * (p2[1] - p1[1])
        ];
    }
    
    /**
     * Sets the color scheme for the fractal
     * @param colorScheme An array of hex color strings
     */
    public setColorScheme(colorScheme: string[]): void {
        this.colorPalette = colorScheme;
    }

    /**
     * Sets the color intensity
     * @param intensity A value between 0 and 1
     */
    public setColorIntensity(intensity: number): void {
        this.colorIntensity = Math.max(0, Math.min(1, intensity));
    }

    /**
     * Sets the hue rotation speed
     * @param speed A value between 0 and 1
     */
    public setHueRotation(speed: number): void {
        this.hueRotation = Math.max(0, Math.min(1, speed));
    }
    
    /**
     * Generate the fractal using vertex-based contraction ratios
     */
    public generate(animate: boolean = false, batchSize: number = 100): void {
        // If already animating, stop current animation
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        
        this.initialize();
        
        if (animate) {
            // Start animation
            this.animate(batchSize);
        } else {
            // Generate all at once
            this.generatePoints(this.iterationsCount);
        }
    }
    
    /**
     * Stop the animation if it's running
     */
    public stopAnimation(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    /**
     * Animate the fractal generation
     */
    private animate(batchSize: number): void {
        const animateStep = () => {
            if (this.animationStep >= this.iterationsCount) {
                this.animationId = null;
                return;
            }
            
            // Draw a batch of points
            this.generatePoints(Math.min(batchSize, this.iterationsCount - this.animationStep));
            
            // Request next animation frame
            this.animationId = requestAnimationFrame(animateStep);
        };
        
        // Start animation
        this.animationId = requestAnimationFrame(animateStep);
    }
    
    /**
     * Generate a specific number of points for the fractal
     */
    private generatePoints(count: number): void {
        // Skip the first few iterations (transient phase)
        if (this.animationStep === 0) {
            for (let i = 0; i < this.skipCount; i++) {
                this.selectVertexAndMove();
            }
        }
        
        for (let i = 0; i < count; i++) {
            this.selectVertexAndMove();
            this.animationStep++;
        }
    }
    
    /**
     * Selects a vertex and moves the current point towards it
     * This is the key method that creates the spiral pattern
     */
    private selectVertexAndMove(): void {
        // Core chaos game logic with variable contraction ratios
        
        // Get a random vertex with probability weighting
        // Avoid certain patterns to create more interesting spirals
        let vertexIndex: number;
        
        do {
            vertexIndex = Math.floor(Math.random() * this.vertexCount);
        } while (
            this.lastVertexIndex !== -1 && 
            (vertexIndex === this.lastVertexIndex ||
             vertexIndex === (this.lastVertexIndex + 3) % this.vertexCount) // Avoid opposite vertex
        );
        
        // Get the contraction ratio for this vertex
        const ratio = this.contractionRatios[vertexIndex];
        
        // Move towards the selected vertex with the vertex-specific contraction ratio
        const selectedVertex = this.vertices[vertexIndex];
        this.currentPoint = this.moveTowardsTarget(this.currentPoint, selectedVertex, ratio);
        
        // Create a color with slight hue variation based on position
        const baseColor = this.colorPalette[vertexIndex % this.colorPalette.length];
        const rgb = this.hexToRgb(baseColor);
        
        if (rgb) {
            // Apply dynamic coloring based on position and iteration
            const distanceFromCenter = Math.sqrt(
                Math.pow(this.currentPoint[0] - this.canvas.width/2, 2) + 
                Math.pow(this.currentPoint[1] - this.canvas.height/2, 2)
            );
            
            const normalizedDistance = distanceFromCenter / (Math.min(this.canvas.width, this.canvas.height) * 0.45);
            
            // Convert RGB to HSL
            const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);
            
            // Rotate hue based on angle and iteration
            const angle = Math.atan2(
                this.currentPoint[1] - this.canvas.height/2, 
                this.currentPoint[0] - this.canvas.width/2
            );
            
            // Adjust hue based on angle and normalized distance
            hsl.h = (hsl.h + angle * this.hueRotation + this.animationStep * 0.0001) % 1;
            
            // Adjust saturation and lightness based on distance
            hsl.s = Math.min(1, hsl.s * (1 + normalizedDistance * this.colorIntensity));
            hsl.l = Math.max(0.2, Math.min(0.8, hsl.l * (1 - normalizedDistance * 0.3)));
            
            // Convert back to RGB
            const newRgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
            
            // Set the color
            this.ctx.fillStyle = `rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`;
        } else {
            // Fallback to base color
            this.ctx.fillStyle = baseColor;
        }
        
        // Draw a small point 
        this.ctx.fillRect(this.currentPoint[0], this.currentPoint[1], 1, 1);
        
        // Remember this vertex for next iteration
        this.lastVertexIndex = vertexIndex;
    }
    
    /**
     * Convert hex color to RGB
     */
    private hexToRgb(hex: string): {r: number, g: number, b: number} | null {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    /**
     * Convert RGB to HSL
     */
    private rgbToHsl(r: number, g: number, b: number): {h: number, s: number, l: number} {
        r /= 255;
        g /= 255;
        b /= 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;
        
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            
            h /= 6;
        }
        
        return { h, s, l };
    }
    
    /**
     * Convert HSL to RGB
     */
    private hslToRgb(h: number, s: number, l: number): {r: number, g: number, b: number} {
        let r, g, b;
        
        if (s === 0) {
            r = g = b = l;
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
        
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }
    
    /**
     * Return information about this fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: "Hexagon Spiral Fractal",
            description: "This stunning fractal creates mesmerizing spiral patterns by using a chaos game on a hexagon with variable contraction ratios for each vertex.",
            formula: "P_{n+1} = P_n + r_i * (V_i - P_n)\nwhere r_i is a vertex-specific contraction ratio varying from 0.55 to 0.8"
        };
    }
} 