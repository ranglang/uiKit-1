import * as colors from './colors';
import themed from './utils/themed'; // Cards on a board

export var e100 = themed({
  light: "box-shadow: 0 1px 1px ".concat(colors.N50A, ", 0 0 1px 0 ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 1px 1px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Inline dialogs

export var e200 = themed({
  light: "box-shadow: 0 4px 8px -2px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 4px 8px -2px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Modals

export var e300 = themed({
  light: "box-shadow: 0 8px 16px -4px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 8px 16px -4px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Panels

export var e400 = themed({
  light: "box-shadow: 0 12px 24px -6px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 12px 24px -6px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
}); // Flag messages (notifications)

export var e500 = themed({
  light: "box-shadow: 0 20px 32px -8px ".concat(colors.N50A, ", 0 0 1px ").concat(colors.N60A, ";"),
  dark: "box-shadow: 0 20px 32px -8px ".concat(colors.DN50A, ", 0 0 1px ").concat(colors.DN60A, ";")
});