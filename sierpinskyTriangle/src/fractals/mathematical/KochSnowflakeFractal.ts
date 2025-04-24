import { MathFractalBase } from './MathFractalBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Koch Snowflake fractal
 */
export class KochSnowflakeFractal extends MathFractalBase {
    private depth: number = 4;
    private size: number = 300;
    protected needsRedraw: boolean = true;
    
    /**
     * Constructor for the Koch Snowflake fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param depth - The recursion depth of the Koch snowflake
     */
    constructor(canvasId: string, depth: number = 4) {
        super(canvasId, depth);
        this.depth = depth;
        this.zoom = 1.0; // Default zoom level
    }
    
    /**
     * Set the size of the snowflake
     * @param size - The size value
     */
    public setSize(size: number): void {
        this.size = size;
        this.needsRedraw = true;
    }
    
    /**
     * Draw a single Koch curve segment
     * @param ctx - The rendering context
     * @param x1 - Start x coordinate
     * @param y1 - Start y coordinate
     * @param x2 - End x coordinate
     * @param y2 - End y coordinate
     * @param depth - Current recursion depth
     */
    private drawKochCurve(
        ctx: CanvasRenderingContext2D, 
        x1: number, 
        y1: number, 
        x2: number, 
        y2: number, 
        depth: number
    ): void {
        if (depth === 0) {
            // Base case: draw a straight line
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return;
        }
        
        // Calculate the positions of the 4 new points
        // Vector from start to end
        const dx = x2 - x1;
        const dy = y2 - y1;
        
        // First third point
        const x3 = x1 + dx / 3;
        const y3 = y1 + dy / 3;
        
        // Last third point
        const x4 = x1 + 2 * dx / 3;
        const y4 = y1 + 2 * dy / 3;
        
        // Middle point (creating the "bump")
        // Rotate the vector (dx/3, dy/3) by 60 degrees counterclockwise
        const angle = Math.PI / 3; // 60 degrees
        const xMiddle = x3 + Math.cos(angle) * dx / 3 - Math.sin(angle) * dy / 3;
        const yMiddle = y3 + Math.sin(angle) * dx / 3 + Math.cos(angle) * dy / 3;
        
        // Recursively draw the 4 segments
        this.drawKochCurve(ctx, x1, y1, x3, y3, depth - 1);
        this.drawKochCurve(ctx, x3, y3, xMiddle, yMiddle, depth - 1);
        this.drawKochCurve(ctx, xMiddle, yMiddle, x4, y4, depth - 1);
        this.drawKochCurve(ctx, x4, y4, x2, y2, depth - 1);
    }
    
    /**
     * Generates the Koch Snowflake fractal
     */
    public generate(): void {
        this.clear();
        
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Calculate the size based on zoom
        const size = Math.min(width, height) * 0.7 * this.zoom;
        
        // Calculate the vertices of the equilateral triangle
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Height of the equilateral triangle = size * sin(60°)
        const triangleHeight = size * Math.sin(Math.PI / 3);
        
        // The three points of the initial equilateral triangle
        const x1 = centerX;                     // Top point
        const y1 = centerY - triangleHeight / 2;
        
        const x2 = centerX - size / 2;          // Bottom left
        const y2 = centerY + triangleHeight / 2;
        
        const x3 = centerX + size / 2;          // Bottom right
        const y3 = centerY + triangleHeight / 2;
        
        // Set stroke style
        this.ctx.strokeStyle = '#00ffff';
        this.ctx.lineWidth = 1;
        
        // Draw the three sides of the triangle
        this.drawKochCurve(this.ctx, x1, y1, x2, y2, this.depth);
        this.drawKochCurve(this.ctx, x2, y2, x3, y3, this.depth);
        this.drawKochCurve(this.ctx, x3, y3, x1, y1, this.depth);
    }
    
    /**
     * Get information about this fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Koch Snowflake',
            description: 'A classic fractal that starts with an equilateral triangle and recursively replaces the middle third of each line segment with a triangular bump.',
            formula: 'Recursive geometric construction'
        };
    }
} 