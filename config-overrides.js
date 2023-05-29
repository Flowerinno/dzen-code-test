const { alias, aliasJest } = require("react-app-rewire-alias");

const aliasMap = {
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
};

module.exports = function override(config) {
  alias(aliasMap)(config);
  return config;
};

module.exports.jest = aliasJest(aliasMap);
