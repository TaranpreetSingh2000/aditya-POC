module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      sizeLimit: 5 * 1024 * 1024,
      actionOptions: {
        upload: {},
        delete: {},
        uploadStream: {},
      },
    },
  },
  graphql: {
    config: {
      defaultLimit: 50, // Set default limit (adjust as needed)
      maxLimit: 10000, // Set a maximum limit (optional)
    },
  },
  // ...
});
