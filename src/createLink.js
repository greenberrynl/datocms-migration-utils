'use strict';

const createLink = async (
  client,
  {
    label = 'Link',
    apiKey = 'link',
    hint = null,
    required = false,
    localized = false,
    fieldset = null,
    unique = false,
    items = [],
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {
    itemItemType: { itemTypes: items },
  };

  if (required) validators.required = {};
  if (unique) validators.unique = {};

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'link',
    validators,
    hint,
    localized,
    fieldset,
    appearance: {
      editor: 'link_select',
      addons: [],
      parameters: {},
    },
  });
};

module.exports = {
  createLink,
};
