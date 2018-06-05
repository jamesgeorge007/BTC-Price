webpackHotUpdate(4,{

/***/ "./components/BitcoinPrice.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/james-the-hacker/My-Files/CodeSpace/Web-Applications/Javascript-Applications/Server-Side-Rendering/Next-js/BTCPrice/components/BitcoinPrice.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var BitcoinPrice =
/*#__PURE__*/
function (_Component) {
  _inherits(BitcoinPrice, _Component);

  function BitcoinPrice(props) {
    var _this;

    _classCallCheck(this, BitcoinPrice);

    _this = _possibleConstructorReturn(this, (BitcoinPrice.__proto__ || Object.getPrototypeOf(BitcoinPrice)).call(this, props));
    _this.state = {
      currency: 'USD'
    };
    return _this;
  }

  _createClass(BitcoinPrice, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var price_desc;

      if (this.state.currency === 'USD') {
        price_desc = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ": ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          "class": "badge badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, this.props.bpi.USD.code), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        price_desc = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, "Bitcoin rate for ", this.props.bpi.GBP.description, ": ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          "class": "badge badge-warning",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, this.props.bpi.GBP.code), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        price_desc = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: "list-group-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, "Bitcoin rate for ", this.props.bpi.EUR.description, ": ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          "class": "badge badge-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, this.props.bpi.EUR.code), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, this.props.bpi.EUR.rate));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, price_desc), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "USD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "USD"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "GBP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "GBP"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "EUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "EUR")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BitcoinPrice;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = BitcoinPrice;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BitcoinPrice, "BitcoinPrice", "/home/james-the-hacker/My-Files/CodeSpace/Web-Applications/Javascript-Applications/Server-Side-Rendering/Next-js/BTCPrice/components/BitcoinPrice.js");
  reactHotLoader.register(_default, "default", "/home/james-the-hacker/My-Files/CodeSpace/Web-Applications/Javascript-Applications/Server-Side-Rendering/Next-js/BTCPrice/components/BitcoinPrice.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fa7857216ccf2f471c95.hot-update.js.map