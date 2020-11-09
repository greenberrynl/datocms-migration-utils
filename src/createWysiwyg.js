'use strict';

const createWysiwyg = async (
  client,
  {
    label = 'Description',
    apiKey = 'description',
    hint = null,
    toolbar = [
      'format',
      'bold',
      'italic',
      'strikethrough',
      'ordered_list',
      'unordered_list',
      'quote',
      'table',
      'link',
      'image',
      'show_source',
      'undo',
      'redo',
      'align_left',
      'align_center',
      'align_right',
      'align_justify',
      'outdent',
      'indent',
      'fullscreen',
    ],
    required = false,
    localized = false,
    fieldset = null,
    ...params
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {};

  if (required) validators.required = {};

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'text',
    validators,
    localized,
    fieldset,
    hint,
    appearance: {
      editor: 'wysiwyg',
      addons: [],
      parameters: {
        toolbar,
      },
    },
    ...params,
  });
};

module.exports = {
  createWysiwyg,
};
