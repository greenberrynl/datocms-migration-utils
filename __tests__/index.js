'use strict';
const utils = require('../index');

describe('main', () => {
  it('has all methods exported', () => {
    expect(Object.keys(utils)).toEqual([
      'createBoolean',
      'createCTA',
      'createDate',
      'createDateTime',
      'createEnum',
      'createImage',
      'createLink',
      'createLinks',
      'createModularContent',
      'createNumber',
      'createSEO',
      'createSingleLine',
      'createSlug',
      'createTextArea',
      'createWysiwyg',
      'getAllModularBlocks',
      'updateModularContent',
      'uploadFile',
    ]);
  });
});
