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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var menu = document.getElementsByClassName('hamburger')[0];
var close = document.getElementsByClassName('hamburger__close')[0];
var mobileNav = document.getElementsByClassName('mobile-nav')[0];
var hideNav = window.matchMedia('(min-width: 900px)');
document.getElementsByClassName('year')[0].innerHTML = new Date().getFullYear();

menu.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.add('hidden');
  mobileNav.classList.remove('hidden');
  TweenMax.staggerFrom('.mobile-nav__item', 0.5, {
    y: -15,
    opacity: 0
  }, 0.06);
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.remove('hidden');
  mobileNav.classList.add('hidden');
});

hideNav.addListener(function (mq) {
  return mq.matches ? mobileNav.classList.add('hidden') : menu.classList.remove('hidden');
});

TweenMax.staggerTo('.fade-in', 0.5, {
  opacity: 1
}, 0.1);

var form = $('#contact-form');
var formMessages = $('#form-messages');
$(form).submit(function (event) {
  $(form).animate({
    opacity: 0
  }, 500, function () {
    $(form).css('display', 'none');
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');
    $(formMessages).html('<p>Thanks for reaching out. We\'ll get back to you shortly!</p><a href="./">Go back to home</a>');
    $(formMessages).animate({
      opacity: 1
    }, 500);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);