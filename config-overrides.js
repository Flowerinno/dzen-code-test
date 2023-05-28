const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
	alias({
		"@": "src",
		"@components": "src/components",
		"@utils": "src/utils",
		"@pages": "src/pages",
		"@redux": "src/redux",
		"@assets": "src/assets",
		"@sass": "src/sass",
		"@hooks": "src/redux/hooks",
		"@styles": "src/styles",
		"@locales": "src/locales",
	})(config);

	return config;
};
