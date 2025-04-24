# Fractal Explorer

An interactive web application for exploring various mathematical and chaos game fractals.

## Features

- Interactive visualizations of various fractals
- Multiple generation methods (chaos game, deterministic, etc.)
- Responsive design that works on all devices
- Modern UI with controls for fractal parameters
- Export fractal images

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `node simple-server.js`
4. Open `http://localhost:3010` in your browser

## Creating New Fractal Pages

When creating a new fractal page, use the template provided in `src/pages/fractal-page-template.html`. This ensures consistent styling and responsive behavior across all fractal pages.

### Using the Template

1. Copy the template file
2. Replace `{{FRACTAL_NAME}}` with your fractal's name
3. Replace `{{CANVAS_ID}}` with the appropriate canvas ID
4. Add your fractal-specific controls
5. Update the information section with details about your fractal

### CSS Structure

The project uses two main CSS files for styling the fractal pages:

- `styles/main.css` - Contains global variables and common styles
- `styles/fractal-pages.css` - Contains styles specific to the individual fractal pages

### Responsive Design Guidelines

The new design is fully responsive and includes breakpoints for different screen sizes:

- 1200px and below: Adjusted padding
- 992px and below: Adjusted control grid
- 768px and below: Single column controls, stacked buttons
- 576px and below: Smaller canvas container, adjusted UI elements

## Run the Update Script

If you need to update existing fractal pages to use the new responsive design:

```bash
node update-fractal-pages.js
```

This script will:
- Update CSS links to use the new fractal-pages.css
- Remove inline styles
- Update the page structure to match the new template
- Add missing UI elements like return button and debug panel

## Available Fractals

- Sierpinski Triangle
- Adjacent Restriction Fractal
- Modified Square Fractal
- Non-Repeat Square Fractal
- Burning Ship Fractal
- Julia Set
- Newton Fractal
- Lyapunov Fractal
- And more...

## Technologies Used

- HTML5 Canvas for rendering
- TypeScript for type-safe JavaScript
- Webpack for bundling
- CSS Variables for theming