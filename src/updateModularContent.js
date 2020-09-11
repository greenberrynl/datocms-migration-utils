'use strict';

const updateModularContent = async (
  client,
  {
    label = 'Modular Content',
    apiKey = 'modular_content',
    localized = false,
    hint = null,
    blockIds = [],
  },
  fieldId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!fieldId) throw new Error('Field ID cannot be undefined');

  const validators = {
    richTextBlocks: { itemTypes: blockIds },
  };

  return client.fields.update(fieldId, {
    label,
    apiKey,
    fieldType: 'rich_text',
    validators,
    localized,
    hint,
    appearance: {
      editor: 'rich_text',
      addons: [],
      parameters: {
        startCollapsed: false,
      },
    },
  });
};

module.exports = {
  updateModularContent,
};
