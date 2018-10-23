module.exports = function(_request) {
  if (Math.random() >= 0.5) {
    return [
      {
        name: "foo",
        ts: Date.now()
      },
      {
        name: "bar",
        ts: Date.now()
      }
    ];
  }
  return {
    name: "foobar",
    ts: Date.now()
  };
};
