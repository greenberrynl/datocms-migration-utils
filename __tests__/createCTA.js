'use strict';
const { createCTA } = require('../src/createCTA');

describe('createCTA', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Button',
      apiKey: 'button',
      required: true,
    };

    const modelId = '1';
    await createCTA(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'button',
      fieldType: 'string',
      hint: null,
      label: 'Button',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
      },
      appearance: {
        editor: 'single_line',
        addons: [],
        parameters: {
          heading: false,
        },
      },
    });

    expect(mockCreate.mock.calls[1][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[1][1]).toEqual({
      apiKey: 'button_url',
      fieldType: 'string',
      hint: null,
      label: 'Button URL',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
      },
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
      label: 'Button',
      apiKey: 'button',
    };

    const modelId = '1';
    await createCTA(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'button',
      fieldType: 'string',
      hint: null,
      label: 'Button',
      localized: false,
      fieldset: null,
      validators: {},
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
      await createCTA(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createCTA(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
