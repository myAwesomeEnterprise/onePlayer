import api from './conf';

export function test() {
  return new Promise((resolve, reject) => {
    api.get('/')
      .then(r => {
        resolve(r);
      })
      .catch(e => {
        reject(e);
      });
  });
}
