/**
 * Fractal Editor Generator Service
 * Provides utilities for generating fractal editor pages
 */

/**
 * Creates a new fractal editor HTML file
 * @param fractalId The ID of the fractal
 * @param title The title of the fractal
 * @param description The description of the fractal
 * @param formula The mathematical formula for the fractal
 * @param methods The generation methods available for this fractal
 */
export function generateFractalEditorPage(
  fractalId: string,
  title: string,
  description: string,
  formula: string,
  methods: { id: string, name: string }[]
): string {
  const methodOptions = methods.map(method => 
    `<option value="${method.id}">${method.name}</option>`
  ).join('\n');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} Editor</title>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../src/styles/controls.css">
    <style>
        /* Page-specific styles */
        .main-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .editor-card {
            background-color: var(--card-bg);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--border-light);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .canvas-container {
            padding: 1rem;
            position: relative;
            display: flex;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.3);
            min-height: 400px;
        }
        
        canvas {
            border: 1px solid var(--border-light);
            background-color: black;
            max-width: 100%;
        }
        
        .controls {
            padding: 1.25rem 1.5rem;
            border-top: 1px solid var(--border-light);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .button-row {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .return-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 100;
            width: 50px;
            height: 50px;
            background: var(--gradient-2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s var(--ease-spring);
            box-shadow: var(--shadow-md);
            border: none;
            color: white;
        }
        
        .return-button:hover {
            transform: scale(1.1);
            box-shadow: var(--shadow-lg), var(--glow-primary);
        }
        
        .info-section {
            margin-top: 2rem;
            padding: 1.5rem;
            background-color: var(--card-bg);
            border-radius: 16px;
            border: 1px solid var(--border-light);
        }
        
        .formula {
            background-color: var(--surface-1);
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            font-family: monospace;
            white-space: pre-wrap;
        }
    </style>
</head>
<body>
    <header>
        <h1>${title} Editor</h1>
    </header>
    
    <div class="container">
        <div class="main-content">
            <div class="editor-card">
                <div class="card-header">
                    <h2>${title} Editor</h2>
                </div>
                <div class="canvas-container">
                    <canvas id="${fractalId}-canvas" width="800" height="600"></canvas>
                </div>
                <div class="controls">
                    <div class="control-group">
                        <label for="method-select">Generation Method</label>
                        <select id="method-select">
                            ${methodOptions}
                        </select>
                    </div>
                    
                    <div class="control-group">
                        <label for="iterations-input">Iterations</label>
                        <input type="number" id="iterations-input" min="1" max="100000" step="1000" value="10000">
                        <input type="range" id="iterations-range" min="1000" max="50000" step="1000" value="10000">
                    </div>
                    
                    <div class="control-group">
                        <label for="color-select">Color Scheme</label>
                        <select id="color-select">
                            <option value="neon">Neon</option>
                            <option value="rainbow">Rainbow</option>
                            <option value="fire">Fire</option>
                            <option value="cool">Cool</option>
                            <option value="monochrome">Monochrome</option>
                        </select>
                    </div>
                </div>
                
                <div class="controls">
                    <div class="button-row">
                        <button id="generate-button"><span>Generate</span></button>
                        <button id="animate-button"><span>Animate</span></button>
                        <button id="reset-button"><span>Reset</span></button>
                        <button id="export-button"><span>Export Image</span></button>
                    </div>
                </div>
            </div>
            
            <div class="info-section">
                <h3>About the ${title}</h3>
                <div class="fractal-description">
                    ${description}
                </div>
                
                <h3>Mathematical Formula</h3>
                <div class="formula">
                    ${formula}
                </div>
            </div>
        </div>
    </div>
    
    <button class="return-button" title="Return to Dashboard" onclick="window.location.href='/'">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
        </svg>
    </button>
    
    <script>
        // Your JavaScript code for this specific fractal will be added here
    </script>
</body>
</html>`;
} 