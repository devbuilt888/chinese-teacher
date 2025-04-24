/**
 * Dashboard Module - Main container for the fractal dashboard 
 */

import { createFractalSection } from './FractalSection';
import { initChaosGameFractals } from '../fractals/chaos-game/ChaosGameModule';
import { initMathFractals } from '../fractals/mathematical/MathFractalModule';

/**
 * Initialize the dashboard with all fractal sections
 */
export function initDashboard(): void {
    console.log('Initializing dashboard...');
    
    // Create the main dashboard structure
    createHeader();
    console.log('Header created');
    
    const chaosGameContainer = createFractalSection('Chaos Game Fractals');
    console.log('Chaos Game section container created');
    
    const mathFractalContainer = createFractalSection('Complex Mathematical Fractals');
    console.log('Math Fractal section container created');
    
    createFooter();
    console.log('Footer created');

    // Create decorative elements
    createGridOverlay();
    createCornerDecorations();
    console.log('Decorations created');
    
    // Initialize the fractal sections
    console.log('Initializing Chaos Game fractals...');
    initChaosGameFractals(chaosGameContainer);
    console.log('Chaos Game fractals initialized');
    
    console.log('Initializing Math fractals...');
    initMathFractals(mathFractalContainer);
    console.log('Math fractals initialized');
    
    console.log('Dashboard initialization complete');
}

/**
 * Creates the header element with title and subtitle
 */
function createHeader(): void {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;
    
    const header = document.createElement('header');
    
    // Don't create particles container - already added in HTML
    // const particles = document.createElement('div');
    // particles.id = 'particles-js';
    // header.appendChild(particles);
    
    // Create header content wrapper
    const headerContent = document.createElement('div');
    headerContent.className = 'header-content';
    
    // Create title with data-text attribute for glow effect
    const title = document.createElement('h1');
    const titleText = 'Fractal Explorer';
    title.textContent = titleText;
    title.setAttribute('data-text', titleText);
    
    // Create subtitle with modern styling
    const subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = 'Interactive visualization of <span class="highlight">chaos game fractals</span> and <span class="highlight">complex mathematical patterns</span>';
    
    // Create a decorative line under the title
    const decorLine = document.createElement('div');
    decorLine.className = 'header-decoration';
    
    headerContent.appendChild(title);
    headerContent.appendChild(decorLine);
    headerContent.appendChild(subtitle);
    header.appendChild(headerContent);
    
    dashboard.appendChild(header);
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
 * Creates the grid overlay element (decorative background)
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