'use strict';

/**
 * my-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-table.my-table');
