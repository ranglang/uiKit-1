/**
 * In Jira, following characters are escaped
 * private static final Pattern ESCAPING_PATTERN = Pattern.compile("(^|(?<!\\\\))\\\\([\\-\\#\\*\\_\\+\\?\\^\\~\\|\\%\\{\\}\\[\\]\\(\\)\\!\\@])");
 * https://stash.atlassian.com/projects/JIRACLOUD/repos/jira/browse/jira-components/jira-renderer/src/main/java/com/atlassian/renderer/v2/components/BackslashEscapeRendererComponent.java
 */
var escapedChar = [
    '-',
    '#',
    '*',
    '_',
    '+',
    '?',
    '^',
    '~',
    '|',
    '%',
    '{',
    '}',
    '[',
    ']',
    '(',
    ')',
    '!',
    '@',
];
export function escapeHandler(input, position) {
    var buffer = '';
    var char = input.charAt(position);
    var prevChar = input.charAt(position - 1);
    var nextChar = input.charAt(position + 1);
    /**
     * Ported from Jira:
     * If previous char is also a backslash, then this is not a valid escape
     */
    if (escapedChar.indexOf(nextChar) === -1 || prevChar === '\\') {
        // Insert \ in buffer mode
        buffer += char;
    }
    buffer += nextChar;
    return {
        type: 'text',
        text: buffer,
        length: 2,
    };
}
//# sourceMappingURL=escape.js.map