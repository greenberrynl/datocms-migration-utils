'use strict';
const { updateModularContent } = require('../src/updateModularContent');

describe('updateModularContent', () => {
  it('update required field', async () => {
    const mockUpdate = jest.fn(() => Promise.resolve({ id: '123' }));
    const client = { fields: { update: mockUpdate } };
    const options = {
      blockIds: ['3', '5', '9'],
    };
    const fieldId = '1';

    await updateModularContent(client, options, fieldId);

    expect(mockUpdate.mock.calls[0][0]).toEqual(fieldId);
    expect(mockUpdate.mock.calls[0][1]).toEqual({
      label: 'Modular Content',
      apiKey: 'modular_content',
      fieldType: 'rich_text',
      validators: {
        richTextBlocks: { itemTypes: options.blockIds },
      },
      localized: false,
      hint: null,
      appearance: {
        editor: 'rich_text',
        addons: [],
        parameters: {
          startCollapsed: false,
        },
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const fieldId = '1';
    try {
      await updateModularContent(undefined, {}, fieldId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });
  it('throws an error when no fieldId is passed', async () => {
    const client = { fields: { update: async f => f } };
    const fieldId = null;
    try {
      await updateModularContent(client, {}, fieldId);
    } catch (error) {
      expect(error).toEqual(new Error('Field ID cannot be undefined'));
    }
  });
});
