'use strict';

const createBoolean = async (
  client,
  {
    label = 'Boolean',
    apiKey = 'boolean',
    required = false,
    hint = null,
    localized = false,
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');
  const validators = {};

  if (required) validators.required = {};

  return await client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'boolean',
    validators,
    hint,
    localized,
    appearance: {
      editor: 'boolean',
      addons: [],
      parameters: {},
    },
  });
};

module.exports = {
  createBoolean,
};
