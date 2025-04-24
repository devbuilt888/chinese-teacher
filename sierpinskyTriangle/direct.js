// Initialize the fractals after DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing fractals...');
    
    // Initialize Sierpinski Triangle
    try {
        initSierpinskiTriangle();
    } catch (e) {
        console.error('Failed to initialize Sierpinski Triangle:', e);
    }
    
    // Initialize Sierpinski Carpet
    try {
        initSierpinskiCarpet();
    } catch (e) {
        console.error('Failed to initialize Sierpinski Carpet:', e);
    }
    
    // Initialize Pentagon Fractal
    try {
        initPentagonFractal();
    } catch (e) {
        console.error('Failed to initialize Pentagon Fractal:', e);
    }
    
    // Initialize Barnsley Fern
    try {
        initFernFractal();
    } catch (e) {
        console.error('Failed to initialize Barnsley Fern:', e);
    }
    
    // Initialize Mandelbrot Set
    try {
        initMandelbrotSet();
    } catch (e) {
        console.error('Failed to initialize Mandelbrot Set:', e);
    }
    
    // Initialize Julia Set
    try {
        initJuliaSet();
    } catch (e) {
        console.error('Failed to initialize Julia Set:', e);
    }
});

// Sierpinski Triangle
function initSierpinskiTriangle() {
    const triangleFractal = new sierpinskyTriangle.fractals.chaosGame.TriangleFractal('triangle-canvas');
    triangleFractal.generate();
    
    // Setup iterations slider
    const iterationsSlider = document.getElementById('triangle-iterations');
    const iterationsValue = document.getElementById('triangle-iterations-value');
    
    if (iterationsSlider && iterationsValue) {
        iterationsSlider.addEventListener('input', function() {
            iterationsValue.textContent = this.value;
            triangleFractal.setIterations(parseInt(this.value));
        });
    }
}

// Sierpinski Carpet
function initSierpinskiCarpet() {
    const carpetFractal = new sierpinskyTriangle.fractals.chaosGame.SierpinskiCarpet('sierpinski-carpet-canvas');
    carpetFractal.generate();
    
    // Setup iterations slider
    const iterationsSlider = document.getElementById('carpet-iterations');
    const iterationsValue = document.getElementById('carpet-iterations-value');
    
    if (iterationsSlider && iterationsValue) {
        iterationsSlider.addEventListener('input', function() {
            iterationsValue.textContent = this.value;
            carpetFractal.setIterations(parseInt(this.value));
        });
    }
}

// Pentagon Fractal
function initPentagonFractal() {
    const pentagonFractal = new sierpinskyTriangle.fractals.chaosGame.PentagonFractal('pentagon-canvas');
    pentagonFractal.generate();
    
    // Setup iterations slider
    const iterationsSlider = document.getElementById('pentagon-iterations');
    const iterationsValue = document.getElementById('pentagon-iterations-value');
    
    if (iterationsSlider && iterationsValue) {
        iterationsSlider.addEventListener('input', function() {
            iterationsValue.textContent = this.value;
            pentagonFractal.setIterations(parseInt(this.value));
        });
    }
    
    // Setup ratio slider
    const ratioSlider = document.getElementById('pentagon-ratio');
    const ratioValue = document.getElementById('pentagon-ratio-value');
    
    if (ratioSlider && ratioValue) {
        ratioSlider.addEventListener('input', function() {
            ratioValue.textContent = this.value;
            pentagonFractal.setContractionRatio(parseFloat(this.value));
        });
    }
}

// Barnsley Fern
function initFernFractal() {
    const fernFractal = new sierpinskyTriangle.fractals.chaosGame.FernFractal('fern-canvas');
    fernFractal.generate();
    
    // Setup iterations slider
    const iterationsSlider = document.getElementById('fern-iterations');
    const iterationsValue = document.getElementById('fern-iterations-value');
    
    if (iterationsSlider && iterationsValue) {
        iterationsSlider.addEventListener('input', function() {
            iterationsValue.textContent = this.value;
            fernFractal.setIterations(parseInt(this.value));
        });
    }
}

// Mandelbrot Set
function initMandelbrotSet() {
    const mandelbrotFractal = new sierpinskyTriangle.fractals.mathematical.MandelbrotFractal('mandelbrot-canvas');
    mandelbrotFractal.generate();
    
    // Setup iterations slider
    const iterationsSlider = document.getElementById('mandelbrot-iterations');
    const iterationsValue = document.getElementById('mandelbrot-iterations-value');
    
    if (iterationsSlider && iterationsValue) {
        iterationsSlider.addEventListener('input', function() {
            iterationsValue.textContent = this.value;
            mandelbrotFractal.setMaxIterations(parseInt(this.value));
        });
    }
    
    // Setup zoom slider
    const zoomSlider = document.getElementById('mandelbrot-zoom');
    const zoomValue = document.getElementById('mandelbrot-zoom-value');
    
    if (zoomSlider && zoomValue) {
        zoomSlider.addEventListener('input', function() {
            zoomValue.textContent = this.value;
            mandelbrotFractal.setZoom(parseFloat(this.value));
        });
    }
}

// Julia Set
function initJuliaSet() {
    const juliaFractal = new sierpinskyTriangle.fractals.mathematical.JuliaFractal('julia-canvas');
    juliaFractal.generate();
    
    // Setup iterations slider
    const iterationsSlider = document.getElementById('julia-iterations');
    const iterationsValue = document.getElementById('julia-iterations-value');
    
    if (iterationsSlider && iterationsValue) {
        iterationsSlider.addEventListener('input', function() {
            iterationsValue.textContent = this.value;
            juliaFractal.setMaxIterations(parseInt(this.value));
        });
    }
    
    // Setup real parameter slider
    const realSlider = document.getElementById('julia-real');
    const realValue = document.getElementById('julia-real-value');
    
    if (realSlider && realValue) {
        realSlider.addEventListener('input', function() {
            realValue.textContent = this.value;
            juliaFractal.setParameter({real: parseFloat(this.value)});
        });
    }
    
    // Setup imaginary parameter slider
    const imagSlider = document.getElementById('julia-imag');
    const imagValue = document.getElementById('julia-imag-value');
    
    if (imagSlider && imagValue) {
        imagSlider.addEventListener('input', function() {
            imagValue.textContent = this.value;
            juliaFractal.setParameter({imag: parseFloat(this.value)});
        });
    }
} 