'use strict';
const { uploadFile } = require('../src/uploadFile');

describe('uploadFile', () => {
  it('update required field', async () => {
    const imagePath =
      'https://cdn.pixabay.com/photo/2020/08/27/14/55/adler-5522202_960_720.jpg';
    const mockCreate = jest.fn(() => Promise.resolve({ id: '123' }));
    const createUploadPath = jest.fn(() => Promise.resolve(imagePath));
    const client = { uploads: { create: mockCreate }, createUploadPath };
    const options = {
      nl: {
        alt: 'Default image',
        title: 'Default image',
        customData: {},
      },
      en: {
        alt: 'Default image',
        title: 'Default image',
        customData: {},
      },
    };

    await uploadFile(client, options);

    expect(mockCreate.mock.calls[0][0]).toEqual({
      path: imagePath,
      defaultFieldMetadata: {
        nl: options.nl,
        en: options.en,
      },
    });
  });

  it('throws an error when no client is passed', async () => {
    const fieldId = '1';
    try {
      await uploadFile(undefined, {}, fieldId);
    } catch (error) {
      expect(error).toEqual(new Error('client cannot be undefined'));
    }
  });
});
