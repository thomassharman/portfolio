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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/portfolio.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/portfolio.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/burger-menu-right-svgrepo-com (2).svg */ \"./src/svg/burger-menu-right-svgrepo-com (2).svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/sun-svgrepo-com.svg */ \"./src/svg/sun-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./svg/moon-stars-svgrepo-com.svg */ \"./src/svg/moon-stars-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.light-mode {\n    --global-main: #2f2f2f;\n    --global-tertiary: #7d7d7d;\n    --global-sec: #ffffff;\n    --global-font-fam: system-ui, \n    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --global-font-wei: 200;\n    --global-font-siz: 10px;\n    --global-shadow: 3px 5px 0px;\n    --global--butt: #0088cc;\n    --global--buttfont: white;\n    --global-font-col: black;\n    --global-shadow-colour: rgb(196, 196, 196);\n    --global-tab: #e6e6e6;\n    --active-tab-colour:  #dddddd;\n    --active-tab-font-colour: var(--global-tertiary)\n}\n\n/*Dark Mode*/\n.dark-mode {\n    --global-main: #ffffff;\n    --global-tertiary: #7d7d7d;\n    --global-sec: #2f2f2f;\n    --global-font-fam: system-ui, \n    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --global-font-wei: 200;\n    --global-font-siz: 10px;\n    --global-shadow: 3px 5px 0px;\n    --global--butt: #cc005c;\n    --global--buttfont: white;\n    --global-font-col: white;\n    --global-shadow-colour: rgb(36, 36, 36);\n    --global-tab: #373737;\n    --active-tab-colour:  #212121;\n    --active-tab-font-colour: var(--global-tertiary);\n}\n\np {\n    color: var(--global-font-col);\n}\n\nbody {\n    padding: 0;\n    margin-top: 100px;\n    margin: 0;\n    font-family: var(--global-font-fam);\n    background-color: var(--global-sec);\n}\n\n.cta-btn {\n    background-color: var(--global--butt);\n    color: var(--global--buttfont);\n    border-radius: 5px;\n    border: 0;\n    padding: 5px;\n}\n.menuDiv {\n    display: flex;\n    gap: 5px;\n    position: sticky;\n    top: 0;\n    height: fit-content;\n    background-color: var(--global-sec);\n    box-shadow: 1px 2px 5px var(--global-shadow-colour);\n}\n\n.nav { /*This is also on by default*/\n    display: flex;\n    justify-content: space-evenly;\n    gap: 50px;\n    width: 100%;\n    flex-grow: 1;\n}\n\n.mobileItemsContainer {\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    justify-items: center;\n}\n\n.nav-item, .mobileNavButton {\n    background-color: transparent;\n    font-weight: var(--global-font-wei);\n    border: 1px solid transparent;\n    transition: 1s;\n    color: var(--global-tertiary);\n}\n\n.nav-item:hover, .mobileNavButton:hover {\n    transition: 1s;\n    color: var(--global-main);\n    border-bottom: 3px solid var(--global--butt);\n}\n\n.logo {\ndisplay: none;\n}\n\n.menuwaffle { /*This is active by default*/\n    display: none;\n}\n\n.waffleOn {\n    height: 20px;\n    width: 20px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    display: flex;\n    align-self: flex-end;\n    background-color: transparent;\n    border: 0;\n}\n\n.navOff {\n    display: none;\n}\n\n.content {\n    height: 10000px;\n}\n\n.switchbtnOn {\n    background-color: var(--global--butt);\n    border: 0;\n    color: var(--global--buttfont);\n    transition: 1s;\n}\n\n.switchbtnOff {\n    background-color: var(--global-tertiary);\n    border: 0;\n    color: var(--global-tertiary);\n    transition: 1s;\n}\n\n#switch {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    gap: 0;\n    box-shadow: 2px 3px 5px var(--global-shadow-colour) ;\n    border-radius: 10px;\n    height: 15px;\n    width: 45px;\n}\n\n#lightSwitch {\nflex-grow: 2;\nbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\nbackground-size: 30%;\nbackground-repeat: no-repeat;\nbackground-position: 50%;\nheight: 100%;\nborder-bottom-left-radius: 10px;\nborder-top-left-radius: 10px\n}\n\n#darkSwitch {\nflex-grow: 2;\nbackground-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\nbackground-size: 30%;\nbackground-repeat: no-repeat;\nbackground-position: 50%;\nheight: 100%;\nborder-top-right-radius: 10px;\nborder-bottom-right-radius: 10px;\n}\n\n\n.menu-switch {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin: 20px;\n}\n\n.banner {\n    color: var(--global-font-col);\n    padding: 30px;\n    height: 80vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.bannertext {\n    text-align: center;\n    font-size: 5vh;\n}\n\n.tab-button {\n    transition: 1s;\n    padding: 5px;\n    background-color: transparent;\n    width: 100px;\n    color: var(--global-tertiary);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-top: 0;\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0;\n}\n\n.tab-button:hover {\n    transition: 1s;\n    border-bottom: 2px solid var(--global--butt);\n    color: var(--global-font-col);\n}\n\n.tabsDiv {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n}\n\n.tab {\n    display: flex;\n    flex-direction: column;\n}\n\n.activeTab {\n    background-color: var(--active-tab-colour);\n    color: var(--active-tab-font-colour);\n    border-bottom: 2px solid var(--global--butt);\n    border-top: 0;\n    border-left: 0;\n    border-right: 0;\n    padding: 5px;\n    width: 100px;\n}\n.tab-content {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    background-color: var(--active-tab-colour);\n    color: var(--global-font-col);\n    padding: 5vw;\n    gap: 10px;\n}\n\n.tabsContainer {\n    display: flex;\n    position: sticky;\n    top: 50px;\n    flex-direction: column;\n    margin: 10vw;\n\n}\n\n#hideTabContent {\n    display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/portfolio.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _portfolio_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.css */ \"./src/portfolio.css\");\n/* harmony import */ var _responsiveNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsiveNav */ \"./src/responsiveNav.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\nconsole.log('importing css...')\n;\n// Start Importing Functions\nconsole.log('importing functions...')\n// responsiveFunctions\n;\nconsole.log('responsiveFunctions', _responsiveNav__WEBPACK_IMPORTED_MODULE_1__.responsiveFunctions) \n;(0,_responsiveNav__WEBPACK_IMPORTED_MODULE_1__.responsiveFunctions)()\n// tabFunctions\n;\nconsole.log('tabFunctions', _tabs__WEBPACK_IMPORTED_MODULE_2__.tabFunctions )\n;(0,_tabs__WEBPACK_IMPORTED_MODULE_2__.tabFunctions)()\n//\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/portfolio.css":
/*!***************************!*\
  !*** ./src/portfolio.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_portfolio_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./portfolio.css */ \"./node_modules/css-loader/dist/cjs.js!./src/portfolio.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_portfolio_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_portfolio_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_portfolio_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_portfolio_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/portfolio.css?");

/***/ }),

/***/ "./src/responsiveNav.js":
/*!******************************!*\
  !*** ./src/responsiveNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   responsiveFunctions: () => (/* binding */ responsiveFunctions)\n/* harmony export */ });\nconst responsiveFunctions = function() {\n    //make menu responsive\n    const waffle = document.querySelector('.menuwaffle')\n    const nav = document.querySelector('.nav')\n    const mobileScreenSize = 500\n\n    const loadWaffle =  function() {\n        if (window.innerWidth <= mobileScreenSize) {\n        console.log('waffle ON function running...', window.innerWidth)\n        waffle.classList.remove('menuwaffle')\n        nav.classList.remove('nav')\n        waffle.classList.add('waffleOn')\n        nav.classList.add('navOff')\n        }\n        else {\n        console.log('waffle OFF function running...', window.innerWidth)\n        waffle.classList.remove('waffleOn')\n        nav.classList.remove('navOff')\n        waffle.classList.add('menuwaffle')\n        nav.classList.add('nav')\n        }\n\n    }\n    window.addEventListener('resize', () => {loadWaffle(), console.log('resizing...')})\n\nconst styleMode = function () {\n\nconst lightSwitch = document.querySelector('#lightSwitch')\nconst darkSwitch = document.querySelector('#darkSwitch')\nconst website = document.querySelector('#website')\n\nlet lightmode = true\nlet darkmode = false\n\nlightSwitch.addEventListener('click', () => {switchMode()})\ndarkSwitch.addEventListener('click', () => {switchMode()})\n\nconst switchMode = function() {\n    if (lightmode === true) {\n        lightmode = false\n        darkmode = true\n        darkSwitch.classList.remove('switchbtnOff')\n        darkSwitch.classList.add('switchbtnOn')\n        lightSwitch.classList.remove('switchbtnOn')\n        lightSwitch.classList.add('switchbtnOff')\n        console.log('Buttons colours switched. Add website change style to follow...')\n        website.classList.remove('light-mode')\n        website.classList.add('dark-mode')\n    }\n    else if (lightmode != true) {\n        lightmode = true\n        darkmode = false\n        darkSwitch.classList.add('switchbtnOff')\n        darkSwitch.classList.remove('switchbtnOn')\n        lightSwitch.classList.add('switchbtnOn')\n        lightSwitch.classList.remove('switchbtnOff')\n        console.log('Buttons colours switched. Add website change style to follow...')\n        website.classList.remove('dark-mode')\n        website.classList.add('light-mode')\n    }\n}\n}\nconst waffleFunction = function() {\n//waffle functions\nconst waffleMenu = document.querySelector('.menuwaffle')\nconst navItems = document.querySelectorAll('.nav-item') //returns array of menu items\nconst mobileItemsContainer = document.createElement('div')\nmobileItemsContainer.classList = 'mobileItemsContainer'\nconst mobileMenu = document.querySelector('.mobileMenu') //where we will appendChild the container containing each menu item\nlet mobileMenuStatus = false //the mobile menu is not showing by default\n\nwaffleMenu.addEventListener('click', () => {expandMenu(navItems), mobileMenuStatus = !mobileMenuStatus //ensures we switch to the opposite status every time clicked//\n    })\n\nconst expandMenu = function(items) {\nconsole.log('waffle menu clicked')\nitems.forEach(item => \n    { if (mobileMenuStatus === false) {\n            const mobileNavItemText = item.textContent\n            console.log(mobileNavItemText) //returns each item in the console successfully\n            const mobileNavItem = document.createElement('button')\n            mobileNavItem.textContent = mobileNavItemText\n            mobileNavItem.classList = 'mobileNavButton'\n            mobileItemsContainer.append(mobileNavItem)\n            return mobileMenu.appendChild(mobileItemsContainer)\n}\nelse if(mobileMenuStatus === true) {\n    if (mobileMenu.contains(mobileItemsContainer)){\n        mobileItemsContainer.innerHTML = ''\n        mobileMenu.removeChild(mobileItemsContainer)\n    }\n   \n}\n   }, console.log(mobileMenuStatus))\n}\n}\n    return {\n        responsiveFunctions: responsiveFunctions,\n        loadWaffle: loadWaffle,\n        styleMode: styleMode(),\n        waffleFunction: waffleFunction(),\n    }\n}\n\n\n\n\n\n\n//# sourceURL=webpack://portfolio/./src/responsiveNav.js?");

/***/ }),

/***/ "./src/svg/burger-menu-right-svgrepo-com (2).svg":
/*!*******************************************************!*\
  !*** ./src/svg/burger-menu-right-svgrepo-com (2).svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07158706edff4face717.svg\";\n\n//# sourceURL=webpack://portfolio/./src/svg/burger-menu-right-svgrepo-com_(2).svg?");

/***/ }),

/***/ "./src/svg/moon-stars-svgrepo-com.svg":
/*!********************************************!*\
  !*** ./src/svg/moon-stars-svgrepo-com.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96affa7102ace2afb443.svg\";\n\n//# sourceURL=webpack://portfolio/./src/svg/moon-stars-svgrepo-com.svg?");

/***/ }),

/***/ "./src/svg/sun-svgrepo-com.svg":
/*!*************************************!*\
  !*** ./src/svg/sun-svgrepo-com.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26b8bcf0e6e4d63c00db.svg\";\n\n//# sourceURL=webpack://portfolio/./src/svg/sun-svgrepo-com.svg?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabFunctions: () => (/* binding */ tabFunctions)\n/* harmony export */ });\nconst tabFunctions = function() {\nlet tab1;\nlet tab2;   \nlet tab3; \nlet tabContent;\nlet tabTitle;\nlet tabBody;\n\n    const tabs = function () {\n    tab1 = document.querySelector('#tab-button-1')\n    tab2 = document.querySelector('#tab-button-2')\n    tab3 = document.querySelector('#tab-button-3')\n    tabContent =document.querySelector('.tab-content')\n    tabTitle = document.querySelector('.tab-title')\n    tabBody = document.querySelector('.tab-text')\n        if (tab1 && tab2 && tab3) {\n            console.log('tabs loaded from tabFunctions successfully. Now add event listeners...')\n            const allTabs = [tab1, tab2, tab3]\n            allTabs.forEach((tab) => {tab.addEventListener('click', clickTab)})\n}\n}\n    const clickTab = function () {\n    console.log(this)\n    const activeTab = this\n    if (activeTab.textContent === 'About') {\n        console.log('User clicked ',activeTab.textContent,' section...');\n        const inactiveTabs = [tab2, tab3]\n        appendTabContent.append(activeTab)\n        tabStyles.switch(activeTab, inactiveTabs)\n    }\n    else if (activeTab.textContent === 'Experience') {\n      console.log('User clicked ',activeTab.textContent,' section...');\n      const inactiveTabs = [tab1, tab3]\n      appendTabContent.append(activeTab)\n      tabStyles.switch(activeTab, inactiveTabs)\n    }\n    else if (activeTab.textContent === 'Skills') {\n      console.log('User clicked ',activeTab.textContent,' section...');\n      const inactiveTabs = [tab2, tab1]\n      appendTabContent.append(activeTab)\n      tabStyles.switch(activeTab, inactiveTabs)\n    }\n    }\n\n    const appendTabContent = {\n        append: function (tab){\n            console.log('append tab content')\n            tabContent.removeAttribute('id')\n            tabTitle.textContent = tab.textContent\n            if (tab.textContent === 'About') {\n                tabBody.textContent = `Hey! I'm Tom. I have over 4 years of experience in Marketing and just recently started learning to code. I'll keep this part brief and you can find out more about me, below.`\n            }\n                else if (tab.textContent === 'Experience') {\n                tabBody.textContent = `I have experience managing marketing campaigns in both B2B and B2C Industries.`\n            }\n                else if (tab.textContent === 'Skills') {\n                tabBody.textContent = `I am still learning to code, but have picked up a lot of front end development skills (as you can see!). My marketing skill profile is much more vast and I encourage you to explore more about me below.`\n            }\n        },\n    }\n\n    const tabStyles = {\n        switch: function(thisTab, otherTabs) {\n            if (thisTab.classList.contains('tab-button')) {\n            console.log('this tab must have an active class')\n            thisTab.classList.remove('tab-button') \n            thisTab.classList.add('activeTab') \n            otherTabs.forEach((otherTab) => {\n            otherTab.classList.add('tab-button')\n            otherTab.classList.remove('activeTab') \n            })\n            \n            }\n            }\n        }\n        return {\n            tabs: tabs(),\n            tabContent: tabContent(),\n            clickTab: clickTab,\n    }\n    }\n\n\n\n\n\n//# sourceURL=webpack://portfolio/./src/tabs.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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