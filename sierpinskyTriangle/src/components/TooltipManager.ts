import { FractalInfo } from '../fractals/FractalBase';

/**
 * Manages the display and interactions of fractal tooltips
 */
export class TooltipManager {
  private static instance: TooltipManager;
  private activeTooltip: HTMLElement | null = null;
  private backdrop: HTMLElement | null = null;

  /**
   * Gets the singleton instance of TooltipManager
   */
  public static getInstance(): TooltipManager {
    if (!TooltipManager.instance) {
      TooltipManager.instance = new TooltipManager();
    }
    return TooltipManager.instance;
  }

  /**
   * Shows a tooltip with the given fractal information
   */
  public showTooltip(fractalInfo: FractalInfo): void {
    // Close any existing tooltip
    this.closeTooltip();

    // Create backdrop
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'fractal-modal-backdrop';
    this.backdrop.addEventListener('click', () => this.closeTooltip());
    document.body.appendChild(this.backdrop);

    // Create tooltip
    this.activeTooltip = document.createElement('div');
    this.activeTooltip.className = 'fractal-tooltip';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'fractal-tooltip-header';
    
    const title = document.createElement('h2');
    title.className = 'fractal-tooltip-title';
    title.textContent = fractalInfo.title;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'fractal-tooltip-close';
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', () => this.closeTooltip());
    
    header.appendChild(title);
    header.appendChild(closeButton);
    this.activeTooltip.appendChild(header);
    
    // Create content
    const content = document.createElement('div');
    content.className = 'fractal-tooltip-content';
    
    // Description
    const description = document.createElement('div');
    description.className = 'fractal-tooltip-description';
    description.innerHTML = fractalInfo.description;
    content.appendChild(description);
    
    // Formula
    if (fractalInfo.formula) {
      const formulaContainer = document.createElement('div');
      formulaContainer.className = 'fractal-formula-container';
      
      const formula = document.createElement('pre');
      formula.className = 'fractal-formula';
      formula.textContent = fractalInfo.formula;
      
      const copyButton = document.createElement('button');
      copyButton.className = 'formula-copy-button';
      copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
      copyButton.addEventListener('click', () => this.copyFormula(fractalInfo.formula as string, copyButton));
      
      const copiedNotification = document.createElement('div');
      copiedNotification.className = 'formula-copied';
      copiedNotification.textContent = 'Copied!';
      
      formulaContainer.appendChild(formula);
      formulaContainer.appendChild(copyButton);
      formulaContainer.appendChild(copiedNotification);
      content.appendChild(formulaContainer);
    }
    
    this.activeTooltip.appendChild(content);
    document.body.appendChild(this.activeTooltip);

    // Add keyboard event listener for Escape key
    document.addEventListener('keydown', this.handleKeyDown);
  }

  /**
   * Copies the formula to clipboard and shows a notification
   */
  private copyFormula(formula: string, button: HTMLElement): void {
    navigator.clipboard.writeText(formula).then(() => {
      const container = button.parentElement;
      if (!container) return;
      
      const notification = container.querySelector('.formula-copied');
      if (notification) {
        notification.classList.add('visible');
        
        // Remove the class after animation completes
        setTimeout(() => {
          notification.classList.remove('visible');
        }, 1500);
      }
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  /**
   * Handle keyboard events for the tooltip
   */
  private handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      this.closeTooltip();
    }
  }

  /**
   * Closes the currently active tooltip
   */
  public closeTooltip(): void {
    if (this.activeTooltip) {
      document.body.removeChild(this.activeTooltip);
      this.activeTooltip = null;
    }
    
    if (this.backdrop) {
      document.body.removeChild(this.backdrop);
      this.backdrop = null;
    }
    
    // Remove keyboard event listener
    document.removeEventListener('keydown', this.handleKeyDown);
  }
} 