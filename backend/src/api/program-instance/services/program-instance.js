'use strict';

/**
 * program-instance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::program-instance.program-instance');
