'use strict';
const { createLinks } = require('../src/createLinks');

describe('createLinks', () => {
  it('create field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Links',
      apiKey: 'links',
      items: ['2', '3'],
    };

    const modelId = '1';
    await createLinks(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'links',
      fieldType: 'links',
      label: 'Links',
      localized: false,
      hint: null,
      validators: {
        itemsItemType: { itemTypes: options.items },
      },
      appearance: {
        editor: 'links_select',
        addons: [],
        parameters: {},
      },
    });
  });

  it('create field with size validated', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Links',
      apiKey: 'links',
      items: ['2', '3'],
      size: { max: 6, min: 2 },
    };

    const modelId = '1';
    await createLinks(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'links',
      fieldType: 'links',
      label: 'Links',
      localized: false,
      hint: null,
      validators: {
        itemsItemType: { itemTypes: options.items },
        size: options.size,
      },
      appearance: {
        editor: 'links_select',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createLinks(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createLinks(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
