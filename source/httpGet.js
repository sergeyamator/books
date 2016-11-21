export default function httpGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.addEventListener('load', (e) => {
      if(e.target.status === 200) {
        resolve(e.target.response);
      } else {
        const error = new Error(e.target.statusText);
        error.code = e.status;
        reject(error);
      }
    });

    xhr.addEventListener('error', () => {
      reject(new Error('Network error'));
    });

    xhr.send();
  })
}