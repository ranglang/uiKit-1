import { createTag, serializeStyle, withTable } from '../util';
import { codeFontFamily } from '@atlaskit/theme';
var codeTagCss = serializeStyle({
    color: 'rgb(23, 43, 77)',
    display: 'block',
    'font-size': '12px',
    'line-height': '20px',
    'white-space': 'pre',
    'font-family': codeFontFamily(),
});
var preTagCss = serializeStyle({
    background: 'rgb(244, 245, 247)',
    'border-radius': '3px',
    '-webkit-border-radius': '3px',
    '-moz-border-radius': '3px',
    margin: '0px',
});
export default function codeBlock(_a) {
    var attrs = _a.attrs, text = _a.text;
    var codeTag = createTag('code', { style: codeTagCss }, text);
    var codeTagWithTable = withTable(codeTag, {
        padding: '8px 16px',
        'background-color': 'rgb(244, 245, 247)',
        'border-radius': '3px',
        '-webkit-border-radius': '3px',
        '-moz-border-radius': '3px',
        'font-size': '12px',
        'line-height': '20px',
        color: 'rgb(23, 43, 77)',
    });
    return createTag('pre', { style: preTagCss }, codeTagWithTable);
}
//# sourceMappingURL=code-block.js.map