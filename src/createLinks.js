'use strict';

const createLinks = async (
  client,
  {
    label = 'Link',
    apiKey = 'link',
    hint = null,
    localized = false,
    fieldset = null,
    items = [],
    size = null,
    editor = 'links_select',
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {
    itemsItemType: { itemTypes: items },
  };

  if (size !== null) validators.size = size;

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'links',
    validators,
    hint,
    localized,
    fieldset,
    appearance: {
      editor,
      addons: [],
      parameters: {},
    },
    ...params,
  });
};

module.exports = {
  createLinks,
};
