'use strict';
const { createModularContent } = require('../src/createModularContent');

describe('createModularContent', () => {
  it('create field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Modular Content',
      apiKey: 'modularContent',
      blockIds: ['2', '4'],
    };

    const modelId = '1';
    await createModularContent(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'modularContent',
      fieldType: 'rich_text',
      hint: null,
      label: 'Modular Content',
      localized: false,
      validators: {
        richTextBlocks: { itemTypes: options.blockIds },
      },
      appearance: {
        editor: 'rich_text',
        addons: [],
        parameters: {
          startCollapsed: false,
        },
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const options = {
      label: 'Modular Content',
      apiKey: 'modularContent',
      required: true,
    };

    const modelId = '1';
    try {
      await createModularContent(undefined, options, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createModularContent(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
