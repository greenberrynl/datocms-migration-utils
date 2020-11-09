'use strict';

const createNumber = async (
  client,
  {
    label = 'Number',
    apiKey = 'number',
    hint = null,
    required = false,
    localized = false,
    fieldset = null,
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {};

  if (required) validators.required = {};

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'integer',
    validators,
    hint,
    localized,
    fieldset,
    appearance: {
      editor: 'integer',
      addons: [],
      parameters: {},
    },
    ...params,
  });
};

module.exports = {
  createNumber,
};
