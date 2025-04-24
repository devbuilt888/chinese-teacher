/**
 * Chaos Game Module - Initializes and manages chaos game fractals
 */

import { TriangleFractal } from './TriangleFractal';
import { RestrictedSquareFractal } from './RestrictedSquareFractal';
// import { DiamondFractal } from './DiamondFractal'; // Removed Diamond Fractal
import { NonRepeatSquareFractal } from './NonRepeatSquareFractal';
import { ModifiedSquareFractal } from './ModifiedSquareFractal';
import { AdjacentRestrictionFractal } from './AdjacentRestrictionFractal';
// import { HexagonSpiralFractal } from './HexagonSpiralFractal';  // Removed HexagonSpiralFractal
import { SierpinskiCarpet } from './SierpinskiCarpet';
import { PentagonFractal } from './PentagonFractal';
import { FernFractal } from './FernFractal';
import { createFractalCard } from '../../components/FractalCardFactory';
import { createIterationsControl, createSliderControl, FractalControlConfig } from '../../components/FractalControlConfig';

/**
 * Initialize all chaos game fractals
 * @param container The container element where fractal cards will be added
 */
export function initChaosGameFractals(container: HTMLElement): void {
    // Triangle Fractal
    initTriangleFractal(container);
    
    // Restricted Square Fractal
    initRestrictedSquareFractal(container);
    
    // Non-Repeat Square Fractal
    initNonRepeatSquareFractal(container);
    
    // Modified Square Fractal
    initModifiedSquareFractal(container);
    
    // Adjacent Restriction Fractal
    initAdjacentRestrictionFractal(container);
    
    // Hexagon Spiral Fractal (replacing Adjacency Mover) - Removed
    
    // Sierpinski Carpet Fractal
    initSierpinskiCarpet(container);
    
    // Pentagon Fractal
    initPentagonFractal(container);
    
    // Fern Fractal
    initFernFractal(container);
}

/**
 * Initialize the Sierpinski Triangle fractal
 */
function initTriangleFractal(container: HTMLElement): void {
    const fractal = new TriangleFractal('triangle-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value))
    ];
    
    createFractalCard({
        title: 'Sierpinski Triangle',
        description: 'The classic triangle chaos game fractal where points move halfway to randomly chosen vertices.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is a randomly chosen vertex',
        controlConfigs: controls,
        canvasId: 'triangle-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Restricted Square fractal
 */
function initRestrictedSquareFractal(container: HTMLElement): void {
    const fractal = new RestrictedSquareFractal('restricted-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value))
    ];
    
    createFractalCard({
        title: 'Restricted Square',
        description: 'A square fractal with restrictions that prevent certain vertex combinations.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i cannot be opposite to the previous vertex',
        controlConfigs: controls,
        canvasId: 'restricted-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Diamond fractal
 * @deprecated Diamond fractal has been removed from the dashboard
 */
function initDiamondFractal(container: HTMLElement): void {
    // Function body removed as this fractal has been removed from the dashboard
}

/**
 * Initialize the Non-Repeat Square fractal
 */
function initNonRepeatSquareFractal(container: HTMLElement): void {
    const fractal = new NonRepeatSquareFractal('non-repeat-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value))
    ];
    
    createFractalCard({
        title: 'Non-Repeat Square',
        description: 'A variant that prevents consecutive selection of the same vertex, creating more diverse patterns.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is determined by a non-repeating dice roll',
        controlConfigs: controls,
        canvasId: 'non-repeat-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Modified Square fractal
 */
function initModifiedSquareFractal(container: HTMLElement): void {
    const fractal = new ModifiedSquareFractal('modified-square-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value))
    ];
    
    createFractalCard({
        title: 'Modified Square',
        description: 'A modified square fractal with altered vertex positions and selection rules.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwith altered vertex positions and selection rules',
        controlConfigs: controls,
        canvasId: 'modified-square-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Adjacent Restriction fractal
 */
function initAdjacentRestrictionFractal(container: HTMLElement): void {
    const fractal = new AdjacentRestrictionFractal('adjacent-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value)),
        createSliderControl({
            id: 'contraction-ratio',
            label: 'Contraction Ratio',
            min: 0.1,
            max: 0.9,
            step: 0.05,
            defaultValue: 0.5,
            callback: (value) => fractal.setContractionRatio(value)
        })
    ];
    
    createFractalCard({
        title: 'Adjacent Restriction',
        description: 'A fractal that restricts movement to non-adjacent vertices, creating distinct geometric patterns.',
        formula: 'P_{n+1} = P_n + r * (V_i - P_n)\nwhere V_i cannot be adjacent to the previously chosen vertex',
        controlConfigs: controls,
        canvasId: 'adjacent-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Sierpinski Carpet fractal
 */
function initSierpinskiCarpet(container: HTMLElement): void {
    const fractal = new SierpinskiCarpet('sierpinski-carpet-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value))
    ];
    
    createFractalCard({
        title: 'Sierpinski Carpet',
        description: 'A 2D generalization of the Sierpinski Triangle using 8 vertices arranged in a square pattern with a 2/3 contraction ratio.',
        formula: 'P_{n+1} = P_n + 2/3(V_i - P_n)\nwhere V_i is a randomly chosen vertex from the 8 vertices',
        controlConfigs: controls,
        canvasId: 'sierpinski-carpet-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Pentagon fractal
 */
function initPentagonFractal(container: HTMLElement): void {
    const fractal = new PentagonFractal('pentagon-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value)),
        createSliderControl({
            id: 'pentagon-ratio',
            label: 'Contraction Ratio',
            min: 0.4,
            max: 0.8,
            step: 0.01,
            defaultValue: 0.618,
            callback: (value) => fractal.setContractionRatio(value)
        })
    ];
    
    createFractalCard({
        title: 'Pentagon Fractal',
        description: 'A pentagon-based chaos game with variable contraction ratios that create intricate patterns.',
        formula: 'P_{n+1} = P_n + r_i(V_i - P_n)\nwhere r_i varies based on vertex V_i',
        controlConfigs: controls,
        canvasId: 'pentagon-canvas',
        container: container,
        fractal: fractal
    });
}

/**
 * Initialize the Fern fractal
 */
function initFernFractal(container: HTMLElement): void {
    const fractal = new FernFractal('fern-canvas');
    
    const controls: FractalControlConfig[] = [
        createIterationsControl((value) => fractal.setIterations(value))
    ];
    
    createFractalCard({
        title: 'Barnsley Fern',
        description: 'A fern-like fractal generated using a chaos game with probabilistic affine transformations.',
        formula: 'x_{n+1} = a_i·x_n + b_i·y_n + e_i\ny_{n+1} = c_i·x_n + d_i·y_n + f_i\nwhere i is chosen with probability p_i',
        controlConfigs: controls,
        canvasId: 'fern-canvas',
        container: container,
        fractal: fractal
    });
} 