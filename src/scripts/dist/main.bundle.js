/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _components_input_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/input_section */ "./src/scripts/components/input_section.js");
/* harmony import */ var _components_page_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page_section */ "./src/scripts/components/page_section.js");
/* harmony import */ var _components_update_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/update_section */ "./src/scripts/components/update_section.js");
/* harmony import */ var _components_comment_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/comment_section */ "./src/scripts/components/comment_section.js");
/* harmony import */ var _utils_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/page_handler */ "./src/scripts/utils/page_handler.js");
/* harmony import */ var _utils_http_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/http_handler */ "./src/scripts/utils/http_handler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var App = function App($target) {
  _classCallCheck(this, App);

  var commentSection = new _components_comment_section__WEBPACK_IMPORTED_MODULE_3__.default({
    $target: $target
  });
  var pageHandler = new _utils_page_handler__WEBPACK_IMPORTED_MODULE_4__.default();
  var pageSection = new _components_page_section__WEBPACK_IMPORTED_MODULE_1__.default({
    $target: $target,
    onClick: function onClick(e) {
      httpHandler.requestHttp("GET", {
        page: pageHandler.newPage(e.target.id)
      });
    }
  });
  var inputSection = new _components_input_section__WEBPACK_IMPORTED_MODULE_0__.default({
    $target: $target
  });
  var updateSection = new _components_update_section__WEBPACK_IMPORTED_MODULE_2__.default({
    $target: $target,
    onClick: function onClick(e) {
      var author = document.getElementById("name-input").value;
      var comment = document.getElementById("content-input").value;

      if (inputForm.inputValidation(author, comment)) {
        httpHandler.requestHttp("POST", JSON.stringify(inputForm.getValues()));
      }
    }
  });
  var httpHandler = new _utils_http_handler__WEBPACK_IMPORTED_MODULE_5__.default({
    onGet: function onGet(result) {
      if (result.length > 0) {
        commentSection.makeCommentList(result);
        pageHandler.update();
      }
    }
  });
};



/***/ }),

/***/ "./src/scripts/components/comment_section.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/comment_section.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CommentSection; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommentSection = /*#__PURE__*/function () {
  function CommentSection(_ref) {
    var $target = _ref.$target;

    _classCallCheck(this, CommentSection);

    this.init($target);
  }

  _createClass(CommentSection, [{
    key: "init",
    value: function init($target) {
      var listContainer = document.createElement('div');
      listContainer.id = "comment-board";
      $target.appendChild(document.createElement("strong")).appendChild(listContainer);
    }
  }, {
    key: "makeCommentList",
    value: function makeCommentList(results) {
      var board = document.getElementById("comment-board");
      var frag = document.createDocumentFragment();
      var ulElement = document.createElement("ul");
      this.removeAllChilds(board);
      results.forEach(function (result) {
        var authorText = document.createTextNode(result.author);
        var commentText = document.createTextNode(result.comment);
        var idText = document.createTextNode(new Date(result.id));
        var liElement = document.createElement("li");
        liElement.appendChild(authorText);
        liElement.appendChild(document.createElement("br"));
        liElement.appendChild(idText);
        liElement.appendChild(document.createElement("br"));
        liElement.appendChild(commentText);
        ulElement.appendChild(liElement);
        frag.appendChild(ulElement);
      });
      board.appendChild(frag);
    }
  }, {
    key: "removeAllChilds",
    value: function removeAllChilds(elem) {
      while (elem.lastElementChild) {
        elem.removeChild(elem.lastElementChild);
      }
    }
  }]);

  return CommentSection;
}();



/***/ }),

/***/ "./src/scripts/components/input_section.js":
/*!*************************************************!*\
  !*** ./src/scripts/components/input_section.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputSection; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputSection = /*#__PURE__*/function () {
  function InputSection(_ref) {
    var $target = _ref.$target;

    _classCallCheck(this, InputSection);

    this.target = $target;
    this.init();
  }

  _createClass(InputSection, [{
    key: "init",
    value: function init() {
      var inputContainer = document.createElement("div");
      inputContainer.id = "input-container";
      var nameText = document.createTextNode("이름");
      var nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "name-input";
      inputContainer.appendChild(document.createElement("strong")).appendChild(nameText);
      inputContainer.appendChild(nameInput);
      inputContainer.appendChild(document.createElement("br"));
      var contentText = document.createTextNode("본문");
      var contentInput = document.createElement("input");
      contentInput.type = "text";
      contentInput.id = "content-input";
      inputContainer.appendChild(document.createElement("strong")).appendChild(contentText);
      inputContainer.appendChild(contentInput);
      this.target.appendChild(inputContainer);
    }
  }, {
    key: "getValues",
    value: function getValues() {
      var author = document.getElementById("name-input").value;
      var comment = document.getElementById("content-input").value;
      return {
        author: author,
        comment: comment
      };
    }
  }, {
    key: "inputValidation",
    value: function inputValidation(name, content) {
      var validation = true;

      if (name.length < 1 || content.length < 10) {
        alert("이름은 최소 1 글자, 본문은 최소 10 글자 이상 입력해주세요.");
        validation = false;
      }

      return validation;
    }
  }]);

  return InputSection;
}();



/***/ }),

/***/ "./src/scripts/components/page_section.js":
/*!************************************************!*\
  !*** ./src/scripts/components/page_section.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageSection; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageSection = function PageSection(_ref) {
  var $target = _ref.$target,
      onClick = _ref.onClick;

  _classCallCheck(this, PageSection);

  var pageBtnContainer = document.createElement("div");
  pageBtnContainer.id = "page-button-container";
  pageBtnContainer.addEventListener("click", onClick);
  var prevBtn = document.createElement("button");
  prevBtn.id = "prev-button";
  prevBtn.innerHTML = "이전";
  pageBtnContainer.appendChild(prevBtn);
  var nextBtn = document.createElement("button");
  nextBtn.id = "next-button";
  nextBtn.innerHTML = "다음";
  pageBtnContainer.appendChild(nextBtn);
  $target.appendChild(pageBtnContainer);
};



/***/ }),

/***/ "./src/scripts/components/update_section.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/update_section.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateSection; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UpdateSection = /*#__PURE__*/function () {
  function UpdateSection(_ref) {
    var $target = _ref.$target,
        onClick = _ref.onClick;

    _classCallCheck(this, UpdateSection);

    this.target = $target;
    this.onClick = onClick;
    this.init();
  }

  _createClass(UpdateSection, [{
    key: "init",
    value: function init() {
      var commentBtn = document.createElement("button");
      commentBtn.id = "comment-button";
      commentBtn.addEventListener("click", this.onClick);
      var commentText = document.createTextNode("작성");
      commentBtn.appendChild(commentText);
      this.target.append(commentBtn);
    }
  }]);

  return UpdateSection;
}();



/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/scripts/app.js");

window.addEventListener("DOMContentLoaded", function () {
  var app = new _app__WEBPACK_IMPORTED_MODULE_0__.default(document.querySelector('.app'));
});

/***/ }),

/***/ "./src/scripts/utils/http_handler.js":
/*!*******************************************!*\
  !*** ./src/scripts/utils/http_handler.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HttpHandler; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpHandler = /*#__PURE__*/function () {
  function HttpHandler(_ref) {
    var onGet = _ref.onGet;

    _classCallCheck(this, HttpHandler);

    this.onGet = onGet;
    this.init();
  }

  _createClass(HttpHandler, [{
    key: "init",
    value: function init() {
      this.requestHttp("GET");
    }
  }, {
    key: "requestHttp",
    value: function requestHttp(method, data) {
      var _this = this;

      var httpRequest = new XMLHttpRequest();
      var url = "http://localhost:9999/api/comments";

      if (data && data.hasOwnProperty("page")) {
        url += "/page/".concat(data.page);
      }

      httpRequest.open(method, url, true);
      httpRequest.setRequestHeader("Content-Type", "application/json");
      httpRequest.send(data);

      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState !== XMLHttpRequest.DONE) return;

        if (httpRequest.status === 200) {
          switch (method) {
            case "GET":
              _this.onGet(JSON.parse(httpRequest.responseText));

              break;

            case "POST":
              _this.requestHttp("GET");

              break;
          }
        } else {
          alert("Status ".concat(httpRequest.status, ":\n").concat(method, " \uC694\uCCAD\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.\n\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."));
        }
      };
    }
  }]);

  return HttpHandler;
}();



/***/ }),

/***/ "./src/scripts/utils/page_handler.js":
/*!*******************************************!*\
  !*** ./src/scripts/utils/page_handler.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageHandler; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageHandler = function PageHandler() {
  _classCallCheck(this, PageHandler);

  var page = 1;
  var lastOperation = "";

  this.newPage = function (id) {
    lastOperation = id;

    switch (id) {
      case "next-button":
        return page + 1;

      case "prev-button":
        return page - 1;
    }

    return page;
  };

  this.update = function () {
    switch (lastOperation) {
      case "next-button":
        ++page;
        break;

      case "prev-button":
        --page;
        break;
    }

    lastOperation = "";
  };
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map