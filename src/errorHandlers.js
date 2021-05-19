export const notFoundErrorHandler = (err, req, res, next) => {};

export const badRequestErrorHandler = (err, req, res, next) => {};

export const forbiddenErrorHandler = (err, req, res, next) => {};

export const catchAllErrorHandler = (err, req, res, next) => {
  res.status(500).send('Generic Server Error');
};
