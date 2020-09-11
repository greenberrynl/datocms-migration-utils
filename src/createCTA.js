'use strict';
const { createSingleLine } = require('./createSingleLine');

const createCTA = async (
  client,
  {
    label = 'CTA Button',
    apiKey = 'cta_button',
    localized = false,
    ...options
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  await createSingleLine(
    client,
    { label, apiKey, localized, ...options },
    modelId
  );
  await createSingleLine(
    client,
    { label: `${label} URL`, apiKey: `${apiKey}_url`, localized, ...options },
    modelId
  );
};

module.exports = {
  createCTA,
};
