/**
 * Mathematical Fractals Module - Initializes and manages complex mathematical fractals
 */

import { MandelbrotFractal } from './MandelbrotFractal';
import { JuliaFractal } from './JuliaFractal';
import { BurningShipFractal } from './BurningShipFractal';
import { NewtonFractal } from './NewtonFractal';
import { LyapunovFractal } from './LyapunovFractal';
import { PhoenixFractal } from './PhoenixFractal';
import { SierpinskiTriangleFractal } from './SierpinskiTriangleFractal';
import { KochSnowflakeFractal } from './KochSnowflakeFractal';
import { createFractalCard } from '../../components/FractalCardFactory';
import { 
    createMaxIterationsControl, 
    createZoomControl, 
    createComplexParamControl, 
    FractalControlConfig 
} from '../../components/FractalControlConfig';

/**
 * Initialize all mathematical fractals
 * @param container The container element where fractal cards will be added
 */
export function initMathFractals(container: HTMLElement): void {
    // Mandelbrot Set
    initMandelbrotFractal(container);
    
    // Julia Set
    initJuliaFractal(container);
    
    // Burning Ship Fractal
    initBurningShipFractal(container);
    
    // Newton Fractal
    initNewtonFractal(container);
    
    // Lyapunov Fractal
    initLyapunovFractal(container);
    
    // Phoenix Fractal
    initPhoenixFractal(container);

    // Sierpinski Triangle Fractal
    initSierpinskiTriangleFractal(container);
    
    // Koch Snowflake Fractal
    initKochSnowflakeFractal(container);
}

/**
 * Initialize the Mandelbrot Set fractal
 */
function initMandelbrotFractal(container: HTMLElement): void {
    const fractal = new MandelbrotFractal('mandelbrot-canvas');
    
    const controls: FractalControlConfig[] = [
        createMaxIterationsControl((value) => fractal.setMaxIterations(value)),
        createZoomControl((value) => fractal.setZoom(value))
    ];
    
    createFractalCard({
        title: 'Mandelbrot Set',
        description: 'The famous Mandelbrot set is formed by iterating z = z² + c and observing which complex values of c cause the sequence to remain bounded.',
        formula: 'z_{n+1} = z_n^2 + c\nz_0 = 0\nSet contains c where |z_n| remains bounded as n→∞',
        controlConfigs: controls,
        canvasId: 'mandelbrot-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Julia Set fractal
 */
function initJuliaFractal(container: HTMLElement): void {
    const fractal = new JuliaFractal('julia-canvas');
    
    const controls: FractalControlConfig[] = [
        createComplexParamControl('real', 'Real Component', -0.7, 
            (value) => fractal.setParameters(value, parseFloat(
                (document.getElementById('julia-canvas-imag') as HTMLInputElement)?.value || '0.27'
            ))
        ),
        createComplexParamControl('imag', 'Imaginary Component', 0.27, 
            (value) => fractal.setParameters(parseFloat(
                (document.getElementById('julia-canvas-real') as HTMLInputElement)?.value || '-0.7'
            ), value)
        )
    ];
    
    createFractalCard({
        title: 'Julia Set',
        description: 'Julia sets are related to the Mandelbrot set, but with a fixed complex parameter. Different parameters create wildly different patterns.',
        formula: 'z_{n+1} = z_n^2 + c\nwhere c is fixed and z_0 is the point being tested',
        controlConfigs: controls,
        canvasId: 'julia-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Burning Ship fractal
 */
function initBurningShipFractal(container: HTMLElement): void {
    const fractal = new BurningShipFractal('burning-canvas');
    
    const controls: FractalControlConfig[] = [
        createMaxIterationsControl((value) => fractal.setMaxIterations(value)),
        createZoomControl((value) => fractal.setZoom(value))
    ];
    
    createFractalCard({
        title: 'Burning Ship Fractal',
        description: 'The Burning Ship fractal modifies the Mandelbrot formula by taking the absolute value of real and imaginary components before squaring.',
        formula: 'z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)^2 + c\nz_0 = 0',
        controlConfigs: controls,
        canvasId: 'burning-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Newton fractal
 */
function initNewtonFractal(container: HTMLElement): void {
    const fractal = new NewtonFractal('newton-canvas');
    
    const controls: FractalControlConfig[] = [
        {
            id: 'power',
            label: 'Polynomial Power',
            min: 3,
            max: 10,
            step: 1,
            defaultValue: 3,
            type: 'range',
            onChange: (value) => fractal.setPower(value)
        },
        createMaxIterationsControl((value) => fractal.setMaxIterations(value))
    ];
    
    createFractalCard({
        title: 'Newton Fractal',
        description: 'Visualizes Newton\'s method for finding roots of complex polynomials, with colors representing which root the algorithm converges to.',
        formula: 'z_{n+1} = z_n - f(z_n)/f\'(z_n)\nwhere f(z) = z^n - 1',
        controlConfigs: controls,
        canvasId: 'newton-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Lyapunov fractal
 */
function initLyapunovFractal(container: HTMLElement): void {
    const fractal = new LyapunovFractal('lyapunov-canvas');
    
    const controls: FractalControlConfig[] = [
        {
            id: 'sequence',
            label: 'Sequence',
            type: 'text' as any,
            min: 0,
            max: 0,
            defaultValue: 'AB',
            onChange: (value) => fractal.setSequence(value)
        },
        createMaxIterationsControl((value) => fractal.setMaxIterations(value))
    ];
    
    createFractalCard({
        title: 'Lyapunov Fractal',
        description: 'Maps the stability of a dynamical system with regions of chaos (positive exponents) and stability (negative exponents).',
        formula: 'x_{n+1} = r·x_n·(1-x_n)\nLyapunov exponent: λ = lim_{n→∞} (1/n)∑ln|r(1-2x_k)|',
        controlConfigs: controls,
        canvasId: 'lyapunov-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Phoenix fractal
 */
function initPhoenixFractal(container: HTMLElement): void {
    const fractal = new PhoenixFractal('phoenix-canvas');
    
    const controls: FractalControlConfig[] = [
        {
            id: 'p',
            label: 'Parameter P',
            min: -1,
            max: 1,
            step: 0.01,
            defaultValue: 0.56,
            type: 'range',
            onChange: (value) => fractal.setParameter(value)
        },
        createMaxIterationsControl((value) => fractal.setMaxIterations(value))
    ];
    
    createFractalCard({
        title: 'Phoenix Fractal',
        description: 'A generalization of the Mandelbrot set that incorporates previous iteration values, creating flame-like patterns.',
        formula: 'z_{n+1} = z_n^2 + c + p·z_{n-1}\nwhere p is a complex parameter',
        controlConfigs: controls,
        canvasId: 'phoenix-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Sierpinski Triangle fractal
 */
function initSierpinskiTriangleFractal(container: HTMLElement): void {
    const fractal = new SierpinskiTriangleFractal('sierpinski-math-canvas');
    
    const controls: FractalControlConfig[] = [
        {
            id: 'depth',
            label: 'Recursion Depth',
            min: 1,
            max: 9,
            step: 1,
            defaultValue: 6,
            type: 'range',
            onChange: (value) => fractal.setDepth(value)
        },
        createZoomControl((value) => fractal.setZoom(value))
    ];
    
    createFractalCard({
        title: 'Sierpinski Triangle',
        description: 'A deterministic implementation of the Sierpinski Triangle that uses recursive subdivision rather than the chaos game algorithm.',
        formula: 'Recursive subdivision: Begin with an equilateral triangle, divide into 4 equal triangles, remove center triangle, repeat for remaining triangles.',
        controlConfigs: controls,
        canvasId: 'sierpinski-math-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Koch Snowflake fractal
 */
function initKochSnowflakeFractal(container: HTMLElement): void {
    const fractal = new KochSnowflakeFractal('koch-math-canvas');
    
    const controls: FractalControlConfig[] = [
        {
            id: 'depth',
            label: 'Iterations',
            min: 0,
            max: 6,
            step: 1,
            defaultValue: 4,
            type: 'range',
            onChange: (value) => fractal.setMaxIterations(value)
        },
        {
            id: 'size',
            label: 'Size',
            min: 50,
            max: 400,
            step: 10,
            defaultValue: 300,
            type: 'range',
            onChange: (value) => fractal.setSize(value)
        },
        createZoomControl((value) => fractal.setZoom(value))
    ];
    
    createFractalCard({
        title: 'Koch Snowflake',
        description: 'A classic fractal curve that starts with an equilateral triangle and recursively replaces the middle third of each line segment with a triangular bump.',
        formula: 'Recursive geometric construction: Begin with a triangle, replace middle third of each edge with an equilateral triangle, repeat for all new edges.',
        controlConfigs: controls,
        canvasId: 'koch-math-canvas',
        container: container,
        fractal: fractal
    });
} 