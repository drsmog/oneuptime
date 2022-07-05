"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
globalThis["webpackHotUpdatedashboard"]("main",{

/***/ "../CommonUI/src/Components/Header/SearchBox.tsx":
/*!*******************************************************!*\
  !*** ../CommonUI/src/Components/Header/SearchBox.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/Icon */ \"../CommonUI/src/Components/Icon/Icon.tsx\");\n/* harmony import */ var _Utils_BrandColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/BrandColors */ \"../CommonUI/src/Utils/BrandColors.ts\");\n\n\n\nconst SearchBox = (props) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", { className: \"app-search d-none d-lg-block\", style: {\n            width: '400px',\n        } },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"position-relative\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", { type: \"text\", className: \"form-control\", placeholder: \"Search...\", onChange: (e) => {\n                    props.onChange(e.target.value);\n                } }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: \"btn\", type: \"button\", disabled: true, style: {\n                    border: 'none',\n                    color: _Utils_BrandColors__WEBPACK_IMPORTED_MODULE_2__.VeryLightGrey.toString(),\n                } },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { className: \"light\", icon: _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.IconProp.Search, size: _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__.SizeProp.Large })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vQ29tbW9uVUkvc3JjL0NvbXBvbmVudHMvSGVhZGVyL1NlYXJjaEJveC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0Q7QUFDUDtBQUNBO0FBTXhELE1BQU0sU0FBUyxHQUFzQyxDQUNqRCxLQUFxQixFQUNULEVBQUU7SUFDZCxPQUFPLENBQ0gscUVBQ0ksU0FBUyxFQUFDLDhCQUE4QixFQUN4QyxLQUFLLEVBQUU7WUFDSCxLQUFLLEVBQUUsT0FBTztTQUNqQjtRQUVELG9FQUFLLFNBQVMsRUFBQyxtQkFBbUI7WUFDOUIsc0VBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxTQUFTLEVBQUMsY0FBYyxFQUN4QixXQUFXLEVBQUMsV0FBVyxFQUN2QixRQUFRLEVBQUUsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7b0JBQ2pELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxHQUNIO1lBQ0YsdUVBQ0ksU0FBUyxFQUFDLEtBQUssRUFDZixJQUFJLEVBQUMsUUFBUSxFQUNiLFFBQVEsRUFBRSxJQUFJLEVBQ2QsS0FBSyxFQUFFO29CQUNILE1BQU0sRUFBRSxNQUFNO29CQUNkLEtBQUssRUFBRSxzRUFBc0IsRUFBRTtpQkFDbEM7Z0JBRUQsMkRBQUMsa0RBQUksSUFDRCxTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUUsdURBQWUsRUFDckIsSUFBSSxFQUFFLHNEQUFjLEdBQ3RCLENBQ0csQ0FDUCxDQUNILENBQ1YsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uLi9Db21tb25VSS9zcmMvQ29tcG9uZW50cy9IZWFkZXIvU2VhcmNoQm94LnRzeD9iNGQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24sIHsgSWNvblByb3AsIFNpemVQcm9wIH0gZnJvbSAnLi4vSWNvbi9JY29uJztcbmltcG9ydCB7IFZlcnlMaWdodEdyZXkgfSBmcm9tICcuLi8uLi9VdGlscy9CcmFuZENvbG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50UHJvcHMge1xuICAgIG9uQ2hhbmdlOiAoc2VhcmNoOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNlYXJjaEJveDogRnVuY3Rpb25Db21wb25lbnQ8Q29tcG9uZW50UHJvcHM+ID0gKFxuICAgIHByb3BzOiBDb21wb25lbnRQcm9wc1xuKTogUmVhY3RFbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwLXNlYXJjaCBkLW5vbmUgZC1sZy1ibG9ja1wiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBWZXJ5TGlnaHRHcmV5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17SWNvblByb3AuU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17U2l6ZVByb3AuTGFyZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CommonUI/src/Components/Header/SearchBox.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("988205574c6ff3e3d8fd")
/******/ })();
/******/ 
/******/ }
);