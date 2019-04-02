export function dd() {
  console.trace(...arguments);
  debugger;
}

export default {
  dd,
}
