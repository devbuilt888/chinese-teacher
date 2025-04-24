/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Fractal Dashboard - Main application entry point
 */
exports.__esModule = true;
__webpack_require__(/*! ./styles/main.css */ "./styles/main.css");
__webpack_require__(/*! ./styles/components.css */ "./styles/components.css");
var Dashboard_1 = __webpack_require__(/*! ./src/components/Dashboard */ "./src/components/Dashboard.ts");
var RestrictedSquareFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/RestrictedSquareFractal */ "./src/fractals/chaos-game/RestrictedSquareFractal.ts");
var TriangleFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/TriangleFractal */ "./src/fractals/chaos-game/TriangleFractal.ts");
var MandelbrotFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/MandelbrotFractal */ "./src/fractals/mathematical/MandelbrotFractal.ts");
var AdjacentRestrictionFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/AdjacentRestrictionFractal */ "./src/fractals/chaos-game/AdjacentRestrictionFractal.ts");
var ModifiedSquareFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/ModifiedSquareFractal */ "./src/fractals/chaos-game/ModifiedSquareFractal.ts");
var NonRepeatSquareFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/NonRepeatSquareFractal */ "./src/fractals/chaos-game/NonRepeatSquareFractal.ts");
var SierpinskiCarpet_1 = __webpack_require__(/*! ./src/fractals/chaos-game/SierpinskiCarpet */ "./src/fractals/chaos-game/SierpinskiCarpet.ts");
var PentagonFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/PentagonFractal */ "./src/fractals/chaos-game/PentagonFractal.ts");
var FernFractal_1 = __webpack_require__(/*! ./src/fractals/chaos-game/FernFractal */ "./src/fractals/chaos-game/FernFractal.ts");
var KochSnowflakeFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/KochSnowflakeFractal */ "./src/fractals/mathematical/KochSnowflakeFractal.ts");
console.log('Application starting...');
// Initialize particles.js
function initParticles() {
    if (typeof window.particlesJS !== 'undefined') {
        console.log("Initializing particles.js");
        window.particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" },
                    "polygon": { "nb_sides": 5 }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 },
                    "push": { "particles_nb": 4 },
                    "remove": { "particles_nb": 2 }
                }
            },
            "retina_detect": true
        });
    }
    else {
        console.log("particlesJS is undefined");
    }
}
// Initialize the Restricted Square fractal on the editor page
function initRestrictedSquareFractal(iterations) {
    if (iterations === void 0) { iterations = 10000; }
    var canvasId = 'restricted-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Restricted Square fractal with " + iterations + " iterations");
    var fractal = new RestrictedSquareFractal_1.RestrictedSquareFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Sierpinski Triangle fractal on the editor page
function initSierpinskiTriangle(iterations, animate, speed) {
    if (iterations === void 0) { iterations = 10000; }
    if (animate === void 0) { animate = false; }
    if (speed === void 0) { speed = 100; }
    var canvasId = 'triangle-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Sierpinski Triangle fractal with " + iterations + " iterations" + (animate ? ' (animated)' : ''));
    var fractal = new TriangleFractal_1.TriangleFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate(animate, speed);
}
// Initialize the Mandelbrot Set fractal on the editor page
function initMandelbrotSet(iterations) {
    if (iterations === void 0) { iterations = 100; }
    var canvasId = 'mandelbrot-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Mandelbrot Set fractal with " + iterations + " iterations");
    var fractal = new MandelbrotFractal_1.MandelbrotFractal(canvasId);
    fractal.setMaxIterations(iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Adjacent Restriction fractal on the editor page
function initAdjacentRestrictionFractal(iterations, animate, speed) {
    if (iterations === void 0) { iterations = 20000; }
    if (animate === void 0) { animate = false; }
    if (speed === void 0) { speed = 100; }
    var canvasId = 'adjacent-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Adjacent Restriction fractal with " + iterations + " iterations" + (animate ? ' (animated)' : ''));
    var fractal = new AdjacentRestrictionFractal_1.AdjacentRestrictionFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate(animate, speed);
}
// Initialize the Modified Square fractal on the editor page
function initModifiedSquareFractal(iterations) {
    if (iterations === void 0) { iterations = 50000; }
    var canvasId = 'modified-square-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Modified Square fractal with " + iterations + " iterations");
    var fractal = new ModifiedSquareFractal_1.ModifiedSquareFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Non-Repeat Square fractal on the editor page
function initNonRepeatSquareFractal(iterations) {
    if (iterations === void 0) { iterations = 20000; }
    var canvasId = 'nonrepeat-square-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Non-Repeat Square fractal with " + iterations + " iterations");
    var fractal = new NonRepeatSquareFractal_1.NonRepeatSquareFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Sierpinski Carpet fractal on the editor page
function initSierpinskiCarpet(iterations) {
    if (iterations === void 0) { iterations = 50000; }
    var canvasId = 'sierpinski-carpet-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Sierpinski Carpet fractal with " + iterations + " iterations");
    var fractal = new SierpinskiCarpet_1.SierpinskiCarpet(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Pentagon fractal on the editor page
function initPentagonFractal(iterations) {
    if (iterations === void 0) { iterations = 40000; }
    var canvasId = 'pentagon-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Pentagon fractal with " + iterations + " iterations");
    var fractal = new PentagonFractal_1.PentagonFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Barnsley Fern fractal on the editor page
function initFernFractal(iterations) {
    if (iterations === void 0) { iterations = 50000; }
    var canvasId = 'fern-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Barnsley Fern fractal with " + iterations + " iterations");
    var fractal = new FernFractal_1.FernFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Koch Snowflake fractal on the editor page
function initKochSnowflake(iterations) {
    if (iterations === void 0) { iterations = 4; }
    var canvasId = 'koch-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Koch Snowflake fractal with " + iterations + " iterations");
    var fractal = new KochSnowflakeFractal_1.KochSnowflakeFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize the Phoenix fractal on the editor page
function initPhoenixFractal(iterations) {
    if (iterations === void 0) { iterations = 100; }
    var canvasId = 'phoenix-canvas';
    var canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element with ID '" + canvasId + "' not found");
        return;
    }
    console.log("Initializing Phoenix fractal with " + iterations + " iterations");
    var fractal = new PhoenixFractal_1.PhoenixFractal(canvasId, iterations);
    fractal.initialize();
    fractal.generate();
}
// Initialize a fractal page based on the fractal type
function initFractalPage(fractalType) {
    console.log("Initializing fractal page for: " + fractalType);
    switch (fractalType) {
        case 'restricted-square':
            initRestrictedSquareFractal();
            break;
        case 'sierpinski-triangle':
            initSierpinskiTriangle();
            break;
        case 'mandelbrot-set':
            initMandelbrotSet();
            break;
        case 'adjacent-restriction':
            initAdjacentRestrictionFractal();
            break;
        case 'modified-square':
            initModifiedSquareFractal();
            break;
        case 'nonrepeat-square':
            initNonRepeatSquareFractal();
            break;
        case 'sierpinski-carpet':
            initSierpinskiCarpet();
            break;
        case 'pentagon-fractal':
            initPentagonFractal();
            break;
        case 'barnsley-fern':
            initFernFractal();
            break;
        case 'koch-snowflake':
            initKochSnowflake();
            break;
        case 'phoenix-fractal':
            initPhoenixFractal();
            break;
        default:
            console.error("Unknown fractal type: " + fractalType);
    }
}
// Expose these functions to the global window object for use in HTML pages
window.initRestrictedSquareFractal = initRestrictedSquareFractal;
window.initSierpinskiTriangle = initSierpinskiTriangle;
window.initMandelbrotSet = initMandelbrotSet;
window.initAdjacentRestrictionFractal = initAdjacentRestrictionFractal;
window.initModifiedSquareFractal = initModifiedSquareFractal;
window.initNonRepeatSquareFractal = initNonRepeatSquareFractal;
window.initSierpinskiCarpet = initSierpinskiCarpet;
window.initPentagonFractal = initPentagonFractal;
window.initFernFractal = initFernFractal;
window.initKochSnowflake = initKochSnowflake;
window.initPhoenixFractal = initPhoenixFractal;
window.initFractalPage = initFractalPage;
// Expose fractal classes to the window object for direct use in HTML pages
var JuliaFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/JuliaFractal */ "./src/fractals/mathematical/JuliaFractal.ts");
var BurningShipFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/BurningShipFractal */ "./src/fractals/mathematical/BurningShipFractal.ts");
var NewtonFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/NewtonFractal */ "./src/fractals/mathematical/NewtonFractal.ts");
var LyapunovFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/LyapunovFractal */ "./src/fractals/mathematical/LyapunovFractal.ts");
var PhoenixFractal_1 = __webpack_require__(/*! ./src/fractals/mathematical/PhoenixFractal */ "./src/fractals/mathematical/PhoenixFractal.ts");
window.MandelbrotFractal = MandelbrotFractal_1.MandelbrotFractal;
window.JuliaFractal = JuliaFractal_1.JuliaFractal;
window.BurningShipFractal = BurningShipFractal_1.BurningShipFractal;
window.NewtonFractal = NewtonFractal_1.NewtonFractal;
window.LyapunovFractal = LyapunovFractal_1.LyapunovFractal;
window.KochSnowflakeFractal = KochSnowflakeFractal_1.KochSnowflakeFractal;
window.PhoenixFractal = PhoenixFractal_1.PhoenixFractal;
window.AdjacentRestrictionFractal = AdjacentRestrictionFractal_1.AdjacentRestrictionFractal;
// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded, initializing dashboard...');
    // Try initializing particles
    try {
        initParticles();
    }
    catch (e) {
        console.error('Error initializing particles:', e);
    }
    // Initialize the dashboard with all fractal modules
    Dashboard_1.initDashboard();
    console.log('Dashboard initialization triggered');
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/components.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/components.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\r\n * Component-specific styles for the Fractal Explorer\r\n */\r\n\r\n/* Input range styling */\r\ninput[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 100%;\r\n  height: 5px;\r\n  background: rgba(100, 116, 139, 0.2);\r\n  border-radius: 3px;\r\n  outline: none;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--primary);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\ninput[type=\"range\"]::-moz-range-thumb {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--primary);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  border: none;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\ninput[type=\"range\"]:hover::-webkit-slider-thumb {\r\n  transform: scale(1.2);\r\n  box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);\r\n}\r\n\r\ninput[type=\"range\"]:hover::-moz-range-thumb {\r\n  transform: scale(1.2);\r\n  box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);\r\n}\r\n\r\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\r\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);\r\n}\r\n\r\ninput[type=\"range\"]:focus::-moz-range-thumb {\r\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);\r\n}\r\n\r\n/* Label styles */\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  color: var(--text-secondary);\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Button styling */\r\nbutton {\r\n  background: var(--primary);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 0.75rem 1.25rem;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  font-size: 0.95rem;\r\n  cursor: pointer;\r\n  transition: all 0.3s var(--ease-out);\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  z-index: 1;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--primary-hover);\r\n  transform: translateY(-2px);\r\n  box-shadow: var(--shadow-sm);\r\n}\r\n\r\nbutton:active {\r\n  transform: translateY(0);\r\n  background: var(--primary-active);\r\n}\r\n\r\nbutton::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\r\n  z-index: -1;\r\n  transition: 0.5s;\r\n}\r\n\r\nbutton:hover::before {\r\n  left: 100%;\r\n}\r\n\r\n/* Range value display */\r\n.range-value {\r\n  display: inline-block;\r\n  font-family: monospace;\r\n  font-size: 0.9rem;\r\n  color: var(--text-primary);\r\n  background: var(--surface-1);\r\n  padding: 0.25rem 0.5rem;\r\n  border-radius: 4px;\r\n  min-width: 60px;\r\n  text-align: center;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n/* Input group styling */\r\n.input-group {\r\n  margin-bottom: 1.25rem;\r\n}\r\n\r\n.input-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n/* Fractal tooltip/modal styles */\r\n.fractal-tooltip {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  max-width: 700px;\r\n  background: var(--panel-bg);\r\n  backdrop-filter: blur(20px);\r\n  -webkit-backdrop-filter: blur(20px);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--border-medium);\r\n  box-shadow: var(--shadow-lg), var(--glow-primary);\r\n  z-index: 1000;\r\n  animation: modalFadeIn 0.3s var(--ease-spring);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate(-50%, -48%) scale(0.95);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n}\r\n\r\n.fractal-tooltip-header {\r\n  padding: 1.25rem 1.5rem;\r\n  background: rgba(0, 0, 0, 0.25);\r\n  border-bottom: 1px solid var(--border-medium);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.fractal-tooltip-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  color: var(--text-primary);\r\n  background: var(--gradient-1);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.fractal-tooltip-close {\r\n  background: none;\r\n  border: none;\r\n  color: var(--text-secondary);\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  transition: all 0.2s var(--ease-out);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.fractal-tooltip-close:hover {\r\n  background: rgba(236, 72, 153, 0.2);\r\n  color: var(--text-primary);\r\n  transform: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.fractal-tooltip-content {\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n  max-height: 70vh;\r\n}\r\n\r\n.fractal-tooltip-description {\r\n  color: var(--text-secondary);\r\n  font-size: 1rem;\r\n  line-height: 1.6;\r\n  margin-bottom: 2rem;\r\n  background: rgba(15, 23, 42, 0.4);\r\n  padding: 1.5rem;\r\n  border-radius: 12px;\r\n  border: 1px solid var(--border-light);\r\n}\r\n\r\n.fractal-tooltip-description p {\r\n  margin: 0 0 1rem 0;\r\n}\r\n\r\n.fractal-tooltip-description p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.fractal-formula-container {\r\n  background: rgba(15, 23, 42, 0.4);\r\n  border-radius: 12px;\r\n  padding: 1.5rem;\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid var(--border-light);\r\n}\r\n\r\n.formula-title {\r\n  font-size: 0.9rem;\r\n  color: var(--text-secondary);\r\n  margin-bottom: 0.75rem;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.fractal-formula {\r\n  font-family: monospace;\r\n  color: var(--primary);\r\n  font-size: 0.95rem;\r\n  line-height: 1.6;\r\n  white-space: pre-wrap;\r\n  overflow-x: auto;\r\n  background: rgba(15, 23, 42, 0.6);\r\n  padding: 1rem;\r\n  border-radius: 8px;\r\n  border: 1px solid var(--border-light);\r\n}\r\n\r\n.formula-copy-button {\r\n  position: absolute;\r\n  top: 0.75rem;\r\n  right: 0.75rem;\r\n  background: rgba(79, 70, 229, 0.2);\r\n  border: 1px solid rgba(79, 70, 229, 0.3);\r\n  color: var(--text-primary);\r\n  font-size: 0.8rem;\r\n  padding: 0.35rem 0.7rem;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  transition: all 0.2s var(--ease-out);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n.formula-copy-button:hover {\r\n  background: rgba(79, 70, 229, 0.3);\r\n  transform: translateY(-2px);\r\n  opacity: 1;\r\n}\r\n\r\n.formula-copied {\r\n  position: absolute;\r\n  top: 0.75rem;\r\n  right: 0.75rem;\r\n  background: rgba(16, 185, 129, 0.2);\r\n  color: var(--success);\r\n  border: 1px solid rgba(16, 185, 129, 0.3);\r\n  font-size: 0.8rem;\r\n  padding: 0.35rem 0.7rem;\r\n  border-radius: 6px;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.formula-copied.visible {\r\n  animation: fadeInOut 1.5s var(--ease-out);\r\n}\r\n\r\n@keyframes fadeInOut {\r\n  0% { opacity: 0; }\r\n  20% { opacity: 1; }\r\n  80% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n.fractal-modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  z-index: 999;\r\n  animation: backdropFadeIn 0.3s var(--ease-out);\r\n}\r\n\r\n@keyframes backdropFadeIn {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n/* Editor styles */\r\n.editor-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 2rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.editor-panel {\r\n  background: var(--card-bg);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--border-light);\r\n  overflow: hidden;\r\n}\r\n\r\n.editor-header {\r\n  padding: 1.25rem 1.5rem;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  border-bottom: 1px solid var(--border-light);\r\n}\r\n\r\n.editor-header h3 {\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  color: var(--text-primary);\r\n}\r\n\r\n.editor-controls {\r\n  padding: 1.5rem;\r\n}\r\n\r\n.editor-canvas-container {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.editor-canvas {\r\n  width: 100%;\r\n  height: 350px;\r\n  display: block;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* For tablet and below */\r\n@media (max-width: 1024px) {\r\n  .editor-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* For small screens */\r\n@media (max-width: 640px) {\r\n  .fractal-tooltip {\r\n    width: 95%;\r\n    max-height: 90vh;\r\n  }\r\n  \r\n  .fractal-tooltip-content {\r\n    padding: 1.5rem;\r\n  }\r\n} ", "",{"version":3,"sources":["webpack://./styles/components.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF,wBAAwB;AACxB;EACE,wBAAwB;EACxB,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,eAAe;EACf,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,2CAA2C;AAC7C;;AAEA;EACE,qBAAqB;EACrB,2CAA2C;AAC7C;;AAEA;EACE,qBAAqB;EACrB,2CAA2C;AAC7C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,iBAAiB;AACjB;EACE,cAAc;EACd,qBAAqB;EACrB,4BAA4B;EAC5B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,mBAAmB;AACnB;EACE,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;EACxB,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,oCAAoC;EACpC,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,gCAAgC;EAChC,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,wBAAwB;EACxB,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,WAAW;EACX,YAAY;EACZ,sFAAsF;EACtF,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA,wBAAwB;AACxB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,iBAAiB;EACjB,0BAA0B;EAC1B,4BAA4B;EAC5B,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA,iCAAiC;AACjC;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,gBAAgB;EAChB,2BAA2B;EAC3B,2BAA2B;EAC3B,mCAAmC;EACnC,mBAAmB;EACnB,sCAAsC;EACtC,iDAAiD;EACjD,aAAa;EACb,8CAA8C;EAC9C,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;IACV,4CAA4C;EAC9C;EACA;IACE,UAAU;IACV,yCAAyC;EAC3C;AACF;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,6CAA6C;EAC7C,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,0BAA0B;EAC1B,6BAA6B;EAC7B,6BAA6B;EAC7B,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,oCAAoC;EACpC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;EACf,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;EACjB,4BAA4B;EAC5B,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;EAChB,iCAAiC;EACjC,aAAa;EACb,kBAAkB;EAClB,qCAAqC;AACvC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,kCAAkC;EAClC,wCAAwC;EACxC,0BAA0B;EAC1B,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kCAAkC;EAClC,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,mCAAmC;EACnC,qBAAqB;EACrB,yCAAyC;EACzC,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,MAAM,UAAU,EAAE;EAClB,MAAM,UAAU,EAAE;EAClB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,kCAAkC;EAClC,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,OAAO,UAAU,EAAE;EACnB,KAAK,UAAU,EAAE;AACnB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,8BAA8B;EAC9B,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,oCAAoC;AACtC;;AAEA,yBAAyB;AACzB;EACE;IACE,0BAA0B;EAC5B;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["/**\r\n * Component-specific styles for the Fractal Explorer\r\n */\r\n\r\n/* Input range styling */\r\ninput[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 100%;\r\n  height: 5px;\r\n  background: rgba(100, 116, 139, 0.2);\r\n  border-radius: 3px;\r\n  outline: none;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--primary);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\ninput[type=\"range\"]::-moz-range-thumb {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: var(--primary);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  border: none;\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\ninput[type=\"range\"]:hover::-webkit-slider-thumb {\r\n  transform: scale(1.2);\r\n  box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);\r\n}\r\n\r\ninput[type=\"range\"]:hover::-moz-range-thumb {\r\n  transform: scale(1.2);\r\n  box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);\r\n}\r\n\r\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\r\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);\r\n}\r\n\r\ninput[type=\"range\"]:focus::-moz-range-thumb {\r\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);\r\n}\r\n\r\n/* Label styles */\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n  color: var(--text-secondary);\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Button styling */\r\nbutton {\r\n  background: var(--primary);\r\n  color: white;\r\n  border: none;\r\n  border-radius: 8px;\r\n  padding: 0.75rem 1.25rem;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  font-size: 0.95rem;\r\n  cursor: pointer;\r\n  transition: all 0.3s var(--ease-out);\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.5rem;\r\n  z-index: 1;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--primary-hover);\r\n  transform: translateY(-2px);\r\n  box-shadow: var(--shadow-sm);\r\n}\r\n\r\nbutton:active {\r\n  transform: translateY(0);\r\n  background: var(--primary-active);\r\n}\r\n\r\nbutton::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\r\n  z-index: -1;\r\n  transition: 0.5s;\r\n}\r\n\r\nbutton:hover::before {\r\n  left: 100%;\r\n}\r\n\r\n/* Range value display */\r\n.range-value {\r\n  display: inline-block;\r\n  font-family: monospace;\r\n  font-size: 0.9rem;\r\n  color: var(--text-primary);\r\n  background: var(--surface-1);\r\n  padding: 0.25rem 0.5rem;\r\n  border-radius: 4px;\r\n  min-width: 60px;\r\n  text-align: center;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n/* Input group styling */\r\n.input-group {\r\n  margin-bottom: 1.25rem;\r\n}\r\n\r\n.input-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n/* Fractal tooltip/modal styles */\r\n.fractal-tooltip {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 90%;\r\n  max-width: 700px;\r\n  background: var(--panel-bg);\r\n  backdrop-filter: blur(20px);\r\n  -webkit-backdrop-filter: blur(20px);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--border-medium);\r\n  box-shadow: var(--shadow-lg), var(--glow-primary);\r\n  z-index: 1000;\r\n  animation: modalFadeIn 0.3s var(--ease-spring);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@keyframes modalFadeIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: translate(-50%, -48%) scale(0.95);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n}\r\n\r\n.fractal-tooltip-header {\r\n  padding: 1.25rem 1.5rem;\r\n  background: rgba(0, 0, 0, 0.25);\r\n  border-bottom: 1px solid var(--border-medium);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.fractal-tooltip-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  color: var(--text-primary);\r\n  background: var(--gradient-1);\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.fractal-tooltip-close {\r\n  background: none;\r\n  border: none;\r\n  color: var(--text-secondary);\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  transition: all 0.2s var(--ease-out);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.fractal-tooltip-close:hover {\r\n  background: rgba(236, 72, 153, 0.2);\r\n  color: var(--text-primary);\r\n  transform: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.fractal-tooltip-content {\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n  max-height: 70vh;\r\n}\r\n\r\n.fractal-tooltip-description {\r\n  color: var(--text-secondary);\r\n  font-size: 1rem;\r\n  line-height: 1.6;\r\n  margin-bottom: 2rem;\r\n  background: rgba(15, 23, 42, 0.4);\r\n  padding: 1.5rem;\r\n  border-radius: 12px;\r\n  border: 1px solid var(--border-light);\r\n}\r\n\r\n.fractal-tooltip-description p {\r\n  margin: 0 0 1rem 0;\r\n}\r\n\r\n.fractal-tooltip-description p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.fractal-formula-container {\r\n  background: rgba(15, 23, 42, 0.4);\r\n  border-radius: 12px;\r\n  padding: 1.5rem;\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid var(--border-light);\r\n}\r\n\r\n.formula-title {\r\n  font-size: 0.9rem;\r\n  color: var(--text-secondary);\r\n  margin-bottom: 0.75rem;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.fractal-formula {\r\n  font-family: monospace;\r\n  color: var(--primary);\r\n  font-size: 0.95rem;\r\n  line-height: 1.6;\r\n  white-space: pre-wrap;\r\n  overflow-x: auto;\r\n  background: rgba(15, 23, 42, 0.6);\r\n  padding: 1rem;\r\n  border-radius: 8px;\r\n  border: 1px solid var(--border-light);\r\n}\r\n\r\n.formula-copy-button {\r\n  position: absolute;\r\n  top: 0.75rem;\r\n  right: 0.75rem;\r\n  background: rgba(79, 70, 229, 0.2);\r\n  border: 1px solid rgba(79, 70, 229, 0.3);\r\n  color: var(--text-primary);\r\n  font-size: 0.8rem;\r\n  padding: 0.35rem 0.7rem;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  transition: all 0.2s var(--ease-out);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.25rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n.formula-copy-button:hover {\r\n  background: rgba(79, 70, 229, 0.3);\r\n  transform: translateY(-2px);\r\n  opacity: 1;\r\n}\r\n\r\n.formula-copied {\r\n  position: absolute;\r\n  top: 0.75rem;\r\n  right: 0.75rem;\r\n  background: rgba(16, 185, 129, 0.2);\r\n  color: var(--success);\r\n  border: 1px solid rgba(16, 185, 129, 0.3);\r\n  font-size: 0.8rem;\r\n  padding: 0.35rem 0.7rem;\r\n  border-radius: 6px;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.formula-copied.visible {\r\n  animation: fadeInOut 1.5s var(--ease-out);\r\n}\r\n\r\n@keyframes fadeInOut {\r\n  0% { opacity: 0; }\r\n  20% { opacity: 1; }\r\n  80% { opacity: 1; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n.fractal-modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(4px);\r\n  -webkit-backdrop-filter: blur(4px);\r\n  z-index: 999;\r\n  animation: backdropFadeIn 0.3s var(--ease-out);\r\n}\r\n\r\n@keyframes backdropFadeIn {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n/* Editor styles */\r\n.editor-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 2rem;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.editor-panel {\r\n  background: var(--card-bg);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--border-light);\r\n  overflow: hidden;\r\n}\r\n\r\n.editor-header {\r\n  padding: 1.25rem 1.5rem;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  border-bottom: 1px solid var(--border-light);\r\n}\r\n\r\n.editor-header h3 {\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  color: var(--text-primary);\r\n}\r\n\r\n.editor-controls {\r\n  padding: 1.5rem;\r\n}\r\n\r\n.editor-canvas-container {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.editor-canvas {\r\n  width: 100%;\r\n  height: 350px;\r\n  display: block;\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* For tablet and below */\r\n@media (max-width: 1024px) {\r\n  .editor-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* For small screens */\r\n@media (max-width: 640px) {\r\n  .fractal-tooltip {\r\n    width: 95%;\r\n    max-height: 90vh;\r\n  }\r\n  \r\n  .fractal-tooltip-content {\r\n    padding: 1.5rem;\r\n  }\r\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/main.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/main.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * Main styles for the Fractal Explorer Dashboard\n */\n\n:root {\n    --primary: #4F46E5;\n    --primary-hover: #4338CA;\n    --primary-active: #3730A3;\n    --secondary: #8B5CF6;\n    --accent: #EC4899;\n    --background: #0F172A;\n    --card-bg: #1E293B;\n    --card-hover: #182341;\n    --panel-bg: rgba(23, 37, 64, 0.7);\n    --text-primary: #F8FAFC;\n    --text-secondary: #CBD5E1;\n    --text-tertiary: #64748B;\n    --border-light: rgba(100, 116, 139, 0.2);\n    --border-medium: rgba(100, 116, 139, 0.3);\n    --surface-1: #162036;\n    --surface-2: #1E293B;\n    --success: #10B981;\n    --gradient-1: linear-gradient(110deg, #4F46E5, #8B5CF6, #48ecc9, #48ecc9, #48ecc9, #48ecc9);\n    --gradient-2: linear-gradient(135deg, #0EA5E9, #8B5CF6);\n    --gradient-subtle: linear-gradient(170deg, rgba(79, 70, 229, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);\n    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);\n    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);\n    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.3);\n    --glow-primary: 0 0 20px rgba(79, 70, 229, 0.5);\n    \n    --ease-spring: cubic-bezier(0.2, 0.8, 0.2, 1);\n    --ease-out: cubic-bezier(0.2, 0, 0, 1);\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    background-color: var(--background);\n    background-image: \n        radial-gradient(circle at 20% 35%, rgba(79, 70, 229, 0.15) 0%, transparent 40%),\n        radial-gradient(circle at 75% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 30%);\n    background-attachment: fixed;\n    color: var(--text-primary);\n    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    margin: 0;\n    padding: 0;\n    line-height: 1.5;\n    min-height: 100vh;\n    font-weight: 400;\n    letter-spacing: -0.015em;\n    overflow-x: hidden;\n}\n\n/* Glassmorphism effects */\n.glassmorphism {\n    background: var(--panel-bg);\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    border: 1px solid var(--border-light);\n}\n\nheader {\n    position: relative;\n    padding: 3rem 0 5rem;\n    margin-bottom: 2rem;\n    overflow: hidden;\n    isolation: isolate;\n}\n\nheader::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(110deg, #4F46E5, #8B5CF6, #48ecc9, #48ecc9, #48ecc9, #48ecc9);\n    opacity: 0.5;\n    z-index: -1;\n}\n\nheader::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 70px;\n    bottom: -1px;\n    left: 0;\n    background-image: linear-gradient(to top, var(--background), transparent);\n    z-index: -1;\n}\n\nh1, h2, h3 {\n    font-weight: 700;\n    letter-spacing: -0.025em;\n}\n\nh1 {\n    font-size: 3.5rem;\n    background: linear-gradient(to right, #fff, #cbd5e1);\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    margin: 0;\n    text-align: center;\n    animation: fadeUp 1s var(--ease-out) forwards;\n}\n\n@keyframes fadeUp {\n    from {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\nh2 {\n    font-size: 1.8rem;\n    color: var(--text-primary);\n    margin-bottom: 1.5rem;\n    position: relative;\n    display: inline-block;\n    animation: fadeIn 0.8s var(--ease-out) forwards;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\nh2::after {\n    content: '';\n    position: absolute;\n    width: 60px;\n    height: 3px;\n    background: var(--gradient-2);\n    bottom: -8px;\n    left: 0;\n    border-radius: 3px;\n    transition: width 0.3s var(--ease-out);\n}\n\nh2:hover::after {\n    width: 100%;\n    background: var(--gradient-1);\n}\n\n.container {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 2rem;\n}\n\n.dashboard {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    padding-bottom: 4rem;\n    position: relative;\n}\n\n.fractal-section {\n    margin-bottom: 2rem;\n    animation: slideUpFade 0.7s var(--ease-spring) both;\n}\n\n@keyframes slideUpFade {\n    from {\n        opacity: 0;\n        transform: translateY(40px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.section-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 2rem;\n}\n\n.fractal-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    gap: 2rem;\n    perspective: 1000px;\n}\n\n.fractal-card {\n    background-color: var(--card-bg);\n    border-radius: 16px;\n    overflow: hidden;\n    transition: transform 0.5s var(--ease-spring), \n                box-shadow 0.4s var(--ease-out), \n                background-color 0.3s var(--ease-out);\n    border: 1px solid var(--border-light);\n    transform-origin: center bottom;\n    position: relative;\n    isolation: isolate;\n    animation: floatUp 5s ease-in-out infinite;\n}\n\n@keyframes floatUp {\n    0% { transform: translateY(0px); }\n    50% { transform: translateY(-15px); }\n    100% { transform: translateY(0px); }\n}\n\n.fractal-card:nth-child(2n) {\n    animation-delay: 0.5s;\n}\n\n.fractal-card:nth-child(3n) {\n    animation-delay: 1s;\n}\n\n.fractal-card:nth-child(4n) {\n    animation-delay: 0.3s;\n}\n\n.card-header {\n    padding: 1.25rem 1.5rem;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-bottom: 1px solid var(--border-light);\n    position: relative;\n}\n\n.card-header h3 {\n    margin: 0;\n    font-size: 1.1rem;\n    color: var(--text-primary);\n}\n\n.card-header::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -1px;\n    width: 0;\n    height: 1px;\n    background: var(--gradient-2);\n    transition: width 0.3s var(--ease-out);\n}\n\n.fractal-card:hover .card-header::after {\n    width: 100%;\n}\n\ncanvas {\n    width: 100%;\n    height: 250px;\n    display: block;\n    background-color: rgba(0, 0, 0, 0.3);\n    transition: transform 0.3s var(--ease-out), filter 0.3s var(--ease-out);\n}\n\n.fractal-card:hover canvas {\n    filter: brightness(1.1) contrast(1.05);\n}\n\n.fractal-controls {\n    padding: 1.25rem 1.5rem;\n    border-top: 1px solid var(--border-light);\n    transition: background-color 0.3s;\n}\n\n.control-group {\n    margin-bottom: 1rem;\n    transition: transform 0.2s var(--ease-out);\n}\n\n.fractal-card:hover .control-group {\n    transform: translateY(-3px);\n}\n\n.control-group:last-child {\n    margin-bottom: 1.25rem;\n}\n\n.header-content {\n    max-width: 800px;\n    margin: 0 auto;\n    text-align: center;\n    position: relative;\n    z-index: 2;\n}\n\n.subtitle {\n    font-size: 1.2rem;\n    opacity: 0.9;\n    margin-top: 1.5rem;\n}\n\n.header-decoration {\n    width: 100%;\n    max-width: 500px;\n    height: 2px;\n    background: var(--accent);\n    margin: 1.5rem auto;\n    position: relative;\n    overflow: hidden;\n    opacity: 0.6;\n}\n\n.grid-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n                    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n    background-size: 40px 40px;\n    z-index: -1;\n    opacity: 0.4;\n    pointer-events: none;\n}\n\n.corner-decoration {\n    position: fixed;\n    width: 200px;\n    height: 200px;\n    z-index: -1;\n    opacity: 0.2;\n    pointer-events: none;\n}\n\n.corner-top-left {\n    top: 0;\n    left: 0;\n    border-top: 2px solid var(--accent);\n    border-left: 2px solid var(--accent);\n    border-top-left-radius: 12px;\n}\n\n.corner-top-right {\n    top: 0;\n    right: 0;\n    border-top: 2px solid var(--secondary);\n    border-right: 2px solid var(--secondary);\n    border-top-right-radius: 12px;\n}\n\n.corner-bottom-left {\n    bottom: 0;\n    left: 0;\n    border-bottom: 2px solid var(--secondary);\n    border-left: 2px solid var(--secondary);\n    border-bottom-left-radius: 12px;\n}\n\n.corner-bottom-right {\n    bottom: 0;\n    right: 0;\n    border-bottom: 2px solid var(--accent);\n    border-right: 2px solid var(--accent);\n    border-bottom-right-radius: 12px;\n}\n\n.highlight {\n    color: var(--accent);\n    font-weight: 600;\n    position: relative;\n    z-index: 1;\n}\n\n.footer {\n    padding: 3rem 0;\n    margin-top: 2rem;\n    text-align: center;\n    color: var(--text-secondary);\n    position: relative;\n}\n\n.footer-line {\n    height: 1px;\n    width: 100%;\n    background: linear-gradient(to right, transparent, var(--border-light), transparent);\n    margin-bottom: 2rem;\n}\n\n@media (max-width: 768px) {\n    .fractal-grid {\n        grid-template-columns: 1fr;\n    }\n    \n    h1 {\n        font-size: 2.25rem;\n    }\n    \n    h2 {\n        font-size: 1.5rem;\n    }\n    \n    header {\n        padding: 2rem 0 4rem;\n    }\n    \n    .container {\n        padding: 0 1.25rem;\n    }\n} ", "",{"version":3,"sources":["webpack://./styles/main.css"],"names":[],"mappings":"AAAA;;EAEE;;AAIF;IACI,kBAAkB;IAClB,wBAAwB;IACxB,yBAAyB;IACzB,oBAAoB;IACpB,iBAAiB;IACjB,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,iCAAiC;IACjC,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;IACxB,wCAAwC;IACxC,yCAAyC;IACzC,oBAAoB;IACpB,oBAAoB;IACpB,kBAAkB;IAClB,2FAA2F;IAC3F,uDAAuD;IACvD,mGAAmG;IACnG,yCAAyC;IACzC,0CAA0C;IAC1C,2CAA2C;IAC3C,+CAA+C;;IAE/C,6CAA6C;IAC7C,sCAAsC;IACtC,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC;;uFAEmF;IACnF,4BAA4B;IAC5B,0BAA0B;IAC1B,iFAAiF;IACjF,SAAS;IACT,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA,0BAA0B;AAC1B;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,mCAAmC;IACnC,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,+FAA+F;IAC/F,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,OAAO;IACP,yEAAyE;IACzE,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,oDAAoD;IACpD,6BAA6B;IAC7B,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;IAClB,6CAA6C;AACjD;;AAEA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,+CAA+C;AACnD;;AAEA;IACI,OAAO,UAAU,EAAE;IACnB,KAAK,UAAU,EAAE;AACrB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,6BAA6B;IAC7B,YAAY;IACZ,OAAO;IACP,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,mDAAmD;AACvD;;AAEA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,mBAAmB;IACnB,gBAAgB;IAChB;;qDAEiD;IACjD,qCAAqC;IACrC,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,KAAK,0BAA0B,EAAE;IACjC,MAAM,4BAA4B,EAAE;IACpC,OAAO,0BAA0B,EAAE;AACvC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,oCAAoC;IACpC,4CAA4C;IAC5C,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,QAAQ;IACR,WAAW;IACX,6BAA6B;IAC7B,sCAAsC;AAC1C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,cAAc;IACd,oCAAoC;IACpC,uEAAuE;AAC3E;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,yCAAyC;IACzC,iCAAiC;AACrC;;AAEA;IACI,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ;8FAC0F;IAC1F,0BAA0B;IAC1B,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,WAAW;IACX,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,MAAM;IACN,OAAO;IACP,mCAAmC;IACnC,oCAAoC;IACpC,4BAA4B;AAChC;;AAEA;IACI,MAAM;IACN,QAAQ;IACR,sCAAsC;IACtC,wCAAwC;IACxC,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,OAAO;IACP,yCAAyC;IACzC,uCAAuC;IACvC,+BAA+B;AACnC;;AAEA;IACI,SAAS;IACT,QAAQ;IACR,sCAAsC;IACtC,qCAAqC;IACrC,gCAAgC;AACpC;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,oFAAoF;IACpF,mBAAmB;AACvB;;AAEA;IACI;QACI,0BAA0B;IAC9B;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,kBAAkB;IACtB;AACJ","sourcesContent":["/**\n * Main styles for the Fractal Explorer Dashboard\n */\n\n@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');\n\n:root {\n    --primary: #4F46E5;\n    --primary-hover: #4338CA;\n    --primary-active: #3730A3;\n    --secondary: #8B5CF6;\n    --accent: #EC4899;\n    --background: #0F172A;\n    --card-bg: #1E293B;\n    --card-hover: #182341;\n    --panel-bg: rgba(23, 37, 64, 0.7);\n    --text-primary: #F8FAFC;\n    --text-secondary: #CBD5E1;\n    --text-tertiary: #64748B;\n    --border-light: rgba(100, 116, 139, 0.2);\n    --border-medium: rgba(100, 116, 139, 0.3);\n    --surface-1: #162036;\n    --surface-2: #1E293B;\n    --success: #10B981;\n    --gradient-1: linear-gradient(110deg, #4F46E5, #8B5CF6, #48ecc9, #48ecc9, #48ecc9, #48ecc9);\n    --gradient-2: linear-gradient(135deg, #0EA5E9, #8B5CF6);\n    --gradient-subtle: linear-gradient(170deg, rgba(79, 70, 229, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);\n    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);\n    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.25);\n    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.3);\n    --glow-primary: 0 0 20px rgba(79, 70, 229, 0.5);\n    \n    --ease-spring: cubic-bezier(0.2, 0.8, 0.2, 1);\n    --ease-out: cubic-bezier(0.2, 0, 0, 1);\n    --ease-in: cubic-bezier(0.4, 0, 1, 1);\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    background-color: var(--background);\n    background-image: \n        radial-gradient(circle at 20% 35%, rgba(79, 70, 229, 0.15) 0%, transparent 40%),\n        radial-gradient(circle at 75% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 30%);\n    background-attachment: fixed;\n    color: var(--text-primary);\n    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n    margin: 0;\n    padding: 0;\n    line-height: 1.5;\n    min-height: 100vh;\n    font-weight: 400;\n    letter-spacing: -0.015em;\n    overflow-x: hidden;\n}\n\n/* Glassmorphism effects */\n.glassmorphism {\n    background: var(--panel-bg);\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    border: 1px solid var(--border-light);\n}\n\nheader {\n    position: relative;\n    padding: 3rem 0 5rem;\n    margin-bottom: 2rem;\n    overflow: hidden;\n    isolation: isolate;\n}\n\nheader::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(110deg, #4F46E5, #8B5CF6, #48ecc9, #48ecc9, #48ecc9, #48ecc9);\n    opacity: 0.5;\n    z-index: -1;\n}\n\nheader::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 70px;\n    bottom: -1px;\n    left: 0;\n    background-image: linear-gradient(to top, var(--background), transparent);\n    z-index: -1;\n}\n\nh1, h2, h3 {\n    font-weight: 700;\n    letter-spacing: -0.025em;\n}\n\nh1 {\n    font-size: 3.5rem;\n    background: linear-gradient(to right, #fff, #cbd5e1);\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    margin: 0;\n    text-align: center;\n    animation: fadeUp 1s var(--ease-out) forwards;\n}\n\n@keyframes fadeUp {\n    from {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\nh2 {\n    font-size: 1.8rem;\n    color: var(--text-primary);\n    margin-bottom: 1.5rem;\n    position: relative;\n    display: inline-block;\n    animation: fadeIn 0.8s var(--ease-out) forwards;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\nh2::after {\n    content: '';\n    position: absolute;\n    width: 60px;\n    height: 3px;\n    background: var(--gradient-2);\n    bottom: -8px;\n    left: 0;\n    border-radius: 3px;\n    transition: width 0.3s var(--ease-out);\n}\n\nh2:hover::after {\n    width: 100%;\n    background: var(--gradient-1);\n}\n\n.container {\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 2rem;\n}\n\n.dashboard {\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    padding-bottom: 4rem;\n    position: relative;\n}\n\n.fractal-section {\n    margin-bottom: 2rem;\n    animation: slideUpFade 0.7s var(--ease-spring) both;\n}\n\n@keyframes slideUpFade {\n    from {\n        opacity: 0;\n        transform: translateY(40px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.section-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 2rem;\n}\n\n.fractal-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    gap: 2rem;\n    perspective: 1000px;\n}\n\n.fractal-card {\n    background-color: var(--card-bg);\n    border-radius: 16px;\n    overflow: hidden;\n    transition: transform 0.5s var(--ease-spring), \n                box-shadow 0.4s var(--ease-out), \n                background-color 0.3s var(--ease-out);\n    border: 1px solid var(--border-light);\n    transform-origin: center bottom;\n    position: relative;\n    isolation: isolate;\n    animation: floatUp 5s ease-in-out infinite;\n}\n\n@keyframes floatUp {\n    0% { transform: translateY(0px); }\n    50% { transform: translateY(-15px); }\n    100% { transform: translateY(0px); }\n}\n\n.fractal-card:nth-child(2n) {\n    animation-delay: 0.5s;\n}\n\n.fractal-card:nth-child(3n) {\n    animation-delay: 1s;\n}\n\n.fractal-card:nth-child(4n) {\n    animation-delay: 0.3s;\n}\n\n.card-header {\n    padding: 1.25rem 1.5rem;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-bottom: 1px solid var(--border-light);\n    position: relative;\n}\n\n.card-header h3 {\n    margin: 0;\n    font-size: 1.1rem;\n    color: var(--text-primary);\n}\n\n.card-header::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -1px;\n    width: 0;\n    height: 1px;\n    background: var(--gradient-2);\n    transition: width 0.3s var(--ease-out);\n}\n\n.fractal-card:hover .card-header::after {\n    width: 100%;\n}\n\ncanvas {\n    width: 100%;\n    height: 250px;\n    display: block;\n    background-color: rgba(0, 0, 0, 0.3);\n    transition: transform 0.3s var(--ease-out), filter 0.3s var(--ease-out);\n}\n\n.fractal-card:hover canvas {\n    filter: brightness(1.1) contrast(1.05);\n}\n\n.fractal-controls {\n    padding: 1.25rem 1.5rem;\n    border-top: 1px solid var(--border-light);\n    transition: background-color 0.3s;\n}\n\n.control-group {\n    margin-bottom: 1rem;\n    transition: transform 0.2s var(--ease-out);\n}\n\n.fractal-card:hover .control-group {\n    transform: translateY(-3px);\n}\n\n.control-group:last-child {\n    margin-bottom: 1.25rem;\n}\n\n.header-content {\n    max-width: 800px;\n    margin: 0 auto;\n    text-align: center;\n    position: relative;\n    z-index: 2;\n}\n\n.subtitle {\n    font-size: 1.2rem;\n    opacity: 0.9;\n    margin-top: 1.5rem;\n}\n\n.header-decoration {\n    width: 100%;\n    max-width: 500px;\n    height: 2px;\n    background: var(--accent);\n    margin: 1.5rem auto;\n    position: relative;\n    overflow: hidden;\n    opacity: 0.6;\n}\n\n.grid-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n                    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n    background-size: 40px 40px;\n    z-index: -1;\n    opacity: 0.4;\n    pointer-events: none;\n}\n\n.corner-decoration {\n    position: fixed;\n    width: 200px;\n    height: 200px;\n    z-index: -1;\n    opacity: 0.2;\n    pointer-events: none;\n}\n\n.corner-top-left {\n    top: 0;\n    left: 0;\n    border-top: 2px solid var(--accent);\n    border-left: 2px solid var(--accent);\n    border-top-left-radius: 12px;\n}\n\n.corner-top-right {\n    top: 0;\n    right: 0;\n    border-top: 2px solid var(--secondary);\n    border-right: 2px solid var(--secondary);\n    border-top-right-radius: 12px;\n}\n\n.corner-bottom-left {\n    bottom: 0;\n    left: 0;\n    border-bottom: 2px solid var(--secondary);\n    border-left: 2px solid var(--secondary);\n    border-bottom-left-radius: 12px;\n}\n\n.corner-bottom-right {\n    bottom: 0;\n    right: 0;\n    border-bottom: 2px solid var(--accent);\n    border-right: 2px solid var(--accent);\n    border-bottom-right-radius: 12px;\n}\n\n.highlight {\n    color: var(--accent);\n    font-weight: 600;\n    position: relative;\n    z-index: 1;\n}\n\n.footer {\n    padding: 3rem 0;\n    margin-top: 2rem;\n    text-align: center;\n    color: var(--text-secondary);\n    position: relative;\n}\n\n.footer-line {\n    height: 1px;\n    width: 100%;\n    background: linear-gradient(to right, transparent, var(--border-light), transparent);\n    margin-bottom: 2rem;\n}\n\n@media (max-width: 768px) {\n    .fractal-grid {\n        grid-template-columns: 1fr;\n    }\n    \n    h1 {\n        font-size: 2.25rem;\n    }\n    \n    h2 {\n        font-size: 1.5rem;\n    }\n    \n    header {\n        padding: 2rem 0 4rem;\n    }\n    \n    .container {\n        padding: 0 1.25rem;\n    }\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/Dashboard.ts":
/*!*************************************!*\
  !*** ./src/components/Dashboard.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Dashboard Module - Main container for the fractal dashboard
 */
exports.__esModule = true;
exports.initDashboard = void 0;
var FractalSection_1 = __webpack_require__(/*! ./FractalSection */ "./src/components/FractalSection.ts");
var ChaosGameModule_1 = __webpack_require__(/*! ../fractals/chaos-game/ChaosGameModule */ "./src/fractals/chaos-game/ChaosGameModule.ts");
var MathFractalModule_1 = __webpack_require__(/*! ../fractals/mathematical/MathFractalModule */ "./src/fractals/mathematical/MathFractalModule.ts");
/**
 * Initialize the dashboard with all fractal sections
 */
function initDashboard() {
    console.log('Initializing dashboard...');
    // Create the main dashboard structure
    createHeader();
    console.log('Header created');
    var chaosGameContainer = FractalSection_1.createFractalSection('Chaos Game Fractals');
    console.log('Chaos Game section container created');
    var mathFractalContainer = FractalSection_1.createFractalSection('Complex Mathematical Fractals');
    console.log('Math Fractal section container created');
    createFooter();
    console.log('Footer created');
    // Create decorative elements
    createGridOverlay();
    createCornerDecorations();
    console.log('Decorations created');
    // Initialize the fractal sections
    console.log('Initializing Chaos Game fractals...');
    ChaosGameModule_1.initChaosGameFractals(chaosGameContainer);
    console.log('Chaos Game fractals initialized');
    console.log('Initializing Math fractals...');
    MathFractalModule_1.initMathFractals(mathFractalContainer);
    console.log('Math fractals initialized');
    console.log('Dashboard initialization complete');
}
exports.initDashboard = initDashboard;
/**
 * Creates the header element with title and subtitle
 */
function createHeader() {
    var dashboard = document.getElementById('dashboard');
    if (!dashboard)
        return;
    var header = document.createElement('header');
    // Don't create particles container - already added in HTML
    // const particles = document.createElement('div');
    // particles.id = 'particles-js';
    // header.appendChild(particles);
    // Create header content wrapper
    var headerContent = document.createElement('div');
    headerContent.className = 'header-content';
    // Create title with data-text attribute for glow effect
    var title = document.createElement('h1');
    var titleText = 'Fractal Explorer';
    title.textContent = titleText;
    title.setAttribute('data-text', titleText);
    // Create subtitle with modern styling
    var subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = 'Interactive visualization of <span class="highlight">chaos game fractals</span> and <span class="highlight">complex mathematical patterns</span>';
    // Create a decorative line under the title
    var decorLine = document.createElement('div');
    decorLine.className = 'header-decoration';
    headerContent.appendChild(title);
    headerContent.appendChild(decorLine);
    headerContent.appendChild(subtitle);
    header.appendChild(headerContent);
    dashboard.appendChild(header);
}
/**
 * Creates the footer element
 */
function createFooter() {
    var dashboard = document.getElementById('dashboard');
    if (!dashboard)
        return;
    var footer = document.createElement('div');
    footer.className = 'footer';
    var footerLine = document.createElement('div');
    footerLine.className = 'footer-line';
    var footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    var footerText = document.createElement('div');
    footerText.className = 'footer-text';
    footerText.textContent = 'Fractal Explorer - Visualizing infinite complexity through mathematics';
    footerContent.appendChild(footerText);
    footer.appendChild(footerLine);
    footer.appendChild(footerContent);
    dashboard.appendChild(footer);
}
/**
 * Creates the grid overlay element (decorative background)
 */
function createGridOverlay() {
    var body = document.body;
    var gridOverlay = document.createElement('div');
    gridOverlay.className = 'grid-overlay';
    body.appendChild(gridOverlay);
}
/**
 * Creates corner decoration elements
 */
function createCornerDecorations() {
    var body = document.body;
    var corners = [
        'corner-top-left',
        'corner-top-right',
        'corner-bottom-left',
        'corner-bottom-right'
    ];
    corners.forEach(function (corner) {
        var decoration = document.createElement('div');
        decoration.className = "corner-decoration " + corner;
        body.appendChild(decoration);
    });
}


/***/ }),

/***/ "./src/components/FractalCardFactory.ts":
/*!**********************************************!*\
  !*** ./src/components/FractalCardFactory.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * FractalCardFactory - Factory for creating fractal cards
 */
exports.__esModule = true;
exports.createFractalCard = void 0;
var NavigationService_1 = __webpack_require__(/*! ../services/NavigationService */ "./src/services/NavigationService.ts");
/**
 * Creates a new fractal card and adds it to the specified container
 * @param options Options for creating the fractal card
 */
function createFractalCard(options) {
    var title = options.title, description = options.description, formula = options.formula, controlConfigs = options.controlConfigs, canvasId = options.canvasId, container = options.container, fractal = options.fractal;
    // Create the card container
    var card = document.createElement('div');
    card.className = 'fractal-card';
    // Create the header
    var header = document.createElement('div');
    header.className = 'card-header';
    var titleElement = document.createElement('h3');
    titleElement.textContent = title;
    header.appendChild(titleElement);
    card.appendChild(header);
    // Create canvas container
    var canvasContainer = document.createElement('div');
    canvasContainer.className = 'canvas-container';
    // Create canvas element
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvas.width = 400;
    canvas.height = 300;
    canvasContainer.appendChild(canvas);
    card.appendChild(canvasContainer);
    // Create controls container
    var controlsContainer = document.createElement('div');
    controlsContainer.className = 'fractal-controls';
    // Add controls
    controlConfigs.forEach(function (config) {
        var controlGroup = document.createElement('div');
        controlGroup.className = 'control-group';
        var label = document.createElement('label');
        label.textContent = config.label || '';
        label.htmlFor = canvasId + "-" + config.id;
        controlGroup.appendChild(label);
        var input = document.createElement('input');
        input.id = canvasId + "-" + config.id;
        if (typeof config.defaultValue === 'number') {
            // Numeric input type
            if (config.min !== undefined && config.max !== undefined) {
                input.type = 'range';
                input.min = config.min.toString();
                input.max = config.max.toString();
                if (config.step !== undefined) {
                    input.step = config.step.toString();
                }
                // Add value display
                var valueDisplay_1 = document.createElement('span');
                valueDisplay_1.className = 'value-display';
                valueDisplay_1.textContent = config.defaultValue.toString();
                controlGroup.appendChild(valueDisplay_1);
                // Update value display when input changes
                input.addEventListener('input', function () {
                    valueDisplay_1.textContent = input.value;
                });
            }
            else {
                input.type = 'number';
            }
            input.value = config.defaultValue.toString();
        }
        else {
            // String input type (for select, text, etc.)
            input.type = 'text';
            input.value = config.defaultValue.toString();
        }
        // Add change handler and automatically generate when value changes
        input.addEventListener('change', function () {
            var value = input.type === 'number' || input.type === 'range'
                ? parseFloat(input.value)
                : input.value;
            if (config.onChange) {
                config.onChange(value);
                // Automatically generate when value changes (no button needed)
                fractal.generate();
            }
        });
        // Also generate on input for sliders to provide immediate feedback
        if (input.type === 'range') {
            input.addEventListener('input', function () {
                if (config.onChange) {
                    config.onChange(parseFloat(input.value));
                    fractal.generate();
                }
            });
        }
        controlGroup.appendChild(input);
        controlsContainer.appendChild(controlGroup);
    });
    card.appendChild(controlsContainer);
    // Add description tooltip
    var tooltip = document.createElement('div');
    tooltip.className = 'fractal-tooltip';
    tooltip.style.display = 'none';
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    tooltip.appendChild(descriptionElement);
    // Create the fractal formula container with improved structure
    var formulaContainer = document.createElement('div');
    formulaContainer.className = 'fractal-formula-container';
    // Add formula title
    var formulaTitle = document.createElement('div');
    formulaTitle.className = 'formula-title';
    formulaTitle.textContent = 'Mathematical Formula';
    formulaContainer.appendChild(formulaTitle);
    var formulaElement = document.createElement('pre');
    formulaElement.className = 'fractal-formula';
    formulaElement.textContent = formula;
    formulaContainer.appendChild(formulaElement);
    // Add copy formula button with smaller size
    var copyFormulaBtn = document.createElement('button');
    copyFormulaBtn.className = 'formula-copy-button';
    copyFormulaBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
    // Add copy success notification element
    var copySuccess = document.createElement('div');
    copySuccess.className = 'formula-copied';
    copySuccess.textContent = 'Copied!';
    // Add copy formula functionality
    copyFormulaBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent tooltip from closing when clicking the button
        navigator.clipboard.writeText(formula).then(function () {
            // Show success notification
            copySuccess.classList.add('visible');
            // Remove the class after animation completes
            setTimeout(function () {
                copySuccess.classList.remove('visible');
            }, 1500);
        })["catch"](function (err) {
            console.error('Could not copy formula:', err);
        });
    });
    // Add elements to formula container
    formulaContainer.appendChild(copyFormulaBtn);
    formulaContainer.appendChild(copySuccess);
    tooltip.appendChild(formulaContainer);
    card.appendChild(tooltip);
    // Add hover/click effect for tooltip
    card.addEventListener('click', function (e) {
        // Don't show tooltip when clicking on controls
        if (e.target.closest('.fractal-controls')) {
            return;
        }
        tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
    });
    // Add editor button at the bottom of the card
    var editorButton = document.createElement('button');
    editorButton.className = 'fractal-editor-button-bottom';
    editorButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Open Fractal Editor';
    editorButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the card click from showing the tooltip
        // Convert title to URL-friendly ID
        var fractalId = title.toLowerCase().replace(/\s+/g, '-');
        // Fix for non-repeat square fractal
        if (fractalId === 'non-repeat-square-fractal' || fractalId === 'non-repeat-square') {
            fractalId = 'nonrepeat-square';
        }
        NavigationService_1.navigateToFractalEditor(fractalId);
    });
    card.appendChild(editorButton);
    // Add card to container
    container.appendChild(card);
    // Initialize the fractal
    fractal.initialize();
    fractal.generate();
}
exports.createFractalCard = createFractalCard;


/***/ }),

/***/ "./src/components/FractalControlConfig.ts":
/*!************************************************!*\
  !*** ./src/components/FractalControlConfig.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * FractalControlConfig - Extended control configuration for fractal UI
 */
exports.__esModule = true;
exports.createSliderControl = exports.createComplexParamControl = exports.createZoomControl = exports.createMaxIterationsControl = exports.createIterationsControl = void 0;
/**
 * Creates a standard iteration control
 * @param onChange Callback function when value changes
 * @returns Control configuration for iterations
 */
function createIterationsControl(onChange) {
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
exports.createIterationsControl = createIterationsControl;
/**
 * Creates a standard max iterations control for mathematical fractals
 * @param onChange Callback function when value changes
 * @returns Control configuration for max iterations
 */
function createMaxIterationsControl(onChange) {
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
exports.createMaxIterationsControl = createMaxIterationsControl;
/**
 * Creates a standard zoom control for mathematical fractals
 * @param onChange Callback function when value changes
 * @returns Control configuration for zoom
 */
function createZoomControl(onChange) {
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
exports.createZoomControl = createZoomControl;
/**
 * Creates a complex parameter control
 * @param id Control identifier
 * @param label Display label
 * @param defaultValue Default value
 * @param onChange Callback function when value changes
 * @returns Control configuration for complex parameter
 */
function createComplexParamControl(id, label, defaultValue, onChange) {
    return {
        id: id,
        label: label,
        min: -2,
        max: 2,
        step: 0.01,
        defaultValue: defaultValue,
        type: 'range',
        onChange: onChange
    };
}
exports.createComplexParamControl = createComplexParamControl;
/**
 * Creates a custom slider control with specified parameters
 * @param options The slider control options
 * @returns Control configuration for custom slider
 */
function createSliderControl(options) {
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
exports.createSliderControl = createSliderControl;


/***/ }),

/***/ "./src/components/FractalSection.ts":
/*!******************************************!*\
  !*** ./src/components/FractalSection.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * FractalSection Module - Creates and manages a section of fractals
 */
exports.__esModule = true;
exports.createFractalSection = void 0;
/**
 * Creates a new section for a group of fractals
 * @param title The title of the section
 * @returns The container element where fractal cards will be added
 */
function createFractalSection(title) {
    var dashboard = document.getElementById('dashboard');
    if (!dashboard) {
        throw new Error('Dashboard element not found');
    }
    // Create section container
    var section = document.createElement('div');
    section.className = 'fractal-section';
    // Create container div with appropriate class
    var container = document.createElement('div');
    container.className = 'container';
    section.appendChild(container);
    // Create section header
    var sectionHeader = document.createElement('div');
    sectionHeader.className = 'section-header';
    container.appendChild(sectionHeader);
    // Create section title
    var sectionTitle = document.createElement('h2');
    sectionTitle.textContent = title;
    sectionHeader.appendChild(sectionTitle);
    // Create grid for fractal cards
    var grid = document.createElement('div');
    grid.className = 'fractal-grid';
    container.appendChild(grid);
    // Add to dashboard
    dashboard.appendChild(section);
    // Log section creation for debugging
    console.log("Created fractal section: " + title);
    return grid;
}
exports.createFractalSection = createFractalSection;


/***/ }),

/***/ "./src/fractals/Complex.ts":
/*!*********************************!*\
  !*** ./src/fractals/Complex.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.Complex = void 0;
/**
 * Complex number implementation for mathematical fractals
 */
var Complex = /** @class */ (function () {
    function Complex(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    /**
     * Creates a copy of this complex number
     */
    Complex.prototype.copy = function () {
        return new Complex(this.real, this.imag);
    };
    /**
     * Adds another complex number to this one
     */
    Complex.prototype.add = function (other) {
        return new Complex(this.real + other.real, this.imag + other.imag);
    };
    /**
     * Subtracts another complex number from this one
     */
    Complex.prototype.subtract = function (other) {
        return new Complex(this.real - other.real, this.imag - other.imag);
    };
    /**
     * Multiplies this complex number by another
     */
    Complex.prototype.multiply = function (other) {
        return new Complex(this.real * other.real - this.imag * other.imag, this.real * other.imag + this.imag * other.real);
    };
    /**
     * Squares this complex number (z^2)
     */
    Complex.prototype.square = function () {
        return new Complex(this.real * this.real - this.imag * this.imag, 2 * this.real * this.imag);
    };
    /**
     * Returns the absolute value (magnitude) of this complex number
     */
    Complex.prototype.abs = function () {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    };
    /**
     * Raises this complex number to a power
     */
    Complex.prototype.pow = function (n) {
        var r = Math.pow(this.abs(), n);
        var theta = Math.atan2(this.imag, this.real) * n;
        return new Complex(r * Math.cos(theta), r * Math.sin(theta));
    };
    /**
     * Returns the complex conjugate
     */
    Complex.prototype.conjugate = function () {
        return new Complex(this.real, -this.imag);
    };
    /**
     * Divides this complex number by another
     */
    Complex.prototype.divide = function (other) {
        var denominator = other.real * other.real + other.imag * other.imag;
        return new Complex((this.real * other.real + this.imag * other.imag) / denominator, (this.imag * other.real - this.real * other.imag) / denominator);
    };
    /**
     * Creates a complex number from exponential function
     */
    Complex.exp = function (z) {
        var exp_real = Math.exp(z.real);
        return new Complex(exp_real * Math.cos(z.imag), exp_real * Math.sin(z.imag));
    };
    /**
     * Creates a string representation of this complex number
     */
    Complex.prototype.toString = function () {
        if (this.imag === 0) {
            return this.real.toString();
        }
        else if (this.real === 0) {
            return this.imag === 1 ? 'i' : this.imag === -1 ? '-i' : this.imag + "i";
        }
        else {
            var sign = this.imag < 0 ? '-' : '+';
            var absImag = Math.abs(this.imag);
            return this.real + " " + sign + " " + (absImag === 1 ? '' : absImag) + "i";
        }
    };
    return Complex;
}());
exports.Complex = Complex;


/***/ }),

/***/ "./src/fractals/FractalBase.ts":
/*!*************************************!*\
  !*** ./src/fractals/FractalBase.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.FractalBase = void 0;
/**
 * Base class for all fractals
 */
var FractalBase = /** @class */ (function () {
    /**
     * Constructor for the base fractal class
     *
     * @param canvasId - The ID of the canvas element to render on
     */
    function FractalBase(canvasId) {
        this.canvasId = canvasId;
    }
    /**
     * Initialize the canvas element and context
     * This is called after the canvas is created by the FractalCard
     */
    FractalBase.prototype.initialize = function () {
        this.canvas = document.getElementById(this.canvasId);
        if (!this.canvas) {
            throw new Error("Canvas element with ID " + this.canvasId + " not found");
        }
        var context = this.canvas.getContext('2d');
        if (!context) {
            throw new Error("Could not get 2D context for canvas " + this.canvasId);
        }
        this.ctx = context;
        this.clear();
    };
    /**
     * Clears the canvas with a black background
     */
    FractalBase.prototype.clear = function () {
        if (!this.ctx) {
            this.initialize();
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return FractalBase;
}());
exports.FractalBase = FractalBase;


/***/ }),

/***/ "./src/fractals/chaos-game/AdjacentRestrictionFractal.ts":
/*!***************************************************************!*\
  !*** ./src/fractals/chaos-game/AdjacentRestrictionFractal.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AdjacentRestrictionFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implements a hexagon-based chaos game with the restriction that
 * consecutive vertex selections cannot be adjacent vertices
 */
var AdjacentRestrictionFractal = /** @class */ (function (_super) {
    __extends(AdjacentRestrictionFractal, _super);
    /**
     * Constructor for the Adjacent Restriction fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function AdjacentRestrictionFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 20000; }
        var _this = _super.call(this, canvasId, iterations) || this;
        _this.lastVertexIndex = -1;
        _this.vertices = [];
        _this.vertexCount = 6; // Hexagon
        _this.animationId = null;
        _this.animationStep = 0;
        _this.contractionRatio = 0.5; // Default contraction ratio (halfway)
        // Enhanced color palette for better visualization
        _this.colorPalette = ["#0088ff", "#00ff88", "#ff0088", "#ffff00", "#ff8800", "#8800ff"];
        _this.currentPoint = [0, 0]; // Will be set in initialize
        return _this;
    }
    /**
     * Initialize the fractal
     * Override to set up hexagon vertices
     */
    AdjacentRestrictionFractal.prototype.initialize = function () {
        var _this = this;
        _super.prototype.initialize.call(this);
        var width = this.canvas.width;
        var height = this.canvas.height;
        var radius = Math.min(width, height) * 0.45;
        var centerX = width / 2;
        var centerY = height / 2;
        // Create hexagon vertices
        this.vertices = [];
        for (var i = 0; i < this.vertexCount; i++) {
            var angle = (Math.PI / 3) * i; // 60° between vertices (360° / 6 = 60°)
            var x = centerX + radius * Math.cos(angle);
            var y = centerY + radius * Math.sin(angle);
            this.vertices.push([x, y]);
        }
        // Clear canvas before plotting vertices
        this.clear();
        // Draw the hexagon boundary
        this.ctx.strokeStyle = "#FFFFFF";
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(this.vertices[0][0], this.vertices[0][1]);
        for (var i = 1; i <= this.vertexCount; i++) {
            var idx = i % this.vertexCount;
            this.ctx.lineTo(this.vertices[idx][0], this.vertices[idx][1]);
        }
        this.ctx.closePath();
        this.ctx.stroke();
        // Draw the vertices with their respective colors
        this.vertices.forEach(function (p, idx) {
            _this.ctx.fillStyle = _this.colorPalette[idx % _this.colorPalette.length];
            _this.ctx.beginPath();
            _this.ctx.arc(p[0], p[1], 4, 0, Math.PI * 2);
            _this.ctx.fill();
        });
        // Reset animation state
        this.animationStep = 0;
        this.lastVertexIndex = -1;
        // Set starting point to center of canvas
        this.currentPoint = this.startingPoint;
    };
    /**
     * Sets the color scheme for the fractal
     * @param colorScheme An array of hex color strings
     */
    AdjacentRestrictionFractal.prototype.setColorScheme = function (colorScheme) {
        this.colorPalette = colorScheme;
    };
    /**
     * Sets the contraction ratio (how far to move towards the chosen vertex)
     * @param ratio A value between 0 and 1
     */
    AdjacentRestrictionFractal.prototype.setContractionRatio = function (ratio) {
        this.contractionRatio = Math.max(0.1, Math.min(0.9, ratio));
    };
    /**
     * Moves a point towards the target by the specified contraction ratio
     */
    AdjacentRestrictionFractal.prototype.moveTowardsTarget = function (p1, p2) {
        return [
            p1[0] + this.contractionRatio * (p2[0] - p1[0]),
            p1[1] + this.contractionRatio * (p2[1] - p1[1])
        ];
    };
    /**
     * Generate the fractal using adjacent vertex restriction
     * @param animate Whether to animate the generation
     * @param batchSize The number of points to generate per animation frame
     */
    AdjacentRestrictionFractal.prototype.generate = function (animate, batchSize) {
        if (animate === void 0) { animate = false; }
        if (batchSize === void 0) { batchSize = 100; }
        // If already animating, stop current animation
        this.stopAnimation();
        this.initialize();
        if (animate) {
            // Start animation
            this.animate(batchSize);
        }
        else {
            // Generate all at once
            this.generatePoints(this.iterationsCount);
        }
    };
    /**
     * Stop the animation if it's running
     */
    AdjacentRestrictionFractal.prototype.stopAnimation = function () {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    };
    /**
     * Animate the fractal generation
     */
    AdjacentRestrictionFractal.prototype.animate = function (batchSize) {
        var _this = this;
        var animateStep = function () {
            if (_this.animationStep >= _this.iterationsCount) {
                _this.animationId = null;
                return;
            }
            // Draw a batch of points
            _this.generatePoints(Math.min(batchSize, _this.iterationsCount - _this.animationStep));
            // Request next animation frame
            _this.animationId = requestAnimationFrame(animateStep);
        };
        // Start animation
        this.animationId = requestAnimationFrame(animateStep);
    };
    /**
     * Generate a specific number of points for the fractal
     */
    AdjacentRestrictionFractal.prototype.generatePoints = function (count) {
        for (var i = 0; i < count; i++) {
            // Get random vertex that's not adjacent to last vertex
            var vertexIndex = void 0;
            do {
                vertexIndex = Math.floor(Math.random() * this.vertexCount);
            } while (this.lastVertexIndex !== -1 &&
                (vertexIndex === this.lastVertexIndex ||
                    vertexIndex === (this.lastVertexIndex + 1) % this.vertexCount ||
                    vertexIndex === (this.lastVertexIndex + this.vertexCount - 1) % this.vertexCount));
            // Move towards the selected vertex by the contraction ratio
            var selectedVertex = this.vertices[vertexIndex];
            this.currentPoint = this.moveTowardsTarget(this.currentPoint, selectedVertex);
            // Plot the point with color based on vertex
            this.ctx.fillStyle = this.colorPalette[vertexIndex % this.colorPalette.length];
            // Draw a small circle for better visual appeal (anti-aliased)
            var size = 1.2; // Slightly larger point for better visibility
            this.ctx.beginPath();
            this.ctx.arc(this.currentPoint[0], this.currentPoint[1], size / 2, 0, Math.PI * 2);
            this.ctx.fill();
            // Remember this vertex for next iteration
            this.lastVertexIndex = vertexIndex;
            this.animationStep++;
        }
    };
    /**
     * Return information about this fractal
     */
    AdjacentRestrictionFractal.prototype.getInfo = function () {
        return {
            title: "Adjacent Restriction Fractal",
            description: "This fractal is generated using a chaos game on a regular hexagon with the restriction that consecutive vertex selections cannot be adjacent. This creates intricate patterns with interesting symmetry and complexity.",
            formula: "Let v be a vertex chosen at random, but not adjacent to the previous vertex. Then x_{n+1} = x_n + r * (v - x_n) where we move a portion of the way to the chosen vertex"
        };
    };
    return AdjacentRestrictionFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.AdjacentRestrictionFractal = AdjacentRestrictionFractal;


/***/ }),

/***/ "./src/fractals/chaos-game/ChaosGameBase.ts":
/*!**************************************************!*\
  !*** ./src/fractals/chaos-game/ChaosGameBase.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.ChaosGameBase = void 0;
var FractalBase_1 = __webpack_require__(/*! ../FractalBase */ "./src/fractals/FractalBase.ts");
/**
 * Base class for chaos game fractals
 */
var ChaosGameBase = /** @class */ (function (_super) {
    __extends(ChaosGameBase, _super);
    /**
     * Constructor for the chaos game fractal base class
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function ChaosGameBase(canvasId, iterations) {
        if (iterations === void 0) { iterations = 10000; }
        var _this = _super.call(this, canvasId) || this;
        _this.iterationsCount = iterations;
        _this.colorPalette = ["#0ff", "#f0f", "#0f0"];
        return _this;
    }
    /**
     * Initialize the fractal
     * Override parent method to add setup specific to chaos game fractals
     */
    ChaosGameBase.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        // Set the starting point to center of canvas
        this.startingPoint = [this.canvas.width / 2, this.canvas.height / 2];
    };
    /**
     * Sets the number of iterations for the fractal
     */
    ChaosGameBase.prototype.setIterations = function (iterations) {
        this.iterationsCount = iterations;
        this.generate();
    };
    /**
     * Plots a point on the canvas
     */
    ChaosGameBase.prototype.plot = function (point, size) {
        if (size === void 0) { size = 1; }
        var _a = __read(point, 2), x = _a[0], y = _a[1];
        var currentColor = Math.floor(Math.random() * this.colorPalette.length);
        this.ctx.fillStyle = this.colorPalette[currentColor];
        this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
    };
    /**
     * Calculates the midpoint between two points
     */
    ChaosGameBase.prototype.midpoint = function (p1, p2) {
        return [
            (p1[0] + p2[0]) / 2,
            (p1[1] + p2[1]) / 2
        ];
    };
    return ChaosGameBase;
}(FractalBase_1.FractalBase));
exports.ChaosGameBase = ChaosGameBase;


/***/ }),

/***/ "./src/fractals/chaos-game/ChaosGameModule.ts":
/*!****************************************************!*\
  !*** ./src/fractals/chaos-game/ChaosGameModule.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Chaos Game Module - Initializes and manages chaos game fractals
 */
exports.__esModule = true;
exports.initChaosGameFractals = void 0;
var TriangleFractal_1 = __webpack_require__(/*! ./TriangleFractal */ "./src/fractals/chaos-game/TriangleFractal.ts");
var RestrictedSquareFractal_1 = __webpack_require__(/*! ./RestrictedSquareFractal */ "./src/fractals/chaos-game/RestrictedSquareFractal.ts");
// import { DiamondFractal } from './DiamondFractal'; // Removed Diamond Fractal
var NonRepeatSquareFractal_1 = __webpack_require__(/*! ./NonRepeatSquareFractal */ "./src/fractals/chaos-game/NonRepeatSquareFractal.ts");
var ModifiedSquareFractal_1 = __webpack_require__(/*! ./ModifiedSquareFractal */ "./src/fractals/chaos-game/ModifiedSquareFractal.ts");
var AdjacentRestrictionFractal_1 = __webpack_require__(/*! ./AdjacentRestrictionFractal */ "./src/fractals/chaos-game/AdjacentRestrictionFractal.ts");
// import { HexagonSpiralFractal } from './HexagonSpiralFractal';  // Removed HexagonSpiralFractal
var SierpinskiCarpet_1 = __webpack_require__(/*! ./SierpinskiCarpet */ "./src/fractals/chaos-game/SierpinskiCarpet.ts");
var PentagonFractal_1 = __webpack_require__(/*! ./PentagonFractal */ "./src/fractals/chaos-game/PentagonFractal.ts");
var FernFractal_1 = __webpack_require__(/*! ./FernFractal */ "./src/fractals/chaos-game/FernFractal.ts");
var FractalCardFactory_1 = __webpack_require__(/*! ../../components/FractalCardFactory */ "./src/components/FractalCardFactory.ts");
var FractalControlConfig_1 = __webpack_require__(/*! ../../components/FractalControlConfig */ "./src/components/FractalControlConfig.ts");
/**
 * Initialize all chaos game fractals
 * @param container The container element where fractal cards will be added
 */
function initChaosGameFractals(container) {
    // Triangle Fractal
    initTriangleFractal(container);
    // Restricted Square Fractal
    initRestrictedSquareFractal(container);
    // Non-Repeat Square Fractal
    initNonRepeatSquareFractal(container);
    // Modified Square Fractal
    initModifiedSquareFractal(container);
    // Adjacent Restriction Fractal
    initAdjacentRestrictionFractal(container);
    // Hexagon Spiral Fractal (replacing Adjacency Mover) - Removed
    // Sierpinski Carpet Fractal
    initSierpinskiCarpet(container);
    // Pentagon Fractal
    initPentagonFractal(container);
    // Fern Fractal
    initFernFractal(container);
}
exports.initChaosGameFractals = initChaosGameFractals;
/**
 * Initialize the Sierpinski Triangle fractal
 */
function initTriangleFractal(container) {
    var fractal = new TriangleFractal_1.TriangleFractal('triangle-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Sierpinski Triangle',
        description: 'The classic triangle chaos game fractal where points move halfway to randomly chosen vertices.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is a randomly chosen vertex',
        controlConfigs: controls,
        canvasId: 'triangle-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Restricted Square fractal
 */
function initRestrictedSquareFractal(container) {
    var fractal = new RestrictedSquareFractal_1.RestrictedSquareFractal('restricted-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Restricted Square',
        description: 'A square fractal with restrictions that prevent certain vertex combinations.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i cannot be opposite to the previous vertex',
        controlConfigs: controls,
        canvasId: 'restricted-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Diamond fractal
 * @deprecated Diamond fractal has been removed from the dashboard
 */
function initDiamondFractal(container) {
    // Function body removed as this fractal has been removed from the dashboard
}
/**
 * Initialize the Non-Repeat Square fractal
 */
function initNonRepeatSquareFractal(container) {
    var fractal = new NonRepeatSquareFractal_1.NonRepeatSquareFractal('non-repeat-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Non-Repeat Square',
        description: 'A variant that prevents consecutive selection of the same vertex, creating more diverse patterns.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is determined by a non-repeating dice roll',
        controlConfigs: controls,
        canvasId: 'non-repeat-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Modified Square fractal
 */
function initModifiedSquareFractal(container) {
    var fractal = new ModifiedSquareFractal_1.ModifiedSquareFractal('modified-square-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Modified Square',
        description: 'A modified square fractal with altered vertex positions and selection rules.',
        formula: 'P_{n+1} = (P_n + V_i) / 2\nwith altered vertex positions and selection rules',
        controlConfigs: controls,
        canvasId: 'modified-square-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Adjacent Restriction fractal
 */
function initAdjacentRestrictionFractal(container) {
    var fractal = new AdjacentRestrictionFractal_1.AdjacentRestrictionFractal('adjacent-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); }),
        FractalControlConfig_1.createSliderControl({
            id: 'contraction-ratio',
            label: 'Contraction Ratio',
            min: 0.1,
            max: 0.9,
            step: 0.05,
            defaultValue: 0.5,
            callback: function (value) { return fractal.setContractionRatio(value); }
        })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Adjacent Restriction',
        description: 'A fractal that restricts movement to non-adjacent vertices, creating distinct geometric patterns.',
        formula: 'P_{n+1} = P_n + r * (V_i - P_n)\nwhere V_i cannot be adjacent to the previously chosen vertex',
        controlConfigs: controls,
        canvasId: 'adjacent-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Sierpinski Carpet fractal
 */
function initSierpinskiCarpet(container) {
    var fractal = new SierpinskiCarpet_1.SierpinskiCarpet('sierpinski-carpet-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Sierpinski Carpet',
        description: 'A 2D generalization of the Sierpinski Triangle using 8 vertices arranged in a square pattern with a 2/3 contraction ratio.',
        formula: 'P_{n+1} = P_n + 2/3(V_i - P_n)\nwhere V_i is a randomly chosen vertex from the 8 vertices',
        controlConfigs: controls,
        canvasId: 'sierpinski-carpet-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Pentagon fractal
 */
function initPentagonFractal(container) {
    var fractal = new PentagonFractal_1.PentagonFractal('pentagon-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); }),
        FractalControlConfig_1.createSliderControl({
            id: 'pentagon-ratio',
            label: 'Contraction Ratio',
            min: 0.4,
            max: 0.8,
            step: 0.01,
            defaultValue: 0.618,
            callback: function (value) { return fractal.setContractionRatio(value); }
        })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Pentagon Fractal',
        description: 'A pentagon-based chaos game with variable contraction ratios that create intricate patterns.',
        formula: 'P_{n+1} = P_n + r_i(V_i - P_n)\nwhere r_i varies based on vertex V_i',
        controlConfigs: controls,
        canvasId: 'pentagon-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Fern fractal
 */
function initFernFractal(container) {
    var fractal = new FernFractal_1.FernFractal('fern-canvas');
    var controls = [
        FractalControlConfig_1.createIterationsControl(function (value) { return fractal.setIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Barnsley Fern',
        description: 'A fern-like fractal generated using a chaos game with probabilistic affine transformations.',
        formula: 'x_{n+1} = a_i·x_n + b_i·y_n + e_i\ny_{n+1} = c_i·x_n + d_i·y_n + f_i\nwhere i is chosen with probability p_i',
        controlConfigs: controls,
        canvasId: 'fern-canvas',
        container: container,
        fractal: fractal
    });
}


/***/ }),

/***/ "./src/fractals/chaos-game/FernFractal.ts":
/*!************************************************!*\
  !*** ./src/fractals/chaos-game/FernFractal.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.FernFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implementation of a Fern-like fractal using weighted chaos game
 */
var FernFractal = /** @class */ (function (_super) {
    __extends(FernFractal, _super);
    /**
     * Constructor for the Fern fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function FernFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 50000; }
        var _this = _super.call(this, canvasId, iterations) || this;
        // Define the transformations for the Barnsley fern
        _this.transformations = [
            { prob: 0.01, a: 0.00, b: 0.00, c: 0.00, d: 0.16, e: 0.00, f: 0.00, color: '#1AFF1A' },
            { prob: 0.85, a: 0.85, b: 0.04, c: -0.04, d: 0.85, e: 0.00, f: 1.60, color: '#00CC00' },
            { prob: 0.07, a: 0.20, b: -0.26, c: 0.23, d: 0.22, e: 0.00, f: 1.60, color: '#33FF33' },
            { prob: 0.07, a: -0.15, b: 0.28, c: 0.26, d: 0.24, e: 0.00, f: 0.44, color: '#00FF00' } // Largest right leaflet
        ];
        // Override the color palette
        _this.colorPalette = ["#00FF00", "#33FF33", "#66FF66", "#99FF99"];
        return _this;
    }
    /**
     * Initialize the Fern fractal
     */
    FernFractal.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        // Clear the canvas
        this.clear();
        // Set initial point
        this.startingPoint = [0, 0];
    };
    /**
     * Apply a transformation to a point
     */
    FernFractal.prototype.transform = function (point, tx) {
        var _a = __read(point, 2), x = _a[0], y = _a[1];
        return [
            tx.a * x + tx.b * y + tx.e,
            tx.c * x + tx.d * y + tx.f
        ];
    };
    /**
     * Gets a random transformation based on probability weights
     */
    FernFractal.prototype.getRandomTransformation = function () {
        var e_1, _a;
        var r = Math.random();
        var sumProb = 0;
        try {
            for (var _b = __values(this.transformations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tx = _c.value;
                sumProb += tx.prob;
                if (r <= sumProb) {
                    return tx;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this.transformations[0]; // Fallback
    };
    /**
     * Generates the Fern fractal using the chaos game algorithm with affine transformations
     */
    FernFractal.prototype.generate = function () {
        this.initialize();
        var currentPoint = this.startingPoint;
        // Skip first 20 iterations (transient phase)
        for (var i = 0; i < 20; i++) {
            var tx = this.getRandomTransformation();
            currentPoint = this.transform(currentPoint, tx);
        }
        // Calculate scaling to fit the canvas
        var w = this.canvas.width;
        var h = this.canvas.height;
        var scale = h / 12; // Fern's height is about 10 units
        var offsetX = w / 2;
        var offsetY = h - 20; // Position at bottom of canvas
        // Main iteration loop
        for (var i = 0; i < this.iterationsCount; i++) {
            // Pick a random transformation based on probability weights
            var tx = this.getRandomTransformation();
            // Apply the transformation
            currentPoint = this.transform(currentPoint, tx);
            // Map the point to the canvas space
            var canvasX = offsetX + scale * currentPoint[0];
            var canvasY = offsetY - scale * currentPoint[1]; // Y is inverted in canvas
            // Use the color associated with the transformation
            this.ctx.fillStyle = tx.color;
            // Draw a small point
            this.ctx.beginPath();
            this.ctx.rect(canvasX, canvasY, 1, 1);
            this.ctx.fill();
        }
    };
    /**
     * Returns information about the Fern fractal
     */
    FernFractal.prototype.getInfo = function () {
        return {
            title: 'Barnsley Fern',
            description: 'A fern-like fractal generated using a chaos game with probabilistic affine transformations. Each part of the fern (stem, leaflets) is created by applying specific transformations with varying probabilities.',
            formula: 'x_{n+1} = a_i·x_n + b_i·y_n + e_i\ny_{n+1} = c_i·x_n + d_i·y_n + f_i\nwhere i is chosen with probability p_i'
        };
    };
    return FernFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.FernFractal = FernFractal;


/***/ }),

/***/ "./src/fractals/chaos-game/ModifiedSquareFractal.ts":
/*!**********************************************************!*\
  !*** ./src/fractals/chaos-game/ModifiedSquareFractal.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ModifiedSquareFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implementation of a Modified Square fractal with altered positioning rules
 */
var ModifiedSquareFractal = /** @class */ (function (_super) {
    __extends(ModifiedSquareFractal, _super);
    /**
     * Constructor for the Modified Square fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function ModifiedSquareFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 50000; }
        return _super.call(this, canvasId, iterations) || this;
    }
    /**
     * Generates the Modified Square fractal
     */
    ModifiedSquareFractal.prototype.generate = function () {
        var _this = this;
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        // Define the vertices of a modified square (slightly offset from regular square)
        var padding = 50;
        var vertices = [
            { x: padding, y: padding },
            { x: width - padding, y: padding * 1.2 },
            { x: width - padding * 1.2, y: height - padding },
            { x: padding * 1.1, y: height - padding * 1.1 } // bottom-left
        ];
        // Draw the vertices
        this.ctx.fillStyle = '#FF5555';
        vertices.forEach(function (vertex) {
            _this.ctx.beginPath();
            _this.ctx.arc(vertex.x, vertex.y, 3, 0, Math.PI * 2);
            _this.ctx.fill();
        });
        // Choose random initial point
        var x = Math.random() * width;
        var y = Math.random() * height;
        // Set drawing style
        this.ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        // Track the previous vertex index
        var prevIndex = -1;
        // Run the chaos game with a twist
        for (var i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex with constraints
            var randomIndex = void 0;
            // Modified selection rule: vertices are chosen with varying probabilities and constraints
            if (prevIndex === -1) {
                // First iteration - choose any vertex
                randomIndex = Math.floor(Math.random() * vertices.length);
            }
            else if (prevIndex === 0) {
                // If previous was top-left, can't go to bottom-right
                randomIndex = Math.floor(Math.random() * 3);
                if (randomIndex >= 2)
                    randomIndex = 3; // Skip the forbidden vertex
            }
            else if (prevIndex === 2) {
                // If previous was bottom-right, can't go to top-left
                randomIndex = 1 + Math.floor(Math.random() * 3);
                if (randomIndex >= 4)
                    randomIndex = 0; // Wrap around
            }
            else {
                // Otherwise, any vertex is possible, but with different probabilities
                var r = Math.random();
                if (r < 0.4) {
                    // 40% chance of choosing the vertex opposite to the previous
                    randomIndex = (prevIndex + 2) % 4;
                }
                else {
                    // 60% chance of choosing one of the adjacent vertices
                    randomIndex = (prevIndex + (Math.random() < 0.5 ? 1 : 3)) % 4;
                }
            }
            prevIndex = randomIndex;
            var vertex = vertices[randomIndex];
            // Different contraction rates for different vertices
            var rate = randomIndex % 2 === 0 ? 0.5 : 0.55; // Different rates for different corners
            x = (1 - rate) * x + rate * vertex.x;
            y = (1 - rate) * y + rate * vertex.y;
            // Skip the first 20 iterations (transient phase)
            if (i > 20) {
                // Draw a point with different sizes based on vertex
                var pointSize = randomIndex % 2 === 0 ? 1 : 1.5;
                this.ctx.beginPath();
                this.ctx.rect(x, y, pointSize, pointSize);
                this.ctx.fill();
            }
        }
    };
    /**
     * Returns information about the Modified Square fractal
     */
    ModifiedSquareFractal.prototype.getInfo = function () {
        return {
            title: 'Modified Square',
            description: 'A modified square fractal with altered vertex positions and selection rules, creating asymmetric patterns.',
            formula: 'P_{n+1} = (1-r) * P_n + r * V_i\nwith altered vertex positions and variable contraction rates'
        };
    };
    return ModifiedSquareFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.ModifiedSquareFractal = ModifiedSquareFractal;


/***/ }),

/***/ "./src/fractals/chaos-game/NonRepeatSquareFractal.ts":
/*!***********************************************************!*\
  !*** ./src/fractals/chaos-game/NonRepeatSquareFractal.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NonRepeatSquareFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implementation of a Square fractal with non-repeating vertex selection
 */
var NonRepeatSquareFractal = /** @class */ (function (_super) {
    __extends(NonRepeatSquareFractal, _super);
    /**
     * Constructor for the Non-Repeat Square fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function NonRepeatSquareFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 50000; }
        return _super.call(this, canvasId, iterations) || this;
    }
    /**
     * Generates the Non-Repeat Square fractal
     */
    NonRepeatSquareFractal.prototype.generate = function () {
        var _this = this;
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        // Define the vertices of a square
        var padding = 50;
        var vertices = [
            { x: padding, y: padding },
            { x: width - padding, y: padding },
            { x: width - padding, y: height - padding },
            { x: padding, y: height - padding } // bottom-left
        ];
        // Draw the vertices
        this.ctx.fillStyle = '#FF5555';
        vertices.forEach(function (vertex) {
            _this.ctx.beginPath();
            _this.ctx.arc(vertex.x, vertex.y, 3, 0, Math.PI * 2);
            _this.ctx.fill();
        });
        // Choose random initial point
        var x = Math.random() * width;
        var y = Math.random() * height;
        // Track the previous vertex index
        var prevIndex = -1;
        // Set drawing style
        this.ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        // Run the chaos game
        for (var i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex (not the same as the previous one)
            var randomIndex = void 0;
            do {
                randomIndex = Math.floor(Math.random() * vertices.length);
            } while (randomIndex === prevIndex);
            prevIndex = randomIndex;
            var vertex = vertices[randomIndex];
            // Move halfway to the chosen vertex
            x = (x + vertex.x) / 2;
            y = (y + vertex.y) / 2;
            // Skip the first 20 iterations (transient phase)
            if (i > 20) {
                // Draw a point
                this.ctx.beginPath();
                this.ctx.rect(x, y, 1, 1);
                this.ctx.fill();
            }
        }
    };
    /**
     * Returns information about the Non-Repeat Square fractal
     */
    NonRepeatSquareFractal.prototype.getInfo = function () {
        return {
            title: 'Non-Repeat Square',
            description: 'A variant that prevents consecutive selection of the same vertex, creating more diverse patterns.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is determined by a non-repeating dice roll'
        };
    };
    return NonRepeatSquareFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.NonRepeatSquareFractal = NonRepeatSquareFractal;


/***/ }),

/***/ "./src/fractals/chaos-game/PentagonFractal.ts":
/*!****************************************************!*\
  !*** ./src/fractals/chaos-game/PentagonFractal.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.PentagonFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Pentagon Fractal - Creates a fractal using the chaos game method on a regular pentagon
 */
var PentagonFractal = /** @class */ (function (_super) {
    __extends(PentagonFractal, _super);
    /**
     * Creates a new Pentagon fractal
     * @param canvasId The canvas ID to draw on
     * @param iterations The number of iterations
     */
    function PentagonFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 40000; }
        var _this = _super.call(this, canvasId, iterations) || this;
        // Vertices of the pentagon
        _this.pentagonPoints = [];
        _this.contractionRatio = 0.618; // Golden ratio
        _this.iterations = 0;
        _this.iterationsCount = iterations;
        _this.colorPalette = [
            '#3F51B5',
            '#5E35B1',
            '#7B1FA2',
            '#8E24AA',
            '#9C27B0'
        ];
        return _this;
    }
    /**
     * Sets the contraction ratio for the pentagon fractal
     */
    PentagonFractal.prototype.setContractionRatio = function (ratio) {
        this.contractionRatio = ratio;
        this.generate();
    };
    /**
     * Initialize the pentagon vertices and starting point
     */
    PentagonFractal.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var centerX = this.canvas.width / 2;
        var centerY = this.canvas.height / 2;
        var radius = Math.min(this.canvas.width, this.canvas.height) * 0.4;
        // Create the pentagon vertices (5 points evenly distributed in a circle)
        this.pentagonPoints = [];
        for (var i = 0; i < 5; i++) {
            // Calculate angle for each vertex - starting from the top
            var angle = (Math.PI / 2) + (2 * Math.PI * i / 5);
            this.pentagonPoints.push([
                centerX + radius * Math.cos(angle),
                centerY - radius * Math.sin(angle)
            ]);
        }
        // Set starting point to center
        this.currentPoint = [centerX, centerY];
        this.startingPoint = this.currentPoint;
    };
    /**
     * Generate the fractal using the chaos game algorithm
     */
    PentagonFractal.prototype.generate = function () {
        if (!this.ctx)
            return;
        this.initialize();
        this.iterations = 0;
        // Skip a few iterations for convergence
        for (var i = 0; i < 20; i++) {
            var randomIndex = Math.floor(Math.random() * 5);
            var target = this.pentagonPoints[randomIndex];
            // Apply the chaos game rule: move toward the chosen vertex by contraction ratio
            this.currentPoint = [
                this.currentPoint[0] + this.contractionRatio * (target[0] - this.currentPoint[0]),
                this.currentPoint[1] + this.contractionRatio * (target[1] - this.currentPoint[1])
            ];
        }
        // Generate the fractal
        for (var i = 0; i < this.iterationsCount; i++) {
            // Choose a random vertex
            var randomIndex = Math.floor(Math.random() * 5);
            var target = this.pentagonPoints[randomIndex];
            // Apply the chaos game rule: move toward the chosen vertex by contraction ratio
            this.currentPoint = [
                this.currentPoint[0] + this.contractionRatio * (target[0] - this.currentPoint[0]),
                this.currentPoint[1] + this.contractionRatio * (target[1] - this.currentPoint[1])
            ];
            // Plot the point
            var colorIndex = randomIndex % this.colorPalette.length;
            this.plot(this.currentPoint, 1, this.colorPalette[colorIndex]);
            this.iterations++;
        }
    };
    /**
     * Plot a point with specific color
     */
    PentagonFractal.prototype.plot = function (point, size, color) {
        if (size === void 0) { size = 1; }
        var _a = __read(point, 2), x = _a[0], y = _a[1];
        this.ctx.fillStyle = color || this.colorPalette[Math.floor(Math.random() * this.colorPalette.length)];
        this.ctx.fillRect(x - size / 2, y - size / 2, size, size);
    };
    /**
     * Return information about the fractal
     */
    PentagonFractal.prototype.getInfo = function () {
        return {
            title: 'Pentagon Fractal',
            description: 'The Pentagon Fractal is created using the chaos game algorithm on a regular pentagon. '
                + 'Starting from a random point, each iteration involves randomly selecting one of the five vertices '
                + 'of the pentagon and moving a fraction of the distance from the current point toward that vertex. '
                + 'This process creates an intricate pattern with five-fold symmetry.\n\n'
                + 'With a contraction ratio around 0.618 (the golden ratio), the resulting pattern reveals fascinating '
                + 'pentagonal symmetry and self-similar structures that emerge from the simple iterative process.',
            formula: 'P_{n+1} = P_n + r(V_i - P_n)\n\n'
                + 'Where:\n'
                + '- P_n is the current point\n'
                + '- V_i is a randomly chosen vertex from the 5 vertices of the pentagon\n'
                + '- r is the contraction ratio (0.618, the golden ratio)\n'
                + '- Starting from a point within the pentagon'
        };
    };
    return PentagonFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.PentagonFractal = PentagonFractal;


/***/ }),

/***/ "./src/fractals/chaos-game/RestrictedSquareFractal.ts":
/*!************************************************************!*\
  !*** ./src/fractals/chaos-game/RestrictedSquareFractal.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RestrictedSquareFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implementation of the Restricted Square Fractal using chaos game
 */
var RestrictedSquareFractal = /** @class */ (function (_super) {
    __extends(RestrictedSquareFractal, _super);
    /**
     * Constructor for the Restricted Square fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function RestrictedSquareFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 10000; }
        var _this = _super.call(this, canvasId, iterations) || this;
        _this.points = [];
        return _this;
    }
    /**
     * Initialize the Restricted Square fractal
     * Override to set up square vertices
     */
    RestrictedSquareFractal.prototype.initialize = function () {
        var _this = this;
        _super.prototype.initialize.call(this);
        var w = this.canvas.width;
        var h = this.canvas.height;
        // Set up square points
        this.points = [
            [20, 20],
            [w - 20, 20],
            [20, h - 20],
            [w - 20, h - 20] // bottom-right (3)
        ];
        // Clear canvas before plotting vertices
        this.clear();
        // Draw the vertices
        this.points.forEach(function (p) { return _this.plot(p, 3); });
    };
    /**
     * Generates the Restricted Square fractal using the chaos game algorithm
     * with restrictions that prevent movement to opposite corners
     */
    RestrictedSquareFractal.prototype.generate = function () {
        this.initialize();
        var currentPoint = this.startingPoint;
        this.plot(currentPoint);
        var previousVertex = -1;
        // Restriction rules - cannot move to opposite corner
        var restrictions = {
            0: 3,
            1: 2,
            2: 1,
            3: 0 // can't go from bottom-right to top-left
        };
        for (var i = 0; i < this.iterationsCount; i++) {
            // Pick a random vertex that isn't restricted
            var randomIndex = void 0;
            do {
                randomIndex = Math.floor(Math.random() * 4);
            } while (previousVertex !== -1 && randomIndex === restrictions[previousVertex]);
            var targetPoint = this.points[randomIndex];
            // Move halfway to that vertex
            currentPoint = this.midpoint(currentPoint, targetPoint);
            this.plot(currentPoint);
            previousVertex = randomIndex;
        }
    };
    /**
     * Returns information about the Restricted Square fractal
     */
    RestrictedSquareFractal.prototype.getInfo = function () {
        return {
            title: 'Restricted Square Fractal',
            description: 'A square fractal with restrictions that prevent certain vertex combinations, creating interesting patterns.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i cannot be opposite to the previously chosen vertex'
        };
    };
    return RestrictedSquareFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.RestrictedSquareFractal = RestrictedSquareFractal;


/***/ }),

/***/ "./src/fractals/chaos-game/SierpinskiCarpet.ts":
/*!*****************************************************!*\
  !*** ./src/fractals/chaos-game/SierpinskiCarpet.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SierpinskiCarpet = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implementation of the Sierpinski Carpet using chaos game
 */
var SierpinskiCarpet = /** @class */ (function (_super) {
    __extends(SierpinskiCarpet, _super);
    /**
     * Constructor for the Sierpinski Carpet fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function SierpinskiCarpet(canvasId, iterations) {
        if (iterations === void 0) { iterations = 50000; }
        var _this = _super.call(this, canvasId, iterations) || this;
        _this.points = [];
        _this.colorPalette = ["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00"];
        return _this;
    }
    /**
     * Initialize the Sierpinski Carpet fractal
     * Override to set up the 8 vertices of the carpet
     */
    SierpinskiCarpet.prototype.initialize = function () {
        var _this = this;
        _super.prototype.initialize.call(this);
        var w = this.canvas.width;
        var h = this.canvas.height;
        var padding = 20;
        // Set up 8 points around a square (excluding the center)
        this.points = [
            [padding, padding],
            [w / 2, padding],
            [w - padding, padding],
            [w - padding, h / 2],
            [w - padding, h - padding],
            [w / 2, h - padding],
            [padding, h - padding],
            [padding, h / 2] // middle-left (7)
        ];
        // Clear canvas before plotting vertices
        this.clear();
        // Draw the vertices
        this.points.forEach(function (p, i) {
            _this.ctx.fillStyle = _this.colorPalette[i % _this.colorPalette.length];
            _this.ctx.beginPath();
            _this.ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
            _this.ctx.fill();
        });
    };
    /**
     * Generates the Sierpinski Carpet fractal using the chaos game algorithm
     * with a 2/3 ratio instead of 1/2
     */
    SierpinskiCarpet.prototype.generate = function () {
        this.initialize();
        var currentPoint = this.startingPoint;
        var previousVertex = -1;
        // Skip first 20 iterations (transient phase)
        for (var i = 0; i < 20; i++) {
            var randomIndex = Math.floor(Math.random() * 8);
            var targetPoint = this.points[randomIndex];
            // Move 2/3 of the way to the chosen vertex
            currentPoint = [
                currentPoint[0] + (targetPoint[0] - currentPoint[0]) * (2 / 3),
                currentPoint[1] + (targetPoint[1] - currentPoint[1]) * (2 / 3)
            ];
            previousVertex = randomIndex;
        }
        // Main iteration loop
        for (var i = 0; i < this.iterationsCount; i++) {
            // Pick a random vertex
            var randomIndex = Math.floor(Math.random() * 8);
            var targetPoint = this.points[randomIndex];
            // Move 2/3 of the way to the chosen vertex
            currentPoint = [
                currentPoint[0] + (targetPoint[0] - currentPoint[0]) * (2 / 3),
                currentPoint[1] + (targetPoint[1] - currentPoint[1]) * (2 / 3)
            ];
            // Use a color that relates to the vertex chosen
            this.ctx.fillStyle = this.colorPalette[randomIndex % this.colorPalette.length];
            // Draw a point (smaller for more detail)
            this.ctx.beginPath();
            this.ctx.rect(currentPoint[0], currentPoint[1], 1, 1);
            this.ctx.fill();
            previousVertex = randomIndex;
        }
    };
    /**
     * Returns information about the Sierpinski Carpet fractal
     */
    SierpinskiCarpet.prototype.getInfo = function () {
        return {
            title: 'Sierpinski Carpet',
            description: 'A 2D generalization of the Sierpinski Triangle. This fractal uses 8 vertices arranged in a square pattern and a 2/3 contraction ratio to create a self-similar pattern with a square hole in the middle.',
            formula: 'P_{n+1} = P_n + 2/3(V_i - P_n)\nwhere V_i is a randomly chosen vertex from the 8 vertices'
        };
    };
    return SierpinskiCarpet;
}(ChaosGameBase_1.ChaosGameBase));
exports.SierpinskiCarpet = SierpinskiCarpet;


/***/ }),

/***/ "./src/fractals/chaos-game/TriangleFractal.ts":
/*!****************************************************!*\
  !*** ./src/fractals/chaos-game/TriangleFractal.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TriangleFractal = void 0;
var ChaosGameBase_1 = __webpack_require__(/*! ./ChaosGameBase */ "./src/fractals/chaos-game/ChaosGameBase.ts");
/**
 * Implementation of the Sierpinski Triangle fractal using chaos game
 */
var TriangleFractal = /** @class */ (function (_super) {
    __extends(TriangleFractal, _super);
    /**
     * Constructor for the Triangle fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param iterations - The number of iterations to perform
     */
    function TriangleFractal(canvasId, iterations) {
        if (iterations === void 0) { iterations = 10000; }
        var _this = _super.call(this, canvasId, iterations) || this;
        _this.animationId = null;
        _this.isAnimating = false;
        _this.points = [];
        return _this;
    }
    /**
     * Initialize the Triangle fractal
     * Override to set up triangle vertices
     */
    TriangleFractal.prototype.initialize = function () {
        var _this = this;
        _super.prototype.initialize.call(this);
        var w = this.canvas.width;
        var h = this.canvas.height;
        // Set up triangle points
        this.points = [
            [w / 2, 20],
            [20, h - 20],
            [w - 20, h - 20] // bottom right
        ];
        // Clear canvas before plotting vertices
        this.clear();
        // Draw the vertices
        this.points.forEach(function (p) { return _this.plot(p, 3); });
    };
    /**
     * Generates the Triangle fractal using the chaos game algorithm
     * @param animate - Whether to animate the generation or not
     * @param speed - Animation speed (points per frame)
     */
    TriangleFractal.prototype.generate = function (animate, speed) {
        if (animate === void 0) { animate = false; }
        if (speed === void 0) { speed = 100; }
        // Stop any ongoing animation
        this.stopAnimation();
        this.initialize();
        if (animate) {
            this.animateGeneration(speed);
        }
        else {
            // Non-animated generation
            var currentPoint = this.startingPoint;
            this.plot(currentPoint);
            for (var i = 0; i < this.iterationsCount; i++) {
                // Pick a random vertex
                var randomIndex = Math.floor(Math.random() * this.points.length);
                var targetPoint = this.points[randomIndex];
                // Move halfway to that vertex
                currentPoint = this.midpoint(currentPoint, targetPoint);
                this.plot(currentPoint);
            }
        }
    };
    /**
     * Animates the generation of the fractal
     * @param pointsPerFrame - Number of points to draw per animation frame
     */
    TriangleFractal.prototype.animateGeneration = function (pointsPerFrame) {
        var _this = this;
        if (pointsPerFrame === void 0) { pointsPerFrame = 100; }
        var currentPoint = this.startingPoint;
        var step = 0;
        this.plot(currentPoint);
        this.isAnimating = true;
        var animate = function () {
            if (step >= _this.iterationsCount || !_this.isAnimating) {
                _this.isAnimating = false;
                _this.animationId = null;
                return;
            }
            // Draw multiple points per frame for better performance
            for (var i = 0; i < pointsPerFrame && step < _this.iterationsCount; i++, step++) {
                // Pick a random vertex
                var randomIndex = Math.floor(Math.random() * _this.points.length);
                var targetPoint = _this.points[randomIndex];
                // Move halfway to that vertex
                currentPoint = _this.midpoint(currentPoint, targetPoint);
                _this.plot(currentPoint);
            }
            _this.animationId = requestAnimationFrame(animate);
        };
        this.animationId = requestAnimationFrame(animate);
    };
    /**
     * Stops any ongoing animation
     */
    TriangleFractal.prototype.stopAnimation = function () {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        this.isAnimating = false;
    };
    /**
     * Returns whether the fractal is currently animating
     */
    TriangleFractal.prototype.isCurrentlyAnimating = function () {
        return this.isAnimating;
    };
    /**
     * Returns information about the Triangle fractal
     */
    TriangleFractal.prototype.getInfo = function () {
        return {
            title: 'Triangle Fractal',
            description: 'The Sierpinski Triangle emerges from a simple chaos game: repeatedly move halfway towards a randomly chosen vertex of a triangle.',
            formula: 'P_{n+1} = (P_n + V_i) / 2\nwhere V_i is a randomly chosen vertex'
        };
    };
    return TriangleFractal;
}(ChaosGameBase_1.ChaosGameBase));
exports.TriangleFractal = TriangleFractal;


/***/ }),

/***/ "./src/fractals/mathematical/BurningShipFractal.ts":
/*!*********************************************************!*\
  !*** ./src/fractals/mathematical/BurningShipFractal.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BurningShipFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
var Complex_1 = __webpack_require__(/*! ../Complex */ "./src/fractals/Complex.ts");
/**
 * Implementation of the Burning Ship Fractal
 */
var BurningShipFractal = /** @class */ (function (_super) {
    __extends(BurningShipFractal, _super);
    /**
     * Constructor for the Burning Ship fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function BurningShipFractal(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 100; }
        var _this = _super.call(this, canvasId, maxIterations) || this;
        _this.centerX = -0.5;
        _this.centerY = -0.5;
        return _this;
    }
    /**
     * Generates the Burning Ship fractal
     */
    BurningShipFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        var imageData = this.ctx.createImageData(width, height);
        var data = imageData.data;
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var c = this.mapToComplex(x, y);
                var z = new Complex_1.Complex(0, 0);
                var iterations = 0;
                // Burning Ship iteration: z = (|Re(z)| + i|Im(z)|)^2 + c
                while (iterations < this.maxIterations && z.abs() < 2) {
                    // Take absolute value of real and imaginary parts before squaring
                    var absRe = Math.abs(z.real);
                    var absIm = Math.abs(z.imag);
                    var zAbs = new Complex_1.Complex(absRe, absIm);
                    z = zAbs.square().add(c);
                    iterations++;
                }
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
                else {
                    // Point is outside the set - create a fiery color scheme
                    // Use a smooth coloring algorithm
                    var smoothColor = iterations + 1 - Math.log2(Math.log2(z.abs()));
                    var normalized = smoothColor / this.maxIterations;
                    // Fiery color scheme
                    var r = void 0, g = void 0, b = void 0;
                    if (normalized < 0.5) {
                        // Black to red
                        r = Math.floor(normalized * 2 * 255);
                        g = 0;
                        b = 0;
                    }
                    else if (normalized < 0.75) {
                        // Red to yellow
                        r = 255;
                        g = Math.floor((normalized - 0.5) * 4 * 255);
                        b = 0;
                    }
                    else {
                        // Yellow to white
                        r = 255;
                        g = 255;
                        b = Math.floor((normalized - 0.75) * 4 * 255);
                    }
                    this.setPixelDirectColor(data, x, y, width, r, g, b);
                }
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };
    /**
     * Returns information about the Burning Ship fractal
     */
    BurningShipFractal.prototype.getInfo = function () {
        return {
            title: 'Burning Ship Fractal',
            description: 'The Burning Ship fractal modifies the Mandelbrot formula by taking the absolute value of real and imaginary components before squaring.',
            formula: 'z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)^2 + c\nz_0 = 0'
        };
    };
    return BurningShipFractal;
}(MathFractalBase_1.MathFractalBase));
exports.BurningShipFractal = BurningShipFractal;


/***/ }),

/***/ "./src/fractals/mathematical/JuliaFractal.ts":
/*!***************************************************!*\
  !*** ./src/fractals/mathematical/JuliaFractal.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.JuliaFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
var Complex_1 = __webpack_require__(/*! ../Complex */ "./src/fractals/Complex.ts");
/**
 * Implementation of the Julia Set fractal
 */
var JuliaFractal = /** @class */ (function (_super) {
    __extends(JuliaFractal, _super);
    /**
     * Constructor for the Julia fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function JuliaFractal(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 100; }
        var _this = _super.call(this, canvasId, maxIterations) || this;
        _this.juliaConstant = new Complex_1.Complex(-0.7, 0.27); // Default value for interesting Julia set
        return _this;
    }
    /**
     * Sets the complex parameter for the Julia set
     *
     * @param real - Real part of the complex parameter
     * @param imag - Imaginary part of the complex parameter
     */
    JuliaFractal.prototype.setParameters = function (real, imag) {
        this.juliaConstant = new Complex_1.Complex(real, imag);
        this.generate();
    };
    /**
     * Generates the Julia set fractal
     */
    JuliaFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        var imageData = this.ctx.createImageData(width, height);
        var data = imageData.data;
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                // Map canvas coordinates to complex plane
                var z = this.mapToComplex(x, y);
                var iterations = 0;
                // Julia set iteration: z = z^2 + c, where c is a constant
                while (iterations < this.maxIterations && z.abs() < 2) {
                    z = z.square().add(this.juliaConstant);
                    iterations++;
                }
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
                else {
                    // Point is outside the set - color based on how quickly it escaped
                    // Use a smooth coloring algorithm
                    var smoothColor = (iterations + 1 - Math.log2(Math.log2(z.abs()))) / this.maxIterations;
                    var hue = ((360 * smoothColor) % 360) / 360;
                    var saturation = 0.8;
                    var lightness = 0.5;
                    // Convert HSL to RGB for direct color setting
                    var _a = __read(this.hslToRgb(hue, saturation, lightness), 3), r = _a[0], g = _a[1], b = _a[2];
                    this.setPixelDirectColor(data, x, y, width, Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
                }
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };
    /**
     * Returns information about the Julia fractal
     */
    JuliaFractal.prototype.getInfo = function () {
        return {
            title: 'Julia Set',
            description: 'Julia sets are related to the Mandelbrot set, but with a fixed complex parameter. Different parameters create wildly different patterns.',
            formula: 'z_{n+1} = z_n^2 + c\nwhere c is fixed and z_0 is the point being tested'
        };
    };
    return JuliaFractal;
}(MathFractalBase_1.MathFractalBase));
exports.JuliaFractal = JuliaFractal;


/***/ }),

/***/ "./src/fractals/mathematical/KochSnowflakeFractal.ts":
/*!***********************************************************!*\
  !*** ./src/fractals/mathematical/KochSnowflakeFractal.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.KochSnowflakeFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
/**
 * Implementation of the Koch Snowflake fractal
 */
var KochSnowflakeFractal = /** @class */ (function (_super) {
    __extends(KochSnowflakeFractal, _super);
    /**
     * Constructor for the Koch Snowflake fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param depth - The recursion depth of the Koch snowflake
     */
    function KochSnowflakeFractal(canvasId, depth) {
        if (depth === void 0) { depth = 4; }
        var _this = _super.call(this, canvasId, depth) || this;
        _this.depth = 4;
        _this.size = 300;
        _this.needsRedraw = true;
        _this.depth = depth;
        _this.zoom = 1.0; // Default zoom level
        return _this;
    }
    /**
     * Set the size of the snowflake
     * @param size - The size value
     */
    KochSnowflakeFractal.prototype.setSize = function (size) {
        this.size = size;
        this.needsRedraw = true;
    };
    /**
     * Draw a single Koch curve segment
     * @param ctx - The rendering context
     * @param x1 - Start x coordinate
     * @param y1 - Start y coordinate
     * @param x2 - End x coordinate
     * @param y2 - End y coordinate
     * @param depth - Current recursion depth
     */
    KochSnowflakeFractal.prototype.drawKochCurve = function (ctx, x1, y1, x2, y2, depth) {
        if (depth === 0) {
            // Base case: draw a straight line
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return;
        }
        // Calculate the positions of the 4 new points
        // Vector from start to end
        var dx = x2 - x1;
        var dy = y2 - y1;
        // First third point
        var x3 = x1 + dx / 3;
        var y3 = y1 + dy / 3;
        // Last third point
        var x4 = x1 + 2 * dx / 3;
        var y4 = y1 + 2 * dy / 3;
        // Middle point (creating the "bump")
        // Rotate the vector (dx/3, dy/3) by 60 degrees counterclockwise
        var angle = Math.PI / 3; // 60 degrees
        var xMiddle = x3 + Math.cos(angle) * dx / 3 - Math.sin(angle) * dy / 3;
        var yMiddle = y3 + Math.sin(angle) * dx / 3 + Math.cos(angle) * dy / 3;
        // Recursively draw the 4 segments
        this.drawKochCurve(ctx, x1, y1, x3, y3, depth - 1);
        this.drawKochCurve(ctx, x3, y3, xMiddle, yMiddle, depth - 1);
        this.drawKochCurve(ctx, xMiddle, yMiddle, x4, y4, depth - 1);
        this.drawKochCurve(ctx, x4, y4, x2, y2, depth - 1);
    };
    /**
     * Generates the Koch Snowflake fractal
     */
    KochSnowflakeFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        // Calculate the size based on zoom
        var size = Math.min(width, height) * 0.7 * this.zoom;
        // Calculate the vertices of the equilateral triangle
        var centerX = width / 2;
        var centerY = height / 2;
        // Height of the equilateral triangle = size * sin(60°)
        var triangleHeight = size * Math.sin(Math.PI / 3);
        // The three points of the initial equilateral triangle
        var x1 = centerX; // Top point
        var y1 = centerY - triangleHeight / 2;
        var x2 = centerX - size / 2; // Bottom left
        var y2 = centerY + triangleHeight / 2;
        var x3 = centerX + size / 2; // Bottom right
        var y3 = centerY + triangleHeight / 2;
        // Set stroke style
        this.ctx.strokeStyle = '#00ffff';
        this.ctx.lineWidth = 1;
        // Draw the three sides of the triangle
        this.drawKochCurve(this.ctx, x1, y1, x2, y2, this.depth);
        this.drawKochCurve(this.ctx, x2, y2, x3, y3, this.depth);
        this.drawKochCurve(this.ctx, x3, y3, x1, y1, this.depth);
    };
    /**
     * Get information about this fractal
     */
    KochSnowflakeFractal.prototype.getInfo = function () {
        return {
            title: 'Koch Snowflake',
            description: 'A classic fractal that starts with an equilateral triangle and recursively replaces the middle third of each line segment with a triangular bump.',
            formula: 'Recursive geometric construction'
        };
    };
    return KochSnowflakeFractal;
}(MathFractalBase_1.MathFractalBase));
exports.KochSnowflakeFractal = KochSnowflakeFractal;


/***/ }),

/***/ "./src/fractals/mathematical/LyapunovFractal.ts":
/*!******************************************************!*\
  !*** ./src/fractals/mathematical/LyapunovFractal.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LyapunovFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
/**
 * Implementation of the Lyapunov fractal
 */
var LyapunovFractal = /** @class */ (function (_super) {
    __extends(LyapunovFractal, _super);
    /**
     * Constructor for the Lyapunov fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function LyapunovFractal(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 100; }
        var _this = _super.call(this, canvasId, maxIterations) || this;
        _this.sequence = 'AB';
        _this.centerX = 0;
        _this.centerY = 0;
        return _this;
    }
    /**
     * Set the sequence string
     */
    LyapunovFractal.prototype.setSequence = function (sequence) {
        this.sequence = sequence.toUpperCase();
        this.generate();
    };
    /**
     * Generates the Lyapunov fractal
     */
    LyapunovFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        var imageData = this.ctx.createImageData(width, height);
        var data = imageData.data;
        // Define the range for r values
        var minA = 2.0;
        var maxA = 4.0;
        var minB = 2.0;
        var maxB = 4.0;
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                // Map canvas coordinates to parameter space
                var a = minA + (maxA - minA) * x / width;
                var b = minB + (maxB - minB) * (height - y) / height;
                // Calculate Lyapunov exponent
                var lyapunov = this.calculateLyapunovExponent(a, b);
                // Color based on Lyapunov exponent
                if (isNaN(lyapunov)) {
                    // Black for undefined
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
                else if (lyapunov < 0) {
                    // Stable (negative exponent) - blue to green scale
                    var intensity = Math.min(1.0, Math.abs(lyapunov / 2));
                    var r = 0;
                    var g = Math.round(255 * intensity);
                    var b_1 = Math.round(255 * (1 - intensity));
                    this.setPixelDirectColor(data, x, y, width, r, g, b_1);
                }
                else {
                    // Chaotic (positive exponent) - yellow to red scale
                    var intensity = Math.min(1.0, lyapunov);
                    var r = 255;
                    var g = Math.round(255 * (1 - intensity));
                    var b_2 = 0;
                    this.setPixelDirectColor(data, x, y, width, r, g, b_2);
                }
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };
    /**
     * Calculate the Lyapunov exponent for given parameters
     */
    LyapunovFractal.prototype.calculateLyapunovExponent = function (a, b) {
        // Initial value
        var x = 0.5;
        // Parameters array based on the sequence
        var rValues = [];
        for (var i = 0; i < this.sequence.length; i++) {
            rValues.push(this.sequence[i] === 'A' ? a : b);
        }
        // Warmup iterations to get on the attractor
        var warmup = Math.min(100, this.maxIterations / 2);
        for (var i = 0; i < warmup; i++) {
            var r = rValues[i % rValues.length];
            x = r * x * (1 - x);
            if (x <= 0 || x >= 1 || isNaN(x)) {
                return NaN; // Diverged
            }
        }
        // Calculate Lyapunov exponent
        var sum = 0;
        for (var i = 0; i < this.maxIterations; i++) {
            var r = rValues[i % rValues.length];
            var derivative = Math.abs(r * (1 - 2 * x));
            sum += Math.log(derivative);
            // Next iteration
            x = r * x * (1 - x);
            if (x <= 0 || x >= 1 || isNaN(x)) {
                return NaN; // Diverged
            }
        }
        return sum / this.maxIterations;
    };
    /**
     * Returns information about the Lyapunov fractal
     */
    LyapunovFractal.prototype.getInfo = function () {
        return {
            title: 'Lyapunov Fractal',
            description: 'Maps the stability of a dynamical system with regions of chaos (positive exponents) and stability (negative exponents).',
            formula: 'x_{n+1} = r·x_n·(1-x_n)\nLyapunov exponent: λ = lim_{n→∞} (1/n)∑ln|r(1-2x_k)|'
        };
    };
    return LyapunovFractal;
}(MathFractalBase_1.MathFractalBase));
exports.LyapunovFractal = LyapunovFractal;


/***/ }),

/***/ "./src/fractals/mathematical/MandelbrotFractal.ts":
/*!********************************************************!*\
  !*** ./src/fractals/mathematical/MandelbrotFractal.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.MandelbrotFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
var Complex_1 = __webpack_require__(/*! ../Complex */ "./src/fractals/Complex.ts");
/**
 * Implementation of the Mandelbrot Set fractal
 */
var MandelbrotFractal = /** @class */ (function (_super) {
    __extends(MandelbrotFractal, _super);
    /**
     * Constructor for the Mandelbrot fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function MandelbrotFractal(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 100; }
        var _this = _super.call(this, canvasId, maxIterations) || this;
        _this.centerX = -0.5; // Center of the Mandelbrot set
        _this.centerY = 0;
        return _this;
    }
    /**
     * Generates the Mandelbrot set fractal
     */
    MandelbrotFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        var imageData = this.ctx.createImageData(width, height);
        var data = imageData.data;
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var c = this.mapToComplex(x, y);
                var z = new Complex_1.Complex(0, 0);
                var iterations = 0;
                var smooth = 0;
                // Mandelbrot iteration: z = z^2 + c
                while (iterations < this.maxIterations && z.abs() < 2) {
                    z = z.square().add(c);
                    iterations++;
                }
                // Smooth coloring logarithmic bands
                if (iterations < this.maxIterations) {
                    smooth = z.abs();
                }
                // Get color
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
                else {
                    // Point is outside the set - color based on how quickly it escaped
                    var hue = (360 * iterations / this.maxIterations) % 360;
                    var saturation = 100;
                    var lightness = 50;
                    // Convert HSL to RGB
                    var _a = __read(this.hslToRgb(hue / 360, saturation / 100, lightness / 100), 3), r = _a[0], g = _a[1], b = _a[2];
                    this.setPixelDirectColor(data, x, y, width, Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
                }
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };
    /**
     * Returns information about the Mandelbrot fractal
     */
    MandelbrotFractal.prototype.getInfo = function () {
        return {
            title: 'Mandelbrot Set',
            description: 'The famous Mandelbrot set is formed by iterating z = z² + c and observing which complex values of c cause the sequence to remain bounded.',
            formula: 'z_{n+1} = z_n^2 + c\nz_0 = 0\nSet contains c where |z_n| remains bounded as n→∞'
        };
    };
    return MandelbrotFractal;
}(MathFractalBase_1.MathFractalBase));
exports.MandelbrotFractal = MandelbrotFractal;


/***/ }),

/***/ "./src/fractals/mathematical/MathFractalBase.ts":
/*!******************************************************!*\
  !*** ./src/fractals/mathematical/MathFractalBase.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MathFractalBase = void 0;
var FractalBase_1 = __webpack_require__(/*! ../FractalBase */ "./src/fractals/FractalBase.ts");
var Complex_1 = __webpack_require__(/*! ../Complex */ "./src/fractals/Complex.ts");
/**
 * Base class for mathematical fractals
 */
var MathFractalBase = /** @class */ (function (_super) {
    __extends(MathFractalBase, _super);
    /**
     * Constructor for the mathematical fractal base class
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function MathFractalBase(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 100; }
        var _this = _super.call(this, canvasId) || this;
        _this.maxIterations = 100;
        _this.zoom = 1.0;
        _this.centerX = 0;
        _this.centerY = 0;
        _this.colorMode = 'smooth'; // 'smooth' or 'discrete'
        _this.maxIterations = maxIterations;
        _this.colorPalette = [
            '#ff0000', '#ff7f00', '#ffff00', '#00ff00',
            '#0000ff', '#4b0082', '#8f00ff', '#ff00ff'
        ];
        return _this;
    }
    /**
     * Sets the maximum iterations for the fractal
     */
    MathFractalBase.prototype.setMaxIterations = function (iterations) {
        this.maxIterations = iterations;
        this.generate();
    };
    /**
     * Sets the zoom level for the fractal
     */
    MathFractalBase.prototype.setZoom = function (zoom) {
        this.zoom = zoom;
        this.generate();
    };
    /**
     * Sets the center point for the fractal
     */
    MathFractalBase.prototype.setCenter = function (x, y) {
        this.centerX = x;
        this.centerY = y;
        this.generate();
    };
    /**
     * Gets the color for a point based on iteration count
     */
    MathFractalBase.prototype.getColor = function (iterations, maxIterations, smooth) {
        if (smooth === void 0) { smooth = 0; }
        if (iterations === maxIterations) {
            return '#000000'; // Black for points in the set
        }
        if (this.colorMode === 'smooth') {
            // Smooth coloring formula
            var hue = 360 * (iterations + 1 - Math.log2(Math.log2(smooth))) / maxIterations;
            hue = hue % 360;
            return "hsl(" + hue + ", 100%, 50%)";
        }
        else {
            // Discrete coloring
            var colorIndex = iterations % this.colorPalette.length;
            return this.colorPalette[colorIndex];
        }
    };
    /**
     * Maps a canvas coordinate to a complex plane point
     */
    MathFractalBase.prototype.mapToComplex = function (x, y) {
        if (!this.canvas) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        // Aspect ratio correction
        var aspectRatio = width / height;
        var scale = 2.0 / (this.zoom * Math.min(width, height));
        var real = (x - width / 2) * scale * aspectRatio + this.centerX;
        var imag = (y - height / 2) * scale + this.centerY;
        return new Complex_1.Complex(real, imag);
    };
    /**
     * Helper function to convert HSL to RGB
     */
    MathFractalBase.prototype.hslToRgb = function (h, s, l) {
        var r, g, b;
        if (s === 0) {
            r = g = b = l; // Achromatic
        }
        else {
            var hue2rgb = function (p, q, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [r, g, b];
    };
    /**
     * Helper function to set pixel color directly in image data
     */
    MathFractalBase.prototype.setPixelDirectColor = function (data, x, y, width, r, g, b) {
        var idx = (y * width + x) * 4;
        data[idx] = r;
        data[idx + 1] = g;
        data[idx + 2] = b;
        data[idx + 3] = 255; // Alpha
    };
    return MathFractalBase;
}(FractalBase_1.FractalBase));
exports.MathFractalBase = MathFractalBase;


/***/ }),

/***/ "./src/fractals/mathematical/MathFractalModule.ts":
/*!********************************************************!*\
  !*** ./src/fractals/mathematical/MathFractalModule.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Mathematical Fractals Module - Initializes and manages complex mathematical fractals
 */
exports.__esModule = true;
exports.initMathFractals = void 0;
var MandelbrotFractal_1 = __webpack_require__(/*! ./MandelbrotFractal */ "./src/fractals/mathematical/MandelbrotFractal.ts");
var JuliaFractal_1 = __webpack_require__(/*! ./JuliaFractal */ "./src/fractals/mathematical/JuliaFractal.ts");
var BurningShipFractal_1 = __webpack_require__(/*! ./BurningShipFractal */ "./src/fractals/mathematical/BurningShipFractal.ts");
var NewtonFractal_1 = __webpack_require__(/*! ./NewtonFractal */ "./src/fractals/mathematical/NewtonFractal.ts");
var LyapunovFractal_1 = __webpack_require__(/*! ./LyapunovFractal */ "./src/fractals/mathematical/LyapunovFractal.ts");
var PhoenixFractal_1 = __webpack_require__(/*! ./PhoenixFractal */ "./src/fractals/mathematical/PhoenixFractal.ts");
var SierpinskiTriangleFractal_1 = __webpack_require__(/*! ./SierpinskiTriangleFractal */ "./src/fractals/mathematical/SierpinskiTriangleFractal.ts");
var KochSnowflakeFractal_1 = __webpack_require__(/*! ./KochSnowflakeFractal */ "./src/fractals/mathematical/KochSnowflakeFractal.ts");
var FractalCardFactory_1 = __webpack_require__(/*! ../../components/FractalCardFactory */ "./src/components/FractalCardFactory.ts");
var FractalControlConfig_1 = __webpack_require__(/*! ../../components/FractalControlConfig */ "./src/components/FractalControlConfig.ts");
/**
 * Initialize all mathematical fractals
 * @param container The container element where fractal cards will be added
 */
function initMathFractals(container) {
    // Mandelbrot Set
    initMandelbrotFractal(container);
    // Julia Set
    initJuliaFractal(container);
    // Burning Ship Fractal
    initBurningShipFractal(container);
    // Newton Fractal
    initNewtonFractal(container);
    // Lyapunov Fractal
    initLyapunovFractal(container);
    // Phoenix Fractal
    initPhoenixFractal(container);
    // Sierpinski Triangle Fractal
    initSierpinskiTriangleFractal(container);
    // Koch Snowflake Fractal
    initKochSnowflakeFractal(container);
}
exports.initMathFractals = initMathFractals;
/**
 * Initialize the Mandelbrot Set fractal
 */
function initMandelbrotFractal(container) {
    var fractal = new MandelbrotFractal_1.MandelbrotFractal('mandelbrot-canvas');
    var controls = [
        FractalControlConfig_1.createMaxIterationsControl(function (value) { return fractal.setMaxIterations(value); }),
        FractalControlConfig_1.createZoomControl(function (value) { return fractal.setZoom(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Mandelbrot Set',
        description: 'The famous Mandelbrot set is formed by iterating z = z² + c and observing which complex values of c cause the sequence to remain bounded.',
        formula: 'z_{n+1} = z_n^2 + c\nz_0 = 0\nSet contains c where |z_n| remains bounded as n→∞',
        controlConfigs: controls,
        canvasId: 'mandelbrot-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Julia Set fractal
 */
function initJuliaFractal(container) {
    var fractal = new JuliaFractal_1.JuliaFractal('julia-canvas');
    var controls = [
        FractalControlConfig_1.createComplexParamControl('real', 'Real Component', -0.7, function (value) {
            var _a;
            return fractal.setParameters(value, parseFloat(((_a = document.getElementById('julia-canvas-imag')) === null || _a === void 0 ? void 0 : _a.value) || '0.27'));
        }),
        FractalControlConfig_1.createComplexParamControl('imag', 'Imaginary Component', 0.27, function (value) {
            var _a;
            return fractal.setParameters(parseFloat(((_a = document.getElementById('julia-canvas-real')) === null || _a === void 0 ? void 0 : _a.value) || '-0.7'), value);
        })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Julia Set',
        description: 'Julia sets are related to the Mandelbrot set, but with a fixed complex parameter. Different parameters create wildly different patterns.',
        formula: 'z_{n+1} = z_n^2 + c\nwhere c is fixed and z_0 is the point being tested',
        controlConfigs: controls,
        canvasId: 'julia-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Burning Ship fractal
 */
function initBurningShipFractal(container) {
    var fractal = new BurningShipFractal_1.BurningShipFractal('burning-canvas');
    var controls = [
        FractalControlConfig_1.createMaxIterationsControl(function (value) { return fractal.setMaxIterations(value); }),
        FractalControlConfig_1.createZoomControl(function (value) { return fractal.setZoom(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Burning Ship Fractal',
        description: 'The Burning Ship fractal modifies the Mandelbrot formula by taking the absolute value of real and imaginary components before squaring.',
        formula: 'z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)^2 + c\nz_0 = 0',
        controlConfigs: controls,
        canvasId: 'burning-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Newton fractal
 */
function initNewtonFractal(container) {
    var fractal = new NewtonFractal_1.NewtonFractal('newton-canvas');
    var controls = [
        {
            id: 'power',
            label: 'Polynomial Power',
            min: 3,
            max: 10,
            step: 1,
            defaultValue: 3,
            type: 'range',
            onChange: function (value) { return fractal.setPower(value); }
        },
        FractalControlConfig_1.createMaxIterationsControl(function (value) { return fractal.setMaxIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Newton Fractal',
        description: 'Visualizes Newton\'s method for finding roots of complex polynomials, with colors representing which root the algorithm converges to.',
        formula: 'z_{n+1} = z_n - f(z_n)/f\'(z_n)\nwhere f(z) = z^n - 1',
        controlConfigs: controls,
        canvasId: 'newton-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Lyapunov fractal
 */
function initLyapunovFractal(container) {
    var fractal = new LyapunovFractal_1.LyapunovFractal('lyapunov-canvas');
    var controls = [
        {
            id: 'sequence',
            label: 'Sequence',
            type: 'text',
            min: 0,
            max: 0,
            defaultValue: 'AB',
            onChange: function (value) { return fractal.setSequence(value); }
        },
        FractalControlConfig_1.createMaxIterationsControl(function (value) { return fractal.setMaxIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Lyapunov Fractal',
        description: 'Maps the stability of a dynamical system with regions of chaos (positive exponents) and stability (negative exponents).',
        formula: 'x_{n+1} = r·x_n·(1-x_n)\nLyapunov exponent: λ = lim_{n→∞} (1/n)∑ln|r(1-2x_k)|',
        controlConfigs: controls,
        canvasId: 'lyapunov-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Phoenix fractal
 */
function initPhoenixFractal(container) {
    var fractal = new PhoenixFractal_1.PhoenixFractal('phoenix-canvas');
    var controls = [
        {
            id: 'p',
            label: 'Parameter P',
            min: -1,
            max: 1,
            step: 0.01,
            defaultValue: 0.56,
            type: 'range',
            onChange: function (value) { return fractal.setParameter(value); }
        },
        FractalControlConfig_1.createMaxIterationsControl(function (value) { return fractal.setMaxIterations(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Phoenix Fractal',
        description: 'A generalization of the Mandelbrot set that incorporates previous iteration values, creating flame-like patterns.',
        formula: 'z_{n+1} = z_n^2 + c + p·z_{n-1}\nwhere p is a complex parameter',
        controlConfigs: controls,
        canvasId: 'phoenix-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Sierpinski Triangle fractal
 */
function initSierpinskiTriangleFractal(container) {
    var fractal = new SierpinskiTriangleFractal_1.SierpinskiTriangleFractal('sierpinski-math-canvas');
    var controls = [
        {
            id: 'depth',
            label: 'Recursion Depth',
            min: 1,
            max: 9,
            step: 1,
            defaultValue: 6,
            type: 'range',
            onChange: function (value) { return fractal.setDepth(value); }
        },
        FractalControlConfig_1.createZoomControl(function (value) { return fractal.setZoom(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Sierpinski Triangle',
        description: 'A deterministic implementation of the Sierpinski Triangle that uses recursive subdivision rather than the chaos game algorithm.',
        formula: 'Recursive subdivision: Begin with an equilateral triangle, divide into 4 equal triangles, remove center triangle, repeat for remaining triangles.',
        controlConfigs: controls,
        canvasId: 'sierpinski-math-canvas',
        container: container,
        fractal: fractal
    });
}
/**
 * Initialize the Koch Snowflake fractal
 */
function initKochSnowflakeFractal(container) {
    var fractal = new KochSnowflakeFractal_1.KochSnowflakeFractal('koch-math-canvas');
    var controls = [
        {
            id: 'depth',
            label: 'Iterations',
            min: 0,
            max: 6,
            step: 1,
            defaultValue: 4,
            type: 'range',
            onChange: function (value) { return fractal.setMaxIterations(value); }
        },
        {
            id: 'size',
            label: 'Size',
            min: 50,
            max: 400,
            step: 10,
            defaultValue: 300,
            type: 'range',
            onChange: function (value) { return fractal.setSize(value); }
        },
        FractalControlConfig_1.createZoomControl(function (value) { return fractal.setZoom(value); })
    ];
    FractalCardFactory_1.createFractalCard({
        title: 'Koch Snowflake',
        description: 'A classic fractal curve that starts with an equilateral triangle and recursively replaces the middle third of each line segment with a triangular bump.',
        formula: 'Recursive geometric construction: Begin with a triangle, replace middle third of each edge with an equilateral triangle, repeat for all new edges.',
        controlConfigs: controls,
        canvasId: 'koch-math-canvas',
        container: container,
        fractal: fractal
    });
}


/***/ }),

/***/ "./src/fractals/mathematical/NewtonFractal.ts":
/*!****************************************************!*\
  !*** ./src/fractals/mathematical/NewtonFractal.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.NewtonFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
var Complex_1 = __webpack_require__(/*! ../Complex */ "./src/fractals/Complex.ts");
/**
 * Implementation of Newton's method fractal
 */
var NewtonFractal = /** @class */ (function (_super) {
    __extends(NewtonFractal, _super);
    /**
     * Constructor for the Newton fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function NewtonFractal(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 30; }
        var _this = _super.call(this, canvasId, maxIterations) || this;
        _this.power = 3;
        _this.centerX = 0;
        _this.centerY = 0;
        return _this;
    }
    /**
     * Set the power for the polynomial
     */
    NewtonFractal.prototype.setPower = function (power) {
        this.power = power;
        this.generate();
    };
    /**
     * Generates the Newton fractal
     */
    NewtonFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        var imageData = this.ctx.createImageData(width, height);
        var data = imageData.data;
        // Precompute the roots of the polynomial z^n - 1
        var roots = [];
        for (var i = 0; i < this.power; i++) {
            var angle = (2 * Math.PI * i) / this.power;
            roots.push(new Complex_1.Complex(Math.cos(angle), Math.sin(angle)));
        }
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var z0 = this.mapToComplex(x, y);
                var z = z0.copy();
                // Newton's method iterations
                var iterations = 0;
                var rootIndex = -1;
                for (iterations = 0; iterations < this.maxIterations; iterations++) {
                    // f(z) = z^n - 1
                    // f'(z) = n * z^(n-1)
                    // Newton's method: z = z - f(z) / f'(z)
                    var zPower = z.pow(this.power);
                    var numerator = zPower.subtract(new Complex_1.Complex(1, 0));
                    var denominator = new Complex_1.Complex(this.power, 0).multiply(z.pow(this.power - 1));
                    var fraction = numerator.divide(denominator);
                    var newZ = z.subtract(fraction);
                    // Check if we're close to any root
                    for (var i = 0; i < roots.length; i++) {
                        if (newZ.subtract(roots[i]).abs() < 1e-6) {
                            rootIndex = i;
                            break;
                        }
                    }
                    if (rootIndex != -1)
                        break;
                    // Check if we're converging
                    if (z.subtract(newZ).abs() < 1e-10) {
                        // Find closest root
                        var minDist = Infinity;
                        for (var i = 0; i < roots.length; i++) {
                            var dist = newZ.subtract(roots[i]).abs();
                            if (dist < minDist) {
                                minDist = dist;
                                rootIndex = i;
                            }
                        }
                        break;
                    }
                    z = newZ;
                }
                if (rootIndex != -1) {
                    // Color based on which root we converged to
                    var hue = (360 * rootIndex / this.power) % 360;
                    var saturation = 100;
                    // Adjust lightness based on iterations
                    var lightness = 50 - (iterations / this.maxIterations) * 30;
                    var _a = __read(this.hslToRgb(hue / 360, saturation / 100, lightness / 100), 3), r = _a[0], g = _a[1], b = _a[2];
                    this.setPixelDirectColor(data, x, y, width, Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
                }
                else {
                    // Black for non-converging points
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };
    /**
     * Returns information about the Newton fractal
     */
    NewtonFractal.prototype.getInfo = function () {
        return {
            title: 'Newton Fractal',
            description: 'Visualizes Newton\'s method for finding roots of complex polynomials. Colors represent which root the algorithm converges to.',
            formula: 'z_{n+1} = z_n - f(z_n)/f\'(z_n)\nwhere f(z) = z^n - 1'
        };
    };
    return NewtonFractal;
}(MathFractalBase_1.MathFractalBase));
exports.NewtonFractal = NewtonFractal;


/***/ }),

/***/ "./src/fractals/mathematical/PhoenixFractal.ts":
/*!*****************************************************!*\
  !*** ./src/fractals/mathematical/PhoenixFractal.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PhoenixFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
var Complex_1 = __webpack_require__(/*! ../Complex */ "./src/fractals/Complex.ts");
/**
 * Implementation of the Phoenix fractal
 */
var PhoenixFractal = /** @class */ (function (_super) {
    __extends(PhoenixFractal, _super);
    /**
     * Constructor for the Phoenix fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum number of iterations to perform
     */
    function PhoenixFractal(canvasId, maxIterations) {
        if (maxIterations === void 0) { maxIterations = 100; }
        var _this = _super.call(this, canvasId, maxIterations) || this;
        _this.p = 0.56;
        _this.centerX = 0;
        _this.centerY = 0;
        _this.zoom = 0.8;
        return _this;
    }
    /**
     * Set the parameter 'p' for the Phoenix fractal
     */
    PhoenixFractal.prototype.setParameter = function (p) {
        this.p = p;
        this.generate();
    };
    /**
     * Generates the Phoenix fractal
     */
    PhoenixFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        var imageData = this.ctx.createImageData(width, height);
        var data = imageData.data;
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var c = this.mapToComplex(x, y);
                // Initial values
                var z = new Complex_1.Complex(0, 0);
                var zPrev = new Complex_1.Complex(0, 0);
                var iterations = 0;
                var smooth = 0;
                // Phoenix iteration: z = z^2 + c + p*zPrev
                while (iterations < this.maxIterations && z.abs() < 4) {
                    // Store previous z for next iteration
                    var zTemp = z;
                    // Phoenix formula
                    z = z.square().add(c).add(zPrev.multiply(new Complex_1.Complex(this.p, 0)));
                    zPrev = zTemp;
                    iterations++;
                }
                // Log escape time for smooth coloring
                if (iterations < this.maxIterations) {
                    var log_zn = Math.log(z.abs()) / 2;
                    var nu = Math.log(log_zn / Math.log(2)) / Math.log(2);
                    smooth = iterations + 1 - nu;
                }
                // Get color
                if (iterations === this.maxIterations) {
                    // Point is in the set - black
                    this.setPixelDirectColor(data, x, y, width, 0, 0, 0);
                }
                else {
                    // Point is outside the set - color based on escape time
                    // Use a fire-like palette for phoenix
                    var t = smooth / this.maxIterations;
                    // Fire color palette
                    var r = Math.min(255, Math.round(255 * Math.pow(t, 0.5)));
                    var g = Math.min(255, Math.round(128 * Math.pow(t, 0.8)));
                    var b = Math.min(255, Math.round(64 * Math.pow(t, 2)));
                    this.setPixelDirectColor(data, x, y, width, r, g, b);
                }
            }
        }
        this.ctx.putImageData(imageData, 0, 0);
    };
    /**
     * Returns information about the Phoenix fractal
     */
    PhoenixFractal.prototype.getInfo = function () {
        return {
            title: 'Phoenix Fractal',
            description: 'A generalization of the Mandelbrot set that incorporates previous iteration values, creating flame-like patterns.',
            formula: 'z_{n+1} = z_n^2 + c + p·z_{n-1}\nwhere p is a complex parameter'
        };
    };
    return PhoenixFractal;
}(MathFractalBase_1.MathFractalBase));
exports.PhoenixFractal = PhoenixFractal;


/***/ }),

/***/ "./src/fractals/mathematical/SierpinskiTriangleFractal.ts":
/*!****************************************************************!*\
  !*** ./src/fractals/mathematical/SierpinskiTriangleFractal.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SierpinskiTriangleFractal = void 0;
var MathFractalBase_1 = __webpack_require__(/*! ./MathFractalBase */ "./src/fractals/mathematical/MathFractalBase.ts");
/**
 * Implementation of the Sierpinski Triangle fractal using a deterministic approach
 */
var SierpinskiTriangleFractal = /** @class */ (function (_super) {
    __extends(SierpinskiTriangleFractal, _super);
    /**
     * Constructor for the Sierpinski Triangle fractal
     *
     * @param canvasId - The ID of the canvas element to render on
     * @param maxIterations - The maximum depth of the recursion
     */
    function SierpinskiTriangleFractal(canvasId, maxDepth) {
        if (maxDepth === void 0) { maxDepth = 6; }
        var _this = _super.call(this, canvasId, maxDepth) || this;
        _this.depth = 6;
        _this.depth = maxDepth;
        _this.zoom = 0.9; // Default zoom level
        return _this;
    }
    /**
     * Sets the depth for the Sierpinski Triangle
     */
    SierpinskiTriangleFractal.prototype.setDepth = function (depth) {
        this.depth = depth;
        this.generate();
    };
    /**
     * Helper method to draw a filled triangle
     */
    SierpinskiTriangleFractal.prototype.drawTriangle = function (p1, p2, p3, fillColor) {
        this.ctx.beginPath();
        this.ctx.moveTo(p1[0], p1[1]);
        this.ctx.lineTo(p2[0], p2[1]);
        this.ctx.lineTo(p3[0], p3[1]);
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
    };
    /**
     * Calculates the midpoint between two points
     */
    SierpinskiTriangleFractal.prototype.midpoint = function (p1, p2) {
        return [
            (p1[0] + p2[0]) / 2,
            (p1[1] + p2[1]) / 2
        ];
    };
    /**
     * Recursively draws the Sierpinski triangle
     */
    SierpinskiTriangleFractal.prototype.sierpinski = function (p1, p2, p3, depth) {
        if (depth === 0) {
            // Generate a color based on position for visual appeal
            var hue = (p1[0] * 0.7 + p1[1] * 0.3) % 360;
            var color = "hsl(" + hue + ", 100%, 50%)";
            this.drawTriangle(p1, p2, p3, color);
            return;
        }
        var p12 = this.midpoint(p1, p2);
        var p23 = this.midpoint(p2, p3);
        var p31 = this.midpoint(p3, p1);
        // Recursively draw three smaller triangles
        this.sierpinski(p1, p12, p31, depth - 1);
        this.sierpinski(p12, p2, p23, depth - 1);
        this.sierpinski(p31, p23, p3, depth - 1);
    };
    /**
     * Generates the Sierpinski Triangle fractal
     */
    SierpinskiTriangleFractal.prototype.generate = function () {
        this.clear();
        if (!this.canvas || !this.ctx) {
            this.initialize();
        }
        var width = this.canvas.width;
        var height = this.canvas.height;
        // Calculate the size based on zoom
        var size = Math.min(width, height) * 0.85 * this.zoom;
        // Calculate the vertices of the main triangle
        // Centered in the canvas
        var centerX = width / 2;
        var centerY = height / 2;
        var halfSize = size / 2;
        var height30 = size * Math.sin(Math.PI / 3); // Height of equilateral triangle
        var vertices = [
            [centerX, centerY - height30 / 1.5],
            [centerX - halfSize, centerY + height30 / 3],
            [centerX + halfSize, centerY + height30 / 3] // Bottom right
        ];
        // Draw the Sierpinski triangle recursively
        this.sierpinski(vertices[0], vertices[1], vertices[2], this.depth);
    };
    /**
     * Returns information about the Sierpinski Triangle fractal
     */
    SierpinskiTriangleFractal.prototype.getInfo = function () {
        return {
            title: 'Sierpinski Triangle',
            description: 'The Sierpinski Triangle is a fractal pattern created by recursively removing the center triangle from equilateral triangles.',
            formula: 'Recursive subdivision: Begin with an equilateral triangle, divide into 4 equal triangles, remove center triangle, repeat for remaining triangles.'
        };
    };
    return SierpinskiTriangleFractal;
}(MathFractalBase_1.MathFractalBase));
exports.SierpinskiTriangleFractal = SierpinskiTriangleFractal;


/***/ }),

/***/ "./src/services/NavigationService.ts":
/*!*******************************************!*\
  !*** ./src/services/NavigationService.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Navigation Service - Handles navigation between pages
 */
exports.__esModule = true;
exports.getFractalEditorUrl = exports.navigateToFractalEditor = void 0;
/**
 * Navigate to a fractal editor page
 * @param fractalId The ID of the fractal to edit
 */
function navigateToFractalEditor(fractalId) {
    // Special cases to fix URLs
    if (fractalId === 'burning-ship-fractal') {
        fractalId = 'burning-ship';
    }
    // Fix for non-repeat square fractal
    if (fractalId === 'non-repeat-square') {
        fractalId = 'nonrepeat-square';
    }
    var editorUrl = "pages/" + fractalId + ".html";
    window.open(editorUrl, '_blank');
}
exports.navigateToFractalEditor = navigateToFractalEditor;
/**
 * Get a URL for a fractal editor page
 * @param fractalId The ID of the fractal
 * @returns The URL to the fractal editor page
 */
function getFractalEditorUrl(fractalId) {
    // Special cases to fix URLs
    if (fractalId === 'burning-ship-fractal') {
        fractalId = 'burning-ship';
    }
    // Fix for non-repeat square fractal
    if (fractalId === 'non-repeat-square-fractal') {
        fractalId = 'nonrepeat-square';
    }
    return "pages/" + fractalId + ".html";
}
exports.getFractalEditorUrl = getFractalEditorUrl;


/***/ }),

/***/ "./styles/components.css":
/*!*******************************!*\
  !*** ./styles/components.css ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./components.css */ "./node_modules/css-loader/dist/cjs.js!./styles/components.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./styles/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map