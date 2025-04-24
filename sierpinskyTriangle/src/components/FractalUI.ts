import { ControlConfig } from './ControlConfig';

export class FractalUI {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private controls: Map<string, HTMLInputElement> = new Map();
  private generateButton: HTMLButtonElement;
  private onGenerate: () => void;

  constructor(
    parent: HTMLElement,
    title: string,
    description: string,
    controlConfig: ControlConfig[],
    canvasWidth: number = 400,
    canvasHeight: number = 400,
    onGenerate: () => void
  ) {
    this.onGenerate = onGenerate;
    
    // Create main container
    this.container = document.createElement('div');
    this.container.className = 'fractal-card';
    parent.appendChild(this.container);

    // Add title
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'fractal-title';
    this.container.appendChild(titleElement);

    // Add description
    if (description) {
      const descElement = document.createElement('p');
      descElement.textContent = description;
      descElement.className = 'fractal-description';
      this.container.appendChild(descElement);
    }

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.canvas.className = 'fractal-canvas';
    this.container.appendChild(this.canvas);

    // Create controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls-container';
    this.container.appendChild(controlsContainer);

    // Add control elements
    this.createControls(controlsContainer, controlConfig);

    // Add generate button
    this.generateButton = document.createElement('button');
    this.generateButton.textContent = 'Generate';
    this.generateButton.className = 'generate-button';
    this.generateButton.addEventListener('click', () => this.onGenerate());
    this.container.appendChild(this.generateButton);
  }

  private createControls(container: HTMLElement, controlConfig: ControlConfig[]): void {
    controlConfig.forEach(config => {
      const controlGroup = document.createElement('div');
      controlGroup.className = 'control-group';
      
      // Create label
      const label = document.createElement('label');
      label.textContent = config.label;
      label.htmlFor = config.id;
      controlGroup.appendChild(label);
      
      // Create value display
      const valueDisplay = document.createElement('span');
      valueDisplay.className = 'value-display';
      valueDisplay.textContent = String(config.defaultValue);
      controlGroup.appendChild(valueDisplay);
      
      // Create input
      const input = document.createElement('input');
      input.type = config.type;
      input.id = config.id;
      
      if (typeof config.min === 'number') input.min = String(config.min);
      if (typeof config.max === 'number') input.max = String(config.max);
      if (typeof config.step === 'number') input.step = String(config.step);
      
      input.value = String(config.defaultValue);
      
      // Update value display when input changes
      input.addEventListener('input', () => {
        valueDisplay.textContent = input.value;
      });
      
      controlGroup.appendChild(input);
      container.appendChild(controlGroup);
      
      // Store input in controls map
      this.controls.set(config.id, input);
    });
  }

  /**
   * Get the canvas element
   */
  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * Get the context for the canvas
   */
  getContext(): CanvasRenderingContext2D | null {
    return this.canvas.getContext('2d');
  }

  /**
   * Get the value of a control by its ID
   */
  getControlValue(id: string): number {
    const control = this.controls.get(id);
    return control ? parseFloat(control.value) : 0;
  }

  /**
   * Get all control values as an object
   */
  getAllControlValues(): Record<string, number> {
    const values: Record<string, number> = {};
    this.controls.forEach((control, id) => {
      values[id] = parseFloat(control.value);
    });
    return values;
  }

  /**
   * Set the value of a control
   */
  setControlValue(id: string, value: number): void {
    const control = this.controls.get(id);
    if (control) {
      control.value = value.toString();
      // Trigger the input event to update the display
      control.dispatchEvent(new Event('input'));
    }
  }

  /**
   * Clear the canvas
   */
  clearCanvas(): void {
    const ctx = this.getContext();
    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
} 