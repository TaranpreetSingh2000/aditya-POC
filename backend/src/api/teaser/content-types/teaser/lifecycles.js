const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(event) {
    try {
      const count = await strapi.db.query("api::teaser.teaser").count({
        where: { publishedAt: { $notNull: true } },
      });

      strapi.log.info(`Current published teaser count: ${count}`);

      if (count >= 8) {
        strapi.log.warn("Teaser entry limit reached (Max: 8).");

        throw new ApplicationError(
          "You have exceeded the maximum limit. You cannot add more than 8 teasers."
        );
      }
    } catch (error) {
      strapi.log.error("Error checking teaser count:", error);

      throw new ApplicationError(error.message || "Something went wrong. Please try again later.");
    }
  },
};
