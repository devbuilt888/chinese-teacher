/**
 * FractalControlConfig - Extended control configuration for fractal UI
 */

import { ControlConfig } from './ControlConfig';

/**
 * Extended control configuration with onChange handler for fractal UI
 */
export interface FractalControlConfig extends ControlConfig {
    /**
     * Change handler function
     * @param value The new value of the control
     */
    onChange?: (value: any) => void;
}

/**
 * Creates a standard iteration control
 * @param onChange Callback function when value changes
 * @returns Control configuration for iterations
 */
export function createIterationsControl(onChange: (value: number) => void): FractalControlConfig {
    return {
        id: 'iterations',
        label: 'Iterations',
        min: 1000,
        max: 100000,
        step: 1000,
        defaultValue: 10000,
        type: 'range',
        onChange: onChange
    };
}

/**
 * Creates a standard max iterations control for mathematical fractals
 * @param onChange Callback function when value changes
 * @returns Control configuration for max iterations
 */
export function createMaxIterationsControl(onChange: (value: number) => void): FractalControlConfig {
    return {
        id: 'maxIterations',
        label: 'Max Iterations',
        min: 10,
        max: 1000,
        step: 10,
        defaultValue: 100,
        type: 'range',
        onChange: onChange
    };
}

/**
 * Creates a standard zoom control for mathematical fractals
 * @param onChange Callback function when value changes
 * @returns Control configuration for zoom
 */
export function createZoomControl(onChange: (value: number) => void): FractalControlConfig {
    return {
        id: 'zoom',
        label: 'Zoom Level',
        min: 0.1,
        max: 10,
        step: 0.1,
        defaultValue: 1,
        type: 'range',
        onChange: onChange
    };
}

/**
 * Creates a complex parameter control
 * @param id Control identifier
 * @param label Display label
 * @param defaultValue Default value
 * @param onChange Callback function when value changes
 * @returns Control configuration for complex parameter
 */
export function createComplexParamControl(
    id: string,
    label: string,
    defaultValue: number,
    onChange: (value: number) => void
): FractalControlConfig {
    return {
        id,
        label,
        min: -2,
        max: 2,
        step: 0.01,
        defaultValue,
        type: 'range',
        onChange
    };
}

/**
 * Interface for slider control options
 */
export interface SliderControlOptions {
    id: string;
    label: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    callback: (value: number) => void;
}

/**
 * Creates a custom slider control with specified parameters
 * @param options The slider control options
 * @returns Control configuration for custom slider
 */
export function createSliderControl(options: SliderControlOptions): FractalControlConfig {
    return {
        id: options.id,
        label: options.label,
        min: options.min,
        max: options.max,
        step: options.step,
        defaultValue: options.defaultValue,
        type: 'range',
        onChange: options.callback
    };
} 