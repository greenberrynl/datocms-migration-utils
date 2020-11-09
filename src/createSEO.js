'use strict';

const createSEO = async (
  client,
  {
    label = 'SEO',
    apiKey = 'seo',
    localized = false,
    fieldset = null,
    hint = null,
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'seo',
    localized,
    fieldset,
    hint,
    validators: {
      requiredSeoFields: {
        description: false,
        title: false,
        twitterCard: false,
        image: false,
      },
    },
    appearance: {
      editor: 'seo',
      parameters: {},
      addons: [],
    },
  });
};

module.exports = {
  createSEO,
};
