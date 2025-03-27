const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event) {
    try {
      // Get the data being updated
      const { data } = event.params;
      console.log(data);

      // Check if the card component exists in the data and if it has more than 4 entries
      if (
        data.adityaCardComponent &&
        Array.isArray(data.adityaCardComponent) &&
        data.adityaCardComponent.length > 4
      ) {
        throw new ApplicationError(
          "You cannot add more than 4 card entries. Please remove some entries."
        );
      }
    } catch (error) {
      strapi.log.error("Error enforcing component limit:", error);
      throw new ApplicationError(
        "You have exceeded the maximum limit. You cannot add more than 4 cards."
      );
    }
  },
};
