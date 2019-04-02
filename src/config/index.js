import app from './app';
import request from './request';

const files = {
  app,
  request,
};

function config(path, defaultValue = null) {
  const $ = path.split('.');

  return search($, files) || defaultValue;
}

function search($, conf) {
  const key = $.shift() || null;

  if ($.length && conf[key]) {
    return search($, conf[key]);
  }

  return conf[key] || null;
}

export default config;
