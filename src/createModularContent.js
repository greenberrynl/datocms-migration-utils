'use strict';

const createModularContent = async (
  client,
  {
    label = 'Modular Content',
    apiKey = 'modular_content',
    localized = false,
    fieldset = null,
    hint = null,
    blockIds = [],
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {
    richTextBlocks: { itemTypes: blockIds },
  };

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'rich_text',
    validators,
    localized,
    fieldset,
    hint,
    appearance: {
      editor: 'rich_text',
      addons: [],
      parameters: {
        startCollapsed: false,
      },
    },
    ...params,
  });
};

module.exports = {
  createModularContent,
};
