'use strict';
const { createWysiwyg } = require('../src/createWysiwyg');

const allToolbarOptions = [
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
];

describe('createWysiwyg', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Wysiwyg',
      apiKey: 'wysiwyg',
      required: true,
    };

    const modelId = '1';
    await createWysiwyg(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'wysiwyg',
      fieldType: 'text',
      hint: null,
      label: 'Wysiwyg',
      localized: false,
      validators: {
        required: {},
      },
      appearance: {
        editor: 'wysiwyg',
        addons: [],
        parameters: {
          toolbar: allToolbarOptions,
        },
      },
    });
  });

  it('create optional field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Wysiwyg',
      apiKey: 'wysiwyg',
    };

    const modelId = '1';
    await createWysiwyg(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'wysiwyg',
      fieldType: 'text',
      hint: null,
      label: 'Wysiwyg',
      localized: false,
      validators: {},
      appearance: {
        editor: 'wysiwyg',
        addons: [],
        parameters: {
          toolbar: allToolbarOptions,
        },
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createWysiwyg(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createWysiwyg(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
