/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor5 from "@_sh/strapi-plugin-ckeditor/strapi-admin";
import dragDropContentTypes from "@retikolo/drag-drop-content-types/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor5: ckeditor5,
    "drag-drop-content-types": dragDropContentTypes,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    seo: seo,
    "users-permissions": usersPermissions,
  },
});
