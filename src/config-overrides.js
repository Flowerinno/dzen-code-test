const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
	alias({
		"@components": "src/components",
		"@utils": "src/utils",
		"@pages": "src/pages",
		"@redux": "src/redux",
		"@assets": "src/assets",
		"@sass": "src/sass",
	})(config);

	return config;
};
