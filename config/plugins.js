module.exports = ({ env }) => ({
//   upload: {
//     provider: "cloudinary",
//     providerOptions: {
//       cloud_name: env("CLOUDINARY_NAME"),
//       api_key: env("CLOUDINARY_KEY"),
//       api_secret: env("CLOUDINARY_SECRET"),
//     },
//     actionOptions: {
//       upload: {},
//       delete: {},
//     },
//   },

  'config-sync': {
    destination: "extensions/config-sync/files/",
    minify: false,
    importOnBootstrap: false,
    include: [
    ],
    exclude: [
      "core-store.core_admin_auth",
      "core-store.plugin_documentation_config",
      "core-store.plugin_i18n_default_locale",
      "core-store.plugin_upload_settings",
      "core-store.plugin_users-permissions_advanced",
      "core-store.plugin_users-permissions_email",
      "core-store.authenticated",
      "core-store.plugin_users-permissions_grant",
      "role-permissions.authenticated",
      "role-permissions.public"
    ]
  }
});
