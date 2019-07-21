webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");





var Layout = function Layout(props) {
  var links = [{
    label: "home",
    link: "/"
  }, {
    label: "about",
    link: "/about"
  }, {
    label: "projects",
    link: "/projects"
  }, {
    label: "contact",
    link: "/contact"
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    links: links
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1187757520" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "filter"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "moving-clouds"
  }), props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
    className: "jsx-1187757520" + " " + "container__fog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    srcSet: "../static/fog-low-small.png",
    media: "(max-width: 43.75em)",
    className: "jsx-1187757520"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    srcSet: "../static/fog-low.png",
    media: "(min-width: 43.75em)",
    className: "jsx-1187757520"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    srcSet: "../static/fog-low.png",
    alt: "fog",
    src: "../static/fog-low.png",
    className: "jsx-1187757520"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird-container bird-container--one"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird bird--one"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird-container bird-container--two"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird bird--two"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird-container bird-container--three"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird bird--three"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird-container bird-container--four"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1187757520" + " " + "bird bird--four"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1187757520"
  }, ".container.jsx-1187757520{background-image:url(../static/background.jpg);background-size:cover;background-repeat:no-repeat;-webkit-flex:100%;-ms-flex:100%;flex:100%;min-height:100vh;background-position:center;position:absolute;top:0;left:0;width:100%;padding-bottom:5rem;padding-top:15rem;overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media only screen and (max-width:120em){.container.jsx-1187757520{background-image:url(../static/background-large.jpg);}}@media only screen and (max-width:75em){.container.jsx-1187757520{background-image:url(../static/background-medium.jpg);}}@media only screen and (max-width:43.75em){.container.jsx-1187757520{background-image:url(../static/background-small.jpg);}}.filter.jsx-1187757520{-webkit-transition:all 0.15s linear;transition:all 0.15s linear;}.filter.jsx-1187757520::after{background-color:rgba(0,0,0,0.5);content:\"\";display:block;height:100%;left:0;top:0;position:absolute;width:100%;z-index:1;}.moving-clouds.jsx-1187757520{background-image:url(../static/clouds.png);position:absolute;z-index:1;bottom:0;left:0;width:300%;height:100%;-webkit-animation:clouds-jsx-1187757520 80s linear infinite;animation:clouds-jsx-1187757520 80s linear infinite;}@media only screen and (max-width:56.52em){.moving-clouds.jsx-1187757520{background-image:url(../static/clouds-small.png);}}.container__fog.jsx-1187757520{position:absolute;left:50%;top:45%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);opacity:0.85;z-index:1;}@-webkit-keyframes clouds-jsx-1187757520{0%{-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}100%{-webkit-transform:translate3d(-50%,0,0);-ms-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);}}@keyframes clouds-jsx-1187757520{0%{-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}100%{-webkit-transform:translate3d(-50%,0,0);-ms-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);}}.bird.jsx-1187757520{background-image:url(../static/bird-cells.svg);background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle-jsx-1187757520;animation-name:fly-cycle-jsx-1187757520;-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-1187757520{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-1187757520{-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird--three.jsx-1187757520{-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-delay:-0.25s;animation-delay:-0.25s;}.bird--four.jsx-1187757520{-webkit-animation-duration:1.1s;animation-duration:1.1s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird-container.jsx-1187757520{position:absolute;top:20%;left:-10%;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);will-change:transform;-webkit-animation-name:fly-right-one-jsx-1187757520;animation-name:fly-right-one-jsx-1187757520;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;}.bird-container--one.jsx-1187757520{-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-1187757520{-webkit-animation-duration:16s;animation-duration:16s;-webkit-animation-delay:1s;animation-delay:1s;}.bird-container--three.jsx-1187757520{-webkit-animation-duration:14.6s;animation-duration:14.6s;-webkit-animation-delay:9.5s;animation-delay:9.5s;}.bird-container--four.jsx-1187757520{-webkit-animation-duration:16s;animation-duration:16s;-webkit-animation-delay:10.25s;animation-delay:10.25s;}@-webkit-keyframes fly-cycle-jsx-1187757520{100%{background-position:-900px 0;}}@keyframes fly-cycle-jsx-1187757520{100%{background-position:-900px 0;}}@-webkit-keyframes fly-right-one-jsx-1187757520{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-1187757520{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two-jsx-1187757520{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}51%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-1187757520{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}51%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhZGltL0RvY3VtZW50cy9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUcwRCxBQW9CUSxBQUtDLEFBS0QsQUFJM0IsQUFHUSxBQVdPLEFBV1EsQUFJakMsQUFVUSxBQUdVLEFBSVcsQUFXekIsQUFLRSxBQUtDLEFBS0QsQUFLTixBQWFLLEFBS0EsQUFLRSxBQUtGLEFBTVEsQUFNVSxBQUllLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQyxBQUlBLEFBTUMsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBSUMsQUFJQSxrQkFySmpELEFBZ0RELFFBQ0UsQ0FoREYsRUFpRlIsSUE1R1csRUE2QmdCLENBK0NVLE9BakVuQixDQVZKLEdBdENRLEFBZ0ZJLEVBckIxQixHQWdDc0IsQ0F2RXRCLEFBVUEsQ0FMQSxBQW1Ha0IsQUFLQyxBQVVJLEVBM0NBLEFBVUQsRUFuRVYsQUE4RFcsQUFpQ0YsR0FyRlgsR0FmWixLQWpDOEIsQ0F1Q3JCLENBVUUsRUErQkUsSUF4Q0wsR0FVQyxHQVRXLENBK0JsQixBQVNhLEdBOUJGLFVBbERELEFBaUZzQixDQTlCcEIsQUF3RWQsRUFLQSxDQXZGYSxHQWlEYixJQWhCRSxBQStCRixBQTRCQSxBQUtBLEVBdEZ1QyxBQTJDdkMsRUFyRFksQUEwRFosVUF6REEsTUFzQmUsQ0FpQlksQUFtRXpCLFVBcEppQixFQWlFUCxVQUNaLEtBakU2QixHQThHTCxlQXlDdEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQWtCQSxHQWRBLEFBSUEsQUFjQSxBQUlBLEFBUUEsR0FwQkEsQUF3QkEsQUFJQSxDQWpHNkIsRUEvR1gsQUFvTWxCLGtCQW5NTSxNQUNDLE9BQ0ksR0E2RXlCLEtBOUJ0QyxHQTlDc0Isb0JBQ0Ysa0JBQ0YsY0EwR2lCLEVBekdmLGtCQUNMLEFBeUVzQixzREFnQ1Asb0JBeEdULElBeUVyQix3Q0FpQ0EsaURBekd5QixtR0FDekIiLCJmaWxlIjoiL2hvbWUvdmFkaW0vRG9jdW1lbnRzL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHsgbGFiZWw6IFwiaG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgIHsgbGFiZWw6IFwiYWJvdXRcIiwgbGluazogXCIvYWJvdXRcIiB9LFxuICAgIHsgbGFiZWw6IFwicHJvamVjdHNcIiwgbGluazogXCIvcHJvamVjdHNcIiB9LFxuICAgIHsgbGFiZWw6IFwiY29udGFjdFwiLCBsaW5rOiBcIi9jb250YWN0XCIgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWRlciBsaW5rcz17bGlua3N9IC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmluZy1jbG91ZHNcIiAvPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9fZm9nXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZm9nLWxvdy5wbmdcIiBhbHQ9XCJmb2dcIiAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT1cImNvbnRhaW5lcl9fZm9nXCI+XG4gICAgICAgICAgPHNvdXJjZSBzcmNTZXQ9XCIuLi9zdGF0aWMvZm9nLWxvdy1zbWFsbC5wbmdcIiBtZWRpYT1cIihtYXgtd2lkdGg6IDQzLjc1ZW0pXCIgLz5cbiAgICAgICAgICA8c291cmNlIHNyY1NldD1cIi4uL3N0YXRpYy9mb2ctbG93LnBuZ1wiIG1lZGlhPVwiKG1pbi13aWR0aDogNDMuNzVlbSlcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjU2V0PVwiLi4vc3RhdGljL2ZvZy1sb3cucG5nXCIgYWx0PVwiZm9nXCIgc3JjPVwiLi4vc3RhdGljL2ZvZy1sb3cucG5nXCIgLz5cbiAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQtY29udGFpbmVyIGJpcmQtY29udGFpbmVyLS1vbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgYmlyZC0tb25lXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tdHdvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkIGJpcmQtLXR3b1wiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLXRocmVlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkIGJpcmQtLXRocmVlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tZm91clwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCBiaXJkLS1mb3VyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvYmFja2dyb3VuZC5qcGcpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBmbGV4OiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cmVtO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMGVtKSB7XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2JhY2tncm91bmQtbGFyZ2UuanBnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2JhY2tncm91bmQtbWVkaXVtLmpwZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9iYWNrZ3JvdW5kLXNtYWxsLmpwZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlcjo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAubW92aW5nLWNsb3VkcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9jbG91ZHMucG5nKTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMzAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBjbG91ZHMgODBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjUyZW0pIHtcbiAgICAgICAgICAubW92aW5nLWNsb3VkcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2Nsb3Vkcy1zbWFsbC5wbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyX19mb2cge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdG9wOiA0NSU7XG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIGNsb3VkcyB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iaXJkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2JpcmQtY2VsbHMuc3ZnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbiAgICAgICAgICB3aWR0aDogODhweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLXBvc2l0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbHktY3ljbGU7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMTApO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtLW9uZSB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtLXR3byB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtLXRocmVlIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtLWZvdXIge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyMCU7XG4gICAgICAgICAgbGVmdDogLTEwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LXJpZ2h0LW9uZTtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgICAgICAvLyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLWNvbnRhaW5lci0tb25lIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuYmlyZC1jb250YWluZXItLXR3byB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLWNvbnRhaW5lci0tdGhyZWUge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTQuNnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA5LjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS1mb3VyIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE2cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEwLjI1cztcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05MDBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LXJpZ2h0LW9uZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVgoLTEwdncpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDEwdncpIHNjYWxlKDAuNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA2MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBmbHktcmlnaHQtdHdvIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCkgdHJhbnNsYXRlWCgtMTB2dykgc2NhbGUoMC41KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTR2aCkgdHJhbnNsYXRlWCgzMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDMwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXZoKSB0cmFuc2xhdGVYKDUwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKSB0cmFuc2xhdGVYKDcwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoOTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNTElIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCkgdHJhbnNsYXRlWCgxMTB2dykgc2NhbGUoMC40NSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/home/vadim/Documents/portfolio/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=contact.js.bbd1284886237f1bf837.hot-update.js.map