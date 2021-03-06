export function add(fn, addend) {
  return function (props) {
    return fn(props) + addend;
  };
}
export function subtract(fn, subtrahend) {
  return function (props) {
    return fn(props) - subtrahend;
  };
}
export function multiply(fn, factor) {
  return function (props) {
    return fn(props) * factor;
  };
}
export function divide(fn, divisor) {
  return function (props) {
    return fn(props) / divisor;
  };
}