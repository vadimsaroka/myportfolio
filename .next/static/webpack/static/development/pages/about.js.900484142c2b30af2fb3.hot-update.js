webpackHotUpdate("static/development/pages/about.js",{

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
    srcset: "../static/fog-low-small.png",
    media: "(max-width: 43.75em)",
    className: "jsx-1187757520"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/fog-low.png",
    alt: "fog",
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
  }, ".container.jsx-1187757520{background-image:url(../static/background.jpg);background-size:cover;background-repeat:no-repeat;-webkit-flex:100%;-ms-flex:100%;flex:100%;min-height:100vh;background-position:center;position:absolute;top:0;left:0;width:100%;padding-bottom:5rem;padding-top:15rem;overflow:hidden;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media only screen and (max-width:120em){.container.jsx-1187757520{background-image:url(../static/background-large.jpg);}}@media only screen and (max-width:75em){.container.jsx-1187757520{background-image:url(../static/background-medium.jpg);}}@media only screen and (max-width:43.75em){.container.jsx-1187757520{background-image:url(../static/background-small.jpg);}}.filter.jsx-1187757520{-webkit-transition:all 0.15s linear;transition:all 0.15s linear;}.filter.jsx-1187757520::after{background-color:rgba(0,0,0,0.5);content:\"\";display:block;height:100%;left:0;top:0;position:absolute;width:100%;z-index:1;}.moving-clouds.jsx-1187757520{background-image:url(../static/clouds.png);position:absolute;z-index:1;bottom:0;left:0;width:300%;height:100%;-webkit-animation:clouds-jsx-1187757520 80s linear infinite;animation:clouds-jsx-1187757520 80s linear infinite;}@media only screen and (max-width:56.52em){.moving-clouds.jsx-1187757520{background-image:url(../static/clouds-small.png);}}.container__fog.jsx-1187757520{position:absolute;left:50%;top:45%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);opacity:0.85;z-index:1;}@-webkit-keyframes clouds-jsx-1187757520{0%{-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}100%{-webkit-transform:translate3d(-50%,0,0);-ms-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);}}@keyframes clouds-jsx-1187757520{0%{-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);}100%{-webkit-transform:translate3d(-50%,0,0);-ms-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);}}.bird.jsx-1187757520{background-image:url(../static/bird-cells.svg);background-size:auto 100%;width:88px;height:125px;will-change:background-position;-webkit-animation-name:fly-cycle-jsx-1187757520;animation-name:fly-cycle-jsx-1187757520;-webkit-animation-timing-function:steps(10);animation-timing-function:steps(10);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.bird--one.jsx-1187757520{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird--two.jsx-1187757520{-webkit-animation-duration:0.9s;animation-duration:0.9s;-webkit-animation-delay:-0.75s;animation-delay:-0.75s;}.bird--three.jsx-1187757520{-webkit-animation-duration:1.25s;animation-duration:1.25s;-webkit-animation-delay:-0.25s;animation-delay:-0.25s;}.bird--four.jsx-1187757520{-webkit-animation-duration:1.1s;animation-duration:1.1s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.bird-container.jsx-1187757520{position:absolute;top:20%;left:-10%;-webkit-transform:scale(0) translateX(-10vw);-ms-transform:scale(0) translateX(-10vw);transform:scale(0) translateX(-10vw);will-change:transform;-webkit-animation-name:fly-right-one-jsx-1187757520;animation-name:fly-right-one-jsx-1187757520;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;}.bird-container--one.jsx-1187757520{-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:0;animation-delay:0;}.bird-container--two.jsx-1187757520{-webkit-animation-duration:16s;animation-duration:16s;-webkit-animation-delay:1s;animation-delay:1s;}.bird-container--three.jsx-1187757520{-webkit-animation-duration:14.6s;animation-duration:14.6s;-webkit-animation-delay:9.5s;animation-delay:9.5s;}.bird-container--four.jsx-1187757520{-webkit-animation-duration:16s;animation-duration:16s;-webkit-animation-delay:10.25s;animation-delay:10.25s;}@-webkit-keyframes fly-cycle-jsx-1187757520{100%{background-position:-900px 0;}}@keyframes fly-cycle-jsx-1187757520{100%{background-position:-900px 0;}}@-webkit-keyframes fly-right-one-jsx-1187757520{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@keyframes fly-right-one-jsx-1187757520{0%{-webkit-transform:scale(0.3) translateX(-10vw);-ms-transform:scale(0.3) translateX(-10vw);transform:scale(0.3) translateX(-10vw);}10%{-webkit-transform:translateY(2vh) translateX(10vw) scale(0.4);-ms-transform:translateY(2vh) translateX(10vw) scale(0.4);transform:translateY(2vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(0vh) translateX(30vw) scale(0.5);-ms-transform:translateY(0vh) translateX(30vw) scale(0.5);transform:translateY(0vh) translateX(30vw) scale(0.5);}30%{-webkit-transform:translateY(4vh) translateX(50vw) scale(0.6);-ms-transform:translateY(4vh) translateX(50vw) scale(0.6);transform:translateY(4vh) translateX(50vw) scale(0.6);}40%{-webkit-transform:translateY(2vh) translateX(70vw) scale(0.6);-ms-transform:translateY(2vh) translateX(70vw) scale(0.6);transform:translateY(2vh) translateX(70vw) scale(0.6);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.6);-ms-transform:translateY(0vh) translateX(90vw) scale(0.6);transform:translateY(0vh) translateX(90vw) scale(0.6);}60%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.6);-ms-transform:translateY(0vh) translateX(110vw) scale(0.6);transform:translateY(0vh) translateX(110vw) scale(0.6);}}@-webkit-keyframes fly-right-two-jsx-1187757520{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}51%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}@keyframes fly-right-two-jsx-1187757520{0%{-webkit-transform:translateY(-2vh) translateX(-10vw) scale(0.5);-ms-transform:translateY(-2vh) translateX(-10vw) scale(0.5);transform:translateY(-2vh) translateX(-10vw) scale(0.5);}10%{-webkit-transform:translateY(0vh) translateX(10vw) scale(0.4);-ms-transform:translateY(0vh) translateX(10vw) scale(0.4);transform:translateY(0vh) translateX(10vw) scale(0.4);}20%{-webkit-transform:translateY(-4vh) translateX(30vw) scale(0.6);-ms-transform:translateY(-4vh) translateX(30vw) scale(0.6);transform:translateY(-4vh) translateX(30vw) scale(0.6);}30%{-webkit-transform:translateY(1vh) translateX(50vw) scale(0.45);-ms-transform:translateY(1vh) translateX(50vw) scale(0.45);transform:translateY(1vh) translateX(50vw) scale(0.45);}40%{-webkit-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);-ms-transform:translateY(-2.5vh) translateX(70vw) scale(0.5);transform:translateY(-2.5vh) translateX(70vw) scale(0.5);}50%{-webkit-transform:translateY(0vh) translateX(90vw) scale(0.45);-ms-transform:translateY(0vh) translateX(90vw) scale(0.45);transform:translateY(0vh) translateX(90vw) scale(0.45);}51%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}100%{-webkit-transform:translateY(0vh) translateX(110vw) scale(0.45);-ms-transform:translateY(0vh) translateX(110vw) scale(0.45);transform:translateY(0vh) translateX(110vw) scale(0.45);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhZGltL0RvY3VtZW50cy9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUcwRCxBQW9CUSxBQUtDLEFBS0QsQUFJM0IsQUFHUSxBQVdPLEFBV1EsQUFJakMsQUFVUSxBQUdVLEFBSVcsQUFXekIsQUFLRSxBQUtDLEFBS0QsQUFLTixBQWFLLEFBS0EsQUFLRSxBQUtGLEFBTVEsQUFNVSxBQUllLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQyxBQUlBLEFBTUMsQUFJRixBQUlDLEFBSUEsQUFJRSxBQUlGLEFBSUMsQUFJQSxrQkFySmpELEFBZ0RELFFBQ0UsQ0FoREYsRUFpRlIsSUE1R1csRUE2QmdCLENBK0NVLE9BakVuQixDQVZKLEdBdENRLEFBZ0ZJLEVBckIxQixHQWdDc0IsQ0F2RXRCLEFBVUEsQ0FMQSxBQW1Ha0IsQUFLQyxBQVVJLEVBM0NBLEFBVUQsRUFuRVYsQUE4RFcsQUFpQ0YsR0FyRlgsR0FmWixLQWpDOEIsQ0F1Q3JCLENBVUUsRUErQkUsSUF4Q0wsR0FVQyxHQVRXLENBK0JsQixBQVNhLEdBOUJGLFVBbERELEFBaUZzQixDQTlCcEIsQUF3RWQsRUFLQSxDQXZGYSxHQWlEYixJQWhCRSxBQStCRixBQTRCQSxBQUtBLEVBdEZ1QyxBQTJDdkMsRUFyRFksQUEwRFosVUF6REEsTUFzQmUsQ0FpQlksQUFtRXpCLFVBcEppQixFQWlFUCxVQUNaLEtBakU2QixHQThHTCxlQXlDdEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQWtCQSxHQWRBLEFBSUEsQUFjQSxBQUlBLEFBUUEsR0FwQkEsQUF3QkEsQUFJQSxDQWpHNkIsRUEvR1gsQUFvTWxCLGtCQW5NTSxNQUNDLE9BQ0ksR0E2RXlCLEtBOUJ0QyxHQTlDc0Isb0JBQ0Ysa0JBQ0YsY0EwR2lCLEVBekdmLGtCQUNMLEFBeUVzQixzREFnQ1Asb0JBeEdULElBeUVyQix3Q0FpQ0EsaURBekd5QixtR0FDekIiLCJmaWxlIjoiL2hvbWUvdmFkaW0vRG9jdW1lbnRzL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHsgbGFiZWw6IFwiaG9tZVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgIHsgbGFiZWw6IFwiYWJvdXRcIiwgbGluazogXCIvYWJvdXRcIiB9LFxuICAgIHsgbGFiZWw6IFwicHJvamVjdHNcIiwgbGluazogXCIvcHJvamVjdHNcIiB9LFxuICAgIHsgbGFiZWw6IFwiY29udGFjdFwiLCBsaW5rOiBcIi9jb250YWN0XCIgfVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWRlciBsaW5rcz17bGlua3N9IC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmluZy1jbG91ZHNcIiAvPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9fZm9nXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvZm9nLWxvdy5wbmdcIiBhbHQ9XCJmb2dcIiAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxwaWN0dXJlIGNsYXNzTmFtZT1cImNvbnRhaW5lcl9fZm9nXCI+XG4gICAgICAgICAgPHNvdXJjZSBzcmNzZXQ9XCIuLi9zdGF0aWMvZm9nLWxvdy1zbWFsbC5wbmdcIiBtZWRpYT1cIihtYXgtd2lkdGg6IDQzLjc1ZW0pXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9mb2ctbG93LnBuZ1wiIGFsdD1cImZvZ1wiIC8+XG4gICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkLWNvbnRhaW5lciBiaXJkLWNvbnRhaW5lci0tb25lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaXJkIGJpcmQtLW9uZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLXR3b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCBiaXJkLS10d29cIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQtY29udGFpbmVyIGJpcmQtY29udGFpbmVyLS10aHJlZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZCBiaXJkLS10aHJlZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlyZC1jb250YWluZXIgYmlyZC1jb250YWluZXItLWZvdXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpcmQgYmlyZC0tZm91clwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2JhY2tncm91bmQuanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgZmxleDogMTAwJTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXJlbTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjBlbSkge1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9iYWNrZ3JvdW5kLWxhcmdlLmpwZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9iYWNrZ3JvdW5kLW1lZGl1bS5qcGcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvYmFja2dyb3VuZC1zbWFsbC5qcGcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmlsdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXI6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLm1vdmluZy1jbG91ZHMge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvY2xvdWRzLnBuZyk7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDMwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGFuaW1hdGlvbjogY2xvdWRzIDgwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni41MmVtKSB7XG4gICAgICAgICAgLm1vdmluZy1jbG91ZHMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9jbG91ZHMtc21hbGwucG5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcl9fZm9nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNDUlO1xuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBjbG91ZHMge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmlyZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3N0YXRpYy9iaXJkLWNlbGxzLnN2Zyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmx5LWN5Y2xlO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHN0ZXBzKDEwKTtcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLS1vbmUge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLS10d28ge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjc1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLS10aHJlZSB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjI1cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLS1mb3VyIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMjAlO1xuICAgICAgICAgIGxlZnQ6IC0xMCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZseS1yaWdodC1vbmU7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgICAgLy8gYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYmlyZC1jb250YWluZXItLW9uZSB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJpcmQtY29udGFpbmVyLS10d28ge1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTZzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgICAgIH1cblxuICAgICAgICAuYmlyZC1jb250YWluZXItLXRocmVlIHtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE0LjZzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogOS41cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iaXJkLWNvbnRhaW5lci0tZm91ciB7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMC4yNXM7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1jeWNsZSB7XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTAwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZseS1yaWdodC1vbmUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVYKC0xMHZ3KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCgxMHZ3KSBzY2FsZSgwLjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDMwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0dmgpIHRyYW5zbGF0ZVgoNTB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJ2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgNjAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmx5LXJpZ2h0LXR3byB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ydmgpIHRyYW5zbGF0ZVgoLTEwdncpIHNjYWxlKDAuNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTB2dykgc2NhbGUoMC40KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAyMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00dmgpIHRyYW5zbGF0ZVgoMzB2dykgc2NhbGUoMC42KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAzMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDF2aCkgdHJhbnNsYXRlWCg1MHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yLjV2aCkgdHJhbnNsYXRlWCg3MHZ3KSBzY2FsZSgwLjUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDkwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDUxJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKSB0cmFuc2xhdGVYKDExMHZ3KSBzY2FsZSgwLjQ1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwdmgpIHRyYW5zbGF0ZVgoMTEwdncpIHNjYWxlKDAuNDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/home/vadim/Documents/portfolio/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=about.js.900484142c2b30af2fb3.hot-update.js.map