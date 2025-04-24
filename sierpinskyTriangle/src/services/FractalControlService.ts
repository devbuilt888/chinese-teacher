import { ControlConfig } from '../interfaces/ControlConfig';
import { createControl, createButton } from '../utils/controlUtils';

/**
 * Service for managing fractal controls and their interactions
 */
export class FractalControlService {
  private controlValues: Record<string, any> = {};
  private controlConfigs: ControlConfig[] = [];
  private container: HTMLElement;
  private onGenerate: (params: Record<string, any>) => void;
  
  /**
   * Creates a new fractal control service
   * @param container HTML element to render controls in
   * @param configs Array of control configurations
   * @param onGenerate Callback function when the generate button is clicked
   */
  constructor(
    container: HTMLElement, 
    configs: ControlConfig[], 
    onGenerate: (params: Record<string, any>) => void
  ) {
    this.container = container;
    this.controlConfigs = configs;
    this.onGenerate = onGenerate;
    
    // Initialize control values with defaults
    this.controlConfigs.forEach(config => {
      this.controlValues[config.id] = config.defaultValue;
    });
    
    this.renderControls();
  }
  
  /**
   * Renders all controls to the container element
   */
  private renderControls(): void {
    // Clear container
    this.container.innerHTML = '';
    
    // Create control elements
    this.controlConfigs.forEach(config => {
      const control = createControl(
        config, 
        this.controlValues[config.id],
        (id, value) => {
          this.updateControlValue(id, value);
        }
      );
      this.container.appendChild(control);
    });
    
    // Add generate button
    const generateButton = createButton('Generate', () => {
      this.onGenerate(this.controlValues);
    });
    
    this.container.appendChild(generateButton);
  }
  
  /**
   * Updates a control value and stores it
   * @param id Control identifier
   * @param value New control value
   */
  private updateControlValue(id: string, value: any): void {
    this.controlValues[id] = value;
  }
  
  /**
   * Gets the current values of all controls
   * @returns Record of control ID to value mappings
   */
  public getControlValues(): Record<string, any> {
    return { ...this.controlValues };
  }
  
  /**
   * Updates the value of a control and updates the UI
   * @param id Control identifier
   * @param value New value
   */
  public setControlValue(id: string, value: any): void {
    this.controlValues[id] = value;
    
    // Update UI element if it exists
    const element = document.getElementById(id) as HTMLInputElement;
    if (element) {
      element.value = value.toString();
      
      // If there's a value display span, update it too
      const parent = element.parentElement;
      if (parent) {
        const valueDisplay = parent.querySelector('.value-display');
        if (valueDisplay) {
          valueDisplay.textContent = value.toString();
        }
      }
    }
  }
} 