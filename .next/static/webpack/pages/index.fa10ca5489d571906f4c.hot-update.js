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
        lineNumber: 65,
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
              lineNumber: 71,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().episodeDetails),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: episode.publishedAT
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
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
                lineNumber: 89,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().allEpisodes),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Podcast"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Integrantes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "Dura\xE7\xE3o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
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
                  lineNumber: 116,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: "/episodes/".concat(episode.id),
                  prefetch: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAT
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
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
                    lineNumber: 134,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXlMaXN0IiwiZXBpc29kZUxpc3QiLCJzdHlsZXMiLCJtYXAiLCJlcGlzb2RlIiwiaW5kZXgiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEFUIiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUV1QztBQUN2QztBQUNBO0FBS0E7QUFDQTs7QUFrQmUsU0FBU0EsSUFBVCxPQUEwRDtBQUFBOztBQUFBOztBQUFBLE1BQTFDQyxjQUEwQyxRQUExQ0EsY0FBMEM7QUFBQSxNQUExQkMsV0FBMEIsUUFBMUJBLFdBQTBCOztBQUFBLG1CQUNsREMsa0VBQVMsRUFEeUM7QUFBQSxNQUMvREMsUUFEK0QsY0FDL0RBLFFBRCtEOztBQUd2RSxNQUFNQyxXQUFXLHNLQUFPSixjQUFQLDRKQUEwQkMsV0FBMUIsRUFBakI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUkseUVBQWhCO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUVBLCtFQUFwQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFBLGtCQUNHTCxjQUFjLENBQUNNLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ3RDLDhCQUNFO0FBQUEsb0NBQ0UsOERBQUMsbURBQUQ7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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGLGVBZUU7QUFBQSwwQkFBS0gsT0FBTyxDQUFDSztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZkYsZUFnQkU7QUFBSSxxQkFBSyxFQUFFO0FBQUVHLHVCQUFLLEVBQUU7QUFBVCxpQkFBWDtBQUFBLDBCQUE0QlIsT0FBTyxDQUFDTTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCRixlQWlCRTtBQUFBLDBCQUFLTixPQUFPLENBQUNPO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFqQkYsZUFrQkU7QUFBQSx1Q0FDRTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFzQix5QkFBTyxFQUFFO0FBQUEsMkJBQU1YLFFBQVEsQ0FBQ0MsV0FBRCxFQUFjSSxLQUFLLEdBQUdSLGNBQWMsQ0FBQ2dCLE1BQXJDLENBQWQ7QUFBQSxtQkFBL0I7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsaUJBQVQ7QUFBMkIsdUJBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGO0FBQUEsZUFBU1QsT0FBTyxDQUFDSSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBMEJELFdBM0JBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7O0dBeEZ1QlosSTtVQUNERyw4RDs7O0tBRENILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmExMGNhNTQ4OWQ1NzE5MDZmNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNQQSA6IMOpIGNhcnJlZ2FkbyBkZXBvaXMgcXVlIGEgcMOhZ2luYSDDqSBtb3N0cmFkYS4gVXNhbmRvIG8gSmF2YVNjcmlwdCBkbyBCcm93c2VlclxuICB1c2VFZmZlY3QoKCkgPT4geyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkgfSwgW10pXG4qL1xuXG4vKiBTU1IgOiBwYXJhIGlzc28gw6kgbmVjZXPDoXJpbyBleHBvcnRhciBhIGZ1bsOnw6NvIGdldFNlcnZlclNpZGVQcm9wcygpLCBpc3NvIHBlcm1pdGUgcXVlIG9zIGRhZG9zIHNlamFtIHNvbGljaXRhZG9zIGFudGVzIGRlIGV4aWJpciBhIHDDoWdpbmEuXG4gIERlc3NhIGZvcm1hIGEgc29saWNpdGHDp8OjbyDDqSBuYSBjYW1kYSBkbyBzZXJ2aWRvciBOb2RlIGUgbsOjbyBubyBCcm93c2VyLlxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLmVwaXNvZGVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoMT5JbmRleDwvaDE+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBlcGlzb2RlczogZGF0YSxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiovXG4vKlNTRyA6IMOpIGdlcmFkYSB1bWEgdmVyc8OjbyBlc3TDoXRpY2EgZGEgcMOhZ2luYSBlbSBodG1sIHB1cm8sIMOpIHVzYWRhIHBhcmEgdG9kb3Mgb3MgdXN1w6FyaW9zIHF1ZSBhY2Vzc2FyZW0gYSBtZXNtYSBww6FnaW5hLCBkZXBvaXMgZGVzc2EgcHJpbWVpcmEgcGVzc29hLiBcbiBFdml0YW5kbyB0ZXIgcXVlIGZhemVyIGEgc29saWNpdGHDp8OjbyB0b2RhIHZleiBxdWUgdW1hIHBlc3NvYSBhY2Vzc2FyIGEgcMOhZ2luYS4gRXZpdGFuZG8gZ2FzdGFyIHJlc2N1cnNvcyBkZXNuZWNlc3PDoXJpb3MuXG4gUGFyYSBpc3NvIGJhc3RhIHRyb2NhciBhIGZ1bsOnw6NvIGdldFNlcnZlclNpZGVQcm9wcygpIHBhcmEgYSBmdW7Dp8OjbyBnZXRTdGF0aWNQcm9wcygpLlxuKi9cblxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JzsgLy9UaXBhZ2VtIGRhIGZ1bsOnw6NvLlxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUidcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XG5cbnR5cGUgRXBpc29kZXMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lbWJlcnM6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIHB1Ymxpc2hlZEFUOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbnR5cGUgSG9tZVByb3BzID0ge1xuICBsYXRlc3RFcGlzb2RlczogQXJyYXk8RXBpc29kZXM+IC8vIE91IEVwaXNvZGVzW10gcGFyYSBkZWNsYXJhciB1bSBBcnJheS5cbiAgYWxsRXBpc29kZXM6IEFycmF5PEVwaXNvZGVzPlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGF0ZXN0RXBpc29kZXMsIGFsbEVwaXNvZGVzIH06IEhvbWVQcm9wcykge1xuICBjb25zdCB7IHBsYXlMaXN0IH0gPSB1c2VQbGF5ZXIoKVxuXG4gIGNvbnN0IGVwaXNvZGVMaXN0ID0gWy4uLmxhdGVzdEVwaXNvZGVzLCAuLi5hbGxFcGlzb2Rlc107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVQYWdlfT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxhdGVzdEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPsOabHRpbW9zIGxhbsOnYW1lbnRvczwvaDI+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtsYXRlc3RFcGlzb2Rlcy5tYXAoKGVwaXNvZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Mn1cbiAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvdmVyJ1xuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGVEZXRhaWxzfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSA+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBVH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBwbGF5TGlzdChlcGlzb2RlTGlzdCwgaW5kZXgpfSA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hbGxFcGlzb2Rlc30+XG4gICAgICAgIDxoMj5Ub2RvcyBlcGlzw7NkaW9zPC9oMj5cblxuICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9ezB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb2RjYXN0PC90aD5cbiAgICAgICAgICAgICAgPHRoPkludGVncmFudGVzPC90aD5cbiAgICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxuICAgICAgICAgICAgICA8dGg+RHVyYcOnw6NvPC90aD5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2FsbEVwaXNvZGVzLm1hcCgoZXBpc29kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogNzIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9IHByZWZldGNoPlxuICAgICAgICAgICAgICAgICAgICAgIDxhID57ZXBpc29kZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUubWVtYmVyc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+e2VwaXNvZGUucHVibGlzaGVkQVR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBwbGF5TGlzdChlcGlzb2RlTGlzdCwgaW5kZXggKyBsYXRlc3RFcGlzb2Rlcy5sZW5ndGgpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3BsYXktZ3JlZW4uc3ZnJyBhbHQ9J1RvY2FyIGVwaXPDs2RpbycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHsgLy9hcGkuZ2V0KCkgcGFyYSBwZWdhciBpbmZvcm1hw6fDtWVzLCBhcGkucG9zdCgpIHBhcmEgc2FsdmFyIGFsZ3VtIGRhZG8sIGFwaS5wdXQoKSBwYXJhIGF0dWFsaXphciBlIGFwaS5kZWxldCBwYXJhIGRlbGV0YXIuXG4gIC8qY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzP19saW1pdD0xMiZfc29ydD1wdWJsaXNoZWRfYXQmX29yZGVyPWRlc2MnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsqL1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7IC8vID9fbGltaXQ9MTIgbGltaXRhIGEgcXVhbnRpZGFkZSBkZSByZWdpc3Ryb3MgcXVlIHbDo28gc2VyIHBhc3NhZG9zLiAmX3NvcnQ9cHVibGlzaGVkX2F0IG9yZGVuYSBwZWxhIGRhdGEgZGUgcHVibGljYcOnw6NvLCAmX29yZGVyPWRlc2MgbmEgb3JkZW0gZGVjcmVzY2VudGUuXG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pXG5cbiAgLy9heGlvcyDDqSB1bWEgYmlibGlvdGVjYSBwYXJhIGZhemVyIHJlcXVpc2nDp8O1ZXMgaHR0cCwgcG9yZW0gdGVtIGFsZ3VtYXMgZnVuY2lvbmFsaWRhZGVzIGEgbWFpcyBxdWUgbyBmZXRjaC5cblxuICAvL0ZhemVyIGZvcm1hdGHDp8OjbyBkb3MgZGFkb3MgdmluZG9zIGRhIEFQSSwgYXBvcyBhIGNoYW1hZGEgZGEgQVBJIGV2aXRhIGRlIHRlciBxdWUgZXhlY3V0YXIgdG9kYSB2ZXogcXVlIG8gY29tcG9uZW50ZSBzb2ZlciB1bWEgcmVuZGVyaXphw6fDo28uXG5cbiAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2Rlcy5pZCxcbiAgICAgIHRpdGxlOiBlcGlzb2Rlcy50aXRsZSxcbiAgICAgIG1lbWJlcnM6IGVwaXNvZGVzLm1lbWJlcnMsXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGVzLnRodW1ibmFpbCxcbiAgICAgIHB1Ymxpc2hlZEFUOiBmb3JtYXQocGFyc2VJU08oZXBpc29kZXMucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGVzLmZpbGUuZHVyYXRpb24pLFxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2Rlcy5maWxlLmR1cmF0aW9uKSksXG4gICAgICB1cmw6IGVwaXNvZGVzLmZpbGUudXJsLFxuICAgIH07XG4gIH0pXG5cbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgyLCBlcGlzb2Rlcy5sZW5naHQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhdGVzdEVwaXNvZGVzLFxuICAgICAgYWxsRXBpc29kZXMsXG4gICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogOCAvLyBBIGNhZGEgOCBocnMgw6kgZmVpdGEgdW1hIG5vdmEgc29saWNpdGHDp8OjbyBkZSBkYWRvcy5cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9