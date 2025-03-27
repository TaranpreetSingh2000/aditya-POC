'use strict';

/**
 * legacypost service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legacypost.legacypost');
