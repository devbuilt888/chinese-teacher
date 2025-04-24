/**
 * Base class for all fractal generators
 * Provides common functionality and interface for fractal implementations
 */

export class FractalGenerator {
    constructor(canvas) {
        if (!canvas) {
            throw new Error('Canvas element is required for FractalGenerator');
        }
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.isInitialized = false;
        this.stopped = false;
        
        // Default properties
        this.name = 'Abstract Fractal';
        this.description = 'Base fractal generator class';
        
        // Bind methods to maintain context
        this.initialize = this.initialize.bind(this);
        this.render = this.render.bind(this);
        this.stop = this.stop.bind(this);
        this.resume = this.resume.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    /**
     * Initialize the fractal
     * Should be overridden by specific implementations
     */
    initialize() {
        this.isInitialized = true;
        this.stopped = false;
        
        // Clear canvas
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    /**
     * Generate a single point in the fractal
     * Must be implemented by subclasses
     * @returns {Object} Point object with x, y coordinates and color
     */
    generateNextPoint() {
        throw new Error('generateNextPoint must be implemented by subclass');
    }
    
    /**
     * Plot a point on the canvas
     * @param {Object} point - The point to plot with x, y coordinates and color
     */
    plotPoint(point) {
        if (!point) return;
        
        this.ctx.fillStyle = point.color || '#fff';
        this.ctx.fillRect(point.x, point.y, 1, 1);
    }
    
    /**
     * Renders the fractal with the given number of iterations
     * @param {Number} iterations - Number of points to generate
     */
    render(iterations = 10000) {
        if (!this.isInitialized) {
            this.initialize();
        }
        
        this.stopped = false;
        
        // Simple implementation that can be overridden for better performance
        for (let i = 0; i < iterations && !this.stopped; i++) {
            const point = this.generateNextPoint();
            this.plotPoint(point);
            
            // Yield to the browser UI thread every 1000 iterations
            if (i % 1000 === 0) {
                setTimeout(() => {
                    if (!this.stopped) {
                        this.render(iterations - 1000);
                    }
                }, 0);
                return;
            }
        }
    }
    
    /**
     * Stops the rendering process
     */
    stop() {
        this.stopped = true;
    }
    
    /**
     * Resumes rendering from where it left off
     * @param {Number} iterations - Additional iterations to render
     */
    resume(iterations = 10000) {
        this.stopped = false;
        this.render(iterations);
    }
    
    /**
     * Resets the fractal to its initial state
     */
    reset() {
        this.stop();
        this.isInitialized = false;
        this.initialize();
    }
    
    /**
     * Export the fractal as an image
     * @returns {String} Data URL representing the image
     */
    exportImage() {
        return this.canvas.toDataURL('image/png');
    }
    
    /**
     * Get info about the fractal
     * @returns {Object} Object containing name, description, and other metadata
     */
    getInfo() {
        return {
            name: this.name,
            description: this.description
        };
    }
}

export default FractalGenerator; 