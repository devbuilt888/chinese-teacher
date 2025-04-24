import { FractalCard } from './components/FractalCard';
import { TriangleFractal } from './fractals/chaos-game/TriangleFractal';
import { SquareFractal } from './fractals/chaos-game/SquareFractal';
import { RestrictedSquareFractal } from './fractals/chaos-game/RestrictedSquareFractal';
import { MandelbrotFractal } from './fractals/mathematical/MandelbrotFractal';
import { JuliaFractal } from './fractals/mathematical/JuliaFractal';
import { BurningShipFractal } from './fractals/mathematical/BurningShipFractal';
// Import other fractals as needed

// Style definitions for the dashboard
import './styles.css';

// Define the interface for ControlConfig to match our usage
interface ControlConfig {
    id: string;
    label?: string;
    type?: 'range' | 'number';
    min: string | number;
    max: string | number;
    step?: string | number;
    defaultValue: string | number; 
    onChange?: (value: number) => void;
}

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing dashboard...');

    // Make sure the dashboard element exists
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) {
        console.error('Dashboard element not found. Cannot initialize application.');
        return;
    }
    
    setupDebugPanel();
    
    // Try initializing particles
    try {
        initParticles();
    } catch (e) {
        console.error('Error initializing particles:', e);
    }
    
    // Initialize the dashboard with all fractal modules
    try {
        initDashboard();
        console.log('Dashboard initialization triggered');
    } catch (e) {
        console.error('Error initializing dashboard:', e);
    }
});

/**
 * Creates the header element with title and subtitle
 */
function createHeader(): void {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    const header = document.createElement('header');
    
    const title = document.createElement('h1');
    title.textContent = 'Fractal Explorer';
    
    const subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Interactive visualization of chaos game fractals and complex mathematical patterns';
    
    header.appendChild(title);
    header.appendChild(subtitle);
    
    dashboard.appendChild(header);
}

/**
 * Creates a section for a group of fractals
 */
function createSection(title: string): HTMLElement {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) {
        throw new Error('Dashboard element not found');
    }
    
    const contentArea = document.createElement('div');
    contentArea.className = 'content-area';
    
    const sectionTitle = document.createElement('div');
    sectionTitle.className = 'section-title';
    sectionTitle.textContent = title;
    
    const grid = document.createElement('div');
    grid.className = 'fractal-grid';
    
    contentArea.appendChild(sectionTitle);
    contentArea.appendChild(grid);
    
    dashboard.appendChild(contentArea);
    
    return grid;
}

/**
 * Creates the footer element
 */
function createFooter(): void {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    const footer = document.createElement('div');
    footer.className = 'footer';
    
    const footerLine = document.createElement('div');
    footerLine.className = 'footer-line';
    
    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    
    const footerText = document.createElement('div');
    footerText.className = 'footer-text';
    footerText.textContent = 'Fractal Explorer - Visualizing infinite complexity through mathematics';
    
    footerContent.appendChild(footerText);
    footer.appendChild(footerLine);
    footer.appendChild(footerContent);
    
    dashboard.appendChild(footer);
}

/**
 * Creates the grid overlay element
 */
function createGridOverlay(): void {
    const body = document.body;
    
    const gridOverlay = document.createElement('div');
    gridOverlay.className = 'grid-overlay';
    
    body.appendChild(gridOverlay);
}

/**
 * Creates corner decoration elements
 */
function createCornerDecorations(): void {
    const body = document.body;
    
    const corners = [
        'corner-top-left',
        'corner-top-right',
        'corner-bottom-left',
        'corner-bottom-right'
    ];
    
    corners.forEach(corner => {
        const decoration = document.createElement('div');
        decoration.className = `corner-decoration ${corner}`;
        body.appendChild(decoration);
    });
}

/**
 * Initializes chaos game fractals
 */
function initChaosGameFractals(container: HTMLElement): void {
    // Create Triangle Fractal
    const triangleFractal = new TriangleFractal('triangle-canvas');
    
    const triangleControls: ControlConfig[] = [
        {
            type: 'number',
            id: 'triangle-iterations',
            label: 'Iterations',
            min: '100',
            max: '1000000',
            defaultValue: '10000',
            onChange: (value) => {
                triangleFractal.setIterations(value);
            }
        }
    ];
    
    const triangleInfo = triangleFractal.getInfo();
    createFractalCard(
        triangleInfo.title,
        triangleInfo.description,
        triangleInfo.formula,
        triangleFractal,
        container,
        triangleControls
    );
    
    // Create Square Fractal
    const squareFractal = new SquareFractal('square-canvas');
    
    const squareControls: ControlConfig[] = [
        {
            type: 'number',
            id: 'square-iterations',
            label: 'Iterations',
            min: '100',
            max: '1000000',
            defaultValue: '10000',
            onChange: (value) => {
                squareFractal.setIterations(value);
            }
        }
    ];
    
    const squareInfo = squareFractal.getInfo();
    createFractalCard(
        squareInfo.title,
        squareInfo.description,
        squareInfo.formula,
        squareFractal,
        container,
        squareControls
    );
    
    // Create Restricted Square Fractal
    const restrictedFractal = new RestrictedSquareFractal('restricted-canvas');
    
    const restrictedControls: ControlConfig[] = [
        {
            type: 'number',
            id: 'restricted-iterations',
            label: 'Iterations',
            min: '100',
            max: '1000000',
            defaultValue: '10000',
            onChange: (value) => {
                restrictedFractal.setIterations(value);
            }
        }
    ];
    
    const restrictedInfo = restrictedFractal.getInfo();
    createFractalCard(
        restrictedInfo.title,
        restrictedInfo.description,
        restrictedInfo.formula,
        restrictedFractal,
        container,
        restrictedControls
    );
    
    // Add other chaos game fractals here
}

/**
 * Initializes mathematical fractals
 */
function initMathFractals(container: HTMLElement): void {
    // Create Mandelbrot Fractal
    const mandelbrotFractal = new MandelbrotFractal('mandelbrot-canvas');
    
    const mandelbrotControls: ControlConfig[] = [
        {
            type: 'range',
            id: 'mandelbrot-zoom',
            label: 'Zoom',
            min: '0.5',
            max: '5',
            step: '0.1',
            defaultValue: '1',
            onChange: (value) => {
                mandelbrotFractal.setZoom(value);
            }
        },
        {
            type: 'range',
            id: 'mandelbrot-iterations',
            label: 'Iterations',
            min: '50',
            max: '500',
            step: '10',
            defaultValue: '100',
            onChange: (value) => {
                mandelbrotFractal.setMaxIterations(value);
            }
        }
    ];
    
    const mandelbrotInfo = mandelbrotFractal.getInfo();
    createFractalCard(
        mandelbrotInfo.title,
        mandelbrotInfo.description,
        mandelbrotInfo.formula,
        mandelbrotFractal,
        container,
        mandelbrotControls
    );
    
    // Create Julia Fractal
    const juliaFractal = new JuliaFractal('julia-canvas');
    
    const juliaControls: ControlConfig[] = [
        {
            type: 'range',
            id: 'julia-real',
            label: 'Real',
            min: '-1',
            max: '1',
            step: '0.01',
            defaultValue: '-0.7',
            onChange: (value) => {
                const imag = parseFloat((document.getElementById('julia-imag') as HTMLInputElement).value);
                juliaFractal.setParameters(value, imag);
            }
        },
        {
            type: 'range',
            id: 'julia-imag',
            label: 'Imaginary',
            min: '-1',
            max: '1',
            step: '0.01',
            defaultValue: '0.27',
            onChange: (value) => {
                const real = parseFloat((document.getElementById('julia-real') as HTMLInputElement).value);
                juliaFractal.setParameters(real, value);
            }
        }
    ];
    
    const juliaInfo = juliaFractal.getInfo();
    createFractalCard(
        juliaInfo.title,
        juliaInfo.description,
        juliaInfo.formula,
        juliaFractal,
        container,
        juliaControls
    );
    
    // Create Burning Ship Fractal
    const burningShipFractal = new BurningShipFractal('burning-canvas');
    
    const burningShipControls: ControlConfig[] = [
        {
            type: 'range',
            id: 'burning-zoom',
            label: 'Zoom',
            min: '0.5',
            max: '5',
            step: '0.1',
            defaultValue: '1',
            onChange: (value) => {
                burningShipFractal.setZoom(value);
            }
        },
        {
            type: 'range',
            id: 'burning-iterations',
            label: 'Iterations',
            min: '50',
            max: '500',
            step: '10',
            defaultValue: '100',
            onChange: (value) => {
                burningShipFractal.setMaxIterations(value);
            }
        }
    ];
    
    const burningShipInfo = burningShipFractal.getInfo();
    createFractalCard(
        burningShipInfo.title,
        burningShipInfo.description,
        burningShipInfo.formula,
        burningShipFractal,
        container,
        burningShipControls
    );
    
    // Add other mathematical fractals here
}

/**
 * Helper function to create fractal cards
 */
function createFractalCard(
    title: string,
    description: string,
    formula: string,
    fractal: any,
    container: HTMLElement,
    controls: ControlConfig[]
): void {
    const card = document.createElement('div');
    card.className = 'fractal-card';
    
    const header = document.createElement('div');
    header.className = 'fractal-header';
    
    const titleElement = document.createElement('h2');
    titleElement.className = 'fractal-title';
    titleElement.textContent = title;
    
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'fractal-controls';
    
    header.appendChild(titleElement);
    header.appendChild(controlsContainer);
    
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'fractal-canvas-container';
    
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 350;
    canvas.id = fractal.canvasId;
    
    canvasContainer.appendChild(canvas);
    
    card.appendChild(header);
    card.appendChild(canvasContainer);
    
    // Add description if provided
    if (description) {
        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'fractal-description';
        descriptionContainer.style.display = 'none';
        
        const descriptionText = document.createElement('p');
        descriptionText.className = 'description-text';
        descriptionText.textContent = description;
        
        descriptionContainer.appendChild(descriptionText);
        
        // Add formula if provided
        if (formula) {
            const formulaContainer = document.createElement('div');
            formulaContainer.className = 'formula-container';
            
            const formulaTitle = document.createElement('div');
            formulaTitle.textContent = 'Mathematical Formula:';
            formulaTitle.style.fontWeight = 'bold';
            
            const formulaText = document.createElement('pre');
            formulaText.className = 'formula-text';
            formulaText.textContent = formula;
            
            formulaContainer.appendChild(formulaTitle);
            formulaContainer.appendChild(formulaText);
            descriptionContainer.appendChild(formulaContainer);
        }
        
        card.appendChild(descriptionContainer);
        
        // Toggle description visibility on click
        canvas.addEventListener('click', () => {
            const display = descriptionContainer.style.display;
            descriptionContainer.style.display = display === 'none' ? 'block' : 'none';
        });
    }
    
    // Add controls
    controls.forEach(control => {
        const controlGroup = document.createElement('div');
        controlGroup.className = 'control-group';
        
        const input = document.createElement('input');
        input.id = control.id;
        input.type = control.type || 'range';
        
        if (input.type === 'number' || input.type === 'range') {
            input.min = control.min.toString();
            input.max = control.max.toString();
            if (control.step) {
                input.step = control.step.toString();
            }
            input.value = control.defaultValue.toString();
        }
        
        input.addEventListener('change', () => {
            if (control.onChange) {
                control.onChange(parseFloat(input.value));
            }
        });
        
        if (control.label) {
            const label = document.createElement('div');
            label.className = 'control-label';
            label.textContent = control.label;
            controlGroup.appendChild(input);
            controlGroup.appendChild(label);
        } else {
            controlGroup.appendChild(input);
        }
        
        controlsContainer.appendChild(controlGroup);
    });
    
    // Add generate button
    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generate';
    generateButton.addEventListener('click', () => {
        fractal.generate();
    });
    controlsContainer.appendChild(generateButton);
    
    container.appendChild(card);
    
    // Initialize the fractal
    fractal.initialize();
    fractal.generate();
}

// Initialize particles.js
function initParticles() {
    // Wait a bit to make sure particles.js is loaded
    setTimeout(() => {
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
            console.log("particlesJS is undefined - will not initialize particles");
        }
    }, 500);
}

// Setup debug panel
function setupDebugPanel() {
    const debugInfo = document.getElementById('debug-info');
    if (debugInfo) {
        // Override console.log to also output to debug panel
        const oldLog = console.log;
        console.log = function(...args) {
            if (debugInfo) {
                debugInfo.innerHTML += `<div>${args.map(arg => String(arg)).join(' ')}</div>`;
                debugInfo.scrollTop = debugInfo.scrollHeight;
            }
            oldLog.apply(console, args);
        };
        
        console.log("Debug panel initialized");
    }
}

// Initialize the main dashboard
function initDashboard(): void {
    // Create the main sections
    createHeader();
    const chaosGameSection = createSection('Chaos Game Fractals');
    const mathFractalSection = createSection('Complex Mathematical Fractals');
    createFooter();
     
    // Create decorative elements for Tron-inspired UI
    createGridOverlay();
    createCornerDecorations();
     
    // Initialize chaos game fractals
    initChaosGameFractals(chaosGameSection);
     
    // Initialize mathematical fractals
    initMathFractals(mathFractalSection);
} 