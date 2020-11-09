'use strict';
const { createBoolean } = require('../src/createBoolean');

describe('createBoolean', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Dark mode',
      apiKey: 'dark_mode',
      required: true,
    };

    const modelId = '1';
    await createBoolean(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'dark_mode',
      fieldType: 'boolean',
      hint: null,
      label: 'Dark mode',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
      },
      appearance: {
        editor: 'boolean',
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
      label: 'Dark mode',
      apiKey: 'dark_mode',
    };

    const modelId = '1';
    await createBoolean(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'dark_mode',
      fieldType: 'boolean',
      hint: null,
      label: 'Dark mode',
      localized: false,
      fieldset: null,
      validators: {},
      appearance: {
        editor: 'boolean',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const options = {
      label: 'Dark mode',
      apiKey: 'dark_mode',
      required: true,
    };

    const modelId = '1';
    try {
      await createBoolean(undefined, options, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createBoolean(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
