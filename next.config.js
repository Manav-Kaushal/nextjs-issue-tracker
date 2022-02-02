const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
});
