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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Home | Podcastr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZVBsYXllciIsInBsYXlMaXN0IiwiZXBpc29kZUxpc3QiLCJzdHlsZXMiLCJtYXAiLCJlcGlzb2RlIiwiaW5kZXgiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsImlkIiwibWVtYmVycyIsInB1Ymxpc2hlZEFUIiwiZHVyYXRpb25Bc1N0cmluZyIsIndpZHRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7O0FBa0JlLFNBQVNBLElBQVQsT0FBMEQ7QUFBQTs7QUFBQTs7QUFBQSxNQUExQ0MsY0FBMEMsUUFBMUNBLGNBQTBDO0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjs7QUFBQSxtQkFDbERDLGtFQUFTLEVBRHlDO0FBQUEsTUFDL0RDLFFBRCtELGNBQy9EQSxRQUQrRDs7QUFHdkUsTUFBTUMsV0FBVyxzS0FBT0osY0FBUCw0SkFBMEJDLFdBQTFCLEVBQWpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVJLHlFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFTLGVBQVMsRUFBRUEsK0VBQXBCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FB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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU1BBIDogw6kgY2FycmVnYWRvIGRlcG9pcyBxdWUgYSBww6FnaW5hIMOpIG1vc3RyYWRhLiBVc2FuZG8gbyBKYXZhU2NyaXB0IGRvIEJyb3dzZWVyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZXBpc29kZXMnKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKSB9LCBbXSlcbiovXG5cbi8qIFNTUiA6IHBhcmEgaXNzbyDDqSBuZWNlc8OhcmlvIGV4cG9ydGFyIGEgZnVuw6fDo28gZ2V0U2VydmVyU2lkZVByb3BzKCksIGlzc28gcGVybWl0ZSBxdWUgb3MgZGFkb3Mgc2VqYW0gc29saWNpdGFkb3MgYW50ZXMgZGUgZXhpYmlyIGEgcMOhZ2luYS5cbiAgRGVzc2EgZm9ybWEgYSBzb2xpY2l0YcOnw6NvIMOpIG5hIGNhbWRhIGRvIHNlcnZpZG9yIE5vZGUgZSBuw6NvIG5vIEJyb3dzZXIuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMuZXBpc29kZXMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGgxPkluZGV4PC9oMT5cbiAgICApXG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9lcGlzb2RlcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGVwaXNvZGVzOiBkYXRhLFxuICAgICAgfVxuICAgIH1cbiAgfVxuKi9cbi8qU1NHIDogw6kgZ2VyYWRhIHVtYSB2ZXJzw6NvIGVzdMOhdGljYSBkYSBww6FnaW5hIGVtIGh0bWwgcHVybywgw6kgdXNhZGEgcGFyYSB0b2RvcyBvcyB1c3XDoXJpb3MgcXVlIGFjZXNzYXJlbSBhIG1lc21hIHDDoWdpbmEsIGRlcG9pcyBkZXNzYSBwcmltZWlyYSBwZXNzb2EuIFxuIEV2aXRhbmRvIHRlciBxdWUgZmF6ZXIgYSBzb2xpY2l0YcOnw6NvIHRvZGEgdmV6IHF1ZSB1bWEgcGVzc29hIGFjZXNzYXIgYSBww6FnaW5hLiBFdml0YW5kbyBnYXN0YXIgcmVzY3Vyc29zIGRlc25lY2Vzc8Ohcmlvcy5cbiBQYXJhIGlzc28gYmFzdGEgdHJvY2FyIGEgZnVuw6fDo28gZ2V0U2VydmVyU2lkZVByb3BzKCkgcGFyYSBhIGZ1bsOnw6NvIGdldFN0YXRpY1Byb3BzKCkuXG4qL1xuXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnOyAvL1RpcGFnZW0gZGEgZnVuw6fDo28uXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSdcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlcy9ob21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xuXG50eXBlIEVwaXNvZGVzID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBwdWJsaXNoZWRBVDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuXG50eXBlIEhvbWVQcm9wcyA9IHtcbiAgbGF0ZXN0RXBpc29kZXM6IEFycmF5PEVwaXNvZGVzPiAvLyBPdSBFcGlzb2Rlc1tdIHBhcmEgZGVjbGFyYXIgdW0gQXJyYXkuXG4gIGFsbEVwaXNvZGVzOiBBcnJheTxFcGlzb2Rlcz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdEVwaXNvZGVzLCBhbGxFcGlzb2RlcyB9OiBIb21lUHJvcHMpIHtcbiAgY29uc3QgeyBwbGF5TGlzdCB9ID0gdXNlUGxheWVyKClcblxuICBjb25zdCBlcGlzb2RlTGlzdCA9IFsuLi5sYXRlc3RFcGlzb2RlcywgLi4uYWxsRXBpc29kZXNdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lUGFnZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgfCBQb2RjYXN0cjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxhdGVzdEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPsOabHRpbW9zIGxhbsOnYW1lbnRvczwvaDI+XG5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtsYXRlc3RFcGlzb2Rlcy5tYXAoKGVwaXNvZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOTJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE5Mn1cbiAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvdmVyJ1xuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGVEZXRhaWxzfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSA+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBVH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBwbGF5TGlzdChlcGlzb2RlTGlzdCwgaW5kZXgpfSA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LWdyZWVuLnN2Z1wiIGFsdD1cIlRvY2FyIGVwaXPDs2Rpb1wiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hbGxFcGlzb2Rlc30+XG4gICAgICAgIDxoMj5Ub2RvcyBlcGlzw7NkaW9zPC9oMj5cblxuICAgICAgICA8dGFibGUgY2VsbFNwYWNpbmc9ezB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb2RjYXN0PC90aD5cbiAgICAgICAgICAgICAgPHRoPkludGVncmFudGVzPC90aD5cbiAgICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxuICAgICAgICAgICAgICA8dGg+RHVyYcOnw6NvPC90aD5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2FsbEVwaXNvZGVzLm1hcCgoZXBpc29kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtlcGlzb2RlLmlkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogNzIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2VwaXNvZGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZXBpc29kZXMvJHtlcGlzb2RlLmlkfWB9IHByZWZldGNoPlxuICAgICAgICAgICAgICAgICAgICAgIDxhID57ZXBpc29kZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUubWVtYmVyc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+e2VwaXNvZGUucHVibGlzaGVkQVR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBwbGF5TGlzdChlcGlzb2RlTGlzdCwgaW5kZXggKyBsYXRlc3RFcGlzb2Rlcy5sZW5ndGgpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3BsYXktZ3JlZW4uc3ZnJyBhbHQ9J1RvY2FyIGVwaXPDs2RpbycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHsgLy9hcGkuZ2V0KCkgcGFyYSBwZWdhciBpbmZvcm1hw6fDtWVzLCBhcGkucG9zdCgpIHBhcmEgc2FsdmFyIGFsZ3VtIGRhZG8sIGFwaS5wdXQoKSBwYXJhIGF0dWFsaXphciBlIGFwaS5kZWxldCBwYXJhIGRlbGV0YXIuXG4gIC8qY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2VwaXNvZGVzP19saW1pdD0xMiZfc29ydD1wdWJsaXNoZWRfYXQmX29yZGVyPWRlc2MnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsqL1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7IC8vID9fbGltaXQ9MTIgbGltaXRhIGEgcXVhbnRpZGFkZSBkZSByZWdpc3Ryb3MgcXVlIHbDo28gc2VyIHBhc3NhZG9zLiAmX3NvcnQ9cHVibGlzaGVkX2F0IG9yZGVuYSBwZWxhIGRhdGEgZGUgcHVibGljYcOnw6NvLCAmX29yZGVyPWRlc2MgbmEgb3JkZW0gZGVjcmVzY2VudGUuXG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pXG5cbiAgLy9heGlvcyDDqSB1bWEgYmlibGlvdGVjYSBwYXJhIGZhemVyIHJlcXVpc2nDp8O1ZXMgaHR0cCwgcG9yZW0gdGVtIGFsZ3VtYXMgZnVuY2lvbmFsaWRhZGVzIGEgbWFpcyBxdWUgbyBmZXRjaC5cblxuICAvL0ZhemVyIGZvcm1hdGHDp8OjbyBkb3MgZGFkb3MgdmluZG9zIGRhIEFQSSwgYXBvcyBhIGNoYW1hZGEgZGEgQVBJIGV2aXRhIGRlIHRlciBxdWUgZXhlY3V0YXIgdG9kYSB2ZXogcXVlIG8gY29tcG9uZW50ZSBzb2ZlciB1bWEgcmVuZGVyaXphw6fDo28uXG5cbiAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBlcGlzb2Rlcy5pZCxcbiAgICAgIHRpdGxlOiBlcGlzb2Rlcy50aXRsZSxcbiAgICAgIG1lbWJlcnM6IGVwaXNvZGVzLm1lbWJlcnMsXG4gICAgICB0aHVtYm5haWw6IGVwaXNvZGVzLnRodW1ibmFpbCxcbiAgICAgIHB1Ymxpc2hlZEFUOiBmb3JtYXQocGFyc2VJU08oZXBpc29kZXMucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGVzLmZpbGUuZHVyYXRpb24pLFxuICAgICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihlcGlzb2Rlcy5maWxlLmR1cmF0aW9uKSksXG4gICAgICB1cmw6IGVwaXNvZGVzLmZpbGUudXJsLFxuICAgIH07XG4gIH0pXG5cbiAgY29uc3QgbGF0ZXN0RXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgwLCAyKTtcbiAgY29uc3QgYWxsRXBpc29kZXMgPSBlcGlzb2Rlcy5zbGljZSgyLCBlcGlzb2Rlcy5sZW5naHQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhdGVzdEVwaXNvZGVzLFxuICAgICAgYWxsRXBpc29kZXMsXG4gICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogOCAvLyBBIGNhZGEgOCBocnMgw6kgZmVpdGEgdW1hIG5vdmEgc29saWNpdGHDp8OjbyBkZSBkYWRvcy5cbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9