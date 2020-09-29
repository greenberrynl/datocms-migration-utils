'use strict';
const { formatColor } = require('../src/formatColor');

describe('formatColor', () => {
  it('returns the by DatoCMS expected shape', () => {
    const color = formatColor('#000000');

    expect(color).toEqual({
      red: 0,
      blue: 0,
      green: 0,
      alpha: 255,
    });
  });

  it('accepts alpha', () => {
    const color = formatColor('#000000', 0.8);

    expect(color).toEqual({
      red: 0,
      blue: 0,
      green: 0,
      alpha: 204,
    });
  });
});
