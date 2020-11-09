'use strict';
const { createColor } = require('../src/createColor');

describe('createColor', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Color',
      apiKey: 'color',
      required: true,
    };

    const modelId = '1';
    await createColor(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'color',
      fieldType: 'color',
      hint: null,
      label: 'Color',
      localized: false,
      fieldset: null,
      validators: {
        required: {},
      },
      appearance: {
        editor: 'color_picker',
        addons: [],
        parameters: {
          enableAlpha: false,
          presetColors: [],
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
      label: 'Color',
      apiKey: 'color',
    };

    const modelId = '1';
    await createColor(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'color',
      fieldType: 'color',
      hint: null,
      label: 'Color',
      localized: false,
      fieldset: null,
      validators: {},
      appearance: {
        editor: 'color_picker',
        addons: [],
        parameters: {
          enableAlpha: false,
          presetColors: [],
        },
      },
    });
  });

  it('create field with alpha enabled', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Color',
      apiKey: 'color',
      enableAlpha: true,
    };

    const modelId = '1';
    await createColor(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'color',
      fieldType: 'color',
      hint: null,
      label: 'Color',
      localized: false,
      fieldset: null,
      validators: {},
      appearance: {
        editor: 'color_picker',
        addons: [],
        parameters: {
          enableAlpha: true,
          presetColors: [],
        },
      },
    });
  });

  it('create field with preset colors', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Color',
      apiKey: 'color',
      presetColors: ['#000', '#f90'],
    };

    const modelId = '1';
    await createColor(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'color',
      fieldType: 'color',
      hint: null,
      label: 'Color',
      localized: false,
      fieldset: null,
      validators: {},
      appearance: {
        editor: 'color_picker',
        addons: [],
        parameters: {
          enableAlpha: false,
          presetColors: ['#000', '#f90'],
        },
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createColor(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createColor(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
