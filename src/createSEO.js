'use strict';

const createSEO = async (
  client,
  { label = 'SEO', apiKey = 'seo', localized = false, hint = null },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'seo',
    localized,
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
