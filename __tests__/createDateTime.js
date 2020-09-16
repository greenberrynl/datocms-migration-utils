'use strict';
const { createDateTime } = require('../src/createDateTime');

describe('createDateTime', () => {
  it('create required field', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'DateTime',
      apiKey: 'date_time',
      required: true,
    };

    const modelId = '1';
    await createDateTime(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'date_time',
      fieldType: 'date_time',
      hint: null,
      label: 'DateTime',
      localized: false,
      validators: {
        required: {},
      },
      appearance: {
        editor: 'date_time_picker',
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
      label: 'DateTime',
      apiKey: 'date_time',
    };

    const modelId = '1';
    await createDateTime(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'date_time',
      fieldType: 'date_time',
      hint: null,
      label: 'DateTime',
      localized: false,
      validators: {},
      appearance: {
        editor: 'date_time_picker',
        addons: [],
        parameters: {},
      },
    });
  });

  it('create field with a range', async () => {
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = {
      fields: {
        create: mockCreate,
      },
    };

    const options = {
      label: 'DateTime',
      apiKey: 'date_time',
      dateRange: {
        min: '2020-09-16T15:03:56.974Z',
        max: '2020-09-16T15:04:56.974Z',
      },
    };

    const modelId = '1';
    await createDateTime(client, options, modelId);

    expect(mockCreate.mock.calls[0][0]).toEqual(modelId);
    expect(mockCreate.mock.calls[0][1]).toEqual({
      apiKey: 'date_time',
      fieldType: 'date_time',
      hint: null,
      label: 'DateTime',
      localized: false,
      validators: {
        dateTimeRange: {
          max: '2020-09-16T15:04:56.974Z',
          min: '2020-09-16T15:03:56.974Z',
        },
      },
      appearance: {
        editor: 'date_time_picker',
        addons: [],
        parameters: {},
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const modelId = '1';
    try {
      await createDateTime(undefined, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });

  it('throws an error when no modelId is passed', async () => {
    const client = { fields: { create: async f => f } };
    const modelId = null;
    try {
      await createDateTime(client, {}, modelId);
    } catch (error) {
      expect(error).toEqual(new Error('Model ID cannot be undefined'));
    }
  });
});
