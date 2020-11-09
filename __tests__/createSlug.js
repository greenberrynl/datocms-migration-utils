'use strict';
const { createSlug } = require('../src/createSlug');

describe('createSlug', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Slug',
      apiKey: 'slug',
      required: true,
      titleField: {
        id: '1',
      },
    };

    const modelId = '1';
    await createSlug(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'slug',
      fieldType: 'slug',
      hint: null,
      label: 'Slug',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
        unique: {},
        slugTitleField: { titleFieldId: options.titleField.id },
      },
      appearance: {
        editor: 'slug',
        addons: [],
        parameters: { url_prefix: null },
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
      label: 'Slug',
      apiKey: 'slug',
      titleField: {
        id: '1',
      },
    };

    const modelId = '1';
    await createSlug(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'slug',
      fieldType: 'slug',
      hint: null,
      label: 'Slug',
      localized: false,
      fieldset: null,
      validators: {
        unique: {},
        slugTitleField: { titleFieldId: options.titleField.id },
      },
      appearance: {
        editor: 'slug',
        addons: [],
        parameters: { url_prefix: null },
      },
    });
  });

  it('create field with no title field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Slug',
      apiKey: 'slug',
    };

    const modelId = '1';
    await createSlug(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'slug',
      fieldType: 'slug',
      hint: null,
      label: 'Slug',
      localized: false,
      fieldset: null,
      validators: {
        unique: {},
      },
      appearance: {
        editor: 'slug',
        addons: [],
        parameters: { url_prefix: null },
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createSlug(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createSlug(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
