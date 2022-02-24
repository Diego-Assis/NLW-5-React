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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
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

  var _usePlayer = (0,_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__.usePlayer)(),
      playList = _usePlayer.playList;

  var episodeList = [].concat((0,C_Users_diego_Documents_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(latestEpisodes), (0,C_Users_diego_Documents_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(allEpisodes));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().homePage),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().latestEpisodes),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\xDAltimos lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
              lineNumber: 72,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().episodeDetails),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: episode.publishedAT
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
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
                lineNumber: 90,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().allEpisodes),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
                  lineNumber: 117,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: "/episodes/".concat(episode.id),
                  prefetch: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAT
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
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
                    lineNumber: 135,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

_s(Home, "B+17Ictt0EMdTLSLvmaYvE6LpQQ=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_4__.usePlayer];
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXlMaXN0IiwiZXBpc29kZUxpc3QiLCJzdHlsZXMiLCJtYXAiLCJlcGlzb2RlIiwiaW5kZXgiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEFUIiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUV1QztBQUN2QztBQUNBO0FBS0E7QUFFQTs7QUFrQmUsU0FBU0EsSUFBVCxPQUEwRDtBQUFBOztBQUFBOztBQUFBLE1BQTFDQyxjQUEwQyxRQUExQ0EsY0FBMEM7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCOztBQUFBLG1CQUNsREMsa0VBQVMsRUFEeUM7QUFBQSxNQUMvREMsUUFEK0QsY0FDL0RBLFFBRCtEOztBQUd2RSxNQUFNQyxXQUFXLHNLQUFPSixjQUFQLDRKQUEwQkMsV0FBMUIsRUFBakI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUkseUVBQWhCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUVBLCtFQUFwQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHTCxjQUFjLENBQUNNLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ3RDLDhCQUNFO0FBQUEsb0NBQ0UsOERBQUMsbURBQUQ7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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGLGVBZUU7QUFBQSwwQkFBS0gsT0FBTyxDQUFDSztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZkYsZUFnQkU7QUFBSSxxQkFBSyxFQUFFO0FBQUVHLHVCQUFLLEVBQUU7QUFBVCxpQkFBWDtBQUFBLDBCQUE0QlIsT0FBTyxDQUFDTTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCRixlQWlCRTtBQUFBLDBCQUFLTixPQUFPLENBQUNPO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFqQkYsZUFrQkU7QUFBQSx1Q0FDRTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFzQix5QkFBTyxFQUFFO0FBQUEsMkJBQU1YLFFBQVEsQ0FBQ0MsV0FBRCxFQUFjSSxLQUFLLEdBQUdSLGNBQWMsQ0FBQ2dCLE1BQXJDLENBQWQ7QUFBQSxtQkFBL0I7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsaUJBQVQ7QUFBMkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGO0FBQUEsZUFBU1QsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBMEJELFdBM0JBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7O0dBeEZ1QlosSTtVQUNERyw4RDs7O0tBRENILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWVlOTU5OGNmMWZjODJjZDk3MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNQQSA6IMOpIGNhcnJlZ2FkbyBkZXBvaXMgcXVlIGEgcMOhZ2luYSDDqSBtb3N0cmFkYS4gVXNhbmRvIG8gSmF2YVNjcmlwdCBkbyBCcm93c2VlclxuICB1c2VFZmZlY3QoKCkgPT4geyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkgfSwgW10pXG4qL1xuXG4vKiBTU1IgOiBwYXJhIGlzc28gw6kgbmVjZXPDoXJpbyBleHBvcnRhciBhIGZ1bsOnw6NvIGdldFNlcnZlclNpZGVQcm9wcygpLCBpc3NvIHBlcm1pdGUgcXVlIG9zIGRhZG9zIHNlamFtIHNvbGljaXRhZG9zIGFudGVzIGRlIGV4aWJpciBhIHDDoWdpbmEuXG4gIERlc3NhIGZvcm1hIGEgc29saWNpdGHDp8OjbyDDqSBuYSBjYW1kYSBkbyBzZXJ2aWRvciBOb2RlIGUgbsOjbyBubyBCcm93c2VyLlxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLmVwaXNvZGVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMT5JbmRleDwvaDE+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBlcGlzb2RlczogZGF0YSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiovXG4vKlNTRyA6IMOpIGdlcmFkYSB1bWEgdmVyc8OjbyBlc3TDoXRpY2EgZGEgcMOhZ2luYSBlbSBodG1sIHB1cm8sIMOpIHVzYWRhIHBhcmEgdG9kb3Mgb3MgdXN1w6FyaW9zIHF1ZSBhY2Vzc2FyZW0gYSBtZXNtYSBww6FnaW5hLCBkZXBvaXMgZGVzc2EgcHJpbWVpcmEgcGVzc29hLiBcbiBFdml0YW5kbyB0ZXIgcXVlIGZhemVyIGEgc29saWNpdGHDp8OjbyB0b2RhIHZleiBxdWUgdW1hIHBlc3NvYSBhY2Vzc2FyIGEgcMOhZ2luYS4gRXZpdGFuZG8gZ2FzdGFyIHJlc2N1cnNvcyBkZXNuZWNlc3PDoXJpb3MuXG4gUGFyYSBpc3NvIGJhc3RhIHRyb2NhciBhIGZ1bsOnw6NvIGdldFNlcnZlclNpZGVQcm9wcygpIHBhcmEgYSBmdW7Dp8OjbyBnZXRTdGF0aWNQcm9wcygpLlxuKi9cblxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JzsgLy9UaXBhZ2VtIGRhIGZ1bsOnw6NvLlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUidcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBsYXllckNvbnRleHQsIHVzZVBsYXllciB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG50eXBlIEVwaXNvZGVzID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBwdWJsaXNoZWRBVDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuXG50eXBlIEhvbWVQcm9wcyA9IHtcbiAgbGF0ZXN0RXBpc29kZXM6IEFycmF5PEVwaXNvZGVzPiAvLyBPdSBFcGlzb2Rlc1tdIHBhcmEgZGVjbGFyYXIgdW0gQXJyYXkuXG4gIGFsbEVwaXNvZGVzOiBBcnJheTxFcGlzb2Rlcz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2RlcyB9OiBIb21lUHJvcHMpIHtcbiAgY29uc3QgeyBwbGF5TGlzdCB9ID0gdXNlUGxheWVyKClcblxuICBjb25zdCBlcGlzb2RlTGlzdCA9IFsuLi5sYXRlc3RFcGlzb2RlcywgLi4uYWxsRXBpc29kZXNdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lUGFnZX0+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5sYXRlc3RFcGlzb2Rlc30+XG4gICAgICAgIDxoMj7Dmmx0aW1vcyBsYW7Dp2FtZW50b3M8L2gyPlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKChlcGlzb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTkyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxOTJ9XG4gICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcGlzb2RlRGV0YWlsc30+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgPntlcGlzb2RlLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxwPntlcGlzb2RlLm1lbWJlcnN9PC9wPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUucHVibGlzaGVkQVR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gcGxheUxpc3QoZXBpc29kZUxpc3QsIGluZGV4KX0gPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYWxsRXBpc29kZXN9PlxuICAgICAgICA8aDI+VG9kb3MgZXBpc8OzZGlvczwvaDI+XG5cbiAgICAgICAgPHRhYmxlIGNlbGxTcGFjaW5nPXswfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICA8dGg+UG9kY2FzdDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5JbnRlZ3JhbnRlczwvdGg+XG4gICAgICAgICAgICAgIDx0aD5EYXRhPC90aD5cbiAgICAgICAgICAgICAgPHRoPkR1cmHDp8OjbzwvdGg+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHthbGxFcGlzb2Rlcy5tYXAoKGVwaXNvZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDcyIH19PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTIwfVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfSBwcmVmZXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICA8YSA+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntlcGlzb2RlLm1lbWJlcnN9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogMTAwIH19PntlcGlzb2RlLnB1Ymxpc2hlZEFUfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUuZHVyYXRpb25Bc1N0cmluZ308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gcGxheUxpc3QoZXBpc29kZUxpc3QsIGluZGV4ICsgbGF0ZXN0RXBpc29kZXMubGVuZ3RoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9wbGF5LWdyZWVuLnN2ZycgYWx0PSdUb2NhciBlcGlzw7NkaW8nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7IC8vYXBpLmdldCgpIHBhcmEgcGVnYXIgaW5mb3JtYcOnw7VlcywgYXBpLnBvc3QoKSBwYXJhIHNhbHZhciBhbGd1bSBkYWRvLCBhcGkucHV0KCkgcGFyYSBhdHVhbGl6YXIgZSBhcGkuZGVsZXQgcGFyYSBkZWxldGFyLlxuICAvKmNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9lcGlzb2Rlcz9fbGltaXQ9MTImX3NvcnQ9cHVibGlzaGVkX2F0Jl9vcmRlcj1kZXNjJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7Ki9cblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJ2VwaXNvZGVzJywgeyAvLyA/X2xpbWl0PTEyIGxpbWl0YSBhIHF1YW50aWRhZGUgZGUgcmVnaXN0cm9zIHF1ZSB2w6NvIHNlciBwYXNzYWRvcy4gJl9zb3J0PXB1Ymxpc2hlZF9hdCBvcmRlbmEgcGVsYSBkYXRhIGRlIHB1YmxpY2HDp8OjbywgJl9vcmRlcj1kZXNjIG5hIG9yZGVtIGRlY3Jlc2NlbnRlLlxuICAgIHBhcmFtczoge1xuICAgICAgX2xpbWl0OiAxMixcbiAgICAgIF9zb3J0OiAncHVibGlzaGVkX2F0JyxcbiAgICAgIF9vcmRlcjogJ2Rlc2MnXG4gICAgfVxuICB9KVxuXG4gIC8vYXhpb3Mgw6kgdW1hIGJpYmxpb3RlY2EgcGFyYSBmYXplciByZXF1aXNpw6fDtWVzIGh0dHAsIHBvcmVtIHRlbSBhbGd1bWFzIGZ1bmNpb25hbGlkYWRlcyBhIG1haXMgcXVlIG8gZmV0Y2guXG5cbiAgLy9GYXplciBmb3JtYXRhw6fDo28gZG9zIGRhZG9zIHZpbmRvcyBkYSBBUEksIGFwb3MgYSBjaGFtYWRhIGRhIEFQSSBldml0YSBkZSB0ZXIgcXVlIGV4ZWN1dGFyIHRvZGEgdmV6IHF1ZSBvIGNvbXBvbmVudGUgc29mZXIgdW1hIHJlbmRlcml6YcOnw6NvLlxuXG4gIGNvbnN0IGVwaXNvZGVzID0gZGF0YS5tYXAoZXBpc29kZXMgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXBpc29kZXMuaWQsXG4gICAgICB0aXRsZTogZXBpc29kZXMudGl0bGUsXG4gICAgICBtZW1iZXJzOiBlcGlzb2Rlcy5tZW1iZXJzLFxuICAgICAgdGh1bWJuYWlsOiBlcGlzb2Rlcy50aHVtYm5haWwsXG4gICAgICBwdWJsaXNoZWRBVDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGVzLnB1Ymxpc2hlZF9hdCksICdkIE1NTSB5eScsIHsgbG9jYWxlOiBwdEJSIH0pLFxuICAgICAgZHVyYXRpb246IE51bWJlcihlcGlzb2Rlcy5maWxlLmR1cmF0aW9uKSxcbiAgICAgIGR1cmF0aW9uQXNTdHJpbmc6IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhOdW1iZXIoZXBpc29kZXMuZmlsZS5kdXJhdGlvbikpLFxuICAgICAgdXJsOiBlcGlzb2Rlcy5maWxlLnVybCxcbiAgICB9O1xuICB9KVxuXG4gIGNvbnN0IGxhdGVzdEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMCwgMik7XG4gIGNvbnN0IGFsbEVwaXNvZGVzID0gZXBpc29kZXMuc2xpY2UoMiwgZXBpc29kZXMubGVuZ2h0KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsYXRlc3RFcGlzb2RlcyxcbiAgICAgIGFsbEVwaXNvZGVzLFxuICAgICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDggLy8gQSBjYWRhIDggaHJzIMOpIGZlaXRhIHVtYSBub3ZhIHNvbGljaXRhw6fDo28gZGUgZGFkb3MuXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==