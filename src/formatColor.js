'use strict';
const Color = require('color');

const formatColor = (hex, alpha = 1) => {
  const clr = Color(hex);
  const rgb = clr.rgb().array();

  return ['red', 'green', 'blue'].reduce(
    (acc, curr, index) => {
      acc[curr] = rgb[index];
      return acc;
    },
    { alpha: 255 * alpha }
  );
};

module.exports = {
  formatColor,
};
