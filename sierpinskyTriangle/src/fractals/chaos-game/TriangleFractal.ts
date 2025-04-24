import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Implementation of the Sierpinski Triangle fractal using chaos game
 */
export class TriangleFractal extends ChaosGameBase {
    private points: Point[];
    private animationId: number | null = null;
    private isAnimating: boolean = false;
    
    /**
     * Constructor for the Triangle fractal
     * 
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    constructor(canvasId: string, iterations: number = 10000) {
        super(canvasId, iterations);
        this.points = [];
    }
    
    /**
     * Initialize the Triangle fractal
     * Override to set up triangle vertices
     */
    public initialize(): void {
        super.initialize();
        
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Set up triangle points
        this.points = [
            [w / 2, 20],           // top
            [20, h - 20],          // bottom left
            [w - 20, h - 20]       // bottom right
        ];
        
        // Clear canvas before plotting vertices
        this.clear();
        
        // Draw the vertices
        this.points.forEach(p => this.plot(p, 3));
    }
    
    /**
     * Generates the Triangle fractal using the chaos game algorithm
     * @param animate - Whether to animate the generation or not
     * @param speed - Animation speed (points per frame)
     */
    public generate(animate: boolean = false, speed: number = 100): void {
        // Stop any ongoing animation
        this.stopAnimation();
        
        this.initialize();
        
        if (animate) {
            this.animateGeneration(speed);
        } else {
            // Non-animated generation
            let currentPoint = this.startingPoint;
            this.plot(currentPoint);
            
            for (let i = 0; i < this.iterationsCount; i++) {
                // Pick a random vertex
                const randomIndex = Math.floor(Math.random() * this.points.length);
                const targetPoint = this.points[randomIndex];
                
                // Move halfway to that vertex
                currentPoint = this.midpoint(currentPoint, targetPoint);
                this.plot(currentPoint);
            }
        }
    }
    
    /**
     * Animates the generation of the fractal
     * @param pointsPerFrame - Number of points to draw per animation frame
     */
    private animateGeneration(pointsPerFrame: number = 100): void {
        let currentPoint = this.startingPoint;
        let step = 0;
        
        this.plot(currentPoint);
        this.isAnimating = true;
        
        const animate = () => {
            if (step >= this.iterationsCount || !this.isAnimating) {
                this.isAnimating = false;
                this.animationId = null;
                return;
            }
            
            // Draw multiple points per frame for better performance
            for (let i = 0; i < pointsPerFrame && step < this.iterationsCount; i++, step++) {
                // Pick a random vertex
                const randomIndex = Math.floor(Math.random() * this.points.length);
                const targetPoint = this.points[randomIndex];
                
                // Move halfway to that vertex
                currentPoint = this.midpoint(currentPoint, targetPoint);
                this.plot(currentPoint);
            }
            
            this.animationId = requestAnimationFrame(animate);
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
    
    /**
     * Stops any ongoing animation
     */
    public stopAnimation(): void {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.isAnimating = false;
    }
    
    /**
     * Returns whether the fractal is currently animating
     */
    public isCurrentlyAnimating(): boolean {
        return this.isAnimating;
    }
    
    /**
     * Returns information about the Triangle fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Triangle Fractal',
            description: 'The Sierpinski Triangle emerges from a simple chaos game: repeatedly move halfway towards a randomly chosen vertex of a triangle.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is a randomly chosen vertex'
        };
    }
} 