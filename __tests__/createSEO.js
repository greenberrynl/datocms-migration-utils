'use strict';
const { createSEO } = require('../src/createSEO');

describe('createSEO', () => {
  it('create field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'Number',
      apiKey: 'number',
    };

    const modelId = '1';
    await createSEO(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'number',
      fieldType: 'seo',
      hint: null,
      label: 'Number',
      localized: false,
      fieldset: null,
      validators: {
        requiredSeoFields: {
          description: false,
          title: false,
          twitterCard: false,
          image: false,
        },
      },
      appearance: {
        editor: 'seo',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createSEO(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createSEO(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
