import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

/* eslint-disable max-len */
import React, { Component } from 'react';
import { DefaultProps } from '../constants';
import Wrapper from '../Wrapper';
var svg = "<canvas height=\"32\" width=\"37\" aria-hidden=\"true\"></canvas>\n<svg viewBox=\"0 0 37 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n  <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\" fill=\"inherit\">\n    <path d=\"M5.07,18.956 C5.07,20.646 4.394,21.842 2.418,21.842 C1.56,21.842 0.702,21.686 -5.10702591e-15,21.4 L-5.10702591e-15,23.662 C0.65,23.896 1.586,24.104 2.808,24.104 C6.032,24.104 7.41,21.946 7.41,18.8 L7.41,6.918 L5.07,6.918 L5.07,18.956 Z M10.894,7.568 C10.894,8.556 11.544,9.128 12.454,9.128 C13.364,9.128 14.014,8.556 14.014,7.568 C14.014,6.58 13.364,6.008 12.454,6.008 C11.544,6.008 10.894,6.58 10.894,7.568 Z M11.31,24 L13.546,24 L13.546,11 L11.31,11 L11.31,24 Z M16.926,24 L19.11,24 L19.11,16.33 C19.11,13.574 20.852,12.716 23.712,13.002 L23.712,10.818 C21.164,10.662 19.864,11.754 19.11,13.288 L19.11,11 L16.926,11 L16.926,24 Z M34.45,24 L34.45,21.66 C33.618,23.376 32.058,24.26 30.056,24.26 C26.598,24.26 24.856,21.322 24.856,17.5 C24.856,13.834 26.676,10.74 30.316,10.74 C32.214,10.74 33.67,11.598 34.45,13.288 L34.45,11 L36.686,11 L36.686,24 L34.45,24 Z M27.092,17.5 C27.092,20.62 28.34,22.18 30.654,22.18 C32.656,22.18 34.45,20.906 34.45,18.02 L34.45,16.98 C34.45,14.094 32.812,12.82 30.914,12.82 C28.392,12.82 27.092,14.484 27.092,17.5 Z\"></path>\n  </g>\n</svg>";

var JiraWordmark =
/*#__PURE__*/
function (_Component) {
  _inherits(JiraWordmark, _Component);

  function JiraWordmark() {
    _classCallCheck(this, JiraWordmark);

    return _possibleConstructorReturn(this, _getPrototypeOf(JiraWordmark).apply(this, arguments));
  }

  _createClass(JiraWordmark, [{
    key: "render",
    value: function render() {
      return React.createElement(Wrapper, _extends({}, this.props, {
        svg: svg
      }));
    }
  }]);

  return JiraWordmark;
}(Component);

_defineProperty(JiraWordmark, "defaultProps", DefaultProps);

export { JiraWordmark as default };