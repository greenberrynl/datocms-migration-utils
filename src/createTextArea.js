'use strict';

const createTextArea = async (
  client,
  {
    label = 'Description',
    apiKey = 'description',
    hint = null,
    required = false,
    localized = false,
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
    fieldType: 'text',
    validators,
    localized,
    hint,
    appearance: {
      editor: 'textarea',
      addons: [],
      parameters: {},
    },
  });
};

module.exports = {
  createTextArea,
};
