'use strict';
const { getAllModularBlocks } = require('../src/getAllModularBlocks');

describe('getAllModularBlocks', () => {
  it('create required field', async () => {
    const mockAll = jest.fn(() =>
      Promise.resolve([
        { id: '1', apiKey: 'cta', modularBlock: true },
        { id: '2', apiKey: 'image', modularBlock: true },
      ])
    );
    const client = {
      itemTypes: {
        all: mockAll,
      },
    };

    const modularBlocks = await getAllModularBlocks(client);
    expect(modularBlocks.cta).toEqual('1');
    expect(modularBlocks.image).toEqual('2');
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await getAllModularBlocks(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });
});
