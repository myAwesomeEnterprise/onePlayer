export const HELLOWORLD = {
  SAYHI: '[HELLOWORLD] SAYHI',
}

export const sayHi = ({ name }) => ({
  type: HELLOWORLD.SAYHI,
  name,
});
