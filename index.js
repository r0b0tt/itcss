module.exports = function itcss (string) {
  if (typeof string !== 'string') throw new TypeError ('itcss wants a string!');
  return string.replace(/\s/g, "");
};
