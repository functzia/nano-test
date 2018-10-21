module.exports = function(request) {
  this.debug(request.body);
  return {
    bar: request.method
  };
};
