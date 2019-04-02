function env(variable, def = null) {
  const vars = require('./../env.json');

  return vars[variable] || def;
}

export default env;
