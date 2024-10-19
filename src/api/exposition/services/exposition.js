'use strict';

/**
 * exposition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exposition.exposition');
