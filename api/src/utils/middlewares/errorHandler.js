function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.log(err);
  return res.sendStatus(status, message);
}

module.exports = errorHandler;
