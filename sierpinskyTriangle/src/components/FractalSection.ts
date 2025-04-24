/**
 * FractalSection Module - Creates and manages a section of fractals
 */

/**
 * Creates a new section for a group of fractals
 * @param title The title of the section
 * @returns The container element where fractal cards will be added
 */
export function createFractalSection(title: string): HTMLElement {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) {
        throw new Error('Dashboard element not found');
    }
    
    // Create section container
    const section = document.createElement('div');
    section.className = 'fractal-section';
    
    // Create container div with appropriate class
    const container = document.createElement('div');
    container.className = 'container';
    section.appendChild(container);
    
    // Create section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';
    container.appendChild(sectionHeader);
    
    // Create section title
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;
    sectionHeader.appendChild(sectionTitle);
    
    // Create grid for fractal cards
    const grid = document.createElement('div');
    grid.className = 'fractal-grid';
    container.appendChild(grid);
    
    // Add to dashboard
    dashboard.appendChild(section);
    
    // Log section creation for debugging
    console.log(`Created fractal section: ${title}`);
    
    return grid;
} 