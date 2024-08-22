'use strict';

/**
 * bulletin-board router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bulletin-board.bulletin-board');
