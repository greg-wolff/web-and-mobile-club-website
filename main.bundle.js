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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./main.scss */ 1);\n\nvar menu = document.getElementsByClassName('hamburger')[0];\nvar close = document.getElementsByClassName('hamburger__close')[0];\nvar mobileNav = document.getElementsByClassName('mobile-nav')[0];\nconst hideNav = window.matchMedia('(min-width: 900px)');\ndocument.getElementsByClassName('year')[0].innerHTML = new Date().getFullYear();\n\nmenu.addEventListener('click', e => {\n  e.preventDefault();\n  menu.classList.add('hidden');\n  mobileNav.classList.remove('hidden');\n  TweenMax.staggerFrom('.mobile-nav__item', 0.5, {\n    y: -15,\n    opacity: 0\n  }, 0.06);\n});\n\nclose.addEventListener('click', e => {\n  e.preventDefault();\n  menu.classList.remove('hidden');\n  mobileNav.classList.add('hidden');\n});\n\nhideNav.addListener(mq => mq.matches ? mobileNav.classList.add('hidden') : menu.classList.remove('hidden'));\n\nTweenMax.staggerTo('.fade-in', 0.5, {\n  opacity: 1\n}, 0.1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbWFpbi5qcz8xYzkwIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vbWFpbi5zY3NzJylcblxudmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoYW1idXJnZXInKVswXVxudmFyIGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGFtYnVyZ2VyX19jbG9zZScpWzBdXG52YXIgbW9iaWxlTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iaWxlLW5hdicpWzBdXG5jb25zdCBoaWRlTmF2ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDkwMHB4KScpXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd5ZWFyJylbMF0uaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICBtb2JpbGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgVHdlZW5NYXguc3RhZ2dlckZyb20oJy5tb2JpbGUtbmF2X19pdGVtJywgMC41LCB7XG4gICAgeTogLTE1LFxuICAgIG9wYWNpdHk6IDBcbiAgfSwgMC4wNilcbn0pXG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgbW9iaWxlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59KVxuXG5oaWRlTmF2LmFkZExpc3RlbmVyKChtcSkgPT5cbiAgbXEubWF0Y2hlcyA/IG1vYmlsZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykpXG5cblR3ZWVuTWF4LnN0YWdnZXJUbygnLmZhZGUtaW4nLCAwLjUsIHtcbiAgb3BhY2l0eTogMVxufSwgMC4xKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3M/YmYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);