'use strict';
const { createImage } = require('../src/createImage');

describe('createImage', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Image',
      apiKey: 'image',
      required: true,
    };

    const modelId = '1';
    await createImage(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'image',
      fieldType: 'file',
      label: 'Image',
      localized: false,
      fieldset: null,
      hint: null,
      validators: {
        required: {},
        extension: { predefined_list: 'image' },
        requiredAltTitle: {
          alt: true,
          title: true,
        },
      },
      appearance: {
        editor: 'file',
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
      label: 'Image',
      apiKey: 'image',
    };

    const modelId = '1';
    await createImage(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'image',
      fieldType: 'file',
      hint: null,
      label: 'Image',
      localized: false,
      fieldset: null,
      validators: {
        extension: { predefined_list: 'image' },
        requiredAltTitle: {
          alt: true,
          title: true,
        },
      },
      appearance: {
        editor: 'file',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createImage(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createImage(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
