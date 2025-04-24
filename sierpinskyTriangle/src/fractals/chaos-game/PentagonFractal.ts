import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Pentagon Fractal - Creates a fractal using the chaos game method on a regular pentagon
 */
export class PentagonFractal extends ChaosGameBase {
    // Vertices of the pentagon
    private pentagonPoints: Point[] = [];
    private currentPoint: Point;
    private contractionRatio: number = 0.618; // Golden ratio
    private iterations: number = 0;
    
    /**
     * Creates a new Pentagon fractal
     * @param canvasId The canvas ID to draw on
     * @param iterations The number of iterations
     */
    constructor(canvasId: string, iterations: number = 40000) {
        super(canvasId, iterations);
        this.iterationsCount = iterations;
        this.colorPalette = [
            '#3F51B5',
            '#5E35B1',
            '#7B1FA2',
            '#8E24AA',
            '#9C27B0'
        ];
    }
    
    /**
     * Sets the contraction ratio for the pentagon fractal
     */
    public setContractionRatio(ratio: number): void {
        this.contractionRatio = ratio;
        this.generate();
    }
    
    /**
     * Initialize the pentagon vertices and starting point
     */
    public initialize(): void {
        super.initialize();
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.4;
        
        // Create the pentagon vertices (5 points evenly distributed in a circle)
        this.pentagonPoints = [];
        for (let i = 0; i < 5; i++) {
            // Calculate angle for each vertex - starting from the top
            const angle = (Math.PI / 2) + (2 * Math.PI * i / 5);
            this.pentagonPoints.push([
                centerX + radius * Math.cos(angle),
                centerY - radius * Math.sin(angle)
            ]);
        }
        
        // Set starting point to center
        this.currentPoint = [centerX, centerY];
        this.startingPoint = this.currentPoint;
    }
    
    /**
     * Generate the fractal using the chaos game algorithm
     */
    public generate(): void {
        if (!this.ctx) return;
        
        this.initialize();
        this.iterations = 0;
        
        // Skip a few iterations for convergence
        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * 5);
            const target = this.pentagonPoints[randomIndex];
            
            // Apply the chaos game rule: move toward the chosen vertex by contraction ratio
            this.currentPoint = [
                this.currentPoint[0] + this.contractionRatio * (target[0] - this.currentPoint[0]),
                this.currentPoint[1] + this.contractionRatio * (target[1] - this.currentPoint[1])
            ];
        }
        
        // Generate the fractal
        for (let i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex
            const randomIndex = Math.floor(Math.random() * 5);
            const target = this.pentagonPoints[randomIndex];
            
            // Apply the chaos game rule: move toward the chosen vertex by contraction ratio
            this.currentPoint = [
                this.currentPoint[0] + this.contractionRatio * (target[0] - this.currentPoint[0]),
                this.currentPoint[1] + this.contractionRatio * (target[1] - this.currentPoint[1])
            ];
            
            // Plot the point
            const colorIndex = randomIndex % this.colorPalette.length;
            this.plot(this.currentPoint, 1, this.colorPalette[colorIndex]);
            
            this.iterations++;
        }
    }
    
    /**
     * Plot a point with specific color
     */
    protected plot(point: Point, size: number = 1, color?: string): void {
        const [x, y] = point;
        this.ctx.fillStyle = color || this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
        this.ctx.fillRect(x - size/2, y - size/2, size, size);
    }
    
    /**
     * Return information about the fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Pentagon Fractal',
            description: 'The Pentagon Fractal is created using the chaos game algorithm on a regular pentagon. '
                + 'Starting from a random point, each iteration involves randomly selecting one of the five vertices '
                + 'of the pentagon and moving a fraction of the distance from the current point toward that vertex. '
                + 'This process creates an intricate pattern with five-fold symmetry.\n\n'
                + 'With a contraction ratio around 0.618 (the golden ratio), the resulting pattern reveals fascinating '
                + 'pentagonal symmetry and self-similar structures that emerge from the simple iterative process.',
            formula: 'P_{n+1} = P_n + r(V_i - P_n)\n\n'
                + 'Where:\n'
                + '- P_n is the current point\n'
                + '- V_i is a randomly chosen vertex from the 5 vertices of the pentagon\n'
                + '- r is the contraction ratio (0.618, the golden ratio)\n'
                + '- Starting from a point within the pentagon'
        };
    }
} 