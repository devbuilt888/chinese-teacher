import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implements a hexagon-based chaos game with the restriction that
 * consecutive vertex selections cannot be adjacent vertices
 */
export class AdjacentRestrictionFractal extends ChaosGameBase {
    private lastVertexIndex: number = -1;
    private vertices: Point[] = [];
    private vertexCount: number = 6; // Hexagon
    private currentPoint: Point;
    private animationId: number | null = null;
    private animationStep: number = 0;
    private contractionRatio: number = 0.5; // Default contraction ratio (halfway)
    
    /**
     * Constructor for the Adjacent Restriction fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 20000) {
        super(canvasId, iterations);
        // Enhanced color palette for better visualization
        this.colorPalette = ["#0088ff", "#00ff88", "#ff0088", "#ffff00", "#ff8800", "#8800ff"];
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
        
        // Draw the hexagon boundary
        this.ctx.strokeStyle = "#FFFFFF";
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(this.vertices[0][0], this.vertices[0][1]);
        for (let i = 1; i <= this.vertexCount; i++) {
            const idx = i % this.vertexCount;
            this.ctx.lineTo(this.vertices[idx][0], this.vertices[idx][1]);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Draw the vertices with their respective colors
        this.vertices.forEach((p, idx) => {
            this.ctx.fillStyle = this.colorPalette[idx % this.colorPalette.length];
            this.ctx.beginPath();
            this.ctx.arc(p[0], p[1], 4, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        // Reset animation state
        this.animationStep = 0;
        this.lastVertexIndex = -1;
        
        // Set starting point to center of canvas
        this.currentPoint = this.startingPoint;
    }
    
    /**
     * Sets the color scheme for the fractal
     * @param colorScheme An array of hex color strings
     */
    public setColorScheme(colorScheme: string[]): void {
        this.colorPalette = colorScheme;
    }
    
    /**
     * Sets the contraction ratio (how far to move towards the chosen vertex)
     * @param ratio A value between 0 and 1
     */
    public setContractionRatio(ratio: number): void {
        this.contractionRatio = Math.max(0.1, Math.min(0.9, ratio));
    }
    
    /**
     * Moves a point towards the target by the specified contraction ratio
     */
    protected moveTowardsTarget(p1: Point, p2: Point): Point {
        return [
            p1[0] + this.contractionRatio * (p2[0] - p1[0]),
            p1[1] + this.contractionRatio * (p2[1] - p1[1])
        ];
    }
    
    /**
     * Generate the fractal using adjacent vertex restriction
     * @param animate Whether to animate the generation
     * @param batchSize The number of points to generate per animation frame
     */
    public generate(animate: boolean = false, batchSize: number = 100): void {
        // If already animating, stop current animation
        this.stopAnimation();
        
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
        for (let i = 0; i < count; i++) {
            // Get random vertex that's not adjacent to last vertex
            let vertexIndex: number;
            do {
                vertexIndex = Math.floor(Math.random() * this.vertexCount);
            } while (
                this.lastVertexIndex !== -1 && 
                (vertexIndex === this.lastVertexIndex || 
                 vertexIndex === (this.lastVertexIndex + 1) % this.vertexCount ||
                 vertexIndex === (this.lastVertexIndex + this.vertexCount - 1) % this.vertexCount)
            );
            
            // Move towards the selected vertex by the contraction ratio
            const selectedVertex = this.vertices[vertexIndex];
            this.currentPoint = this.moveTowardsTarget(this.currentPoint, selectedVertex);
            
            // Plot the point with color based on vertex
            this.ctx.fillStyle = this.colorPalette[vertexIndex % this.colorPalette.length];
            
            // Draw a small circle for better visual appeal (anti-aliased)
            const size = 1.2; // Slightly larger point for better visibility
            this.ctx.beginPath();
            this.ctx.arc(this.currentPoint[0], this.currentPoint[1], size/2, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Remember this vertex for next iteration
            this.lastVertexIndex = vertexIndex;
            this.animationStep++;
        }
    }
    
    /**
     * Return information about this fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: "Adjacent Restriction Fractal",
            description: "This fractal is generated using a chaos game on a regular hexagon with the restriction that consecutive vertex selections cannot be adjacent. This creates intricate patterns with interesting symmetry and complexity.",
            formula: "Let v be a vertex chosen at random, but not adjacent to the previous vertex. Then x_{n+1} = x_n + r * (v - x_n) where we move a portion of the way to the chosen vertex"
        };
    }
} 