'use strict';
const { createTextArea } = require('../src/createTextArea');

describe('createTextArea', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'String',
      apiKey: 'string',
      required: true,
    };

    const modelId = '1';
    await createTextArea(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'string',
      fieldType: 'text',
      hint: null,
      label: 'String',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
      },
      appearance: {
        editor: 'textarea',
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
      label: 'String',
      apiKey: 'string',
    };

    const modelId = '1';
    await createTextArea(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'string',
      fieldType: 'text',
      hint: null,
      label: 'String',
      localized: false,
      fieldset: null,
      validators: {},
      appearance: {
        editor: 'textarea',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createTextArea(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createTextArea(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
