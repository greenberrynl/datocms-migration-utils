'use strict';
const { createSingleLine } = require('./createSingleLine');

const createCTA = async (
  client,
  {
    label = 'CTA Button',
    apiKey = 'cta_button',
    localized = false,
    fieldset = null,
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  await createSingleLine(
    client,
    { label, apiKey, localized, fieldset, ...params },
    modelId
  );
  await createSingleLine(
    client,
    {
      label: `${label} URL`,
      apiKey: `${apiKey}_url`,
      localized,
      fieldset,
      ...params,
    },
    modelId
  );
};
module.exports = {
  createCTA,
};
