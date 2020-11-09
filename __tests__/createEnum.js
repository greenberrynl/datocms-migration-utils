'use strict';
const { createEnum } = require('../src/createEnum');

describe('createEnum', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Options',
      apiKey: 'options',
      required: true,
      defaultValue: 'option 1',
      options: ['option 1', 'option 2', 'option 3'],
    };

    const modelId = '1';
    await createEnum(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'options',
      fieldType: 'string',
      hint: null,
      label: 'Options',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
        enum: { values: options.options },
      },
      defaultValue: 'option 1',
      appearance: {
        editor: 'single_line',
        addons: [],
        parameters: {
          heading: false,
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
      label: 'Options',
      apiKey: 'options',
      defaultValue: 'option 1',
      options: ['option 1', 'option 2', 'option 3'],
    };

    const modelId = '1';
    await createEnum(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'options',
      fieldType: 'string',
      hint: null,
      label: 'Options',
      localized: false,
      fieldset: null,
      validators: {
        enum: { values: options.options },
      },
      defaultValue: 'option 1',
      appearance: {
        editor: 'single_line',
        addons: [],
        parameters: {
          heading: false,
        },
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createEnum(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createEnum(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
