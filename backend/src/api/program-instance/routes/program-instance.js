'use strict';

/**
 * program-instance router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::program-instance.program-instance');
