'use strict';

const createSingleLine = async (
  client,
  {
    label = 'Title',
    apiKey = 'title',
    hint = null,
    heading = false,
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
    fieldType: 'string',
    validators,
    hint,
    localized,
    fieldset,
    appearance: {
      editor: 'single_line',
      addons: [],
      parameters: {
        heading,
      },
    },
    ...params,
  });
};

module.exports = {
  createSingleLine,
};
