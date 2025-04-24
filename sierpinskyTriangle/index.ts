/**
 * Fractal Dashboard - Main application entry point
 */

import './styles/main.css';
import './styles/components.css';
import { initDashboard } from './src/components/Dashboard';
import { RestrictedSquareFractal } from './src/fractals/chaos-game/RestrictedSquareFractal';
import { TriangleFractal } from './src/fractals/chaos-game/TriangleFractal';
import { MandelbrotFractal } from './src/fractals/mathematical/MandelbrotFractal';
import { AdjacentRestrictionFractal } from './src/fractals/chaos-game/AdjacentRestrictionFractal';
import { ModifiedSquareFractal } from './src/fractals/chaos-game/ModifiedSquareFractal';
import { NonRepeatSquareFractal } from './src/fractals/chaos-game/NonRepeatSquareFractal';
import { SierpinskiCarpet } from './src/fractals/chaos-game/SierpinskiCarpet';
import { PentagonFractal } from './src/fractals/chaos-game/PentagonFractal';
import { FernFractal } from './src/fractals/chaos-game/FernFractal';
import { KochSnowflakeFractal } from './src/fractals/mathematical/KochSnowflakeFractal';

console.log('Application starting...');

// Initialize particles.js
function initParticles() {
    if (typeof (window as any).particlesJS !== 'undefined') {
        console.log("Initializing particles.js");
        (window as any).particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" },
                    "polygon": { "nb_sides": 5 }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 },
                    "push": { "particles_nb": 4 },
                    "remove": { "particles_nb": 2 }
                }
            },
            "retina_detect": true
        });
    } else {
        console.log("particlesJS is undefined");
    }
}

// Initialize the Restricted Square fractal on the editor page
function initRestrictedSquareFractal(iterations: number = 10000): void {
    const canvasId = 'restricted-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Restricted Square fractal with ${iterations} iterations`);
    
    const fractal = new RestrictedSquareFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Sierpinski Triangle fractal on the editor page
function initSierpinskiTriangle(iterations: number = 10000, animate: boolean = false, speed: number = 100): void {
    const canvasId = 'triangle-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Sierpinski Triangle fractal with ${iterations} iterations${animate ? ' (animated)' : ''}`);
    
    const fractal = new TriangleFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate(animate, speed);
}

// Initialize the Mandelbrot Set fractal on the editor page
function initMandelbrotSet(iterations: number = 100): void {
    const canvasId = 'mandelbrot-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Mandelbrot Set fractal with ${iterations} iterations`);
    
    const fractal = new MandelbrotFractal(canvasId);
    fractal.setMaxIterations(iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Adjacent Restriction fractal on the editor page
function initAdjacentRestrictionFractal(iterations: number = 20000, animate: boolean = false, speed: number = 100): void {
    const canvasId = 'adjacent-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Adjacent Restriction fractal with ${iterations} iterations${animate ? ' (animated)' : ''}`);
    
    const fractal = new AdjacentRestrictionFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate(animate, speed);
}

// Initialize the Modified Square fractal on the editor page
function initModifiedSquareFractal(iterations: number = 50000): void {
    const canvasId = 'modified-square-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Modified Square fractal with ${iterations} iterations`);
    
    const fractal = new ModifiedSquareFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Non-Repeat Square fractal on the editor page
function initNonRepeatSquareFractal(iterations: number = 20000): void {
    const canvasId = 'nonrepeat-square-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Non-Repeat Square fractal with ${iterations} iterations`);
    
    const fractal = new NonRepeatSquareFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Sierpinski Carpet fractal on the editor page
function initSierpinskiCarpet(iterations: number = 50000): void {
    const canvasId = 'sierpinski-carpet-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Sierpinski Carpet fractal with ${iterations} iterations`);
    
    const fractal = new SierpinskiCarpet(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Pentagon fractal on the editor page
function initPentagonFractal(iterations: number = 40000): void {
    const canvasId = 'pentagon-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Pentagon fractal with ${iterations} iterations`);
    
    const fractal = new PentagonFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Barnsley Fern fractal on the editor page
function initFernFractal(iterations: number = 50000): void {
    const canvasId = 'fern-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Barnsley Fern fractal with ${iterations} iterations`);
    
    const fractal = new FernFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Koch Snowflake fractal on the editor page
function initKochSnowflake(iterations: number = 4): void {
    const canvasId = 'koch-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Koch Snowflake fractal with ${iterations} iterations`);
    
    const fractal = new KochSnowflakeFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize the Phoenix fractal on the editor page
function initPhoenixFractal(iterations: number = 100): void {
    const canvasId = 'phoenix-canvas';
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error(`Canvas element with ID '${canvasId}' not found`);
        return;
    }
    
    console.log(`Initializing Phoenix fractal with ${iterations} iterations`);
    
    const fractal = new PhoenixFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}

// Initialize a fractal page based on the fractal type
function initFractalPage(fractalType: string): void {
    console.log(`Initializing fractal page for: ${fractalType}`);
    
    switch (fractalType) {
        case 'restricted-square':
            initRestrictedSquareFractal();
            break;
        case 'sierpinski-triangle':
            initSierpinskiTriangle();
            break;
        case 'mandelbrot-set':
            initMandelbrotSet();
            break;
        case 'adjacent-restriction':
            initAdjacentRestrictionFractal();
            break;
        case 'modified-square':
            initModifiedSquareFractal();
            break;
        case 'nonrepeat-square':
            initNonRepeatSquareFractal();
            break;
        case 'sierpinski-carpet':
            initSierpinskiCarpet();
            break;
        case 'pentagon-fractal':
            initPentagonFractal();
            break;
        case 'barnsley-fern':
            initFernFractal();
            break;
        case 'koch-snowflake':
            initKochSnowflake();
            break;
        case 'phoenix-fractal':
            initPhoenixFractal();
            break;
        default:
            console.error(`Unknown fractal type: ${fractalType}`);
    }
}

// Expose these functions to the global window object for use in HTML pages
(window as any).initRestrictedSquareFractal = initRestrictedSquareFractal;
(window as any).initSierpinskiTriangle = initSierpinskiTriangle;
(window as any).initMandelbrotSet = initMandelbrotSet;
(window as any).initAdjacentRestrictionFractal = initAdjacentRestrictionFractal;
(window as any).initModifiedSquareFractal = initModifiedSquareFractal;
(window as any).initNonRepeatSquareFractal = initNonRepeatSquareFractal;
(window as any).initSierpinskiCarpet = initSierpinskiCarpet;
(window as any).initPentagonFractal = initPentagonFractal;
(window as any).initFernFractal = initFernFractal;
(window as any).initKochSnowflake = initKochSnowflake;
(window as any).initPhoenixFractal = initPhoenixFractal;
(window as any).initFractalPage = initFractalPage;

// Expose fractal classes to the window object for direct use in HTML pages
import { JuliaFractal } from './src/fractals/mathematical/JuliaFractal';
import { BurningShipFractal } from './src/fractals/mathematical/BurningShipFractal';
import { NewtonFractal } from './src/fractals/mathematical/NewtonFractal';
import { LyapunovFractal } from './src/fractals/mathematical/LyapunovFractal';
import { PhoenixFractal } from './src/fractals/mathematical/PhoenixFractal';

(window as any).MandelbrotFractal = MandelbrotFractal;
(window as any).JuliaFractal = JuliaFractal;
(window as any).BurningShipFractal = BurningShipFractal;
(window as any).NewtonFractal = NewtonFractal;
(window as any).LyapunovFractal = LyapunovFractal;
(window as any).KochSnowflakeFractal = KochSnowflakeFractal;
(window as any).PhoenixFractal = PhoenixFractal;
(window as any).AdjacentRestrictionFractal = AdjacentRestrictionFractal;

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing dashboard...');
    
    // Try initializing particles
    try {
        initParticles();
    } catch (e) {
        console.error('Error initializing particles:', e);
    }
    
    // Initialize the dashboard with all fractal modules
    initDashboard();
    
    console.log('Dashboard initialization triggered');
}); 