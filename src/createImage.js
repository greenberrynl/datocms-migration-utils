'use strict';

const createImage = async (
  client,
  {
    label = 'Image',
    apiKey = 'image',
    required = false,
    localized = false,
    hint = null,
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {
    extension: { predefined_list: 'image' },
    requiredAltTitle: {
      alt: true,
      title: true,
    },
  };

  if (required) validators.required = {};
  await client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'file',
    validators,
    localized,
    hint,
    appearance: {
      editor: 'file',
      parameters: {},
      addons: [],
    },
  });
};

module.exports = {
  createImage,
};
