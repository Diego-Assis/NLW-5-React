self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerContext": function() { return /* binding */ PlayerContext; },
/* harmony export */   "PlayerContextProvider": function() { return /* binding */ PlayerContextProvider; },
/* harmony export */   "usePlayer": function() { return /* binding */ usePlayer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\diego\\Documents\\podcastrnext\\src\\contexts\\PlayerContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var PlayerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function PlayerContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      currentEpisodeIndex = _useState2[0],
      setCurrentEpisodeIndex = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isPlaying = _useState3[0],
      setIsPlaying = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isLooping = _useState4[0],
      setIsLooping = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isShuffling = _useState5[0],
      setIsShuffling = _useState5[1];

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  } //12 episodios


  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  var hasPrevious = currentEpisodeIndex > 0;
  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
    if (isShuffling) {
      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      play: play,
      playList: playList,
      isPlaying: isPlaying,
      togglePlay: togglePlay,
      setPlayingState: setPlayingState,
      hasNext: hasNext,
      hasPrevious: hasPrevious,
      playNext: playNext,
      playPrevious: playPrevious,
      toggleLoop: toggleLoop,
      isLooping: isLooping,
      isShuffling: isShuffling,
      toggleShuffle: toggleShuffle
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }, this);
}

_s(PlayerContextProvider, "YSXWY8OfLfVxd5To+FHcHi+GAY0=");

_c = PlayerContextProvider;
var usePlayer = function usePlayer() {
  _s2();

  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlayerContext);
};

_s2(usePlayer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PlayerContextProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBNEJPLElBQU1BLGFBQWEsZ0JBQUdDLG9EQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXlFO0FBQUE7O0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3Qzs7QUFBQSxrQkFDdENDLCtDQUFRLENBQUMsRUFBRCxDQUQ4QjtBQUFBLE1BQ3JFQyxXQURxRTtBQUFBLE1BQ3hEQyxjQUR3RDs7QUFBQSxtQkFFdEJGLCtDQUFRLENBQUMsQ0FBRCxDQUZjO0FBQUEsTUFFckVHLG1CQUZxRTtBQUFBLE1BRWhEQyxzQkFGZ0Q7O0FBQUEsbUJBRzFDSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIa0M7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YWdlcy9pbmRleC5lZmNmYTI3MWY3ODdmMjdkYTFhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHIgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG1lbWJlcnM6IHN0cmluZztcclxuICAgIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xyXG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXSxcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcclxuICAgIGlzUGxheWluZzogYm9vbGVhbjtcclxuICAgIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xyXG4gICAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBzZXRQbGF5aW5nU3RhdGU6IChzdGF0ZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XHJcbiAgICBoYXNOZXh0OiBib29sZWFuO1xyXG4gICAgaGFzUHJldmlvdXM6IGJvb2xlYW47XHJcbiAgICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcclxuICAgIHBsYXlQcmV2aW91czogKCkgPT4gdm9pZDtcclxuICAgIHRvZ2dsZUxvb3A6ICgpID0+IHZvaWQ7XHJcbiAgICBpc0xvb3Bpbmc6IGJvb2xlYW47XHJcbiAgICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgaXNTaHVmZmxpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSlcclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcclxuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xyXG4gICAgICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XHJcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8xMiBlcGlzb2Rpb3NcclxuICAgIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xyXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XHJcbiAgICBjb25zdCBoYXNOZXh0ID0gaXNTaHVmZmxpbmcgfHwgKGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKSA8IGVwaXNvZGVMaXN0Lmxlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcclxuICAgICAgICBpZiAoaXNTaHVmZmxpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJhbmRvbUVwaXNvZGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRSYW5kb21FcGlzb2RlSW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzTmV4dCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xyXG4gICAgICAgIGlmIChoYXNQcmV2aW91cykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpIHtcclxuICAgICAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcclxuICAgICAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICAgICAgICAgIHBsYXksXHJcbiAgICAgICAgICAgICAgICBwbGF5TGlzdCxcclxuICAgICAgICAgICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXksXHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICAgICAgICAgICAgICBoYXNOZXh0LFxyXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICBwbGF5TmV4dCxcclxuICAgICAgICAgICAgICAgIHBsYXlQcmV2aW91cyxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUxvb3AsXHJcbiAgICAgICAgICAgICAgICBpc0xvb3BpbmcsXHJcbiAgICAgICAgICAgICAgICBpc1NodWZmbGluZyxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9