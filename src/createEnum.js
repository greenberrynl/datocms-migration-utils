'use strict';

const createEnum = async (
  client,
  {
    label = 'Title',
    apiKey = 'title',
    hint = null,
    required = false,
    localized = false,
    fieldset = null,
    options = [],
    defaultValue = null,
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {
    enum: { values: options },
  };

  if (required) validators.required = {};

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'string',
    validators,
    localized,
    fieldset,
    hint,
    defaultValue,
    appearance: {
      editor: 'single_line',
      addons: [],
      parameters: {
        heading: false,
      },
    },
  });
};

module.exports = {
  createEnum,
};
