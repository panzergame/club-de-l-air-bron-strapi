module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: 'Gastby',
          id: process.env.NETLIFY_SITE_ID,
          buildHook: process.env.NETLIFY_BUILD_HOOK,
        }
      ]
    },
  },
});
