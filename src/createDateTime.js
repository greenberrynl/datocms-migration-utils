'use strict';

const createDateTime = async (
  client,
  {
    label = 'Date',
    apiKey = 'date',
    hint = null,
    required = false,
    localized = false,
    fieldset = null,
    dateRange = null,
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {};

  if (required) validators.required = {};
  if (dateRange) validators.dateTimeRange = dateRange;

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'date_time',
    validators,
    localized,
    fieldset,
    hint,
    appearance: {
      editor: 'date_time_picker',
      addons: [],
      parameters: {},
    },
  });
};

module.exports = {
  createDateTime,
};
