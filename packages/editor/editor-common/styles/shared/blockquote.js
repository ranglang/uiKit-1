import * as tslib_1 from "tslib";
// @ts-ignore: unused variable
import { css } from 'styled-components';
import { gridSize } from '@atlaskit/theme';
import { akEditorBlockquoteBorderColor, blockNodesVerticalMargin, } from '../consts';
export var blockquoteSharedStyles = css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  & blockquote {\n    box-sizing: border-box;\n    padding-left: ", "px;\n    border-left: 2px solid ", ";\n    margin: ", " 0 0 0;\n    margin-right: 0;\n\n    [dir='rtl'] & {\n      padding-left: 0;\n      padding-right: ", "px;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &::before {\n      content: '';\n    }\n\n    &::after {\n      content: none;\n    }\n\n    & p {\n      display: block;\n    }\n\n    & table,\n    & table:last-child {\n      display: inline-table;\n    }\n  }\n"], ["\n  & blockquote {\n    box-sizing: border-box;\n    padding-left: ", "px;\n    border-left: 2px solid ", ";\n    margin: ", " 0 0 0;\n    margin-right: 0;\n\n    [dir='rtl'] & {\n      padding-left: 0;\n      padding-right: ", "px;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &::before {\n      content: '';\n    }\n\n    &::after {\n      content: none;\n    }\n\n    & p {\n      display: block;\n    }\n\n    & table,\n    & table:last-child {\n      display: inline-table;\n    }\n  }\n"])), gridSize() * 2, akEditorBlockquoteBorderColor, blockNodesVerticalMargin, gridSize() * 2);
var templateObject_1;
//# sourceMappingURL=blockquote.js.map