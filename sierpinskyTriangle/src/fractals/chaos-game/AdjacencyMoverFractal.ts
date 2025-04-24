import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implements a hexagon-based chaos game with the restriction that
 * consecutive vertex selections cannot be adjacent vertices or opposite vertices,
 * and points move 2/3 of the way to the chosen vertex
 */
export class AdjacencyMoverFractal extends ChaosGameBase {
    private lastVertexIndex: number = -1;
    private vertices: Point[] = [];
    private vertexCount: number = 6; // Hexagon
    private contractionRatio: number = 0.63; // This creates a better star pattern
    private currentPoint: Point;
    private animationId: number | null = null;
    private animationStep: number = 0;
    private skipCount: number = 50; // Skip initial iterations to get to the attractor

    /**
     * Constructor for the Adjacency Mover fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 20000) {
        super(canvasId, iterations);
        // Use a more vibrant colorful palette for this fractal
        this.colorPalette = ["#FF3366", "#33CCFF", "#FFCC00", "#66FF99", "#CC33FF", "#FF9933"];
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
        this.ctx.beginPath();
        this.ctx.moveTo(this.vertices[0][0], this.vertices[0][1]);
        for (let i = 1; i <= this.vertexCount; i++) {
            const idx = i % this.vertexCount;
            this.ctx.lineTo(this.vertices[idx][0], this.vertices[idx][1]);
        }
        this.ctx.stroke();
        
        // Draw the vertices
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
     * Moves a point towards the target by the contraction ratio
     */
    protected moveTowardsTarget(p1: Point, p2: Point): Point {
        return [
            p1[0] + this.contractionRatio * (p2[0] - p1[0]),
            p1[1] + this.contractionRatio * (p2[1] - p1[1])
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
     * Generate the fractal using adjacent vertex restriction with the specified contraction ratio
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
     * Selects a valid vertex and moves the current point towards it
     * This is the key method that creates the star pattern
     */
    private selectVertexAndMove(): void {
        // Get random vertex that's not adjacent to the last vertex
        // and not opposite (for star pattern)
        let vertexIndex: number;
        
        do {
            vertexIndex = Math.floor(Math.random() * this.vertexCount);
        } while (
            this.lastVertexIndex !== -1 && 
            (
                vertexIndex === this.lastVertexIndex || 
                vertexIndex === (this.lastVertexIndex + 1) % this.vertexCount ||
                vertexIndex === (this.lastVertexIndex + this.vertexCount - 1) % this.vertexCount ||
                vertexIndex === (this.lastVertexIndex + 3) % this.vertexCount // Opposite vertex
            )
        );
        
        // Move towards the selected vertex by the contraction ratio
        const selectedVertex = this.vertices[vertexIndex];
        this.currentPoint = this.moveTowardsTarget(this.currentPoint, selectedVertex);
        
        // Plot the point with color based on vertex
        this.ctx.fillStyle = this.colorPalette[vertexIndex % this.colorPalette.length];
        this.ctx.fillRect(this.currentPoint[0], this.currentPoint[1], 1, 1);
        
        // Remember this vertex for next iteration
        this.lastVertexIndex = vertexIndex;
    }
    
    /**
     * Return information about this fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: "Adjacency Mover Fractal",
            description: "This fractal creates a striking star pattern by applying restrictions on vertex selection in a hexagon-based chaos game. Points move approximately 2/3 of the way to vertices, but consecutive choices cannot be adjacent or opposite vertices.",
            formula: "Let v be a vertex chosen at random, but not adjacent to or opposite of the previous vertex. Then x_{n+1} = x_n + 0.63 * (v - x_n), creating a beautiful star-shaped attractor."
        };
    }
} 