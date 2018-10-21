module.exports = function(request) {
  this.log.fatal(request.body);
  return {
    bar: request.method
  };
};
