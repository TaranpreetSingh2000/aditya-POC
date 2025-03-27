module.exports = {
    async upload(ctx, next) {
      try {
        const { files } = ctx.request;
        
        // Validate if files exist
        if (!files) {
          return ctx.badRequest("No file uploaded.");
        }
  
        // File size validation (Max: 5MB)
        if (files.size > 5 * 1024 * 1024) {
          return ctx.badRequest("Asset size should be less than 5MB.");
        }
  
        // Proceed with upload using Strapi's built-in upload controller
        return await strapi.plugins.upload.controllers.upload.upload(ctx, next);
        
      } catch (error) {
        strapi.log.error("File upload error:", error);
        return ctx.internalServerError("Failed to upload file. Please try again.");
      }
    },
  };
  