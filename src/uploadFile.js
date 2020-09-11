const uploadFile = async (
  client,
  {
    url,
    nl = {
      alt: 'Default image',
      title: 'Default image',
      customData: {},
    },
    en = {
      alt: 'Default image',
      title: 'Default image',
      customData: {},
    },
  }
) => {
  if (!client) throw new Error('client cannot be undefined');
  // upload file using URL:
  const path = await client.createUploadPath(url);

  return await client.uploads.create({
    path,
    defaultFieldMetadata: {
      nl,
      en,
    },
  });
};

module.exports = {
  uploadFile,
};
