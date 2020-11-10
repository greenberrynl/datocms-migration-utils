'use strict';

const createSingleLine = async (
  client,
  {
    label = 'Title',
    apiKey = 'title',
    hint = null,
    heading = false,
    required = false,
    localized = false,
    fieldset = null,
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  let validators = {};

  if (required || params.required) {
    validators.required = {};
    params.required = undefined;
    required = undefined;
  }
  if (params.validators) {
    validators = { ...params.validators, ...validators };
    delete params.validators;
  }

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'string',
    hint,
    localized,
    fieldset,
    validators: validators,
    appearance: {
      editor: 'single_line',
      addons: [],
      parameters: {
        heading,
      },
    },
    ...params,
  });
};

module.exports = {
  createSingleLine,
};
