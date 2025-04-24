import { ChaosGameBase, Point } from './ChaosGameBase';
import { FractalInfo } from '../FractalBase';

/**
 * Hexagon Fractal - Creates a fractal using the chaos game method on a regular hexagon
 */
export class HexagonFractal extends ChaosGameBase {
    // Vertices of the hexagon
    private hexagonPoints: Point[] = [];
    private currentPoint: Point = [0, 0];
    
    /**
     * Creates a new Hexagon fractal
     * @param canvasId The ID of the canvas to draw on
     */
    constructor(canvasId: string) {
        super(canvasId, 50000);
        this.colorPalette = [
            '#00BCD4',
            '#26C6DA',
            '#4DD0E1',
            '#80DEEA',
            '#B2EBF2',
            '#E0F7FA'
        ];
    }
    
    /**
     * Initialize the hexagon vertices and starting point
     */
    public initialize(): void {
        super.initialize();
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = Math.min(this.canvas.width, this.canvas.height) * 0.4;
        
        // Create the hexagon vertices (6 points evenly distributed in a circle)
        this.hexagonPoints = [];
        for (let i = 0; i < 6; i++) {
            // Calculate angle for each vertex - starting from the top
            const angle = (Math.PI / 2) + (2 * Math.PI * i / 6);
            this.hexagonPoints.push([
                centerX + radius * Math.cos(angle),
                centerY - radius * Math.sin(angle)
            ]);
        }
        
        // Set starting point to center
        this.currentPoint = [centerX, centerY];
    }
    
    /**
     * Generate the fractal using the chaos game algorithm
     */
    public generate(): void {
        if (!this.ctx) return;
        
        this.initialize();
        let iterations = 0;
        
        // Skip a few iterations for convergence
        for (let i = 0; i < 20; i++) {
            const randomIndex = Math.floor(Math.random() * 6);
            const target = this.hexagonPoints[randomIndex];
            
            // Apply the chaos game rule: move 2/3 of the way toward the chosen vertex
            this.currentPoint = [
                this.currentPoint[0] + (2/3) * (target[0] - this.currentPoint[0]),
                this.currentPoint[1] + (2/3) * (target[1] - this.currentPoint[1])
            ];
        }
        
        // Generate the fractal
        for (let i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex
            const randomIndex = Math.floor(Math.random() * 6);
            const target = this.hexagonPoints[randomIndex];
            
            // Apply the chaos game rule: move 2/3 of the way toward the chosen vertex
            this.currentPoint = [
                this.currentPoint[0] + (2/3) * (target[0] - this.currentPoint[0]),
                this.currentPoint[1] + (2/3) * (target[1] - this.currentPoint[1])
            ];
            
            // Plot the point
            const colorIndex = randomIndex % this.colorPalette.length;
            this.plot(this.currentPoint, 1, this.colorPalette[colorIndex]);
            
            iterations++;
        }
    }
    
    /**
     * Return information about the fractal
     */
    public getInfo(): FractalInfo {
        return {
            title: 'Hexagon Fractal',
            description: 'The Hexagon Fractal is created using the chaos game algorithm on a regular hexagon. '
                + 'Starting from the center of the hexagon, each iteration involves randomly selecting one of the six vertices '
                + 'and moving 2/3 of the distance from the current point toward that vertex. '
                + 'This process creates an intricate pattern with six-fold symmetry.\n\n'
                + 'The resulting fractal displays self-similarity and reveals beautiful hexagonal patterns that emerge '
                + 'from this simple iterative process. The hexagonal symmetry produces different structures compared to '
                + 'the triangular or square variants of the chaos game.',
            formula: 'P_{n+1} = P_n + \\frac{2}{3}(V_i - P_n)\n\n'
                + 'Where:\n'
                + '- P_n is the current point\n'
                + '- V_i is a randomly chosen vertex from the 6 vertices of the hexagon\n'
                + '- The ratio 2/3 determines how far to move toward the chosen vertex\n'
                + '- Starting from the center of the hexagon'
        };
    }

    /**
     * Plot a point with specific color
     */
    protected plot(point: Point, size: number = 1, color?: string): void {
        const [x, y] = point;
        this.ctx.fillStyle = color || this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
        this.ctx.fillRect(x - size/2, y - size/2, size, size);
    }
} 