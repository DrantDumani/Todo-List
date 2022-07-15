"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksand-VariableFont_wght.ttf */ "./src/fonts/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  box-sizing: border-box;\n  min-height: 100vh;\n}\n\nbutton,\ninput[type=submit] {\n  background-color: inherit;\n  color: inherit;\n  border: 1px solid #fff;\n  font-family: inherit;\n  border-radius: 12px;\n  font-size: 24px;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\nbody {\n  font-family: \"Quicksand\";\n}\n\n.page-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: #3b3b3b;\n  color: #fff;\n}\n\n.page-container > * {\n  padding: 0 4vw;\n}\n\nfooter, header {\n  background-color: #111111;\n  color: #fff;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n}\nheader .mobile-burger {\n  display: none;\n  border: none;\n  cursor: pointer;\n}\n\nfooter {\n  text-align: center;\n  font-size: 22px;\n}\nfooter .footer-link {\n  text-decoration: none;\n}\nfooter .footer-link:hover,\nfooter .footer-link:visited {\n  color: rgba(132, 220, 255, 0.3);\n}\n\n.title {\n  font-weight: bolder;\n  font-size: 48px;\n}\n\n.page-content {\n  flex-grow: 1;\n  display: flex;\n  gap: 0px 100px;\n}\n\nul {\n  list-style-type: none;\n  padding: 0;\n}\nul li > * {\n  width: 100%;\n  padding: 8px 0;\n}\n\n.sidebar-nav {\n  flex-grow: 0.03;\n}\n\n.category-list-container,\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: auto;\n}\n\n.project-list-container div {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 12px;\n}\n\n.project-tab {\n  flex-grow: 2;\n}\n.project-tab h2 {\n  font-size: 40px;\n}\n.project-tab p {\n  font-size: 24px;\n}\n.project-tab .project-tab-buttons {\n  display: flex;\n  gap: 8px;\n}\n.project-tab .proj-ui-div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.project-tab input:checked ~ * {\n  text-decoration: line-through;\n}\n\n.project-tab > h2 {\n  font-size: 36px;\n}\n\n.modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.3);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.modal > * {\n  background-color: #3b3b3b;\n  padding: 0 12px;\n  border: 1px solid #fff;\n  border-radius: 16px;\n  color: #fff;\n  width: 600px;\n  max-height: 100%;\n  max-width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px;\n  gap: 16px;\n}\n.modal > * .input-container {\n  font-size: 24px;\n  display: grid;\n  grid-template-columns: 1fr minmax(300px, 1fr);\n  gap: 32px;\n}\n.modal > * .input-container label {\n  justify-self: end;\n}\n.modal > * .input-container input,\n.modal > * .input-container textarea {\n  font-size: 24px;\n}\n.modal > * .radio-container {\n  font-size: 24px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 8px;\n}\n.modal > * .btn-container {\n  text-align: center;\n}\n.modal > * h2,\n.modal > * p {\n  margin: 0;\n}\n.modal > * p {\n  font-size: 24px;\n}\n.modal > * .task-title {\n  font-size: 36px;\n}\n\n.task-div {\n  display: flex;\n  gap: 16px;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 24px;\n  border-style: solid;\n  border-width: 3px;\n  border-radius: 8px;\n}\n\n.hide {\n  display: none;\n}\n\n.low-priority {\n  border-color: #76f3ff;\n}\n\n.medium-priority {\n  border-color: #ffff76;\n}\n\n.high-priority {\n  border-color: #ff4d4d;\n}\n\nbutton:hover,\ninput[type=submit]:hover {\n  background-color: #898989;\n  cursor: pointer;\n}\n\n@media (max-width: 500px) {\n  header .mobile-burger {\n    display: block;\n  }\n  .sidebar-nav {\n    display: none;\n  }\n  .visible {\n    display: block;\n  }\n  .page-content {\n    flex-wrap: wrap;\n  }\n  .task-div {\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 100%;\n  }\n  .modal > * .input-container {\n    grid-template-columns: 1fr minmax(120px, 300px);\n  }\n}", "",{"version":3,"sources":["webpack://./src/_default.scss","webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,sBAAA;EACA,iBAAA;ACCJ;;ADEA;;EAEI,yBAAA;EACA,cAAA;EACA,sBAAA;EACA,oBAAA;EACA,mBAAA;EACA,eAAA;ACCJ;;AAbA;EACI,wBAAA;EACA,+DAAA;AAgBJ;AAbA;EACI,wBAAA;AAeJ;;AAXA;EACI,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,yBAAA;EACA,WAAA;AAcJ;;AAXA;EACI,cAAA;AAcJ;;AAXA;EACI,yBAAA;EACA,WAAA;AAcJ;;AAXA;EAEI,aAAA;EACA,8BAAA;AAaJ;AAZI;EACI,aAAA;EACA,YAAA;EACA,eAAA;AAcR;;AAVA;EAEI,kBAAA;EACA,eAAA;AAYJ;AAXI;EACI,qBAAA;AAaR;AAXI;;EAEI,+BAAA;AAaR;;AATA;EACI,mBAAA;EACA,eAAA;AAYJ;;AATA;EACI,YAAA;EACA,aAAA;EACA,cAAA;AAYJ;;AATA;EACI,qBAAA;EACA,UAAA;AAYJ;AAXI;EACI,WAAA;EACA,cAAA;AAaR;;AATA;EACI,eAAA;AAYJ;;AATA;;EAEI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;AAYJ;;AATA;EACI,aAAA;EACA,gCAAA;EACA,SAAA;AAYJ;;AATA;EACI,YAAA;AAYJ;AAXI;EACI,eAAA;AAaR;AAXI;EACI,eAAA;AAaR;AAXI;EACI,aAAA;EACA,QAAA;AAaR;AAXI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AAaR;AAXI;EACI,6BAAA;AAaR;;AATA;EACI,eAvGa;AAmHjB;;AATA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,oCAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAYJ;;AATA;EAEI,yBAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,SAAA;AAWJ;AAVI;EACI,eAfc;EAgBd,aAAA;EACA,6CAAA;EACA,SAAA;AAYR;AAXQ;EACI,iBAAA;AAaZ;AAXQ;;EAEI,eAxBU;AAqCtB;AAVI;EACI,eA5Bc;EA6Bd,aAAA;EACA,+BAAA;EACA,QAAA;AAYR;AAVI;EACI,kBAAA;AAYR;AAVI;;EAEI,SAAA;AAYR;AAVI;EACI,eAAA;AAYR;AAVI;EACI,eApKS;AAgLjB;;AARA;EACI,aAAA;EACA,SAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAWJ;;AARA;EACI,aAAA;AAWJ;;AARA;EACI,qBAAA;AAWJ;;AARA;EACI,qBAAA;AAWJ;;AARA;EACI,qBAAA;AAWJ;;AARA;;EAEI,yBAAA;EACA,eAAA;AAWJ;;AARA;EAEQ;IACI,cAAA;EAUV;EAPE;IACI,aAAA;EASN;EAPE;IACI,cAAA;EASN;EAPE;IACI,eAAA;EASN;EAPE;IACI,eAAA;IACA,uBAAA;IACA,eAAA;EASN;EAPE;IACI,+CAAA;EASN;AACF","sourcesContent":["body {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    min-height: 100vh;\r\n}\r\n\r\nbutton,\r\ninput[type=submit] {\r\n    background-color: inherit;\r\n    color: inherit;\r\n    border: 1px solid #fff;\r\n    font-family: inherit;\r\n    border-radius: 12px;\r\n    font-size: 24px;\r\n}","@use \"default\";\r\n@font-face {\r\n    font-family: \"Quicksand\";\r\n    src: url(\"./fonts/Quicksand-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n\r\nbody {\r\n    font-family: \"Quicksand\";\r\n}\r\n\r\n$task-proj-font: 36px;\r\n.page-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-color: #3b3b3b;\r\n    color: #fff;\r\n}\r\n\r\n.page-container>* {\r\n    padding: 0 4vw;\r\n}\r\n\r\n%header-footer-style {\r\n    background-color: #111111;\r\n    color: #fff;\r\n}\r\n\r\nheader {\r\n    @extend %header-footer-style;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    .mobile-burger {\r\n        display: none;\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\nfooter {\r\n    @extend %header-footer-style;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    .footer-link {\r\n        text-decoration: none;\r\n    }\r\n    .footer-link:hover,\r\n    .footer-link:visited {\r\n        color: rgba(132, 220, 255, 0.3)\r\n    }\r\n}\r\n\r\n.title {\r\n    font-weight: bolder;\r\n    font-size: 48px;\r\n}\r\n\r\n.page-content {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    gap: 0px 100px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    li>* {\r\n        width: 100%;\r\n        padding: 8px 0;\r\n    }\r\n}\r\n\r\n.sidebar-nav {\r\n    flex-grow: 0.03;\r\n}\r\n\r\n.category-list-container,\r\n.task-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    width: auto;\r\n}\r\n\r\n.project-list-container div {\r\n    display: grid;\r\n    grid-template-columns: 280px 1fr;\r\n    gap: 12px;\r\n}\r\n\r\n.project-tab {\r\n    flex-grow: 2;\r\n    h2 {\r\n        font-size: 40px;\r\n    }\r\n    p {\r\n        font-size: 24px;\r\n    }\r\n    .project-tab-buttons {\r\n        display: flex;\r\n        gap: 8px;\r\n    }\r\n    .proj-ui-div {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n    }\r\n    input:checked~* {\r\n        text-decoration: line-through;\r\n    }\r\n}\r\n\r\n.project-tab>h2 {\r\n    font-size: $task-proj-font;\r\n}\r\n\r\n.modal {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.modal>* {\r\n    $modal-font-size: 24px;\r\n    background-color: #3b3b3b;\r\n    padding: 0 12px;\r\n    border: 1px solid #fff;\r\n    border-radius: 16px;\r\n    color: #fff;\r\n    width: 600px;\r\n    max-height: 100%;\r\n    max-width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 20px;\r\n    gap: 16px;\r\n    .input-container {\r\n        font-size: $modal-font-size;\r\n        display: grid;\r\n        grid-template-columns: 1fr minmax(300px, 1fr);\r\n        gap: 32px;\r\n        label {\r\n            justify-self: end;\r\n        }\r\n        input,\r\n        textarea {\r\n            font-size: $modal-font-size;\r\n        }\r\n    }\r\n    .radio-container {\r\n        font-size: $modal-font-size;\r\n        display: grid;\r\n        grid-template-columns: auto 1fr;\r\n        gap: 8px;\r\n    }\r\n    .btn-container {\r\n        text-align: center;\r\n    }\r\n    h2,\r\n    p {\r\n        margin: 0;\r\n    }\r\n    p {\r\n        font-size: 24px;\r\n    }\r\n    .task-title {\r\n        font-size: $task-proj-font;\r\n    }\r\n}\r\n\r\n.task-div {\r\n    display: flex;\r\n    gap: 16px;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    border-style: solid;\r\n    border-width: 3px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.low-priority {\r\n    border-color: #76f3ff;\r\n}\r\n\r\n.medium-priority {\r\n    border-color: #ffff76;\r\n}\r\n\r\n.high-priority {\r\n    border-color: #ff4d4d;\r\n}\r\n\r\nbutton:hover,\r\ninput[type=\"submit\"]:hover {\r\n    background-color: #898989;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    header {\r\n        .mobile-burger {\r\n            display: block;\r\n        }\r\n    }\r\n    .sidebar-nav {\r\n        display: none;\r\n    }\r\n    .visible {\r\n        display: block;\r\n    }\r\n    .page-content {\r\n        flex-wrap: wrap;\r\n    }\r\n    .task-div {\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        max-width: 100%;\r\n    }\r\n    .modal>* .input-container {\r\n        grid-template-columns: 1fr minmax(120px, 300px);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createTab.js":
/*!**************************!*\
  !*** ./src/createTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCategoryTab": () => (/* binding */ renderCategoryTab),
/* harmony export */   "renderProjectTab": () => (/* binding */ renderProjectTab)
/* harmony export */ });
function renderCategoryInfo(container, project){
    const uiDiv = document.createElement("div")
    uiDiv.classList.add("proj-ui-div")
    const h2 = document.createElement("h2")
    h2.textContent = project.name
    uiDiv.append(h2)
    const p = document.createElement("p")
    p.textContent = project.desc 
    container.append(uiDiv, p)
}

function renderProjectInfo(container, project){
    renderCategoryInfo(container, project)
    const btnContainer = document.createElement("div")
    btnContainer.classList.add("project-tab-buttons")
    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit Project"
    editBtn.classList.add("edit-project-btn")
    const addBtn = document.createElement("button")
    addBtn.classList.add("task-form-btn")
    addBtn.textContent = "Add Task"
    const uiDiv = document.querySelector(".proj-ui-div")
    btnContainer.append(editBtn, addBtn)
    uiDiv.append(btnContainer)
}

function renderTaggedTasks(container, list){
    const ul = document.createElement("ul")
    ul.classList.add("task-list")
    for (let j = 0; j < list.length; j++){
        const li = document.createElement("li")
        const checkBox = document.createElement("input")
        checkBox.dataset.index = j
        checkBox.type = "checkbox"
        checkBox.checked = list[j].complete ? true : false
        checkBox.id = `complete-status${j}`
        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task-div")
        const taskName = document.createElement("label")
        taskName.htmlFor = `complete-status${j}`
        taskName.textContent = list[j].name
        const priority = document.createElement("span")
        priority.textContent = `Priority: ${list[j]["task-priority"]}`
        taskDiv.classList.add(`${list[j]["task-priority"].toLowerCase()}-priority`)
        const taskType = document.createElement("span")
        taskType.textContent = `Tag: ${list[j]["task-type"]}`
        const dateField = document.createElement("span")
        dateField.textContent = list[j].date
        const delBtn = document.createElement("button")
        delBtn.classList.add("delete-task-btn")
        delBtn.textContent = "Delete"
        delBtn.dataset.index = j
        const expandBtn = document.createElement("button")
        expandBtn.classList.add("expand-task-details")
        expandBtn.textContent = "Expand"
        expandBtn.dataset.index = j
        taskDiv.append(checkBox, taskName, priority, taskType, dateField, expandBtn, delBtn)
        li.append(taskDiv)
        ul.append(li)
    }
    container.append(ul)
}

function renderCategoryTab(container, project, taskList){
    container.replaceChildren()
    renderCategoryInfo(container, project)
    renderTaggedTasks(container, taskList)
}

function renderProjectTab(container, project, taskList){
    container.replaceChildren()
    renderProjectInfo(container, project)
    renderTaggedTasks(container, taskList)
}



/***/ }),

/***/ "./src/dateManager.js":
/*!****************************!*\
  !*** ./src/dateManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "formatHTMLDate": () => (/* binding */ formatHTMLDate),
/* harmony export */   "getCurrentDate": () => (/* binding */ getCurrentDate),
/* harmony export */   "getTomorrow": () => (/* binding */ getTomorrow),
/* harmony export */   "revertHTMLDate": () => (/* binding */ revertHTMLDate)
/* harmony export */ });
function getCurrentDate(){
    const date = new Date()
    return date
}

function getTomorrow(){
    const today = getCurrentDate()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return tomorrow
}

function formatDate(date){
    const [month, day, year] = [(date.getMonth()+1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0"), date.getFullYear()]
    return `${month}/${day}/${year}`
}
  
function formatHTMLDate(dateStr){
    let formatDate = dateStr.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g, "$2/$3/$1")
    return formatDate
}

function revertHTMLDate(formatStr){
    return formatStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, "$3-$1-$2")
}



/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTaskIndex": () => (/* binding */ fetchTaskIndex),
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "findProjectInfo": () => (/* binding */ findProjectInfo),
/* harmony export */   "handleClosingEditProjectForm": () => (/* binding */ handleClosingEditProjectForm),
/* harmony export */   "handleClosingEditTaskModal": () => (/* binding */ handleClosingEditTaskModal),
/* harmony export */   "handleClosingProjectForm": () => (/* binding */ handleClosingProjectForm),
/* harmony export */   "handleClosingTaskForm": () => (/* binding */ handleClosingTaskForm),
/* harmony export */   "hideEditTaskModal": () => (/* binding */ hideEditTaskModal),
/* harmony export */   "hideExpandTaskModal": () => (/* binding */ hideExpandTaskModal),
/* harmony export */   "resetValidity": () => (/* binding */ resetValidity),
/* harmony export */   "showEditForm": () => (/* binding */ showEditForm),
/* harmony export */   "showEditTaskModal": () => (/* binding */ showEditTaskModal),
/* harmony export */   "showExpandTaskModal": () => (/* binding */ showExpandTaskModal),
/* harmony export */   "showProjectModal": () => (/* binding */ showProjectModal),
/* harmony export */   "showTaskModal": () => (/* binding */ showTaskModal),
/* harmony export */   "submitEditProjectObj": () => (/* binding */ submitEditProjectObj),
/* harmony export */   "submitProjectObj": () => (/* binding */ submitProjectObj),
/* harmony export */   "submitTaskObj": () => (/* binding */ submitTaskObj),
/* harmony export */   "toggleMobileMenu": () => (/* binding */ toggleMobileMenu)
/* harmony export */ });
function findProjectInfo(e, list){
    let index = Number(e.target.dataset.index)
    const tabObj = list[index]
    return {tabObj, index}
}

function findIndex(e){
    const index = e.target.dataset.index 
    return index
}

function showProjectModal(e){
    const modal = document.querySelector(".project-form-div")
    modal.classList.remove("hide")
}

function showTaskModal(e){
    const modal = document.querySelector(".task-form-div")
    modal.classList.remove("hide")
}

function hideProjectForm(e){
    const modal = document.querySelector(".project-form-div")
    modal.classList.add("hide")
}

function hideTaskForm(e){
    const modal = document.querySelector(".task-form-div")
    modal.classList.add("hide")
}

function showEditForm(e, name, desc){
    const modal = document.querySelector(".edit-project-div")
    const inputName = modal.querySelector("#edit-project-name-input")
    const inputDesc = modal.querySelector("#edit-project-desc-input")
    inputName.value = name 
    inputDesc.value = desc
    modal.classList.remove("hide")
}

function hideEditTaskForm(e){
    const modal = document.querySelector(".edit-project-div")
    modal.classList.add("hide")
}

function resetForm(form){
    form.reset()
}

function handleClosingProjectForm(e){
    hideProjectForm(e)
    const form = document.querySelector("#project-form")
    resetForm(form)
}

function handleClosingTaskForm(e){
    hideTaskForm(e)
    const form = document.querySelector("#task-form")
    resetForm(form)
}

function handleClosingEditProjectForm(e){
    hideEditTaskForm(e)
    const form = document.querySelector("#edit-project-form")
    resetForm(form)
}

function submitProjectObj(e, projNameArr, nameInput){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    if (projNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    handleClosingProjectForm(e)
    return dataObj
}

function showExpandTaskModal(e){
    const modal = document.querySelector(".expanded-task-info")
    modal.classList.remove("hide")
}

function hideExpandTaskModal(e){
    const modal = document.querySelector(".expanded-task-info")
    modal.classList.add("hide")
}

function submitEditProjectObj(e, projNameArr, nameInput){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    if (projNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate project names")
        nameInput.reportValidity()
        return
    }
    handleClosingEditProjectForm(e)
    return dataObj
}

function submitTaskObj(e, taskNameArr){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    const nameInput = document.querySelector("#task-name-input")
    if (taskNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate task names")
        nameInput.reportValidity()
        return
    }
    handleClosingTaskForm(e)
    return dataObj
}

function resetValidity(e){
    let inputId = e.target.id
    if (inputId === "project-name-input" || inputId === "task-name-input"
        || inputId === "edit-project-name-input" || inputId === "edit-task-name-input"){
        e.target.setCustomValidity("")
    }
}

function hideEditTaskModal(){
    const modal = document.querySelector(".edit-task-form-div")
    modal.classList.add("hide")
}

function handleClosingEditTaskModal(){
    hideEditTaskModal()
    const form = document.querySelector("#edit-task-form")
    form.reset()
}

function showEditTaskModal(e){
    const modal = document.querySelector(".edit-task-form-div")
    modal.classList.remove("hide")
}

function fetchTaskIndex(e){
    const index = e.target.dataset.index
    return index
}

function toggleMobileMenu(){
    const menu = document.querySelector(".sidebar-nav")
    menu.classList.toggle("visible")
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listManager */ "./src/listManager.js");
/* harmony import */ var _createTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTab */ "./src/createTab.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.js");
/* harmony import */ var _dateManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dateManager */ "./src/dateManager.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");







const categoryManager = (0,_listManager__WEBPACK_IMPORTED_MODULE_0__["default"])()
const projectManager = (0,_listManager__WEBPACK_IMPORTED_MODULE_0__["default"])()
const taskManager = (0,_listManager__WEBPACK_IMPORTED_MODULE_0__["default"])()

const currentTabManager = (function(){
    const tabInfo = {}
    const setCurrentTab = (tabObj, index, taskArr) => {
        tabInfo.obj = tabObj
        tabInfo.index = index
        tabInfo.taskArr = taskArr
    }
    const setTaskArrOfTab = (taskArr) => {
        tabInfo.taskArr = taskArr
    }
    const getCurrentTab = () => {
        return tabInfo
    }
    return {setCurrentTab, setTaskArrOfTab, getCurrentTab}
})();

(function fillCategories(){
    const defCategories = [
        {name: "Today", desc: "For tasks that are due today"}, 
        {name: "Tomorrow", desc: "For tasks that are due tomorrow"},
        {name: "Personal", desc: "Tasks related to your everyday life"},
        {name: "Work", desc: "Tasks strictly related to not relaxing"}
    ]
    for (let el of defCategories){
        categoryManager.addItem(el)
    }
})()

window.addEventListener("load", () => {
    const projectList = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getStorage)("projects")
    const taskList = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getStorage)("tasks")
    if (projectList){
        populateList(projectManager, projectList)
    }
    if (taskList){
        populateList(taskManager, taskList)
    }

    const categoryList = categoryManager.getList()
    let list = taskManager.getList()
    let today = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatDate(_dateManager__WEBPACK_IMPORTED_MODULE_3__.getCurrentDate())
    let filteredList = filterTasks(list, today, "date")
    currentTabManager.setCurrentTab(categoryList[0], 0, filteredList)
    let tabInfo = currentTabManager.getCurrentTab()
    const catContainer = document.querySelector(".category-list-container")
    const projContainer = document.querySelector(".project-list-container")
    const projectTab = document.querySelector(".project-tab")
    renderCategoryList(categoryList, catContainer)
    renderProjectList(projectManager.getList(), projContainer)
    ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderCategoryTab)(projectTab, tabInfo.obj, tabInfo.taskArr, "Today")
})

document.body.addEventListener("click", (e) => {
    const targetClassList = e.target.classList
    if (targetClassList.contains("today")){
        const date = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatDate(_dateManager__WEBPACK_IMPORTED_MODULE_3__.getCurrentDate())
        tagTasksByDate(e, date)
    }
    else if (targetClassList.contains("tomorrow")){
        const date = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatDate(_dateManager__WEBPACK_IMPORTED_MODULE_3__.getTomorrow())
        tagTasksByDate(e, date)
    }
    else if (targetClassList.contains("personal") || targetClassList.contains("work")){
        const {tabObj, index} = (0,_events__WEBPACK_IMPORTED_MODULE_2__.findProjectInfo)(e, categoryManager.getList())
        const taskArr = filterTasks(taskManager.getList(), tabObj.name, "task-type")
        handleTabSelection(tabObj, index, taskArr, _createTab__WEBPACK_IMPORTED_MODULE_1__.renderCategoryTab)
    }
    else if (targetClassList.contains("project-btn")){
        const {tabObj, index} = (0,_events__WEBPACK_IMPORTED_MODULE_2__.findProjectInfo)(e, projectManager.getList())
        const taskArr = filterTasks(taskManager.getList(), tabObj.name, "tag")
        handleTabSelection(tabObj, index, taskArr, _createTab__WEBPACK_IMPORTED_MODULE_1__.renderProjectTab)
    }
    else if (targetClassList.contains("project-del-btn")){
        handleProjectDeletion(e)
    }
    else if (targetClassList.contains("delete-task-btn")){
        handleTaskDeletion(e, "name", "tag")
    }
    else if (targetClassList.contains("add-project-btn")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.showProjectModal)(e)
    }
    else if (targetClassList.contains("close-project-modal")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.handleClosingProjectForm)(e)
    }
    else if (targetClassList.contains("task-form-btn")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.showTaskModal)(e)
    }
    else if (targetClassList.contains("close-task-modal")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.handleClosingTaskForm)(e)
    }
    else if (targetClassList.contains("edit-project-btn")){
        openEditProjectForm(e)
    }
    else if (targetClassList.contains("close-edit-project-modal")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.handleClosingEditProjectForm)(e)
    }
    else if (targetClassList.contains("expand-task-details")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.showExpandTaskModal)(e)
        fillTaskModal(e)
    }
    else if (targetClassList.contains("close-expandTask-modal")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.hideExpandTaskModal)(e)
    }
    else if (targetClassList.contains("edit-task-btn")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.showEditTaskModal)(e)
        fillEditTaskForm(e)
    }
    else if (targetClassList.contains("close-edit-task-modal")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.hideEditTaskModal)()
    }
    else if (targetClassList.contains("mobile-burger")){
        (0,_events__WEBPACK_IMPORTED_MODULE_2__.toggleMobileMenu)()
    }
})

function fillEditTaskForm(e){
    const index = e.target.dataset.index
    const form = document.querySelector("#edit-task-form")
    form.dataset.index = index
    const task = currentTabManager.getCurrentTab().taskArr[index]
    const nameInput = document.querySelector("#edit-task-name-input")
    nameInput.value = task.name
    const descInput = document.querySelector("#edit-task-desc-input")
    descInput.value = task.desc
    const dateInput = document.querySelector("#edit-task-date")
    dateInput.value = _dateManager__WEBPACK_IMPORTED_MODULE_3__.revertHTMLDate(task.date)
    const chosenType = task["task-type"].toLowerCase()
    const typeInput = document.querySelector(`#edit-${chosenType}`)
    typeInput.checked = true
    const chosenPriority = task["task-priority"].toLowerCase()
    const priorityInput = document.querySelector(`#edit-${chosenPriority}`)
    priorityInput.checked = true
}

function fillTaskModal(e){
    const index = Number(e.target.dataset.index)
    const editBtn = document.querySelector(".edit-task-btn")
    editBtn.dataset.index = index
    const task = currentTabManager.getCurrentTab().taskArr[index]
    const taskTitle = document.querySelector(".task-title")
    taskTitle.textContent = task.name
    const taskDesc = document.querySelector(".task-description")
    taskDesc.textContent = task.desc
    const taskDate = document.querySelector(".task-date-info")
    taskDate.textContent = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatHTMLDate(`Due Date: ${task.date}`)
    const taskType = document.querySelector(".task-type-info")
    taskType.textContent = `Type: ${task["task-type"]}`
    const taskPriority = document.querySelector(".task-priority-info")
    taskPriority.textContent = `Priority: ${task["task-priority"]}`
}

function openEditProjectForm(e){
    const tabObj = currentTabManager.getCurrentTab().obj
    ;(0,_events__WEBPACK_IMPORTED_MODULE_2__.showEditForm)(e, tabObj.name, tabObj.desc)
}

document.body.addEventListener("input", (e) => {
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.resetValidity)(e)
})

document.body.addEventListener("change", (e) => {
    if (e.target.type === "checkbox"){
        const index = (0,_events__WEBPACK_IMPORTED_MODULE_2__.fetchTaskIndex)(e)
        toggleCompletionStatus(index)
    }
})

document.body.addEventListener("submit", (e) => {
    let formId = e.target.id
    if (formId === "project-form"){
        handleProjectSubmission(e)
    }
    else if (formId === "task-form"){
        handleTaskSubmission(e)
    }
    else if (formId === "edit-project-form"){
        handleProjectEdit(e)
    }
    else if (formId === "edit-task-form"){
        handleEditTaskSubmission(e)
        fillTaskModal(e)
    }
})

function submitEditTaskObj(e, taskNameArr){
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data)
    const nameInput = document.querySelector("#edit-task-name-input")
    if (taskNameArr.includes(dataObj.name)){
        nameInput.setCustomValidity("Cannot set duplicate task names")
        nameInput.reportValidity()
        return
    }
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.handleClosingTaskForm)(e)
    return dataObj
}

function renderCategoryList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.classList.add(`${list[i].name.toLowerCase()}`)
        btn.dataset.index = i
        let name = list[i].name
        btn.textContent = name
        li.append(btn)
        container.append(li)
    }
}

function renderProjectList(list, container){
    container.replaceChildren()
    for (let i = 0; i < list.length; i++){
        const btnDiv = document.createElement("div")
        const li = document.createElement("li")
        const btn = document.createElement("button")
        let name = list[i].name
        btn.textContent = name
        btn.dataset.index = i
        btn.classList.add("project-btn")

        const delBtn = document.createElement("button")
        delBtn.classList.add("project-del-btn")
        delBtn.textContent = "X"
        delBtn.dataset.index = i
        btnDiv.append(btn, delBtn)
        li.append(btnDiv)
        container.append(li)
    }
    const finalLi = document.createElement("li")
    const addProjBtn = document.createElement("button")
    addProjBtn.textContent = "Add Project"
    addProjBtn.classList.add("add-project-btn")
    finalLi.append(addProjBtn)
    container.append(finalLi)
}

function handleTabSelection(tabObj, index, taskArr, renderFn){
    const container = document.querySelector(".project-tab")
    currentTabManager.setCurrentTab(tabObj, index, taskArr)
    const tabInfo = currentTabManager.getCurrentTab()
    renderFn(container, tabInfo.obj, tabInfo.taskArr)
}

function handleProjectDeletion(e){
    const container = document.querySelector(".project-list-container")
    const tabObj = currentTabManager.getCurrentTab().obj
    const projectTab = document.querySelector(".project-tab")
    const projIndex = (0,_events__WEBPACK_IMPORTED_MODULE_2__.findIndex)(e)
    const clickedObj = projectManager.getList()[projIndex]
    if (tabObj === clickedObj) {
        projectTab.replaceChildren()
    }
    const taskList = taskManager.getList()
    for (let i = 0; i < taskList.length; i++){
        if (taskList[i].tag === clickedObj.name){
            taskManager.deleteItem(taskList[i])
        }   
    }
    if (categoryManager.getList().includes(tabObj)){
        let list = filterTasks(taskManager.getList(), tabObj.name, "tag")
        ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderCategoryTab)(projectTab, tabObj, list)
    }
    projectManager.deleteItem(clickedObj)
    renderProjectList(projectManager.getList(), container)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("projects", projectManager.getList())
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("tasks", taskManager.getList())
}

function handleProjectSubmission(e){
    const container = document.querySelector(".project-list-container")
    const nameInput = document.querySelector("#project-name-input")
    const projList = projectManager.getList()
    const projectNames = projList.map(proj => proj.name)
    const projectObj = (0,_events__WEBPACK_IMPORTED_MODULE_2__.submitProjectObj)(e, projectNames, nameInput)
    if (!projectObj){
        return
    }
    projectManager.addItem(projectObj)
    renderProjectList(projList, container)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("projects", projList)
}

function handleProjectEdit(e){
    const container = document.querySelector(".project-list-container")
    const tabContainer = document.querySelector(".project-tab")
    const nameInput = document.querySelector("#edit-project-name-input")
    const projList = projectManager.getList()
    const tabInfo = currentTabManager.getCurrentTab()
    const projTaskList = tabInfo.taskArr
    const currentProjName = tabInfo.obj.name
    const projectNames = projList.map(proj => proj.name).filter(name => name !== currentProjName)
    const projectObj = (0,_events__WEBPACK_IMPORTED_MODULE_2__.submitEditProjectObj)(e, projectNames, nameInput)
    if (!projectObj){
        return
    }    
    const taskList = taskManager.getList()
    for (let i = 0; i < taskList.length; i++){
        if (projTaskList.includes(taskList[i])){
            const newTaggedTask = {...taskList[i], tag: projectObj.name}
            taskManager.editItem(i, newTaggedTask)
        }   
    }
    const filterTaskList = filterTasks(taskManager.getList(), projectObj.name, "tag")
    projectManager.editItem(tabInfo.index, projectObj)
    currentTabManager.setCurrentTab(projectObj, tabInfo.index, filterTaskList)
    renderProjectList(projectManager.getList(), container)
    ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderProjectTab)(tabContainer, projectObj, filterTaskList)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("projects", projList)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("tasks", taskList)
}

function handleEditTaskSubmission(e){
    const taskIndex = Number(e.target.dataset.index)
    const container = document.querySelector(".project-tab")
    const oldTaskObj = currentTabManager.getCurrentTab().taskArr[taskIndex]
    const oldTaskName = oldTaskObj.name
    const taskNames = taskManager.getList().map(task => task.name).filter(name => name !== oldTaskName)
    const taskObj = submitEditTaskObj(e, taskNames)
    if (!taskObj){
        return
    }
    const newTaskObj = {...oldTaskObj, ...taskObj}
    newTaskObj.date = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatHTMLDate(newTaskObj.date)
    const fullTaskList = taskManager.getList()
    for (let i = 0; i < fullTaskList.length; i++){
        if (fullTaskList[i] === oldTaskObj){
            taskManager.editItem(i, newTaskObj)
        }
    }
    const tabInfo = currentTabManager.getCurrentTab()
    const categoryList = categoryManager.getList()
    if (categoryList.includes(tabInfo.obj)){
        handleCategoryTaskList()
        ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderCategoryTab)(container, tabInfo.obj, tabInfo.taskArr)
    }
    else {
        const taskList = filterTasks(taskManager.getList(), tabInfo.obj.name, "tag")
        currentTabManager.setTaskArrOfTab(taskList)
        ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderProjectTab)(container, tabInfo.obj, tabInfo.taskArr)
    } 
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.handleClosingEditTaskModal)(e)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("tasks", fullTaskList)
}

function handleTaskSubmission(e){
    const container = document.querySelector(".project-tab")
    const tabInfo = currentTabManager.getCurrentTab()
    const tabObj = tabInfo.obj
    const taskNames = tabInfo.taskArr.map(task => task.name)
    const taskObj = (0,_events__WEBPACK_IMPORTED_MODULE_2__.submitTaskObj)(e, taskNames)
    if (!taskObj){
        return
    }
    taskObj.complete = false
    taskObj.tag = tabInfo.obj.name
    taskObj.date = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatHTMLDate(taskObj.date)
    taskManager.addItem(taskObj)
    const taskList = filterTasks(taskManager.getList(), tabObj.name, "tag")
    currentTabManager.setTaskArrOfTab(taskList)
    ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderProjectTab)(container, tabObj, tabInfo.taskArr)
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("tasks", taskManager.getList())
}

function handleTaskDeletion(e, tagName, tagType){
    const container = document.querySelector(".project-tab")
    const index = (0,_events__WEBPACK_IMPORTED_MODULE_2__.findIndex)(e)
    const tabInfo = currentTabManager.getCurrentTab()
    const projTaskList = tabInfo.taskArr
    const clickedTask = projTaskList[index]
    taskManager.deleteItem(clickedTask)
    const categoryList = categoryManager.getList()
    if (categoryList.includes(tabInfo.obj)){
        handleCategoryTaskList()
        ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderCategoryTab)(container, tabInfo.obj, tabInfo.taskArr)
    }
    else {
        const newTaskList = filterTasks(taskManager.getList(), tabInfo.obj[tagName], tagType)
        currentTabManager.setTaskArrOfTab(newTaskList)
        ;(0,_createTab__WEBPACK_IMPORTED_MODULE_1__.renderProjectTab)(container, tabInfo.obj, tabInfo.taskArr)
    } 
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("tasks", taskManager.getList())
}

function tagTasksByDate(e, date){
    const {tabObj, index} = (0,_events__WEBPACK_IMPORTED_MODULE_2__.findProjectInfo)(e, categoryManager.getList())
    const taskArr = filterTasks(taskManager.getList(), date, "date")
    handleTabSelection(tabObj, index, taskArr, _createTab__WEBPACK_IMPORTED_MODULE_1__.renderCategoryTab)
}

function filterTasks(list, tag, tagType){
    const taggedTasks = list.filter(el => el[tagType] === tag)
    return taggedTasks
}

function toggleCompletionStatus(index){
    const tabInfo = currentTabManager.getCurrentTab()
    const taskObj = tabInfo.taskArr[index]
    const completionStatus = !taskObj.complete
    const newTaskObj = {...taskObj, complete: completionStatus}
    taskManager.editItem(index, newTaskObj)
    const categoryList = categoryManager.getList()
    if (categoryList.includes(tabInfo.obj)){
        handleCategoryTaskList()
    }
    else {
        const taskList = filterTasks(taskManager.getList(), tabInfo.obj.name, "tag")
        currentTabManager.setTaskArrOfTab(taskList)
    } 
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.updateStorage)("tasks", taskManager.getList())
}

function populateList(managerObj, arr){
    for (let el of arr){
        managerObj.addItem(el)
    }
}

function handleCategoryTaskList(){
    const tabName = currentTabManager.getCurrentTab().obj.name
    const list = taskManager.getList()
    let taskList
    if (tabName === "Today"){
        const date = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatDate(_dateManager__WEBPACK_IMPORTED_MODULE_3__.getCurrentDate())
        taskList = filterTasks(list, date, "date") 
    }
    else if (tabName === "Tomorrow"){
        const date = _dateManager__WEBPACK_IMPORTED_MODULE_3__.formatDate(_dateManager__WEBPACK_IMPORTED_MODULE_3__.getTomorrow())
        taskList = filterTasks(list, date, "date") 
    }
    else if (tabName === "Work" || tabName === "Personal"){
        taskList = filterTasks(list, tabName, "task-type")
    }
    currentTabManager.setTaskArrOfTab(taskList)
}

/***/ }),

/***/ "./src/listManager.js":
/*!****************************!*\
  !*** ./src/listManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function listManager(){
    let list = []
    const addItem = item => {list.push(item)}
    const editItem = (index, item) => {list[index] = item}
    const deleteItem = item => {list = list.filter(el => el !== item)}
    const getList = () => list
    return {addItem, editItem, deleteItem, getList}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listManager);

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLocalStorage": () => (/* binding */ checkLocalStorage),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
const localStorage = window.localStorage

 function checkLocalStorage(keyStr){
    const keyObj = localStorage.getItem(keyStr)
    if (keyObj){
        return true 
    }
    else{
        return false
    }
}

function updateStorage(keyStr, value){
    const strVal = JSON.stringify(value)
    localStorage.setItem(keyStr, strVal)
}

function getStorage(keyStr){
    const value = localStorage.getItem(keyStr)
    return JSON.parse(value)
}

/***/ }),

/***/ "./src/fonts/Quicksand-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/Quicksand-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92e1d0f3321b53e20d2b.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SnVDO0FBQ3dCO0FBSzlDO0FBQzJCO0FBQ2lDO0FBQ3hEO0FBQ3JCO0FBQ0Esd0JBQXdCLHdEQUFXO0FBQ25DLHVCQUF1Qix3REFBVztBQUNsQyxv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QUM3QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFnQjtBQUNwQixJQUFJLDZEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFnQjtBQUN4QjtBQUNBLElBQUksNERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlLEVBQUUsd0RBQWU7QUFDM0M7QUFDQSwrQ0FBK0MseURBQWlCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBc0IsQ0FBQyx3REFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFzQixDQUFDLHFEQUF1QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuY0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBQ2hDO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmO0FBQ0E7QUFDQSxDQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciA+ICoge1xcbiAgcGFkZGluZzogMCA0dnc7XFxufVxcblxcbmZvb3RlciwgaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciAubW9iaWxlLWJ1cmdlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5mb290ZXIgLmZvb3Rlci1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuZm9vdGVyIC5mb290ZXItbGluazpob3ZlcixcXG5mb290ZXIgLmZvb3Rlci1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMTMyLCAyMjAsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMHB4IDEwMHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG51bCBsaSA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMDtcXG59XFxuXFxuLnNpZGViYXItbmF2IHtcXG4gIGZsZXgtZ3JvdzogMC4wMztcXG59XFxuXFxuLmNhdGVnb3J5LWxpc3QtY29udGFpbmVyLFxcbi50YXNrLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtbGlzdC1jb250YWluZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIGZsZXgtZ3JvdzogMjtcXG59XFxuLnByb2plY3QtdGFiIGgyIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLnByb2plY3QtdGFiIHAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ucHJvamVjdC10YWIgLnByb2plY3QtdGFiLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG4ucHJvamVjdC10YWIgLnByb2otdWktZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdC10YWIgaW5wdXQ6Y2hlY2tlZCB+ICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcm9qZWN0LXRhYiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLm1vZGFsID4gKiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4ubW9kYWwgPiAqIC5pbnB1dC1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgzMDBweCwgMWZyKTtcXG4gIGdhcDogMzJweDtcXG59XFxuLm1vZGFsID4gKiAuaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4ubW9kYWwgPiAqIC5pbnB1dC1jb250YWluZXIgaW5wdXQsXFxuLm1vZGFsID4gKiAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1vZGFsID4gKiAucmFkaW8tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ2FwOiA4cHg7XFxufVxcbi5tb2RhbCA+ICogLmJ0bi1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgPiAqIGgyLFxcbi5tb2RhbCA+ICogcCB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5tb2RhbCA+ICogcCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tb2RhbCA+ICogLnRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4udGFzay1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6ICM3NmYzZmY7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZjc2O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItY29sb3I6ICNmZjRkNGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5ODk4OTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBoZWFkZXIgLm1vYmlsZS1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5zaWRlYmFyLW5hdiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAudmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLnBhZ2UtY29udGVudCB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gIC50YXNrLWRpdiB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5tb2RhbCA+ICogLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgxMjBweCwgMzAwcHgpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvX2RlZmF1bHQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBOztFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QUFiQTtFQUNJLHdCQUFBO0VBQ0EsK0RBQUE7QUFnQko7QUFiQTtFQUNJLHdCQUFBO0FBZUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQWNKOztBQVhBO0VBQ0ksY0FBQTtBQWNKOztBQVhBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBY0o7O0FBWEE7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7QUFhSjtBQVpJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBY1I7O0FBVkE7RUFFSSxrQkFBQTtFQUNBLGVBQUE7QUFZSjtBQVhJO0VBQ0kscUJBQUE7QUFhUjtBQVhJOztFQUVJLCtCQUFBO0FBYVI7O0FBVEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFUQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVRBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FBWUo7QUFYSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBYVI7O0FBVEE7RUFDSSxlQUFBO0FBWUo7O0FBVEE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFZSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUFZSjs7QUFUQTtFQUNJLFlBQUE7QUFZSjtBQVhJO0VBQ0ksZUFBQTtBQWFSO0FBWEk7RUFDSSxlQUFBO0FBYVI7QUFYSTtFQUNJLGFBQUE7RUFDQSxRQUFBO0FBYVI7QUFYSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBYVI7QUFYSTtFQUNJLDZCQUFBO0FBYVI7O0FBVEE7RUFDSSxlQXZHYTtBQW1IakI7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVlKOztBQVRBO0VBRUkseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQVdKO0FBVkk7RUFDSSxlQWZjO0VBZ0JkLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7QUFZUjtBQVhRO0VBQ0ksaUJBQUE7QUFhWjtBQVhROztFQUVJLGVBeEJVO0FBcUN0QjtBQVZJO0VBQ0ksZUE1QmM7RUE2QmQsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsUUFBQTtBQVlSO0FBVkk7RUFDSSxrQkFBQTtBQVlSO0FBVkk7O0VBRUksU0FBQTtBQVlSO0FBVkk7RUFDSSxlQUFBO0FBWVI7QUFWSTtFQUNJLGVBcEtTO0FBZ0xqQjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFSQTtFQUNJLGFBQUE7QUFXSjs7QUFSQTtFQUNJLHFCQUFBO0FBV0o7O0FBUkE7RUFDSSxxQkFBQTtBQVdKOztBQVJBO0VBQ0kscUJBQUE7QUFXSjs7QUFSQTs7RUFFSSx5QkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFSQTtFQUVRO0lBQ0ksY0FBQTtFQVVWO0VBUEU7SUFDSSxhQUFBO0VBU047RUFQRTtJQUNJLGNBQUE7RUFTTjtFQVBFO0lBQ0ksZUFBQTtFQVNOO0VBUEU7SUFDSSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VBU047RUFQRTtJQUNJLCtDQUFBO0VBU047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cIixcIkB1c2UgXFxcImRlZmF1bHRcXFwiO1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxyXFxufVxcclxcblxcclxcbiR0YXNrLXByb2otZm9udDogMzZweDtcXHJcXG4ucGFnZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgcGFkZGluZzogMCA0dnc7XFxyXFxufVxcclxcblxcclxcbiVoZWFkZXItZm9vdGVyLXN0eWxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIEBleHRlbmQgJWhlYWRlci1mb290ZXItc3R5bGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLm1vYmlsZS1idXJnZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBAZXh0ZW5kICVoZWFkZXItZm9vdGVyLXN0eWxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgLmZvb3Rlci1saW5rIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyLWxpbms6aG92ZXIsXFxyXFxuICAgIC5mb290ZXItbGluazp2aXNpdGVkIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2JhKDEzMiwgMjIwLCAyNTUsIDAuMylcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMHB4IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGk+KiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLW5hdiB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMC4wMztcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5LWxpc3QtY29udGFpbmVyLFxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YWIge1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgfVxcclxcbiAgICAucHJvamVjdC10YWItYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiA4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2otdWktZGl2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIGlucHV0OmNoZWNrZWR+KiB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10YWI+aDIge1xcclxcbiAgICBmb250LXNpemU6ICR0YXNrLXByb2otZm9udDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+KiB7XFxyXFxuICAgICRtb2RhbC1mb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAkbW9kYWwtZm9udC1zaXplO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgzMDBweCwgMWZyKTtcXHJcXG4gICAgICAgIGdhcDogMzJweDtcXHJcXG4gICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGlucHV0LFxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1vZGFsLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAucmFkaW8tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogJG1vZGFsLWZvbnQtc2l6ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcclxcbiAgICAgICAgZ2FwOiA4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ0bi1jb250YWluZXIge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIGgyLFxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGFzay10aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6ICR0YXNrLXByb2otZm9udDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdy1wcmlvcml0eSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzc2ZjNmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1wcmlvcml0eSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmY3NjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2gtcHJpb3JpdHkge1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmZjRkNGQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OTg5ODk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIGhlYWRlciB7XFxyXFxuICAgICAgICAubW9iaWxlLWJ1cmdlciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLnNpZGViYXItbmF2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnZpc2libGUge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBhZ2UtY29udGVudCB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRhc2stZGl2IHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5tb2RhbD4qIC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDEyMHB4LCAzMDBweCk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiByZW5kZXJDYXRlZ29yeUluZm8oY29udGFpbmVyLCBwcm9qZWN0KXtcclxuICAgIGNvbnN0IHVpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdWlEaXYuY2xhc3NMaXN0LmFkZChcInByb2otdWktZGl2XCIpXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxyXG4gICAgaDIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcclxuICAgIHVpRGl2LmFwcGVuZChoMilcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgcC50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzYyBcclxuICAgIGNvbnRhaW5lci5hcHBlbmQodWlEaXYsIHApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RJbmZvKGNvbnRhaW5lciwgcHJvamVjdCl7XHJcbiAgICByZW5kZXJDYXRlZ29yeUluZm8oY29udGFpbmVyLCBwcm9qZWN0KVxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhYi1idXR0b25zXCIpXHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0XCJcclxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1idG5cIilcclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtLWJ0blwiKVxyXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiXHJcbiAgICBjb25zdCB1aURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvai11aS1kaXZcIilcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQoZWRpdEJ0biwgYWRkQnRuKVxyXG4gICAgdWlEaXYuYXBwZW5kKGJ0bkNvbnRhaW5lcilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFnZ2VkVGFza3MoY29udGFpbmVyLCBsaXN0KXtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcbiAgICB1bC5jbGFzc0xpc3QuYWRkKFwidGFzay1saXN0XCIpXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpc3QubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBjaGVja0JveC5kYXRhc2V0LmluZGV4ID0galxyXG4gICAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCJcclxuICAgICAgICBjaGVja0JveC5jaGVja2VkID0gbGlzdFtqXS5jb21wbGV0ZSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIGNoZWNrQm94LmlkID0gYGNvbXBsZXRlLXN0YXR1cyR7an1gXHJcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKVxyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbiAgICAgICAgdGFza05hbWUuaHRtbEZvciA9IGBjb21wbGV0ZS1zdGF0dXMke2p9YFxyXG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gbGlzdFtqXS5uYW1lXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxyXG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke2xpc3Rbal1bXCJ0YXNrLXByaW9yaXR5XCJdfWBcclxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoYCR7bGlzdFtqXVtcInRhc2stcHJpb3JpdHlcIl0udG9Mb3dlckNhc2UoKX0tcHJpb3JpdHlgKVxyXG4gICAgICAgIGNvbnN0IHRhc2tUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICB0YXNrVHlwZS50ZXh0Q29udGVudCA9IGBUYWc6ICR7bGlzdFtqXVtcInRhc2stdHlwZVwiXX1gXHJcbiAgICAgICAgY29uc3QgZGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcclxuICAgICAgICBkYXRlRmllbGQudGV4dENvbnRlbnQgPSBsaXN0W2pdLmRhdGVcclxuICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1idG5cIilcclxuICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiXHJcbiAgICAgICAgZGVsQnRuLmRhdGFzZXQuaW5kZXggPSBqXHJcbiAgICAgICAgY29uc3QgZXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGV4cGFuZEJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kLXRhc2stZGV0YWlsc1wiKVxyXG4gICAgICAgIGV4cGFuZEJ0bi50ZXh0Q29udGVudCA9IFwiRXhwYW5kXCJcclxuICAgICAgICBleHBhbmRCdG4uZGF0YXNldC5pbmRleCA9IGpcclxuICAgICAgICB0YXNrRGl2LmFwcGVuZChjaGVja0JveCwgdGFza05hbWUsIHByaW9yaXR5LCB0YXNrVHlwZSwgZGF0ZUZpZWxkLCBleHBhbmRCdG4sIGRlbEJ0bilcclxuICAgICAgICBsaS5hcHBlbmQodGFza0RpdilcclxuICAgICAgICB1bC5hcHBlbmQobGkpXHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHVsKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yeVRhYihjb250YWluZXIsIHByb2plY3QsIHRhc2tMaXN0KXtcclxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKVxyXG4gICAgcmVuZGVyQ2F0ZWdvcnlJbmZvKGNvbnRhaW5lciwgcHJvamVjdClcclxuICAgIHJlbmRlclRhZ2dlZFRhc2tzKGNvbnRhaW5lciwgdGFza0xpc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYWIoY29udGFpbmVyLCBwcm9qZWN0LCB0YXNrTGlzdCl7XHJcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcclxuICAgIHJlbmRlclByb2plY3RJbmZvKGNvbnRhaW5lciwgcHJvamVjdClcclxuICAgIHJlbmRlclRhZ2dlZFRhc2tzKGNvbnRhaW5lciwgdGFza0xpc3QpXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2F0ZWdvcnlUYWIsIHJlbmRlclByb2plY3RUYWJ9IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCl7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvbW9ycm93KCl7XHJcbiAgICBjb25zdCB0b2RheSA9IGdldEN1cnJlbnREYXRlKClcclxuICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpXHJcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDEpXHJcbiAgICByZXR1cm4gdG9tb3Jyb3dcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSl7XHJcbiAgICBjb25zdCBbbW9udGgsIGRheSwgeWVhcl0gPSBbKGRhdGUuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksIGRhdGUuZ2V0RnVsbFllYXIoKV1cclxuICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXHJcbn1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEhUTUxEYXRlKGRhdGVTdHIpe1xyXG4gICAgbGV0IGZvcm1hdERhdGUgPSBkYXRlU3RyLnJlcGxhY2UoLyhcXGR7NH0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KS9nLCBcIiQyLyQzLyQxXCIpXHJcbiAgICByZXR1cm4gZm9ybWF0RGF0ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJ0SFRNTERhdGUoZm9ybWF0U3RyKXtcclxuICAgIHJldHVybiBmb3JtYXRTdHIucmVwbGFjZSgvKFxcZHsyfSlcXC8oXFxkezJ9KVxcLyhcXGR7NH0pL2csIFwiJDMtJDEtJDJcIilcclxufVxyXG5cclxuIiwiZnVuY3Rpb24gZmluZFByb2plY3RJbmZvKGUsIGxpc3Qpe1xyXG4gICAgbGV0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXHJcbiAgICBjb25zdCB0YWJPYmogPSBsaXN0W2luZGV4XVxyXG4gICAgcmV0dXJuIHt0YWJPYmosIGluZGV4fVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kSW5kZXgoZSl7XHJcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXggXHJcbiAgICByZXR1cm4gaW5kZXhcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RNb2RhbChlKXtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tZGl2XCIpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VGFza01vZGFsKGUpe1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS1kaXZcIilcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybShlKXtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tZGl2XCIpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVGFza0Zvcm0oZSl7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtLWRpdlwiKVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0VkaXRGb3JtKGUsIG5hbWUsIGRlc2Mpe1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1kaXZcIilcclxuICAgIGNvbnN0IGlucHV0TmFtZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXRcIilcclxuICAgIGNvbnN0IGlucHV0RGVzYyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9qZWN0LWRlc2MtaW5wdXRcIilcclxuICAgIGlucHV0TmFtZS52YWx1ZSA9IG5hbWUgXHJcbiAgICBpbnB1dERlc2MudmFsdWUgPSBkZXNjXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRWRpdFRhc2tGb3JtKGUpe1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1kaXZcIilcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKXtcclxuICAgIGZvcm0ucmVzZXQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbG9zaW5nUHJvamVjdEZvcm0oZSl7XHJcbiAgICBoaWRlUHJvamVjdEZvcm0oZSlcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybVwiKVxyXG4gICAgcmVzZXRGb3JtKGZvcm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsb3NpbmdUYXNrRm9ybShlKXtcclxuICAgIGhpZGVUYXNrRm9ybShlKVxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpXHJcbiAgICByZXNldEZvcm0oZm9ybSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xvc2luZ0VkaXRQcm9qZWN0Rm9ybShlKXtcclxuICAgIGhpZGVFZGl0VGFza0Zvcm0oZSlcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvamVjdC1mb3JtXCIpXHJcbiAgICByZXNldEZvcm0oZm9ybSlcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0UHJvamVjdE9iaihlLCBwcm9qTmFtZUFyciwgbmFtZUlucHV0KXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldClcclxuICAgIGNvbnN0IGRhdGFPYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZGF0YSlcclxuICAgIGlmIChwcm9qTmFtZUFyci5pbmNsdWRlcyhkYXRhT2JqLm5hbWUpKXtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJDYW5ub3Qgc2V0IGR1cGxpY2F0ZSBwcm9qZWN0IG5hbWVzXCIpXHJcbiAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KClcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGhhbmRsZUNsb3NpbmdQcm9qZWN0Rm9ybShlKVxyXG4gICAgcmV0dXJuIGRhdGFPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0V4cGFuZFRhc2tNb2RhbChlKXtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHBhbmRlZC10YXNrLWluZm9cIilcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVFeHBhbmRUYXNrTW9kYWwoZSl7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kZWQtdGFzay1pbmZvXCIpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRFZGl0UHJvamVjdE9iaihlLCBwcm9qTmFtZUFyciwgbmFtZUlucHV0KXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldClcclxuICAgIGNvbnN0IGRhdGFPYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZGF0YSlcclxuICAgIGlmIChwcm9qTmFtZUFyci5pbmNsdWRlcyhkYXRhT2JqLm5hbWUpKXtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJDYW5ub3Qgc2V0IGR1cGxpY2F0ZSBwcm9qZWN0IG5hbWVzXCIpXHJcbiAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KClcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGhhbmRsZUNsb3NpbmdFZGl0UHJvamVjdEZvcm0oZSlcclxuICAgIHJldHVybiBkYXRhT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdFRhc2tPYmooZSwgdGFza05hbWVBcnIpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KVxyXG4gICAgY29uc3QgZGF0YU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhkYXRhKVxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWUtaW5wdXRcIilcclxuICAgIGlmICh0YXNrTmFtZUFyci5pbmNsdWRlcyhkYXRhT2JqLm5hbWUpKXtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJDYW5ub3Qgc2V0IGR1cGxpY2F0ZSB0YXNrIG5hbWVzXCIpXHJcbiAgICAgICAgbmFtZUlucHV0LnJlcG9ydFZhbGlkaXR5KClcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGhhbmRsZUNsb3NpbmdUYXNrRm9ybShlKVxyXG4gICAgcmV0dXJuIGRhdGFPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRWYWxpZGl0eShlKXtcclxuICAgIGxldCBpbnB1dElkID0gZS50YXJnZXQuaWRcclxuICAgIGlmIChpbnB1dElkID09PSBcInByb2plY3QtbmFtZS1pbnB1dFwiIHx8IGlucHV0SWQgPT09IFwidGFzay1uYW1lLWlucHV0XCJcclxuICAgICAgICB8fCBpbnB1dElkID09PSBcImVkaXQtcHJvamVjdC1uYW1lLWlucHV0XCIgfHwgaW5wdXRJZCA9PT0gXCJlZGl0LXRhc2stbmFtZS1pbnB1dFwiKXtcclxuICAgICAgICBlLnRhcmdldC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRWRpdFRhc2tNb2RhbCgpe1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtLWRpdlwiKVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xvc2luZ0VkaXRUYXNrTW9kYWwoKXtcclxuICAgIGhpZGVFZGl0VGFza01vZGFsKClcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1mb3JtXCIpXHJcbiAgICBmb3JtLnJlc2V0KClcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0VkaXRUYXNrTW9kYWwoZSl7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm0tZGl2XCIpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFRhc2tJbmRleChlKXtcclxuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxyXG4gICAgcmV0dXJuIGluZGV4XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU1lbnUoKXtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItbmF2XCIpXHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpXHJcbn1cclxuXHJcbmV4cG9ydCB7ZmluZFByb2plY3RJbmZvLCBmaW5kSW5kZXgsIHNob3dQcm9qZWN0TW9kYWwsIHNob3dUYXNrTW9kYWwsIGhhbmRsZUNsb3NpbmdQcm9qZWN0Rm9ybSwgXHJcbiAgICBoYW5kbGVDbG9zaW5nVGFza0Zvcm0sIHN1Ym1pdFByb2plY3RPYmosIHN1Ym1pdFRhc2tPYmosIHJlc2V0VmFsaWRpdHksIHNob3dFZGl0Rm9ybSwgXHJcbiAgICBoYW5kbGVDbG9zaW5nRWRpdFByb2plY3RGb3JtLCBzdWJtaXRFZGl0UHJvamVjdE9iaiwgaGlkZUV4cGFuZFRhc2tNb2RhbCwgc2hvd0V4cGFuZFRhc2tNb2RhbCxcclxuICAgIGhhbmRsZUNsb3NpbmdFZGl0VGFza01vZGFsLCBzaG93RWRpdFRhc2tNb2RhbCwgaGlkZUVkaXRUYXNrTW9kYWwsIGZldGNoVGFza0luZGV4LCB0b2dnbGVNb2JpbGVNZW51XHJcbn0iLCJpbXBvcnQgbGlzdE1hbmFnZXIgZnJvbSBcIi4vbGlzdE1hbmFnZXJcIlxyXG5pbXBvcnQge3JlbmRlckNhdGVnb3J5VGFiLCByZW5kZXJQcm9qZWN0VGFifSBmcm9tIFwiLi9jcmVhdGVUYWJcIlxyXG5pbXBvcnQge2ZpbmRQcm9qZWN0SW5mbywgZmluZEluZGV4LCBzaG93UHJvamVjdE1vZGFsLCBzaG93VGFza01vZGFsLCBoYW5kbGVDbG9zaW5nUHJvamVjdEZvcm0sIFxyXG4gICAgaGFuZGxlQ2xvc2luZ1Rhc2tGb3JtLCBzdWJtaXRQcm9qZWN0T2JqLCBzdWJtaXRUYXNrT2JqLCByZXNldFZhbGlkaXR5LCBzaG93RWRpdEZvcm0sIFxyXG4gICAgaGFuZGxlQ2xvc2luZ0VkaXRQcm9qZWN0Rm9ybSwgc3VibWl0RWRpdFByb2plY3RPYmosIGhpZGVFeHBhbmRUYXNrTW9kYWwsIHNob3dFeHBhbmRUYXNrTW9kYWwsXHJcbiAgICBoYW5kbGVDbG9zaW5nRWRpdFRhc2tNb2RhbCwgc2hvd0VkaXRUYXNrTW9kYWwsIGhpZGVFZGl0VGFza01vZGFsLCBmZXRjaFRhc2tJbmRleCwgdG9nZ2xlTW9iaWxlTWVudVxyXG59IGZyb20gXCIuL2V2ZW50c1wiXHJcbmltcG9ydCAqIGFzIGRhdGVNYW5hZ2VyIGZyb20gXCIuL2RhdGVNYW5hZ2VyXCJcclxuaW1wb3J0IHsgY2hlY2tMb2NhbFN0b3JhZ2UsIGdldFN0b3JhZ2UsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxyXG5cclxuY29uc3QgY2F0ZWdvcnlNYW5hZ2VyID0gbGlzdE1hbmFnZXIoKVxyXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IGxpc3RNYW5hZ2VyKClcclxuY29uc3QgdGFza01hbmFnZXIgPSBsaXN0TWFuYWdlcigpXHJcblxyXG5jb25zdCBjdXJyZW50VGFiTWFuYWdlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgdGFiSW5mbyA9IHt9XHJcbiAgICBjb25zdCBzZXRDdXJyZW50VGFiID0gKHRhYk9iaiwgaW5kZXgsIHRhc2tBcnIpID0+IHtcclxuICAgICAgICB0YWJJbmZvLm9iaiA9IHRhYk9ialxyXG4gICAgICAgIHRhYkluZm8uaW5kZXggPSBpbmRleFxyXG4gICAgICAgIHRhYkluZm8udGFza0FyciA9IHRhc2tBcnJcclxuICAgIH1cclxuICAgIGNvbnN0IHNldFRhc2tBcnJPZlRhYiA9ICh0YXNrQXJyKSA9PiB7XHJcbiAgICAgICAgdGFiSW5mby50YXNrQXJyID0gdGFza0FyclxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q3VycmVudFRhYiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFiSW5mb1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtzZXRDdXJyZW50VGFiLCBzZXRUYXNrQXJyT2ZUYWIsIGdldEN1cnJlbnRUYWJ9XHJcbn0pKCk7XHJcblxyXG4oZnVuY3Rpb24gZmlsbENhdGVnb3JpZXMoKXtcclxuICAgIGNvbnN0IGRlZkNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAge25hbWU6IFwiVG9kYXlcIiwgZGVzYzogXCJGb3IgdGFza3MgdGhhdCBhcmUgZHVlIHRvZGF5XCJ9LCBcclxuICAgICAgICB7bmFtZTogXCJUb21vcnJvd1wiLCBkZXNjOiBcIkZvciB0YXNrcyB0aGF0IGFyZSBkdWUgdG9tb3Jyb3dcIn0sXHJcbiAgICAgICAge25hbWU6IFwiUGVyc29uYWxcIiwgZGVzYzogXCJUYXNrcyByZWxhdGVkIHRvIHlvdXIgZXZlcnlkYXkgbGlmZVwifSxcclxuICAgICAgICB7bmFtZTogXCJXb3JrXCIsIGRlc2M6IFwiVGFza3Mgc3RyaWN0bHkgcmVsYXRlZCB0byBub3QgcmVsYXhpbmdcIn1cclxuICAgIF1cclxuICAgIGZvciAobGV0IGVsIG9mIGRlZkNhdGVnb3JpZXMpe1xyXG4gICAgICAgIGNhdGVnb3J5TWFuYWdlci5hZGRJdGVtKGVsKVxyXG4gICAgfVxyXG59KSgpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBnZXRTdG9yYWdlKFwicHJvamVjdHNcIilcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZ2V0U3RvcmFnZShcInRhc2tzXCIpXHJcbiAgICBpZiAocHJvamVjdExpc3Qpe1xyXG4gICAgICAgIHBvcHVsYXRlTGlzdChwcm9qZWN0TWFuYWdlciwgcHJvamVjdExpc3QpXHJcbiAgICB9XHJcbiAgICBpZiAodGFza0xpc3Qpe1xyXG4gICAgICAgIHBvcHVsYXRlTGlzdCh0YXNrTWFuYWdlciwgdGFza0xpc3QpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gY2F0ZWdvcnlNYW5hZ2VyLmdldExpc3QoKVxyXG4gICAgbGV0IGxpc3QgPSB0YXNrTWFuYWdlci5nZXRMaXN0KClcclxuICAgIGxldCB0b2RheSA9IGRhdGVNYW5hZ2VyLmZvcm1hdERhdGUoZGF0ZU1hbmFnZXIuZ2V0Q3VycmVudERhdGUoKSlcclxuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJUYXNrcyhsaXN0LCB0b2RheSwgXCJkYXRlXCIpXHJcbiAgICBjdXJyZW50VGFiTWFuYWdlci5zZXRDdXJyZW50VGFiKGNhdGVnb3J5TGlzdFswXSwgMCwgZmlsdGVyZWRMaXN0KVxyXG4gICAgbGV0IHRhYkluZm8gPSBjdXJyZW50VGFiTWFuYWdlci5nZXRDdXJyZW50VGFiKClcclxuICAgIGNvbnN0IGNhdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnktbGlzdC1jb250YWluZXJcIilcclxuICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIilcclxuICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFiXCIpXHJcbiAgICByZW5kZXJDYXRlZ29yeUxpc3QoY2F0ZWdvcnlMaXN0LCBjYXRDb250YWluZXIpXHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0TWFuYWdlci5nZXRMaXN0KCksIHByb2pDb250YWluZXIpXHJcbiAgICByZW5kZXJDYXRlZ29yeVRhYihwcm9qZWN0VGFiLCB0YWJJbmZvLm9iaiwgdGFiSW5mby50YXNrQXJyLCBcIlRvZGF5XCIpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0Q2xhc3NMaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0XHJcbiAgICBpZiAodGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kYXlcIikpe1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlTWFuYWdlci5mb3JtYXREYXRlKGRhdGVNYW5hZ2VyLmdldEN1cnJlbnREYXRlKCkpXHJcbiAgICAgICAgdGFnVGFza3NCeURhdGUoZSwgZGF0ZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcInRvbW9ycm93XCIpKXtcclxuICAgICAgICBjb25zdCBkYXRlID0gZGF0ZU1hbmFnZXIuZm9ybWF0RGF0ZShkYXRlTWFuYWdlci5nZXRUb21vcnJvdygpKVxyXG4gICAgICAgIHRhZ1Rhc2tzQnlEYXRlKGUsIGRhdGUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJwZXJzb25hbFwiKSB8fCB0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJ3b3JrXCIpKXtcclxuICAgICAgICBjb25zdCB7dGFiT2JqLCBpbmRleH0gPSBmaW5kUHJvamVjdEluZm8oZSwgY2F0ZWdvcnlNYW5hZ2VyLmdldExpc3QoKSlcclxuICAgICAgICBjb25zdCB0YXNrQXJyID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCB0YWJPYmoubmFtZSwgXCJ0YXNrLXR5cGVcIilcclxuICAgICAgICBoYW5kbGVUYWJTZWxlY3Rpb24odGFiT2JqLCBpbmRleCwgdGFza0FyciwgcmVuZGVyQ2F0ZWdvcnlUYWIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWJ0blwiKSl7XHJcbiAgICAgICAgY29uc3Qge3RhYk9iaiwgaW5kZXh9ID0gZmluZFByb2plY3RJbmZvKGUsIHByb2plY3RNYW5hZ2VyLmdldExpc3QoKSlcclxuICAgICAgICBjb25zdCB0YXNrQXJyID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCB0YWJPYmoubmFtZSwgXCJ0YWdcIilcclxuICAgICAgICBoYW5kbGVUYWJTZWxlY3Rpb24odGFiT2JqLCBpbmRleCwgdGFza0FyciwgcmVuZGVyUHJvamVjdFRhYilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtZGVsLWJ0blwiKSl7XHJcbiAgICAgICAgaGFuZGxlUHJvamVjdERlbGV0aW9uKGUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtdGFzay1idG5cIikpe1xyXG4gICAgICAgIGhhbmRsZVRhc2tEZWxldGlvbihlLCBcIm5hbWVcIiwgXCJ0YWdcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWJ0blwiKSl7XHJcbiAgICAgICAgc2hvd1Byb2plY3RNb2RhbChlKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtcHJvamVjdC1tb2RhbFwiKSl7XHJcbiAgICAgICAgaGFuZGxlQ2xvc2luZ1Byb2plY3RGb3JtKGUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrLWZvcm0tYnRuXCIpKXtcclxuICAgICAgICBzaG93VGFza01vZGFsKGUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJjbG9zZS10YXNrLW1vZGFsXCIpKXtcclxuICAgICAgICBoYW5kbGVDbG9zaW5nVGFza0Zvcm0oZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcImVkaXQtcHJvamVjdC1idG5cIikpe1xyXG4gICAgICAgIG9wZW5FZGl0UHJvamVjdEZvcm0oZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLWVkaXQtcHJvamVjdC1tb2RhbFwiKSl7XHJcbiAgICAgICAgaGFuZGxlQ2xvc2luZ0VkaXRQcm9qZWN0Rm9ybShlKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kLXRhc2stZGV0YWlsc1wiKSl7XHJcbiAgICAgICAgc2hvd0V4cGFuZFRhc2tNb2RhbChlKVxyXG4gICAgICAgIGZpbGxUYXNrTW9kYWwoZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcImNsb3NlLWV4cGFuZFRhc2stbW9kYWxcIikpe1xyXG4gICAgICAgIGhpZGVFeHBhbmRUYXNrTW9kYWwoZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRhcmdldENsYXNzTGlzdC5jb250YWlucyhcImVkaXQtdGFzay1idG5cIikpe1xyXG4gICAgICAgIHNob3dFZGl0VGFza01vZGFsKGUpXHJcbiAgICAgICAgZmlsbEVkaXRUYXNrRm9ybShlKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFyZ2V0Q2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtZWRpdC10YXNrLW1vZGFsXCIpKXtcclxuICAgICAgICBoaWRlRWRpdFRhc2tNb2RhbCgpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXJnZXRDbGFzc0xpc3QuY29udGFpbnMoXCJtb2JpbGUtYnVyZ2VyXCIpKXtcclxuICAgICAgICB0b2dnbGVNb2JpbGVNZW51KClcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIGZpbGxFZGl0VGFza0Zvcm0oZSl7XHJcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1mb3JtXCIpXHJcbiAgICBmb3JtLmRhdGFzZXQuaW5kZXggPSBpbmRleFxyXG4gICAgY29uc3QgdGFzayA9IGN1cnJlbnRUYWJNYW5hZ2VyLmdldEN1cnJlbnRUYWIoKS50YXNrQXJyW2luZGV4XVxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stbmFtZS1pbnB1dFwiKVxyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lXHJcbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kZXNjLWlucHV0XCIpXHJcbiAgICBkZXNjSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NcclxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRhdGVcIilcclxuICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGVNYW5hZ2VyLnJldmVydEhUTUxEYXRlKHRhc2suZGF0ZSlcclxuICAgIGNvbnN0IGNob3NlblR5cGUgPSB0YXNrW1widGFzay10eXBlXCJdLnRvTG93ZXJDYXNlKClcclxuICAgIGNvbnN0IHR5cGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0LSR7Y2hvc2VuVHlwZX1gKVxyXG4gICAgdHlwZUlucHV0LmNoZWNrZWQgPSB0cnVlXHJcbiAgICBjb25zdCBjaG9zZW5Qcmlvcml0eSA9IHRhc2tbXCJ0YXNrLXByaW9yaXR5XCJdLnRvTG93ZXJDYXNlKClcclxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdC0ke2Nob3NlblByaW9yaXR5fWApXHJcbiAgICBwcmlvcml0eUlucHV0LmNoZWNrZWQgPSB0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxUYXNrTW9kYWwoZSl7XHJcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWJ0blwiKVxyXG4gICAgZWRpdEJ0bi5kYXRhc2V0LmluZGV4ID0gaW5kZXhcclxuICAgIGNvbnN0IHRhc2sgPSBjdXJyZW50VGFiTWFuYWdlci5nZXRDdXJyZW50VGFiKCkudGFza0FycltpbmRleF1cclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKVxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5uYW1lXHJcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKVxyXG4gICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NcclxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRhdGUtaW5mb1wiKVxyXG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBkYXRlTWFuYWdlci5mb3JtYXRIVE1MRGF0ZShgRHVlIERhdGU6ICR7dGFzay5kYXRlfWApXHJcbiAgICBjb25zdCB0YXNrVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10eXBlLWluZm9cIilcclxuICAgIHRhc2tUeXBlLnRleHRDb250ZW50ID0gYFR5cGU6ICR7dGFza1tcInRhc2stdHlwZVwiXX1gXHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHktaW5mb1wiKVxyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3Rhc2tbXCJ0YXNrLXByaW9yaXR5XCJdfWBcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkVkaXRQcm9qZWN0Rm9ybShlKXtcclxuICAgIGNvbnN0IHRhYk9iaiA9IGN1cnJlbnRUYWJNYW5hZ2VyLmdldEN1cnJlbnRUYWIoKS5vYmpcclxuICAgIHNob3dFZGl0Rm9ybShlLCB0YWJPYmoubmFtZSwgdGFiT2JqLmRlc2MpXHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICByZXNldFZhbGlkaXR5KGUpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmV0Y2hUYXNrSW5kZXgoZSlcclxuICAgICAgICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKGluZGV4KVxyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBsZXQgZm9ybUlkID0gZS50YXJnZXQuaWRcclxuICAgIGlmIChmb3JtSWQgPT09IFwicHJvamVjdC1mb3JtXCIpe1xyXG4gICAgICAgIGhhbmRsZVByb2plY3RTdWJtaXNzaW9uKGUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JtSWQgPT09IFwidGFzay1mb3JtXCIpe1xyXG4gICAgICAgIGhhbmRsZVRhc2tTdWJtaXNzaW9uKGUpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChmb3JtSWQgPT09IFwiZWRpdC1wcm9qZWN0LWZvcm1cIil7XHJcbiAgICAgICAgaGFuZGxlUHJvamVjdEVkaXQoZSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGZvcm1JZCA9PT0gXCJlZGl0LXRhc2stZm9ybVwiKXtcclxuICAgICAgICBoYW5kbGVFZGl0VGFza1N1Ym1pc3Npb24oZSlcclxuICAgICAgICBmaWxsVGFza01vZGFsKGUpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzdWJtaXRFZGl0VGFza09iaihlLCB0YXNrTmFtZUFycil7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpXHJcbiAgICBjb25zdCBkYXRhT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdGEpXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1uYW1lLWlucHV0XCIpXHJcbiAgICBpZiAodGFza05hbWVBcnIuaW5jbHVkZXMoZGF0YU9iai5uYW1lKSl7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiQ2Fubm90IHNldCBkdXBsaWNhdGUgdGFzayBuYW1lc1wiKVxyXG4gICAgICAgIG5hbWVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zaW5nVGFza0Zvcm0oZSlcclxuICAgIHJldHVybiBkYXRhT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3J5TGlzdChsaXN0LCBjb250YWluZXIpe1xyXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGAke2xpc3RbaV0ubmFtZS50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgYnRuLmRhdGFzZXQuaW5kZXggPSBpXHJcbiAgICAgICAgbGV0IG5hbWUgPSBsaXN0W2ldLm5hbWVcclxuICAgICAgICBidG4udGV4dENvbnRlbnQgPSBuYW1lXHJcbiAgICAgICAgbGkuYXBwZW5kKGJ0bilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxpKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChsaXN0LCBjb250YWluZXIpe1xyXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBsZXQgbmFtZSA9IGxpc3RbaV0ubmFtZVxyXG4gICAgICAgIGJ0bi50ZXh0Q29udGVudCA9IG5hbWVcclxuICAgICAgICBidG4uZGF0YXNldC5pbmRleCA9IGlcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsLWJ0blwiKVxyXG4gICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiXHJcbiAgICAgICAgZGVsQnRuLmRhdGFzZXQuaW5kZXggPSBpXHJcbiAgICAgICAgYnRuRGl2LmFwcGVuZChidG4sIGRlbEJ0bilcclxuICAgICAgICBsaS5hcHBlbmQoYnRuRGl2KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobGkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBmaW5hbExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgYWRkUHJvakJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIlxyXG4gICAgYWRkUHJvakJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpXHJcbiAgICBmaW5hbExpLmFwcGVuZChhZGRQcm9qQnRuKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZChmaW5hbExpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJTZWxlY3Rpb24odGFiT2JqLCBpbmRleCwgdGFza0FyciwgcmVuZGVyRm4pe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhYlwiKVxyXG4gICAgY3VycmVudFRhYk1hbmFnZXIuc2V0Q3VycmVudFRhYih0YWJPYmosIGluZGV4LCB0YXNrQXJyKVxyXG4gICAgY29uc3QgdGFiSW5mbyA9IGN1cnJlbnRUYWJNYW5hZ2VyLmdldEN1cnJlbnRUYWIoKVxyXG4gICAgcmVuZGVyRm4oY29udGFpbmVyLCB0YWJJbmZvLm9iaiwgdGFiSW5mby50YXNrQXJyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RGVsZXRpb24oZSl7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIilcclxuICAgIGNvbnN0IHRhYk9iaiA9IGN1cnJlbnRUYWJNYW5hZ2VyLmdldEN1cnJlbnRUYWIoKS5vYmpcclxuICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFiXCIpXHJcbiAgICBjb25zdCBwcm9qSW5kZXggPSBmaW5kSW5kZXgoZSlcclxuICAgIGNvbnN0IGNsaWNrZWRPYmogPSBwcm9qZWN0TWFuYWdlci5nZXRMaXN0KClbcHJvakluZGV4XVxyXG4gICAgaWYgKHRhYk9iaiA9PT0gY2xpY2tlZE9iaikge1xyXG4gICAgICAgIHByb2plY3RUYWIucmVwbGFjZUNoaWxkcmVuKClcclxuICAgIH1cclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza01hbmFnZXIuZ2V0TGlzdCgpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAodGFza0xpc3RbaV0udGFnID09PSBjbGlja2VkT2JqLm5hbWUpe1xyXG4gICAgICAgICAgICB0YXNrTWFuYWdlci5kZWxldGVJdGVtKHRhc2tMaXN0W2ldKVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIGlmIChjYXRlZ29yeU1hbmFnZXIuZ2V0TGlzdCgpLmluY2x1ZGVzKHRhYk9iaikpe1xyXG4gICAgICAgIGxldCBsaXN0ID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCB0YWJPYmoubmFtZSwgXCJ0YWdcIilcclxuICAgICAgICByZW5kZXJDYXRlZ29yeVRhYihwcm9qZWN0VGFiLCB0YWJPYmosIGxpc3QpXHJcbiAgICB9XHJcbiAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVJdGVtKGNsaWNrZWRPYmopXHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0TWFuYWdlci5nZXRMaXN0KCksIGNvbnRhaW5lcilcclxuICAgIHVwZGF0ZVN0b3JhZ2UoXCJwcm9qZWN0c1wiLCBwcm9qZWN0TWFuYWdlci5nZXRMaXN0KCkpXHJcbiAgICB1cGRhdGVTdG9yYWdlKFwidGFza3NcIiwgdGFza01hbmFnZXIuZ2V0TGlzdCgpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0U3VibWlzc2lvbihlKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0LWNvbnRhaW5lclwiKVxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWUtaW5wdXRcIilcclxuICAgIGNvbnN0IHByb2pMaXN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0TGlzdCgpXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBwcm9qTGlzdC5tYXAocHJvaiA9PiBwcm9qLm5hbWUpXHJcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gc3VibWl0UHJvamVjdE9iaihlLCBwcm9qZWN0TmFtZXMsIG5hbWVJbnB1dClcclxuICAgIGlmICghcHJvamVjdE9iail7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRJdGVtKHByb2plY3RPYmopXHJcbiAgICByZW5kZXJQcm9qZWN0TGlzdChwcm9qTGlzdCwgY29udGFpbmVyKVxyXG4gICAgdXBkYXRlU3RvcmFnZShcInByb2plY3RzXCIsIHByb2pMaXN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RWRpdChlKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0LWNvbnRhaW5lclwiKVxyXG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhYlwiKVxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2plY3QtbmFtZS1pbnB1dFwiKVxyXG4gICAgY29uc3QgcHJvakxpc3QgPSBwcm9qZWN0TWFuYWdlci5nZXRMaXN0KClcclxuICAgIGNvbnN0IHRhYkluZm8gPSBjdXJyZW50VGFiTWFuYWdlci5nZXRDdXJyZW50VGFiKClcclxuICAgIGNvbnN0IHByb2pUYXNrTGlzdCA9IHRhYkluZm8udGFza0FyclxyXG4gICAgY29uc3QgY3VycmVudFByb2pOYW1lID0gdGFiSW5mby5vYmoubmFtZVxyXG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gcHJvakxpc3QubWFwKHByb2ogPT4gcHJvai5uYW1lKS5maWx0ZXIobmFtZSA9PiBuYW1lICE9PSBjdXJyZW50UHJvak5hbWUpXHJcbiAgICBjb25zdCBwcm9qZWN0T2JqID0gc3VibWl0RWRpdFByb2plY3RPYmooZSwgcHJvamVjdE5hbWVzLCBuYW1lSW5wdXQpXHJcbiAgICBpZiAoIXByb2plY3RPYmope1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfSAgICBcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGFza01hbmFnZXIuZ2V0TGlzdCgpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAocHJvalRhc2tMaXN0LmluY2x1ZGVzKHRhc2tMaXN0W2ldKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhZ2dlZFRhc2sgPSB7Li4udGFza0xpc3RbaV0sIHRhZzogcHJvamVjdE9iai5uYW1lfVxyXG4gICAgICAgICAgICB0YXNrTWFuYWdlci5lZGl0SXRlbShpLCBuZXdUYWdnZWRUYXNrKVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbHRlclRhc2tMaXN0ID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCBwcm9qZWN0T2JqLm5hbWUsIFwidGFnXCIpXHJcbiAgICBwcm9qZWN0TWFuYWdlci5lZGl0SXRlbSh0YWJJbmZvLmluZGV4LCBwcm9qZWN0T2JqKVxyXG4gICAgY3VycmVudFRhYk1hbmFnZXIuc2V0Q3VycmVudFRhYihwcm9qZWN0T2JqLCB0YWJJbmZvLmluZGV4LCBmaWx0ZXJUYXNrTGlzdClcclxuICAgIHJlbmRlclByb2plY3RMaXN0KHByb2plY3RNYW5hZ2VyLmdldExpc3QoKSwgY29udGFpbmVyKVxyXG4gICAgcmVuZGVyUHJvamVjdFRhYih0YWJDb250YWluZXIsIHByb2plY3RPYmosIGZpbHRlclRhc2tMaXN0KVxyXG4gICAgdXBkYXRlU3RvcmFnZShcInByb2plY3RzXCIsIHByb2pMaXN0KVxyXG4gICAgdXBkYXRlU3RvcmFnZShcInRhc2tzXCIsIHRhc2tMaXN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFZGl0VGFza1N1Ym1pc3Npb24oZSl7XHJcbiAgICBjb25zdCB0YXNrSW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC5pbmRleClcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YWJcIilcclxuICAgIGNvbnN0IG9sZFRhc2tPYmogPSBjdXJyZW50VGFiTWFuYWdlci5nZXRDdXJyZW50VGFiKCkudGFza0Fyclt0YXNrSW5kZXhdXHJcbiAgICBjb25zdCBvbGRUYXNrTmFtZSA9IG9sZFRhc2tPYmoubmFtZVxyXG4gICAgY29uc3QgdGFza05hbWVzID0gdGFza01hbmFnZXIuZ2V0TGlzdCgpLm1hcCh0YXNrID0+IHRhc2submFtZSkuZmlsdGVyKG5hbWUgPT4gbmFtZSAhPT0gb2xkVGFza05hbWUpXHJcbiAgICBjb25zdCB0YXNrT2JqID0gc3VibWl0RWRpdFRhc2tPYmooZSwgdGFza05hbWVzKVxyXG4gICAgaWYgKCF0YXNrT2JqKXtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Rhc2tPYmogPSB7Li4ub2xkVGFza09iaiwgLi4udGFza09ian1cclxuICAgIG5ld1Rhc2tPYmouZGF0ZSA9IGRhdGVNYW5hZ2VyLmZvcm1hdEhUTUxEYXRlKG5ld1Rhc2tPYmouZGF0ZSlcclxuICAgIGNvbnN0IGZ1bGxUYXNrTGlzdCA9IHRhc2tNYW5hZ2VyLmdldExpc3QoKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdWxsVGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmIChmdWxsVGFza0xpc3RbaV0gPT09IG9sZFRhc2tPYmope1xyXG4gICAgICAgICAgICB0YXNrTWFuYWdlci5lZGl0SXRlbShpLCBuZXdUYXNrT2JqKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRhYkluZm8gPSBjdXJyZW50VGFiTWFuYWdlci5nZXRDdXJyZW50VGFiKClcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGNhdGVnb3J5TWFuYWdlci5nZXRMaXN0KClcclxuICAgIGlmIChjYXRlZ29yeUxpc3QuaW5jbHVkZXModGFiSW5mby5vYmopKXtcclxuICAgICAgICBoYW5kbGVDYXRlZ29yeVRhc2tMaXN0KClcclxuICAgICAgICByZW5kZXJDYXRlZ29yeVRhYihjb250YWluZXIsIHRhYkluZm8ub2JqLCB0YWJJbmZvLnRhc2tBcnIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGZpbHRlclRhc2tzKHRhc2tNYW5hZ2VyLmdldExpc3QoKSwgdGFiSW5mby5vYmoubmFtZSwgXCJ0YWdcIilcclxuICAgICAgICBjdXJyZW50VGFiTWFuYWdlci5zZXRUYXNrQXJyT2ZUYWIodGFza0xpc3QpXHJcbiAgICAgICAgcmVuZGVyUHJvamVjdFRhYihjb250YWluZXIsIHRhYkluZm8ub2JqLCB0YWJJbmZvLnRhc2tBcnIpXHJcbiAgICB9IFxyXG4gICAgaGFuZGxlQ2xvc2luZ0VkaXRUYXNrTW9kYWwoZSlcclxuICAgIHVwZGF0ZVN0b3JhZ2UoXCJ0YXNrc1wiLCBmdWxsVGFza0xpc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhc2tTdWJtaXNzaW9uKGUpe1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRhYlwiKVxyXG4gICAgY29uc3QgdGFiSW5mbyA9IGN1cnJlbnRUYWJNYW5hZ2VyLmdldEN1cnJlbnRUYWIoKVxyXG4gICAgY29uc3QgdGFiT2JqID0gdGFiSW5mby5vYmpcclxuICAgIGNvbnN0IHRhc2tOYW1lcyA9IHRhYkluZm8udGFza0Fyci5tYXAodGFzayA9PiB0YXNrLm5hbWUpXHJcbiAgICBjb25zdCB0YXNrT2JqID0gc3VibWl0VGFza09iaihlLCB0YXNrTmFtZXMpXHJcbiAgICBpZiAoIXRhc2tPYmope1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGFza09iai5jb21wbGV0ZSA9IGZhbHNlXHJcbiAgICB0YXNrT2JqLnRhZyA9IHRhYkluZm8ub2JqLm5hbWVcclxuICAgIHRhc2tPYmouZGF0ZSA9IGRhdGVNYW5hZ2VyLmZvcm1hdEhUTUxEYXRlKHRhc2tPYmouZGF0ZSlcclxuICAgIHRhc2tNYW5hZ2VyLmFkZEl0ZW0odGFza09iailcclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCB0YWJPYmoubmFtZSwgXCJ0YWdcIilcclxuICAgIGN1cnJlbnRUYWJNYW5hZ2VyLnNldFRhc2tBcnJPZlRhYih0YXNrTGlzdClcclxuICAgIHJlbmRlclByb2plY3RUYWIoY29udGFpbmVyLCB0YWJPYmosIHRhYkluZm8udGFza0FycilcclxuICAgIHVwZGF0ZVN0b3JhZ2UoXCJ0YXNrc1wiLCB0YXNrTWFuYWdlci5nZXRMaXN0KCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhc2tEZWxldGlvbihlLCB0YWdOYW1lLCB0YWdUeXBlKXtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YWJcIilcclxuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4KGUpXHJcbiAgICBjb25zdCB0YWJJbmZvID0gY3VycmVudFRhYk1hbmFnZXIuZ2V0Q3VycmVudFRhYigpXHJcbiAgICBjb25zdCBwcm9qVGFza0xpc3QgPSB0YWJJbmZvLnRhc2tBcnJcclxuICAgIGNvbnN0IGNsaWNrZWRUYXNrID0gcHJvalRhc2tMaXN0W2luZGV4XVxyXG4gICAgdGFza01hbmFnZXIuZGVsZXRlSXRlbShjbGlja2VkVGFzaylcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGNhdGVnb3J5TWFuYWdlci5nZXRMaXN0KClcclxuICAgIGlmIChjYXRlZ29yeUxpc3QuaW5jbHVkZXModGFiSW5mby5vYmopKXtcclxuICAgICAgICBoYW5kbGVDYXRlZ29yeVRhc2tMaXN0KClcclxuICAgICAgICByZW5kZXJDYXRlZ29yeVRhYihjb250YWluZXIsIHRhYkluZm8ub2JqLCB0YWJJbmZvLnRhc2tBcnIpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdUYXNrTGlzdCA9IGZpbHRlclRhc2tzKHRhc2tNYW5hZ2VyLmdldExpc3QoKSwgdGFiSW5mby5vYmpbdGFnTmFtZV0sIHRhZ1R5cGUpXHJcbiAgICAgICAgY3VycmVudFRhYk1hbmFnZXIuc2V0VGFza0Fyck9mVGFiKG5ld1Rhc2tMaXN0KVxyXG4gICAgICAgIHJlbmRlclByb2plY3RUYWIoY29udGFpbmVyLCB0YWJJbmZvLm9iaiwgdGFiSW5mby50YXNrQXJyKVxyXG4gICAgfSBcclxuICAgIHVwZGF0ZVN0b3JhZ2UoXCJ0YXNrc1wiLCB0YXNrTWFuYWdlci5nZXRMaXN0KCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhZ1Rhc2tzQnlEYXRlKGUsIGRhdGUpe1xyXG4gICAgY29uc3Qge3RhYk9iaiwgaW5kZXh9ID0gZmluZFByb2plY3RJbmZvKGUsIGNhdGVnb3J5TWFuYWdlci5nZXRMaXN0KCkpXHJcbiAgICBjb25zdCB0YXNrQXJyID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCBkYXRlLCBcImRhdGVcIilcclxuICAgIGhhbmRsZVRhYlNlbGVjdGlvbih0YWJPYmosIGluZGV4LCB0YXNrQXJyLCByZW5kZXJDYXRlZ29yeVRhYilcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyVGFza3MobGlzdCwgdGFnLCB0YWdUeXBlKXtcclxuICAgIGNvbnN0IHRhZ2dlZFRhc2tzID0gbGlzdC5maWx0ZXIoZWwgPT4gZWxbdGFnVHlwZV0gPT09IHRhZylcclxuICAgIHJldHVybiB0YWdnZWRUYXNrc1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKGluZGV4KXtcclxuICAgIGNvbnN0IHRhYkluZm8gPSBjdXJyZW50VGFiTWFuYWdlci5nZXRDdXJyZW50VGFiKClcclxuICAgIGNvbnN0IHRhc2tPYmogPSB0YWJJbmZvLnRhc2tBcnJbaW5kZXhdXHJcbiAgICBjb25zdCBjb21wbGV0aW9uU3RhdHVzID0gIXRhc2tPYmouY29tcGxldGVcclxuICAgIGNvbnN0IG5ld1Rhc2tPYmogPSB7Li4udGFza09iaiwgY29tcGxldGU6IGNvbXBsZXRpb25TdGF0dXN9XHJcbiAgICB0YXNrTWFuYWdlci5lZGl0SXRlbShpbmRleCwgbmV3VGFza09iailcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGNhdGVnb3J5TWFuYWdlci5nZXRMaXN0KClcclxuICAgIGlmIChjYXRlZ29yeUxpc3QuaW5jbHVkZXModGFiSW5mby5vYmopKXtcclxuICAgICAgICBoYW5kbGVDYXRlZ29yeVRhc2tMaXN0KClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZmlsdGVyVGFza3ModGFza01hbmFnZXIuZ2V0TGlzdCgpLCB0YWJJbmZvLm9iai5uYW1lLCBcInRhZ1wiKVxyXG4gICAgICAgIGN1cnJlbnRUYWJNYW5hZ2VyLnNldFRhc2tBcnJPZlRhYih0YXNrTGlzdClcclxuICAgIH0gXHJcbiAgICB1cGRhdGVTdG9yYWdlKFwidGFza3NcIiwgdGFza01hbmFnZXIuZ2V0TGlzdCgpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUxpc3QobWFuYWdlck9iaiwgYXJyKXtcclxuICAgIGZvciAobGV0IGVsIG9mIGFycil7XHJcbiAgICAgICAgbWFuYWdlck9iai5hZGRJdGVtKGVsKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYXRlZ29yeVRhc2tMaXN0KCl7XHJcbiAgICBjb25zdCB0YWJOYW1lID0gY3VycmVudFRhYk1hbmFnZXIuZ2V0Q3VycmVudFRhYigpLm9iai5uYW1lXHJcbiAgICBjb25zdCBsaXN0ID0gdGFza01hbmFnZXIuZ2V0TGlzdCgpXHJcbiAgICBsZXQgdGFza0xpc3RcclxuICAgIGlmICh0YWJOYW1lID09PSBcIlRvZGF5XCIpe1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlTWFuYWdlci5mb3JtYXREYXRlKGRhdGVNYW5hZ2VyLmdldEN1cnJlbnREYXRlKCkpXHJcbiAgICAgICAgdGFza0xpc3QgPSBmaWx0ZXJUYXNrcyhsaXN0LCBkYXRlLCBcImRhdGVcIikgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YWJOYW1lID09PSBcIlRvbW9ycm93XCIpe1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlTWFuYWdlci5mb3JtYXREYXRlKGRhdGVNYW5hZ2VyLmdldFRvbW9ycm93KCkpXHJcbiAgICAgICAgdGFza0xpc3QgPSBmaWx0ZXJUYXNrcyhsaXN0LCBkYXRlLCBcImRhdGVcIikgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YWJOYW1lID09PSBcIldvcmtcIiB8fCB0YWJOYW1lID09PSBcIlBlcnNvbmFsXCIpe1xyXG4gICAgICAgIHRhc2tMaXN0ID0gZmlsdGVyVGFza3MobGlzdCwgdGFiTmFtZSwgXCJ0YXNrLXR5cGVcIilcclxuICAgIH1cclxuICAgIGN1cnJlbnRUYWJNYW5hZ2VyLnNldFRhc2tBcnJPZlRhYih0YXNrTGlzdClcclxufSIsImZ1bmN0aW9uIGxpc3RNYW5hZ2VyKCl7XHJcbiAgICBsZXQgbGlzdCA9IFtdXHJcbiAgICBjb25zdCBhZGRJdGVtID0gaXRlbSA9PiB7bGlzdC5wdXNoKGl0ZW0pfVxyXG4gICAgY29uc3QgZWRpdEl0ZW0gPSAoaW5kZXgsIGl0ZW0pID0+IHtsaXN0W2luZGV4XSA9IGl0ZW19XHJcbiAgICBjb25zdCBkZWxldGVJdGVtID0gaXRlbSA9PiB7bGlzdCA9IGxpc3QuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKX1cclxuICAgIGNvbnN0IGdldExpc3QgPSAoKSA9PiBsaXN0XHJcbiAgICByZXR1cm4ge2FkZEl0ZW0sIGVkaXRJdGVtLCBkZWxldGVJdGVtLCBnZXRMaXN0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0TWFuYWdlciIsImNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2VcclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2Uoa2V5U3RyKXtcclxuICAgIGNvbnN0IGtleU9iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleVN0cilcclxuICAgIGlmIChrZXlPYmope1xyXG4gICAgICAgIHJldHVybiB0cnVlIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2Uoa2V5U3RyLCB2YWx1ZSl7XHJcbiAgICBjb25zdCBzdHJWYWwgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleVN0ciwgc3RyVmFsKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZShrZXlTdHIpe1xyXG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlTdHIpXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==