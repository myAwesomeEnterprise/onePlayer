import env from './../env';

export default {
  name: env("APP_NAME", "React Native"),

  env: env("APP_ENV", "Production"),

  debug: env("APP_DEBUG", false),

  timezone: "UTC",

  locale: "en",
};
