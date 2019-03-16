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
var svg = "<canvas height=\"32\" width=\"129\" aria-hidden=\"true\"></canvas>\n<svg viewBox=\"0 0 129 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n  <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\" fill=\"inherit\">\n    <path d=\"M12.168,19.294 C12.168,16.226 10.14,15.056 6.526,14.146 C3.51,13.392 2.418,12.69 2.418,11.286 C2.418,9.726 3.744,8.946 5.98,8.946 C7.748,8.946 9.594,9.258 11.31,10.246 L11.31,7.906 C10.14,7.256 8.554,6.658 6.084,6.658 C2.106,6.658 0.078,8.634 0.078,11.286 C0.078,14.094 1.794,15.42 5.642,16.356 C8.892,17.136 9.828,17.942 9.828,19.45 C9.828,20.958 8.866,21.972 6.292,21.972 C4.03,21.972 1.586,21.374 1.55431223e-14,20.542 L1.55431223e-14,22.934 C1.326,23.61 2.86,24.26 6.162,24.26 C10.4,24.26 12.168,22.258 12.168,19.294 Z M18.018,19.892 L18.018,13.08 L21.476,13.08 L21.476,11 L18.018,11 L18.018,8.244 L15.834,8.244 L15.834,11 L13.728,11 L13.728,13.08 L15.834,13.08 L15.834,19.944 C15.834,22.362 17.186,24 19.968,24 C20.644,24 21.086,23.896 21.476,23.792 L21.476,21.634 C21.086,21.712 20.592,21.816 20.072,21.816 C18.694,21.816 18.018,21.036 18.018,19.892 Z M33.15,24 L33.15,21.66 C32.318,23.376 30.758,24.26 28.756,24.26 C25.298,24.26 23.556,21.322 23.556,17.5 C23.556,13.834 25.376,10.74 29.016,10.74 C30.914,10.74 32.37,11.598 33.15,13.288 L33.15,11 L35.386,11 L35.386,24 L33.15,24 Z M25.792,17.5 C25.792,20.62 27.04,22.18 29.354,22.18 C31.356,22.18 33.15,20.906 33.15,18.02 L33.15,16.98 C33.15,14.094 31.512,12.82 29.614,12.82 C27.092,12.82 25.792,14.484 25.792,17.5 Z M41.86,19.892 L41.86,13.08 L45.318,13.08 L45.318,11 L41.86,11 L41.86,8.244 L39.676,8.244 L39.676,11 L37.57,11 L37.57,13.08 L39.676,13.08 L39.676,19.944 C39.676,22.362 41.028,24 43.81,24 C44.486,24 44.928,23.896 45.318,23.792 L45.318,21.634 C44.928,21.712 44.434,21.816 43.914,21.816 C42.536,21.816 41.86,21.036 41.86,19.892 Z M47.918,18.618 C47.918,22.206 49.634,24.26 52.624,24.26 C54.366,24.26 55.9,23.402 56.732,21.868 L56.732,24 L58.968,24 L58.968,11 L56.732,11 L56.732,18.228 C56.732,20.854 55.302,22.232 53.222,22.232 C51.09,22.232 50.154,21.192 50.154,18.852 L50.154,11 L47.918,11 L47.918,18.618 Z M71.318,20.464 C71.318,18.202 69.862,17.136 66.976,16.434 C64.584,15.862 63.96,15.29 63.96,14.38 C63.96,13.366 64.844,12.794 66.482,12.794 C67.86,12.794 69.134,13.21 70.694,13.99 L70.694,11.676 C69.732,11.156 68.198,10.74 66.508,10.74 C63.544,10.74 61.802,12.118 61.802,14.38 C61.802,16.512 63.024,17.63 65.91,18.332 C68.38,18.93 69.134,19.502 69.134,20.49 C69.134,21.504 68.25,22.206 66.534,22.206 C64.896,22.206 63.024,21.582 61.906,20.932 L61.906,23.298 C62.894,23.818 64.48,24.26 66.43,24.26 C69.914,24.26 71.318,22.622 71.318,20.464 Z M80.262,24.26 C78.364,24.26 76.908,23.402 76.128,21.712 L76.128,29.07 L73.892,29.07 L73.892,11 L76.128,11 L76.128,13.34 C76.96,11.624 78.52,10.74 80.522,10.74 C83.98,10.74 85.722,13.678 85.722,17.5 C85.722,21.166 83.902,24.26 80.262,24.26 Z M83.486,17.5 C83.486,14.38 82.238,12.82 79.924,12.82 C77.922,12.82 76.128,14.094 76.128,16.98 L76.128,18.02 C76.128,20.906 77.766,22.18 79.664,22.18 C82.186,22.18 83.486,20.516 83.486,17.5 Z M97.136,24 L97.136,21.66 C96.304,23.376 94.744,24.26 92.742,24.26 C89.284,24.26 87.542,21.322 87.542,17.5 C87.542,13.834 89.362,10.74 93.002,10.74 C94.9,10.74 96.356,11.598 97.136,13.288 L97.136,11 L99.372,11 L99.372,24 L97.136,24 Z M89.778,17.5 C89.778,20.62 91.026,22.18 93.34,22.18 C95.342,22.18 97.136,20.906 97.136,18.02 L97.136,16.98 C97.136,14.094 95.498,12.82 93.6,12.82 C91.078,12.82 89.778,14.484 89.778,17.5 Z M111.514,22.96 L111.514,21.66 C110.682,23.376 109.122,24.26 107.12,24.26 C103.688,24.26 101.972,21.322 101.972,17.5 C101.972,13.834 103.766,10.74 107.38,10.74 C109.278,10.74 110.734,11.598 111.514,13.288 L111.514,11 L113.698,11 L113.698,22.83 C113.698,26.652 111.904,29.226 107.25,29.226 C105.066,29.226 103.87,28.94 102.622,28.524 L102.622,26.34 C104.052,26.808 105.534,27.12 107.146,27.12 C110.396,27.12 111.514,25.378 111.514,22.96 Z M104.156,17.5 C104.156,20.62 105.404,22.18 107.718,22.18 C109.72,22.18 111.514,20.906 111.514,18.02 L111.514,16.98 C111.514,14.094 109.876,12.82 107.978,12.82 C105.456,12.82 104.156,14.484 104.156,17.5 Z M127.322,23.48 C126.256,24.052 124.618,24.26 123.292,24.26 C118.43,24.26 116.298,21.452 116.298,17.474 C116.298,13.548 118.482,10.74 122.434,10.74 C126.438,10.74 128.05,13.522 128.05,17.474 L128.05,18.488 L118.56,18.488 C118.872,20.698 120.302,22.128 123.37,22.128 C124.878,22.128 126.152,21.842 127.322,21.426 L127.322,23.48 Z M122.33,12.768 C119.964,12.768 118.768,14.302 118.534,16.564 L125.788,16.564 C125.658,14.146 124.566,12.768 122.33,12.768 Z\"></path>\n  </g>\n</svg>";

var StatuspageWordmark =
/*#__PURE__*/
function (_Component) {
  _inherits(StatuspageWordmark, _Component);

  function StatuspageWordmark() {
    _classCallCheck(this, StatuspageWordmark);

    return _possibleConstructorReturn(this, _getPrototypeOf(StatuspageWordmark).apply(this, arguments));
  }

  _createClass(StatuspageWordmark, [{
    key: "render",
    value: function render() {
      return React.createElement(Wrapper, _extends({}, this.props, {
        svg: svg
      }));
    }
  }]);

  return StatuspageWordmark;
}(Component);

_defineProperty(StatuspageWordmark, "defaultProps", DefaultProps);

export { StatuspageWordmark as default };