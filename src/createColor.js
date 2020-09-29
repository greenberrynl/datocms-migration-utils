'use strict';

const createColor = async (
  client,
  {
    label = 'Date',
    apiKey = 'date',
    hint = null,
    required = false,
    localized = false,
    enableAlpha = false,
    presetColors = [],
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
    fieldType: 'color',
    validators,
    localized,
    hint,
    appearance: {
      editor: 'color_picker',
      addons: [],
      parameters: {
        enableAlpha,
        presetColors,
      },
    },
  });
};

module.exports = {
  createColor,
};
