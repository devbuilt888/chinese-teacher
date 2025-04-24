/**
 * FractalCardFactory - Factory for creating fractal cards
 */

import { FractalBase } from '../fractals/FractalBase';
import { FractalControlConfig } from './FractalControlConfig';
import { navigateToFractalEditor } from '../services/NavigationService';
import { TooltipManager } from './TooltipManager';

/**
 * Interface for fractal card creation options
 */
export interface FractalCardOptions {
    title: string;
    description: string;
    formula: string;
    controlConfigs: FractalControlConfig[];
    canvasId: string;
    container: HTMLElement;
    fractal: FractalBase;
}

/**
 * Creates a new fractal card and adds it to the specified container
 * @param options Options for creating the fractal card
 */
export function createFractalCard(options: FractalCardOptions): void {
    const { 
        title, 
        description, 
        formula, 
        controlConfigs, 
        canvasId, 
        container, 
        fractal 
    } = options;
    
    // Create the card container
    const card = document.createElement('div');
    card.className = 'fractal-card';
    
    // Create the header
    const header = document.createElement('div');
    header.className = 'card-header';
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    header.appendChild(titleElement);
    
    card.appendChild(header);
    
    // Create canvas container
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'canvas-container';
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvas.width = 400;
    canvas.height = 300;
    canvasContainer.appendChild(canvas);
    
    card.appendChild(canvasContainer);
    
    // Create controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'fractal-controls';
    
    // Add controls
    controlConfigs.forEach(config => {
        const controlGroup = document.createElement('div');
        controlGroup.className = 'control-group';
        
        const label = document.createElement('label');
        label.textContent = config.label || '';
        label.htmlFor = `${canvasId}-${config.id}`;
        controlGroup.appendChild(label);
        
        const input = document.createElement('input');
        input.id = `${canvasId}-${config.id}`;
        
        if (typeof config.defaultValue === 'number') {
            // Numeric input type
            if (config.min !== undefined && config.max !== undefined) {
                input.type = 'range';
                input.min = config.min.toString();
                input.max = config.max.toString();
                
                if (config.step !== undefined) {
                    input.step = config.step.toString();
                }
                
                // Add value display
                const valueDisplay = document.createElement('span');
                valueDisplay.className = 'value-display';
                valueDisplay.textContent = config.defaultValue.toString();
                controlGroup.appendChild(valueDisplay);
                
                // Update value display when input changes
                input.addEventListener('input', () => {
                    valueDisplay.textContent = input.value;
                });
            } else {
                input.type = 'number';
            }
            
            input.value = config.defaultValue.toString();
        } else {
            // String input type (for select, text, etc.)
            input.type = 'text';
            input.value = config.defaultValue.toString();
        }
        
        // Add change handler and automatically generate when value changes
        input.addEventListener('change', () => {
            const value = input.type === 'number' || input.type === 'range' 
                ? parseFloat(input.value) 
                : input.value;
            
            if (config.onChange) {
                config.onChange(value);
                // Automatically generate when value changes (no button needed)
                fractal.generate();
            }
        });
        
        // Also generate on input for sliders to provide immediate feedback
        if (input.type === 'range') {
            input.addEventListener('input', () => {
                if (config.onChange) {
                    config.onChange(parseFloat(input.value));
                    fractal.generate();
                }
            });
        }
        
        controlGroup.appendChild(input);
        controlsContainer.appendChild(controlGroup);
    });
    
    card.appendChild(controlsContainer);
    
    // Add description tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'fractal-tooltip';
    tooltip.style.display = 'none';
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    tooltip.appendChild(descriptionElement);
    
    // Create the fractal formula container with improved structure
    const formulaContainer = document.createElement('div');
    formulaContainer.className = 'fractal-formula-container';
    
    // Add formula title
    const formulaTitle = document.createElement('div');
    formulaTitle.className = 'formula-title';
    formulaTitle.textContent = 'Mathematical Formula';
    formulaContainer.appendChild(formulaTitle);
    
    const formulaElement = document.createElement('pre');
    formulaElement.className = 'fractal-formula';
    formulaElement.textContent = formula;
    formulaContainer.appendChild(formulaElement);
    
    // Add copy formula button with smaller size
    const copyFormulaBtn = document.createElement('button');
    copyFormulaBtn.className = 'formula-copy-button';
    copyFormulaBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
    
    // Add copy success notification element
    const copySuccess = document.createElement('div');
    copySuccess.className = 'formula-copied';
    copySuccess.textContent = 'Copied!';
    
    // Add copy formula functionality
    copyFormulaBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent tooltip from closing when clicking the button
        
        navigator.clipboard.writeText(formula).then(() => {
            // Show success notification
            copySuccess.classList.add('visible');
            
            // Remove the class after animation completes
            setTimeout(() => {
                copySuccess.classList.remove('visible');
            }, 1500);
        }).catch(err => {
            console.error('Could not copy formula:', err);
        });
    });
    
    // Add elements to formula container
    formulaContainer.appendChild(copyFormulaBtn);
    formulaContainer.appendChild(copySuccess);
    tooltip.appendChild(formulaContainer);
    
    card.appendChild(tooltip);
    
    // Add hover/click effect for tooltip
    card.addEventListener('click', (e) => {
        // Don't show tooltip when clicking on controls
        if ((e.target as Element).closest('.fractal-controls')) {
            return;
        }
        
        tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
    });
    
    // Add editor button at the bottom of the card
    const editorButton = document.createElement('button');
    editorButton.className = 'fractal-editor-button-bottom';
    editorButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Open Fractal Editor';
    editorButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the card click from showing the tooltip
        // Convert title to URL-friendly ID
        let fractalId = title.toLowerCase().replace(/\s+/g, '-');
        
        // Fix for non-repeat square fractal
        if (fractalId === 'non-repeat-square-fractal' || fractalId === 'non-repeat-square') {
            fractalId = 'nonrepeat-square';
        }
        
        navigateToFractalEditor(fractalId);
    });
    card.appendChild(editorButton);
    
    // Add card to container
    container.appendChild(card);
    
    // Initialize the fractal
    fractal.initialize();
    fractal.generate();
} 