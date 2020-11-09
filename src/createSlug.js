'use strict';

const createSlug = async (
  client,
  {
    label = 'Slug',
    apiKey = 'slug',
    required = false,
    localized = false,
    fieldset = null,
    hint = null,
    prefix = null,
    titleField,
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {
    unique: {},
  };

  if (required) validators.required = {};
  if (titleField) {
    validators.slugTitleField = { titleFieldId: titleField.id };
  }

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'slug',
    localized,
    fieldset,
    validators,
    hint,
    appearance: {
      editor: 'slug',
      parameters: { url_prefix: prefix },
      addons: [],
    },
    ...params,
  });
};

module.exports = {
  createSlug,
};
