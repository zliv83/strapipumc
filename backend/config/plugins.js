module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
});
