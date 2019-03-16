import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import { colors, themed, withTheme } from '@atlaskit/theme';

var Svg = function Svg(props) {
  return React.createElement("svg", _extends({
    height: "100%",
    version: "1.1",
    viewBox: "0 0 8 8",
    width: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, props));
};

var ApprovedCircle = withTheme(styled.circle.withConfig({
  displayName: "getStatusSVG__ApprovedCircle",
  componentId: "kqelaq-0"
})(["\n  fill: ", ";\n"], themed({
  light: colors.G400,
  dark: colors.G300
})));
var ApprovedPath = withTheme(styled.path.withConfig({
  displayName: "getStatusSVG__ApprovedPath",
  componentId: "kqelaq-1"
})(["\n  fill: ", ";\n"], colors.background));
var DeclinedCircle = withTheme(styled.circle.withConfig({
  displayName: "getStatusSVG__DeclinedCircle",
  componentId: "kqelaq-2"
})(["\n  fill: ", ";\n"], themed({
  light: colors.R400,
  dark: colors.R300
})));
var DeclinedPath = withTheme(styled.path.withConfig({
  displayName: "getStatusSVG__DeclinedPath",
  componentId: "kqelaq-3"
})(["\n  fill: ", ";\n"], colors.background));
var LockedCircle = withTheme(styled.circle.withConfig({
  displayName: "getStatusSVG__LockedCircle",
  componentId: "kqelaq-4"
})(["\n  fill: ", ";\n"], themed({
  light: colors.N40,
  dark: colors.DN800
})));
var LockedPath = withTheme(styled.path.withConfig({
  displayName: "getStatusSVG__LockedPath",
  componentId: "kqelaq-5"
})(["\n  fill: ", ";\n"], themed({
  light: colors.N500,
  dark: colors.DN30
})));
export default function getStatusSvg(status) {
  switch (status) {
    case 'approved':
      return React.createElement(Svg, null, React.createElement(ApprovedCircle, {
        cx: "4",
        cy: "4",
        r: "4"
      }), React.createElement(ApprovedPath, {
        d: "M2.47140452,3.52859548 C2.21105499,3.26824595 1.78894501,3.26824595 1.52859548,3.52859548 C1.26824595,3.78894501 1.26824595,4.21105499 1.52859548,4.47140452 L2.86192881,5.80473785 C3.12227834,6.06508738 3.54438833,6.06508738 3.80473785,5.80473785 L6.47140452,3.13807119 C6.73175405,2.87772166 6.73175405,2.45561167 6.47140452,2.19526215 C6.21105499,1.93491262 5.78894501,1.93491262 5.52859548,2.19526215 L3.33333333,4.39052429 L2.47140452,3.52859548 Z"
      }));

    case 'declined':
      return React.createElement(Svg, null, React.createElement(DeclinedCircle, {
        cx: "4",
        cy: "4",
        r: "4"
      }), React.createElement(DeclinedPath, {
        d: "M4.890661,4.0088336 L5.81806461,3.07802178 C6.06167933,2.83351177 6.06048933,2.43826992 5.81540668,2.19522442 C5.57032402,1.95217891 5.17415651,1.95336612 4.93054179,2.19787613 L4.00765946,3.12415007 L3.06906871,2.18377143 C2.82523777,1.93947602 2.42906937,1.93863765 2.18420182,2.18189887 C1.93933427,2.42516008 1.93849394,2.82040282 2.18232488,3.06469822 L3.12544091,4.00961077 L2.20275024,4.93569234 C1.95913552,5.18020236 1.96032551,5.5754442 2.20540817,5.81848971 C2.45049083,6.06153521 2.84665833,6.060348 3.09027306,5.81583799 L4.00844245,4.89429431 L4.9092123,5.79678001 C5.15304324,6.04107541 5.54921164,6.04191379 5.79407919,5.79865257 C6.03894674,5.55539135 6.03978708,5.16014862 5.79595614,4.91585321 L4.890661,4.0088336 Z"
      }));

    case 'locked':
      return React.createElement(Svg, null, React.createElement(LockedCircle, {
        cx: "4",
        cy: "4",
        r: "4"
      }), React.createElement(LockedPath, {
        d: "M4.13074827,1.21766493 L4.10368158,1.21766493 C3.36340745,1.21766493 2.76388015,1.80793503 2.76388015,2.5367787 L2.76388015,3.21632216 L3.44054754,3.21632216 L3.44054754,2.54344089 C3.44054754,2.17901906 3.74031119,1.88388401 4.11044825,1.88388401 L4.1239816,1.88388401 C4.49411866,1.88388401 4.79388232,2.17901906 4.79388232,2.54344089 L4.79388232,3.21632216 L5.47054971,3.21632216 L5.47054971,2.5367787 C5.47054971,1.80793503 4.8710224,1.21766493 4.13074827,1.21766493 M2.76388015,3.21632216 L3.44054754,3.21632216 L3.44054754,3.88254123 L2.76388015,3.88254123 L2.76388015,3.21632216 Z M4.79388232,3.21632216 L5.47054971,3.21632216 L5.47054971,3.88254123 L4.79388232,3.88254123 L4.79388232,3.21632216 Z M4.79401765,3.88254123 L3.44068287,3.88254123 L2.76401548,3.88254123 C2.39049508,3.88254123 2.08734809,4.18100738 2.08734809,4.54876031 L2.08734809,5.54808892 C2.08734809,6.10000287 2.53735205,6.54741753 3.09094491,6.54741753 L5.14375561,6.54741753 C5.69802683,6.54741753 6.14735243,6.10385072 6.14735243,5.54808892 L6.14735243,4.54876031 C6.14735243,4.18100738 5.84420544,3.88254123 5.47068504,3.88254123 L4.79401765,3.88254123 Z"
      }));

    default:
      return null;
  }
}