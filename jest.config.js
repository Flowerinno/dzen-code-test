const { jest: jestAliasMap } = require("./config-overrides.js");

module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: jestAliasMap,
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	testPathIgnorePatterns: [
		"/node_modules/",
		"<rootDir>/src/__tests__/Wrapper.tsx",
	],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
};
