import { ControlConfig, ControlType } from '../interfaces/ControlConfig';

/**
 * Creates a control element based on provided configuration
 * @param config Control configuration
 * @param currentValue Current value of the control
 * @param onChange Callback function when control value changes
 * @returns HTMLElement Control element
 */
export function createControl(
  config: ControlConfig,
  currentValue: any,
  onChange: (id: string, value: any) => void
): HTMLElement {
  const container = document.createElement('div');
  container.className = 'control-item';

  const label = document.createElement('label');
  label.textContent = config.label;
  label.htmlFor = config.id;
  container.appendChild(label);

  let input: HTMLInputElement | HTMLSelectElement;

  switch (config.type) {
    case ControlType.Select:
      input = document.createElement('select');
      if (config.options) {
        config.options.forEach(option => {
          const optionEl = document.createElement('option');
          optionEl.value = option.value;
          optionEl.textContent = option.label;
          (input as HTMLSelectElement).appendChild(optionEl);
        });
      }
      input.value = currentValue;
      break;
    case ControlType.Color:
      input = document.createElement('input');
      input.type = 'color';
      input.value = currentValue;
      break;
    case ControlType.Range:
      input = document.createElement('input');
      input.type = 'range';
      if (config.min !== undefined) input.min = config.min.toString();
      if (config.max !== undefined) input.max = config.max.toString();
      if (config.step !== undefined) input.step = config.step.toString();
      input.value = currentValue;
      
      // Add value display for ranges
      const valueDisplay = document.createElement('span');
      valueDisplay.className = 'range-value';
      valueDisplay.textContent = currentValue;
      input.oninput = (e) => {
        const value = (e.target as HTMLInputElement).value;
        valueDisplay.textContent = value;
        onChange(config.id, config.type === ControlType.Number ? parseFloat(value) : value);
      };
      container.appendChild(valueDisplay);
      break;
    case ControlType.Number:
    default:
      input = document.createElement('input');
      input.type = 'number';
      if (config.min !== undefined) input.min = config.min.toString();
      if (config.max !== undefined) input.max = config.max.toString();
      if (config.step !== undefined) input.step = config.step.toString();
      input.value = currentValue;
      break;
  }

  input.id = config.id;
  input.className = `control-${config.type}`;
  
  // For controls other than range (which has its own handler)
  if (config.type !== ControlType.Range) {
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement | HTMLSelectElement;
      let value: any = target.value;
      
      // Parse numeric values
      if (config.type === ControlType.Number) {
        value = parseFloat(value);
      }
      
      onChange(config.id, value);
    };
  }

  container.appendChild(input);
  return container;
}

/**
 * Creates a button element
 * @param text Button text
 * @param onClick Click handler function
 * @returns HTMLButtonElement Button element
 */
export function createButton(
  text: string,
  onClick: () => void
): HTMLButtonElement {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = 'generate-button';
  button.onclick = onClick;
  return button;
} 