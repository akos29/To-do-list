/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  border: 0;\\r\\n  box-sizing: border-box;\\r\\n  transition: width 2s, height 2s, background-color 2s, transform 2s;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --bs-bg-color: #f2f3f5;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--bs-bg-color);\\r\\n}\\r\\n\\r\\n.to-do-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: white;\\r\\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\\r\\n  margin: 10% 20%;\\r\\n  padding: 0;\\r\\n\\r\\n  /* gap: 0.5px; */\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 19px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border: 1px solid var(--bs-bg-color);\\r\\n  padding: 0.7rem 1rem;\\r\\n}\\r\\n\\r\\n.col,\\r\\n.head-col {\\r\\n  padding: 10px 0;\\r\\n  font-size: 18px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n#form,\\r\\n.form-update {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  width: 90%;\\r\\n  font-size: 18px;\\r\\n  border: none;\\r\\n  padding: 0.5rem 0.2rem;\\r\\n  line-height: 16px;\\r\\n  resize: none;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n#form button {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  text-transform: capitalize;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\nul li {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  list-style: none;\\r\\n  align-items: center;\\r\\n  gap: 0.5px;\\r\\n  border: 1px solid var(--bs-bg-color);\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n  background-color: transparent;\\r\\n  border: 2px solid var(--bs-bg-color);\\r\\n  cursor: pointer;\\r\\n  height: 16px;\\r\\n  width: 16px;\\r\\n  padding: 17px 0;\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 2px;\\r\\n}\\r\\n\\r\\n/* textarea {\\r\\n  padding: 3px 0;\\r\\n  line-height: 16px;\\r\\n  resize: none;\\r\\n  width: 90%;\\r\\n} */\\r\\n\\r\\n.active {\\r\\n  background-color: yellow !important;\\r\\n}\\r\\n\\r\\n.fa {\\r\\n  font-size: 48px;\\r\\n}\\r\\n\\r\\n.select-all {\\r\\n  padding: 0.7rem 1rem;\\r\\n  margin: 0;\\r\\n  background-color: var(--bs-bg-color);\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background-color: var(--bs-bg-color);\\r\\n  text-align: center;\\r\\n\\r\\n  /* margin-left:30%; */\\r\\n  border: 0;\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n  padding: 0.7rem 0;\\r\\n}\\r\\n\\r\\n.draggable {\\r\\n  padding: 0.7rem 1rem;\\r\\n  background-color: white;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.dragging {\\r\\n  opacity: 0.9;\\r\\n  background-color: var(--bs-bg-color);\\r\\n}\\r\\n\\r\\n.trash {\\r\\n  background: yellow;\\r\\n}\\r\\n\\r\\n.ellipsis {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.visible {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.done,\\r\\ninput[type=checkbox]:checked {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_elementSelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elementSelector.js */ \"./src/modules/elementSelector.js\");\n/* harmony import */ var _modules_generateTaskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/generateTaskList.js */ \"./src/modules/generateTaskList.js\");\n/* harmony import */ var _modules_addTaskFormHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addTaskFormHandler.js */ \"./src/modules/addTaskFormHandler.js\");\n/* harmony import */ var _modules_refresh_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/refresh.js */ \"./src/modules/refresh.js\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n\n\n\n// eslint-disable-next-line no-unused-vars\n\n\n\n\nfunction component() {\n  (0,_modules_generateTaskList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  function getDragAfterElement(container, y) {\n    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];\n    return draggableElements.reduce((closest, child) => {\n      const box = child.getBoundingClientRect();\n\n      const offset = y - box.top - box.height / 2;\n      if (offset < 0 && offset > closest.offset) {\n        return { offset, element: child };\n      }\n\n      return closest;\n    }, { offset: Number.NEGATIVE_INFINITY }).element;\n  }\n\n  const draggables = document.querySelectorAll('.draggable');\n  draggables.forEach((draggable) => {\n    draggable.addEventListener('dragstart', () => {\n      draggable.classList.add('dragging');\n    });\n\n    draggable.addEventListener('dragend', () => {\n      draggable.classList.remove('dragging');\n    });\n  });\n\n  const container = document.querySelector('.container');\n  container.addEventListener('dragover', (e) => {\n    e.preventDefault();\n\n    const afterElement = getDragAfterElement(_modules_elementSelector_js__WEBPACK_IMPORTED_MODULE_1__.container, e.clientY);\n    const draggable = document.querySelector('.dragging');\n    if (afterElement == null) {\n      container.appendChild(draggable);\n    } else {\n      container.insertBefore(draggable, afterElement);\n    }\n  });\n\n  _modules_elementSelector_js__WEBPACK_IMPORTED_MODULE_1__.refresh.addEventListener('click', () => {\n    (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  }, false);\n\n  _modules_elementSelector_js__WEBPACK_IMPORTED_MODULE_1__.clearAll.addEventListener('click', () => {\n    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].removeTasks();\n    (0,_modules_refresh_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  });\n}\n\ncomponent();\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTaskFormHandler.js":
/*!*******************************************!*\
  !*** ./src/modules/addTaskFormHandler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementSelector.js */ \"./src/modules/elementSelector.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _generateTaskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateTaskList.js */ \"./src/modules/generateTaskList.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener('submit', async (e) => {\n  e.preventDefault();\n\n  const tasks = _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTask();\n\n  if (_elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.form[0].value !== '') {\n    const t = new _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.form[0].value, (tasks.length + 1), false);\n    _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(t);\n    _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.form.reset();\n    _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.container.innerHTML = '';\n    (0,_generateTaskList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  }\n}));\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/addTaskFormHandler.js?");

/***/ }),

/***/ "./src/modules/elementSelector.js":
/*!****************************************!*\
  !*** ./src/modules/elementSelector.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"description\": () => (/* binding */ description),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"refresh\": () => (/* binding */ refresh),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nconst container = document.querySelector('.container');\nconst form = document.getElementById('form');\nconst description = document.querySelector('description');\nconst tasks = document.querySelectorAll('.task');\nconst refresh = document.querySelector('.refresh');\nconst clearAll = document.getElementById('clear');\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/elementSelector.js?");

/***/ }),

/***/ "./src/modules/generateTaskList.js":
/*!*****************************************!*\
  !*** ./src/modules/generateTaskList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateTask)\n/* harmony export */ });\n/* harmony import */ var _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementSelector.js */ \"./src/modules/elementSelector.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\nfunction populateTask() {\n  const tasksList = _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTask();\n  tasksList.forEach((task) => {\n    let checked = '';\n    let status = '';\n    if (task.completed) { checked = 'checked'; status = 'done'; }\n    const taskList = ` <li class=\"draggable\" draggable=\"true\">\n    <form class=\"form-update ${status}\">   \n        <input class=\"toggle\" type=\"checkbox\" aria-label=\"Task  Complete\" ${checked} />\n        <input class='task' name=\"task\" value= \"${task.description}\"</input>\n        <button id=${task.order} class=\"ellipsis\">\n          <svg id='more' xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#c4c5c6\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">\n            <path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>\n          </svg>\n          <svg id='delete' xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#000\" class=\"bi bi-trash3\" viewBox=\"0 0 16 16\">\n            <path d=\"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z\"/>\n          </svg>\n          </button>\n    </form>\n    </li>`;\n    _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.container.innerHTML += taskList;\n\n    const activateTrash = document.querySelectorAll('.ellipsis');\n    const tasks = document.querySelectorAll('.task');\n    const toggles = document.querySelectorAll('.toggle');\n\n    activateTrash.forEach((ellipsis) => {\n      const btnChildren = ellipsis.children;\n      btnChildren[1].classList.add('hidden');\n\n      ellipsis.addEventListener('mouseover', () => {\n        btnChildren[1].classList.add('trash');\n        ellipsis.parentElement.parentElement.classList.add('active');\n        btnChildren[0].classList.add('hidden');\n        btnChildren[1].classList.remove('hidden');\n\n        const btnDel = document.querySelectorAll('.trash');\n\n        btnDel.forEach((btnD) => {\n          btnD.addEventListener('click', (e) => {\n            btnD.parentElement.parentElement.parentElement.remove();\n            _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(e.target.parentElement.id);\n          }, false);\n        });\n      });\n\n      ellipsis.addEventListener('click', () => {\n        ellipsis.classList.remove('trash');\n        ellipsis.parentElement.parentElement.classList.remove('active');\n        btnChildren[0].classList.remove('hidden');\n        btnChildren[1].classList.add('hidden');\n        _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortTask();\n      });\n      ellipsis.addEventListener('mouseout', () => {\n        ellipsis.classList.remove('trash');\n        ellipsis.parentElement.parentElement.classList.remove('active');\n        btnChildren[0].classList.remove('hidden');\n        btnChildren[1].classList.add('hidden');\n      });\n    });\n\n    tasks.forEach((task) => {\n      task.addEventListener('mousedown', () => {\n        task.parentElement.parentElement.classList.add('active');\n      });\n      task.addEventListener('mouseout', () => {\n        task.parentElement.parentElement.classList.remove('active');\n      });\n\n      task.addEventListener('change', () => {\n        _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTask(task.value, false, task.parentElement[2].id);\n      });\n    });\n\n    toggles.forEach((toggle) => {\n      toggle.addEventListener('change', () => {\n        if (toggle.checked) {\n          toggle.parentElement.classList.add('done');\n          _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTask(toggle.parentElement[1].value, true, toggle.parentElement[2].id);\n        } else {\n          toggle.parentElement.classList.remove('done');\n          _tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTask(toggle.parentElement[1].value, false, toggle.parentElement[2].id);\n        }\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/generateTaskList.js?");

/***/ }),

/***/ "./src/modules/refresh.js":
/*!********************************!*\
  !*** ./src/modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ refresh)\n/* harmony export */ });\n/* harmony import */ var _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementSelector.js */ \"./src/modules/elementSelector.js\");\n/* harmony import */ var _generateTaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTaskList.js */ \"./src/modules/generateTaskList.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/modules/tasks.js\");\n\n\n\n\nfunction refresh() {\n  _tasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sortTask();\n  _elementSelector_js__WEBPACK_IMPORTED_MODULE_0__.container.innerHTML = '';\n  return (0,_generateTaskList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/refresh.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\n  constructor(description, order, completed = false) {\n    this.description = description;\n    this.order = order;\n    this.completed = completed;\n  }\n\n  static getTask() {\n    let tasks;\n    if (localStorage.getItem('tasks') === null) {\n      tasks = [];\n    } else {\n      tasks = JSON.parse(localStorage.getItem('tasks'));\n    }\n\n    return tasks;\n  }\n\n  static addTask(task) {\n    const tasks = Tasks.getTask();\n    tasks.push(task);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  static updateTask(desc, completed, i) {\n    const tasks = Tasks.getTask();\n    let flag = false;\n    tasks.forEach((task, index) => {\n      if (task.order === parseInt(i, 10)) {\n        tasks[index].order = index + 1;\n        tasks[index].description = desc;\n        tasks[index].completed = completed;\n        flag = true;\n      }\n      return flag;\n    });\n    if (flag) {\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n    }\n  }\n\n  static removeTask(id) {\n    const tasks = Tasks.getTask();\n    let flag = false;\n    tasks.forEach((task, index) => {\n      if (task.order === parseInt(id, 10)) {\n        tasks.splice(index, 1);\n        flag = true;\n      }\n    });\n\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n    return flag;\n  }\n\n  static removeTasks() {\n    const tasks = Tasks.getTask();\n    const flag = false;\n    const completedTask = tasks.filter((task) => {\n      if (task.completed) {\n        return task;\n      }\n      return null;\n    });\n    completedTask.forEach((task) => {\n      Tasks.removeTask(task.order);\n    });\n    return flag;\n  }\n\n  static sortTask() {\n    const tasks = Tasks.getTask();\n    tasks.forEach((task, index) => {\n      tasks[index].order = index + 1;\n    });\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;