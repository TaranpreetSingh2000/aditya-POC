'use strict';

/**
 * teaser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teaser.teaser');
