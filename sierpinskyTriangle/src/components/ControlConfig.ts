/**
 * Represents a configuration for a control element in a fractal visualization.
 */
export interface ControlConfig {
  /** Unique identifier for the control */
  id: string;
  
  /** Display label for the control */
  label: string;
  
  /** Type of control (currently supports 'range', 'number', 'color') */
  type: 'range' | 'number' | 'color';
  
  /** Minimum value for range control */
  min?: number;
  
  /** Maximum value for range control */
  max?: number;
  
  /** Step size for range control */
  step?: number;
  
  /** Initial/default value for the control */
  defaultValue: number | string;
}

/**
 * Creates a standard control configuration for a parameter
 */
export function createControl(
  id: string, 
  label: string, 
  min: number, 
  max: number, 
  step: number, 
  defaultValue: number
): ControlConfig {
  return {
    id,
    label,
    type: 'range',
    min,
    max,
    step,
    defaultValue
  };
}

/**
 * Standard control configurations for different fractal types
 */
export const ControlConfigs = {
  // Mandelbrot Set controls
  mandelbrot: [
    createControl('maxIterations', 'Max Iterations', 50, 1000, 50, 200),
    createControl('escapeRadius', 'Escape Radius', 2, 20, 1, 4),
    createControl('zoom', 'Zoom', 0.1, 2, 0.1, 0.5),
    createControl('centerX', 'Center X', -2, 1, 0.1, -0.5),
    createControl('centerY', 'Center Y', -1.5, 1.5, 0.1, 0)
  ],
  
  // Julia Set controls
  julia: [
    createControl('maxIterations', 'Max Iterations', 50, 1000, 50, 200),
    createControl('escapeRadius', 'Escape Radius', 2, 20, 1, 4),
    createControl('zoom', 'Zoom', 0.1, 2, 0.1, 0.5),
    createControl('centerX', 'Center X', -2, 2, 0.1, 0),
    createControl('centerY', 'Center Y', -2, 2, 0.1, 0),
    createControl('parameterA', 'Parameter A', -1, 1, 0.01, -0.7),
    createControl('parameterB', 'Parameter B', -1, 1, 0.01, 0.27)
  ],
  
  // Burning Ship controls
  burningShip: [
    createControl('maxIterations', 'Max Iterations', 50, 1000, 50, 200),
    createControl('escapeRadius', 'Escape Radius', 2, 20, 1, 4),
    createControl('zoom', 'Zoom', 0.1, 5, 0.1, 0.5),
    createControl('centerX', 'Center X', -2.5, 1.5, 0.1, -0.5),
    createControl('centerY', 'Center Y', -2, 2, 0.1, -0.5)
  ],
  
  // Newton Fractal controls
  newton: [
    createControl('maxIterations', 'Max Iterations', 10, 200, 10, 30),
    createControl('tolerance', 'Tolerance', 0.000001, 0.01, 0.000001, 0.00001),
    createControl('zoom', 'Zoom', 0.1, 2, 0.1, 0.5),
    createControl('degree', 'Polynomial Degree', 3, 7, 1, 3)
  ],
  
  // Lyapunov Fractal controls
  lyapunov: [
    createControl('sequenceLength', 'Sequence Length', 2, 10, 1, 2),
    createControl('iterations', 'Iterations', 100, 2000, 100, 1000),
    createControl('minR', 'Min R', 2, 3, 0.01, 2.5),
    createControl('maxR', 'Max R', 3.5, 4, 0.01, 4),
    createControl('colorIntensity', 'Color Intensity', 1, 10, 0.5, 5)
  ],
  
  // Phoenix Fractal controls
  phoenix: [
    createControl('maxIterations', 'Max Iterations', 50, 1000, 50, 200),
    createControl('escapeRadius', 'Escape Radius', 2, 20, 1, 4),
    createControl('zoom', 'Zoom', 0.1, 2, 0.1, 0.5),
    createControl('centerX', 'Center X', -2.5, 2.5, 0.1, 0),
    createControl('centerY', 'Center Y', -2.5, 2.5, 0.1, 0),
    createControl('p', 'Parameter P', -2, 2, 0.01, 0.5667),
    createControl('q', 'Parameter Q', -2, 2, 0.01, -0.5)
  ],
  
  // Sierpinski Triangle controls
  sierpinski: [
    createControl('points', 'Number of Points', 1000, 50000, 1000, 10000),
    createControl('initialSize', 'Initial Size', 50, 400, 10, 300),
    createControl('scale', 'Scale Factor', 0.1, 0.9, 0.01, 0.5)
  ],
  
  // Koch Snowflake controls
  koch: [
    createControl('iterations', 'Iterations', 0, 6, 1, 4),
    createControl('size', 'Size', 50, 400, 10, 300)
  ],
  
  // Dragon Curve controls
  dragon: [
    createControl('iterations', 'Iterations', 1, 15, 1, 10),
    createControl('size', 'Size', 1, 10, 0.1, 5)
  ],
  
  // Barnsley Fern controls
  barnsley: [
    createControl('points', 'Number of Points', 1000, 50000, 1000, 10000),
    createControl('scale', 'Scale', 10, 100, 5, 50)
  ]
};

// Interface for defining fractal control configurations
export type ControlType = 'range' | 'number' | 'color';

// Helper function to create a range control configuration
export function createRangeControl(
  id: string, 
  label: string, 
  min: number, 
  max: number, 
  step: number, 
  defaultValue: number
): ControlConfig {
  return {
    id,
    label,
    type: 'range',
    min,
    max,
    step,
    defaultValue
  };
}

// Helper function to create a number control configuration
export function createNumberControl(
  id: string,
  label: string,
  defaultValue: number
): ControlConfig {
  return {
    id,
    label,
    type: 'number',
    defaultValue
  };
}

// Helper function to create a color control configuration
export function createColorControl(
  id: string,
  label: string,
  defaultValue: string
): ControlConfig {
  return {
    id,
    label,
    type: 'color',
    defaultValue
  };
}

// Standard control configurations for common fractal parameters
export const ITERATION_CONTROL: ControlConfig = createRangeControl(
  'maxIterations',
  'Max Iterations',
  10,
  1000,
  10,
  100
);

export const ESCAPE_RADIUS_CONTROL: ControlConfig = createRangeControl(
  'escapeRadius',
  'Escape Radius',
  2,
  20,
  0.5,
  4
);

export const ZOOM_CONTROL: ControlConfig = createRangeControl(
  'zoom',
  'Zoom',
  0.1,
  10,
  0.1,
  1
);

export const CENTER_X_CONTROL: ControlConfig = createRangeControl(
  'centerX',
  'Center X',
  -2,
  2,
  0.05,
  0
);

export const CENTER_Y_CONTROL: ControlConfig = createRangeControl(
  'centerY',
  'Center Y',
  -2,
  2,
  0.05,
  0
);

// Common color controls
export const COLOR_HUE_CONTROL: ControlConfig = createRangeControl(
  'colorHue',
  'Color Hue',
  0,
  360,
  5,
  180
);

export const COLOR_SATURATION_CONTROL: ControlConfig = createRangeControl(
  'colorSaturation',
  'Color Saturation',
  0,
  100,
  5,
  100
);

export const COLOR_BRIGHTNESS_CONTROL: ControlConfig = createRangeControl(
  'colorBrightness',
  'Color Brightness',
  0,
  100,
  5,
  50
);

// Julia set specific controls
export const JULIA_REAL_CONTROL: ControlConfig = createRangeControl(
  'juliaReal',
  'Julia Real Parameter',
  -2,
  2,
  0.01,
  -0.7
);

export const JULIA_IMAG_CONTROL: ControlConfig = createRangeControl(
  'juliaImag',
  'Julia Imaginary Parameter',
  -2,
  2,
  0.01,
  0.27
);

// Phoenix fractal specific controls
export const PHOENIX_P_CONTROL: ControlConfig = createRangeControl(
  'phoenixP',
  'Phoenix P Parameter',
  -1,
  1,
  0.01,
  0.56
);

export const PHOENIX_Q_CONTROL: ControlConfig = createRangeControl(
  'phoenixQ',
  'Phoenix Q Parameter',
  -1,
  1,
  0.01,
  -0.5
); 