'use strict';
const { createLink } = require('../src/createLink');

describe('createLink', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Link',
      apiKey: 'link',
      required: true,
      items: ['2', '3'],
    };

    const modelId = '1';
    await createLink(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'link',
      fieldType: 'link',
      label: 'Link',
      localized: false,
      fieldset: null,
      hint: null,
      validators: {
        required: {},
        itemItemType: { itemTypes: options.items },
      },
      appearance: {
        editor: 'link_select',
        addons: [],
        parameters: {},
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
      label: 'Link',
      apiKey: 'link',
      items: ['2', '3'],
    };

    const modelId = '1';
    await createLink(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'link',
      fieldType: 'link',
      hint: null,
      label: 'Link',
      localized: false,
      fieldset: null,
      validators: {
        itemItemType: { itemTypes: options.items },
      },
      appearance: {
        editor: 'link_select',
        addons: [],
        parameters: {},
      },
    });
  });

  it('create unique field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Link',
      apiKey: 'link',
      items: ['2', '3'],
      unique: true,
    };

    const modelId = '1';
    await createLink(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'link',
      fieldType: 'link',
      hint: null,
      label: 'Link',
      localized: false,
      fieldset: null,
      validators: {
        itemItemType: { itemTypes: options.items },
        unique: {},
      },
      appearance: {
        editor: 'link_select',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createLink(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createLink(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
