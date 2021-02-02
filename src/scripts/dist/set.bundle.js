/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestHttp": function() { return /* binding */ requestHttp; }
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/scripts/list.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PageHandler = /*#__PURE__*/function () {
  function PageHandler() {
    _classCallCheck(this, PageHandler);

    this.page = 1;
    this.lastOperation = "";
  }

  _createClass(PageHandler, [{
    key: "newPage",
    value: function newPage(id) {
      switch (id) {
        case "next-button":
          this.lastOperation = "next";
          return this.page + 1;

        case "prev-button":
          this.lastOperation = "prev";
          return this.page - 1;
      }

      return page;
    }
  }, {
    key: "update",
    value: function update() {
      switch (this.lastOperation) {
        case "next":
          ++this.page;
          break;

        case "prev":
          --this.page;
          break;
      }

      this.lastOperation = "";
    }
  }]);

  return PageHandler;
}();

var pageHandler = new PageHandler();
console.log(pageHandler.__proto__ === PageHandler.prototype);
function requestHttp(method, data) {
  var httpRequest = new XMLHttpRequest();
  var url = "http://localhost:9999/api/comments";

  (function () {
    if (data && data.hasOwnProperty("page")) {
      url += "/page/".concat(pageHandler.newPage(data.page));
    }
  })();

  httpRequest.open(method, url, true);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send(data);

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState !== XMLHttpRequest.DONE) return;

    if (httpRequest.status === 200) {
      switch (method) {
        case "GET":
          var result = JSON.parse(httpRequest.responseText);

          if (result.length > 0) {
            (0,_list__WEBPACK_IMPORTED_MODULE_0__.makeCommentList)(result);
            pageHandler.update();
          }

          break;

        case "POST":
          requestHttp("GET");
          break;
      }
    } else {
      alert("Status ".concat(httpRequest.status, ":\n").concat(method, " \uC694\uCCAD\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.\n\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."));
    }
  };
}

/***/ }),

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initButtons": function() { return /* binding */ initButtons; }
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");



function initButtons() {
  var commentBtn = document.getElementById("comment-button");
  commentBtn.addEventListener("click", function () {
    var author = document.getElementById("name-input").value;
    var comment = document.getElementById("content-input").value;

    if (inputValidation(author, comment)) {
      (0,_data__WEBPACK_IMPORTED_MODULE_0__.requestHttp)("POST", JSON.stringify({
        author: author,
        comment: comment
      }));
    }
  });
  var pageButtonContainer = document.getElementById("page-button-container");
  pageButtonContainer.addEventListener("click", function (e) {
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.requestHttp)("GET", {
      page: e.target.id
    });
  });
}

function inputValidation(name, content) {
  var validation = true;

  if (name.length < 1 || content.length < 10) {
    alert("이름은 최소 1 글자, 본문은 최소 10 글자 이상 입력해주세요.");
    validation = false;
  }

  return validation;
}

/***/ }),

/***/ "./src/scripts/list.js":
/*!*****************************!*\
  !*** ./src/scripts/list.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCommentList": function() { return /* binding */ makeCommentList; }
/* harmony export */ });


function makeCommentList(results) {
  var board = document.getElementById("comment-board");
  var frag = document.createDocumentFragment();
  var ulElement = document.createElement("ul");
  removeAllChilds(board);
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

function removeAllChilds(elem) {
  while (elem.lastElementChild) {
    elem.removeChild(elem.lastElementChild);
  }
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/scripts/form.js");



(function () {
  'use strict';

  window.addEventListener("DOMContentLoaded", function () {
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.requestHttp)("GET");
    (0,_form__WEBPACK_IMPORTED_MODULE_1__.initButtons)();
  });
})();

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