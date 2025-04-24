import { ControlConfig } from './ControlConfig';

/**
 * Class for creating and managing fractal control UI elements
 */
export class FractalControls {
  private container: HTMLElement;
  private controls: Map<string, HTMLInputElement> = new Map();
  private changeHandlers: Map<string, Function[]> = new Map();
  
  /**
   * Create a new FractalControls instance
   * @param containerId The ID of the container element for controls
   */
  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with ID "${containerId}" not found`);
    }
    this.container = container;
  }
  
  /**
   * Create controls based on configuration
   * @param configs Array of control configurations
   */
  createControls(configs: ControlConfig[]): void {
    // Clear existing controls
    this.container.innerHTML = '';
    this.controls.clear();
    
    configs.forEach(config => {
      const controlGroup = document.createElement('div');
      controlGroup.className = 'control-group';
      
      const label = document.createElement('label');
      label.textContent = config.label;
      label.htmlFor = config.id;
      
      const input = document.createElement('input');
      input.id = config.id;
      input.name = config.id;
      
      if (config.type === 'range') {
        input.type = 'range';
        if (config.min !== undefined) input.min = config.min.toString();
        if (config.max !== undefined) input.max = config.max.toString();
        if (config.step !== undefined) input.step = config.step.toString();
        
        // Create a value display for ranges
        const valueDisplay = document.createElement('span');
        valueDisplay.className = 'value-display';
        valueDisplay.textContent = config.defaultValue.toString();
        
        // Update value display when input changes
        input.addEventListener('input', () => {
          valueDisplay.textContent = input.value;
          this.notifyChangeHandlers(config.id, this.getValue(config.id));
        });
        
        controlGroup.appendChild(label);
        controlGroup.appendChild(input);
        controlGroup.appendChild(valueDisplay);
      } else if (config.type === 'number') {
        input.type = 'number';
        if (config.min !== undefined) input.min = config.min.toString();
        if (config.max !== undefined) input.max = config.max.toString();
        if (config.step !== undefined) input.step = config.step.toString();
        
        input.addEventListener('change', () => {
          this.notifyChangeHandlers(config.id, this.getValue(config.id));
        });
        
        controlGroup.appendChild(label);
        controlGroup.appendChild(input);
      } else if (config.type === 'color') {
        input.type = 'color';
        
        input.addEventListener('change', () => {
          this.notifyChangeHandlers(config.id, this.getValue(config.id));
        });
        
        controlGroup.appendChild(label);
        controlGroup.appendChild(input);
      }
      
      // Set default value
      if (typeof config.defaultValue === 'number') {
        input.value = config.defaultValue.toString();
      } else {
        input.value = config.defaultValue;
      }
      
      this.container.appendChild(controlGroup);
      this.controls.set(config.id, input);
    });
    
    // Add generate button
    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generate';
    generateButton.className = 'generate-button';
    generateButton.addEventListener('click', () => {
      this.notifyChangeHandlers('generate', null);
    });
    
    this.container.appendChild(generateButton);
  }
  
  /**
   * Get the value of a control
   * @param id The ID of the control
   * @returns The value of the control (as number for range and number inputs, as string for color)
   */
  getValue(id: string): number | string {
    const control = this.controls.get(id);
    if (!control) {
      throw new Error(`Control with ID "${id}" not found`);
    }
    
    if (control.type === 'range' || control.type === 'number') {
      return parseFloat(control.value);
    }
    
    return control.value;
  }
  
  /**
   * Set the value of a control
   * @param id The ID of the control
   * @param value The value to set
   */
  setValue(id: string, value: number | string): void {
    const control = this.controls.get(id);
    if (!control) {
      throw new Error(`Control with ID "${id}" not found`);
    }
    
    if (typeof value === 'number') {
      control.value = value.toString();
    } else {
      control.value = value;
    }
    
    // Update value display for range inputs
    if (control.type === 'range') {
      const valueDisplay = control.nextElementSibling as HTMLElement;
      if (valueDisplay && valueDisplay.className === 'value-display') {
        valueDisplay.textContent = control.value;
      }
    }
    
    this.notifyChangeHandlers(id, this.getValue(id));
  }
  
  /**
   * Add a change handler for a control
   * @param id The ID of the control or 'generate' for the generate button
   * @param handler The handler function to call when the control changes
   */
  onChange(id: string, handler: Function): void {
    if (!this.changeHandlers.has(id)) {
      this.changeHandlers.set(id, []);
    }
    
    this.changeHandlers.get(id)?.push(handler);
  }
  
  /**
   * Add a change handler for all controls
   * @param handler The handler function to call when any control changes
   */
  onAnyChange(handler: Function): void {
    this.onChange('*', handler);
  }
  
  /**
   * Notify change handlers when a control value changes
   * @param id The ID of the control that changed
   * @param value The new value of the control
   */
  private notifyChangeHandlers(id: string, value: any): void {
    // Call handlers for this specific control
    this.changeHandlers.get(id)?.forEach(handler => {
      handler(value);
    });
    
    // Call handlers for all controls
    this.changeHandlers.get('*')?.forEach(handler => {
      const values = this.getAllValues();
      handler(values);
    });
  }
  
  /**
   * Get all control values as an object
   * @returns Object with control IDs as keys and values as values
   */
  getAllValues(): Record<string, number | string> {
    const values: Record<string, number | string> = {};
    
    this.controls.forEach((control, id) => {
      values[id] = this.getValue(id);
    });
    
    return values;
  }
} 