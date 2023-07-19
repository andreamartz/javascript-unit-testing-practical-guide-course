import jwt from 'jsonwebtoken';

// asynchronous function that uses a callback
  // we get an error if generating the token failed for some reason; otherwise we get the token itself
export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, 'secret123', doneFn);
}

// asynchronous function that returns a promise
export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, 'secret123', (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));
