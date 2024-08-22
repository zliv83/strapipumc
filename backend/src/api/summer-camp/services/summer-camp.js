'use strict';

/**
 * summer-camp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::summer-camp.summer-camp');
