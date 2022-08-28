export function isNullOrWhiteSpace(str) {
  return str === null || str.match(/^ *$/) !== null;
}
