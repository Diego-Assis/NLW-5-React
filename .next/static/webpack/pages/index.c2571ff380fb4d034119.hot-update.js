self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_diego_Documents_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\diego\\Documents\\podcastrnext\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

/* SPA : é carregado depois que a página é mostrada. Usando o JavaScript do Browseer
  useEffect(() => { fetch('http://localhost:3333/episodes').then(response => response.json()).then(data => console.log(data)) }, [])
*/

/* SSR : para isso é necesário exportar a função getServerSideProps(), isso permite que os dados sejam solicitados antes de exibir a página.
  Dessa forma a solicitação é na camda do servidor Node e não no Browser.
  export default function Home(props) {
  console.log(props.episodes)

    return (
      <h1>Index</h1>
    )
  }

  export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    return {
      props: {
        episodes: data,
      }
    }
  }
*/

/*SSG : é gerada uma versão estática da página em html puro, é usada para todos os usuários que acessarem a mesma página, depois dessa primeira pessoa. 
 Evitando ter que fazer a solicitação toda vez que uma pessoa acessar a página. Evitando gastar rescursos desnecessários.
 Para isso basta trocar a função getServerSideProps() para a função getStaticProps().
*/
//Tipagem da função.





var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var latestEpisodes = _ref.latestEpisodes,
      allEpisodes = _ref.allEpisodes;

  var _usePlayer = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer)(),
      playList = _usePlayer.playList;

  var episodeList = [].concat((0,C_Users_diego_Documents_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(latestEpisodes), (0,C_Users_diego_Documents_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(allEpisodes));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().homePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().latestEpisodes),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\xDAltimos lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: latestEpisodes.map(function (episode, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().episodeDetails),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: episode.publishedAT
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "button",
              onClick: function onClick() {
                return playList(episodeList, index);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/play-green.svg",
                alt: "Tocar epis\xF3dio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().allEpisodes),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: allEpisodes.map(function (episode, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                style: {
                  width: 72
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/episodes/".concat(episode.id),
                  prefetch: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAT
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  onClick: function onClick() {
                    return playList(episodeList, index + latestEpisodes.length);
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "/play-green.svg",
                    alt: "Tocar epis\xF3dio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 19
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s(Home, "B+17Ictt0EMdTLSLvmaYvE6LpQQ=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_5__.usePlayer];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXlMaXN0IiwiZXBpc29kZUxpc3QiLCJzdHlsZXMiLCJtYXAiLCJlcGlzb2RlIiwiaW5kZXgiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEFUIiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBa0JlLFNBQVNBLElBQVQsT0FBMEQ7QUFBQTs7QUFBQTs7QUFBQSxNQUExQ0MsY0FBMEMsUUFBMUNBLGNBQTBDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjs7QUFBQSxtQkFDbERDLGtFQUFTLEVBRHlDO0FBQUEsTUFDL0RDLFFBRCtELGNBQy9EQSxRQUQrRDs7QUFHdkUsTUFBTUMsV0FBVyxzS0FBT0osY0FBUCw0SkFBMEJDLFdBQTFCLEVBQWpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVJLHlFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQVMsZUFBUyxFQUFFQSwrRUFBcEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFB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Ozs7Ozs7Ozs7O0FDekR4QiwySEFBdUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzI1NzFmZjM4MGZiNGQwMzQxMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNQQSA6IMOpIGNhcnJlZ2FkbyBkZXBvaXMgcXVlIGEgcMOhZ2luYSDDqSBtb3N0cmFkYS4gVXNhbmRvIG8gSmF2YVNjcmlwdCBkbyBCcm93c2VlclxuICB1c2VFZmZlY3QoKCkgPT4geyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkgfSwgW10pXG4qL1xuXG4vKiBTU1IgOiBwYXJhIGlzc28gw6kgbmVjZXPDoXJpbyBleHBvcnRhciBhIGZ1bsOnw6NvIGdldFNlcnZlclNpZGVQcm9wcygpLCBpc3NvIHBlcm1pdGUgcXVlIG9zIGRhZG9zIHNlamFtIHNvbGljaXRhZG9zIGFudGVzIGRlIGV4aWJpciBhIHDDoWdpbmEuXG4gIERlc3NhIGZvcm1hIGEgc29saWNpdGHDp8OjbyDDqSBuYSBjYW1kYSBkbyBzZXJ2aWRvciBOb2RlIGUgbsOjbyBubyBCcm93c2VyLlxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLmVwaXNvZGVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMT5JbmRleDwvaDE+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBlcGlzb2RlczogZGF0YSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiovXG4vKlNTRyA6IMOpIGdlcmFkYSB1bWEgdmVyc8OjbyBlc3TDoXRpY2EgZGEgcMOhZ2luYSBlbSBodG1sIHB1cm8sIMOpIHVzYWRhIHBhcmEgdG9kb3Mgb3MgdXN1w6FyaW9zIHF1ZSBhY2Vzc2FyZW0gYSBtZXNtYSBww6FnaW5hLCBkZXBvaXMgZGVzc2EgcHJpbWVpcmEgcGVzc29hLiBcbiBFdml0YW5kbyB0ZXIgcXVlIGZhemVyIGEgc29saWNpdGHDp8OjbyB0b2RhIHZleiBxdWUgdW1hIHBlc3NvYSBhY2Vzc2FyIGEgcMOhZ2luYS4gRXZpdGFuZG8gZ2FzdGFyIHJlc2N1cnNvcyBkZXNuZWNlc3PDoXJpb3MuXG4gUGFyYSBpc3NvIGJhc3RhIHRyb2NhciBhIGZ1bsOnw6NvIGdldFNlcnZlclNpZGVQcm9wcygpIHBhcmEgYSBmdW7Dp8OjbyBnZXRTdGF0aWNQcm9wcygpLlxuKi9cblxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JzsgLy9UaXBhZ2VtIGRhIGZ1bsOnw6NvLlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHB0QlIgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL3B0LUJSJ1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcblxudHlwZSBFcGlzb2RlcyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nO1xuICB0aHVtYm5haWw6IHN0cmluZztcbiAgcHVibGlzaGVkQVQ6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgZHVyYXRpb25Bc1N0cmluZzogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxudHlwZSBIb21lUHJvcHMgPSB7XG4gIGxhdGVzdEVwaXNvZGVzOiBBcnJheTxFcGlzb2Rlcz4gLy8gT3UgRXBpc29kZXNbXSBwYXJhIGRlY2xhcmFyIHVtIEFycmF5LlxuICBhbGxFcGlzb2RlczogQXJyYXk8RXBpc29kZXM+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBsYXRlc3RFcGlzb2RlcywgYWxsRXBpc29kZXMgfTogSG9tZVByb3BzKSB7XG4gIGNvbnN0IHsgcGxheUxpc3QgfSA9IHVzZVBsYXllcigpXG5cbiAgY29uc3QgZXBpc29kZUxpc3QgPSBbLi4ubGF0ZXN0RXBpc29kZXMsIC4uLmFsbEVwaXNvZGVzXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZVBhZ2V9PlxuICAgICAgPEhlYWQ+XG5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0RXBpc29kZXN9PlxuICAgICAgICA8aDI+w5psdGltb3MgbGFuw6dhbWVudG9zPC9oMj5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAge2xhdGVzdEVwaXNvZGVzLm1hcCgoZXBpc29kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2VwaXNvZGUuaWR9PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE5Mn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTkyfVxuICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZURldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhID57ZXBpc29kZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8cD57ZXBpc29kZS5tZW1iZXJzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLnB1Ymxpc2hlZEFUfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHBsYXlMaXN0KGVwaXNvZGVMaXN0LCBpbmRleCl9ID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFsbEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPlRvZG9zIGVwaXPDs2Rpb3M8L2gyPlxuXG4gICAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz17MH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgPHRoPlBvZGNhc3Q8L3RoPlxuICAgICAgICAgICAgICA8dGg+SW50ZWdyYW50ZXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGF0YTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EdXJhw6fDo288L3RoPlxuICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7YWxsRXBpc29kZXMubWFwKChlcGlzb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2VwaXNvZGUuaWR9PlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiA3MiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvdmVyJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9lcGlzb2Rlcy8ke2VwaXNvZGUuaWR9YH0gcHJlZmV0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5tZW1iZXJzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fT57ZXBpc29kZS5wdWJsaXNoZWRBVH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntlcGlzb2RlLmR1cmF0aW9uQXNTdHJpbmd9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHBsYXlMaXN0KGVwaXNvZGVMaXN0LCBpbmRleCArIGxhdGVzdEVwaXNvZGVzLmxlbmd0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvcGxheS1ncmVlbi5zdmcnIGFsdD0nVG9jYXIgZXBpc8OzZGlvJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4geyAvL2FwaS5nZXQoKSBwYXJhIHBlZ2FyIGluZm9ybWHDp8O1ZXMsIGFwaS5wb3N0KCkgcGFyYSBzYWx2YXIgYWxndW0gZGFkbywgYXBpLnB1dCgpIHBhcmEgYXR1YWxpemFyIGUgYXBpLmRlbGV0IHBhcmEgZGVsZXRhci5cbiAgLypjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXM/X2xpbWl0PTEyJl9zb3J0PXB1Ymxpc2hlZF9hdCZfb3JkZXI9ZGVzYycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyovXG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KCdlcGlzb2RlcycsIHsgLy8gP19saW1pdD0xMiBsaW1pdGEgYSBxdWFudGlkYWRlIGRlIHJlZ2lzdHJvcyBxdWUgdsOjbyBzZXIgcGFzc2Fkb3MuICZfc29ydD1wdWJsaXNoZWRfYXQgb3JkZW5hIHBlbGEgZGF0YSBkZSBwdWJsaWNhw6fDo28sICZfb3JkZXI9ZGVzYyBuYSBvcmRlbSBkZWNyZXNjZW50ZS5cbiAgICBwYXJhbXM6IHtcbiAgICAgIF9saW1pdDogMTIsXG4gICAgICBfc29ydDogJ3B1Ymxpc2hlZF9hdCcsXG4gICAgICBfb3JkZXI6ICdkZXNjJ1xuICAgIH1cbiAgfSlcblxuICAvL2F4aW9zIMOpIHVtYSBiaWJsaW90ZWNhIHBhcmEgZmF6ZXIgcmVxdWlzacOnw7VlcyBodHRwLCBwb3JlbSB0ZW0gYWxndW1hcyBmdW5jaW9uYWxpZGFkZXMgYSBtYWlzIHF1ZSBvIGZldGNoLlxuXG4gIC8vRmF6ZXIgZm9ybWF0YcOnw6NvIGRvcyBkYWRvcyB2aW5kb3MgZGEgQVBJLCBhcG9zIGEgY2hhbWFkYSBkYSBBUEkgZXZpdGEgZGUgdGVyIHF1ZSBleGVjdXRhciB0b2RhIHZleiBxdWUgbyBjb21wb25lbnRlIHNvZmVyIHVtYSByZW5kZXJpemHDp8Ojby5cblxuICBjb25zdCBlcGlzb2RlcyA9IGRhdGEubWFwKGVwaXNvZGVzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGVwaXNvZGVzLmlkLFxuICAgICAgdGl0bGU6IGVwaXNvZGVzLnRpdGxlLFxuICAgICAgbWVtYmVyczogZXBpc29kZXMubWVtYmVycyxcbiAgICAgIHRodW1ibmFpbDogZXBpc29kZXMudGh1bWJuYWlsLFxuICAgICAgcHVibGlzaGVkQVQ6IGZvcm1hdChwYXJzZUlTTyhlcGlzb2Rlcy5wdWJsaXNoZWRfYXQpLCAnZCBNTU0geXknLCB7IGxvY2FsZTogcHRCUiB9KSxcbiAgICAgIGR1cmF0aW9uOiBOdW1iZXIoZXBpc29kZXMuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGVzLmZpbGUuZHVyYXRpb24pKSxcbiAgICAgIHVybDogZXBpc29kZXMuZmlsZS51cmwsXG4gICAgfTtcbiAgfSlcblxuICBjb25zdCBsYXRlc3RFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIDIpO1xuICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDIsIGVwaXNvZGVzLmxlbmdodCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGF0ZXN0RXBpc29kZXMsXG4gICAgICBhbGxFcGlzb2RlcyxcbiAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiA4IC8vIEEgY2FkYSA4IGhycyDDqSBmZWl0YSB1bWEgbm92YSBzb2xpY2l0YcOnw6NvIGRlIGRhZG9zLlxuICAgIH1cbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiJdLCJzb3VyY2VSb290IjoiIn0=