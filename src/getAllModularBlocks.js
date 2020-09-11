'use strict';

const getAllModularBlocks = async client => {
  if (!client) throw new Error('client cannot be undefined');
  const models = await client.itemTypes.all();

  return models
    .filter(({ modularBlock }) => modularBlock)
    .reduce((acc, curr) => {
      acc[curr.apiKey] = curr.id;
      return acc;
    }, {});
};

module.exports = {
  getAllModularBlocks,
};
