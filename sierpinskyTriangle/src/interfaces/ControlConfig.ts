/**
 * Control type enumeration
 */
export enum ControlType {
  Range = 'range',
  Number = 'number',
  Color = 'color',
  Select = 'select'
}

/**
 * Option for select controls
 */
export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Interface defining configuration for a single control in fractal UI
 */
export interface ControlConfig {
  /** Unique identifier for the control */
  id: string;
  
  /** Display label for the control */
  label: string;
  
  /** Type of control to render */
  type: ControlType;
  
  /** Default value for the control */
  defaultValue: any;
  
  /** Minimum value (for range and number types) */
  min?: number;
  
  /** Maximum value (for range and number types) */
  max?: number;
  
  /** Step increment (for range and number types) */
  step?: number;
  
  /** Options for select controls */
  options?: SelectOption[];
} 