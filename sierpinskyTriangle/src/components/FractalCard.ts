/**
 * FractalCard - A reusable component for displaying fractals
 * 
 * This class creates and manages the UI for displaying a fractal with its controls
 * and handles the rendering of the fractal on a canvas element.
 */

import { ControlConfig } from './ControlConfig';

export interface FractalCardOptions {
  title: string;
  description: string;
  formula: string;
  controls: ControlConfig[];
  canvasWidth?: number;
  canvasHeight?: number;
}

/**
 * Represents a card that displays a fractal visualization with interactive controls.
 */
export class FractalCard {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private title: string;
  private controls: ControlConfig[];
  private generateCallback: () => void;
  private controlValues: Map<string, number | string> = new Map();

  /**
   * Creates a new FractalCard instance.
   * 
   * @param parentElement - The parent element to append the card to
   * @param title - The title of the fractal card
   * @param width - The width of the canvas
   * @param height - The height of the canvas
   * @param controls - Configuration for the interactive controls
   * @param generateCallback - Callback function to generate the fractal
   */
  constructor(
    parentElement: HTMLElement,
    title: string,
    width: number,
    height: number,
    controls: ControlConfig[],
    generateCallback: () => void
  ) {
    this.title = title;
    this.controls = controls;
    this.generateCallback = generateCallback;

    // Initialize the card container
    this.container = document.createElement('div');
    this.container.className = 'fractal-card';
    parentElement.appendChild(this.container);

    // Create card header with title
    const header = document.createElement('h3');
    header.textContent = title;
    this.container.appendChild(header);

    // Create canvas element
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.className = 'fractal-canvas';
    this.container.appendChild(this.canvas);

    // Get the rendering context
    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context for canvas');
    }
    this.ctx = context;

    // Create controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'controls-container';
    this.container.appendChild(controlsContainer);

    // Create controls based on configuration
    this.initializeControls(controlsContainer);

    // Create generate button
    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generate';
    generateButton.className = 'generate-button';
    generateButton.addEventListener('click', () => this.generateFractal());
    this.container.appendChild(generateButton);

    // Generate fractal initially
    this.generateFractal();
  }

  /**
   * Initialize controls based on the provided configuration.
   * 
   * @param container - The container element for the controls
   */
  private initializeControls(container: HTMLElement): void {
    this.controls.forEach(control => {
      // Store initial value
      this.controlValues.set(control.id, control.defaultValue);

      // Create control group
      const controlGroup = document.createElement('div');
      controlGroup.className = 'control-group';
      
      // Create label
      const label = document.createElement('label');
      label.textContent = control.label;
      controlGroup.appendChild(label);
      
      // Create value display
      const valueDisplay = document.createElement('span');
      valueDisplay.textContent = String(control.defaultValue);
      valueDisplay.className = 'value-display';
      controlGroup.appendChild(valueDisplay);
      
      // Create input element based on control type
      if (control.type === 'range') {
        const input = document.createElement('input');
        input.type = 'range';
        
        if (typeof control.min === 'number') input.min = String(control.min);
        if (typeof control.max === 'number') input.max = String(control.max);
        if (typeof control.step === 'number') input.step = String(control.step);
        
        // Convert value to string, ensuring it's a number first if it's a string representation
        let numericValue = 0; // Initialize with default value
        if (typeof control.defaultValue === 'string') {
          numericValue = Number(control.defaultValue);
        } else {
          numericValue = control.defaultValue as number;
        }
        
        input.value = String(numericValue);
        this.controlValues.set(control.id, numericValue);
        
        input.addEventListener('input', (e) => {
          const value = parseFloat((e.target as HTMLInputElement).value);
          this.controlValues.set(control.id, value);
          valueDisplay.textContent = value.toString();
        });
        
        controlGroup.appendChild(input);
      }
      
      container.appendChild(controlGroup);
    });
  }

  /**
   * Generates the fractal using the current control values.
   */
  public generateFractal(): void {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Call the generate callback
    this.generateCallback();
  }

  /**
   * Gets the canvas element.
   */
  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * Gets the canvas 2D context.
   */
  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  /**
   * Gets the current value of a control by its ID.
   * 
   * @param id - The ID of the control
   * @returns The current value of the control
   */
  public getControlValue(id: string): number | string {
    const value = this.controlValues.get(id);
    if (value === undefined) {
      throw new Error(`Control with ID "${id}" not found`);
    }
    return value;
  }

  /**
   * Gets the current numeric value of a control by its ID.
   * 
   * @param id - The ID of the control
   * @returns The current value as a number
   */
  public getNumericControlValue(id: string): number {
    const value = this.getControlValue(id);
    if (typeof value === 'string') {
      return parseFloat(value);
    }
    return value;
  }
} 