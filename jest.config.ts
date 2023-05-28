export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@components/(.*)$": "<rootDir>/src/components/$1",
		"^@pages/(.*)$": "<rootDir>/src/pages/$1",
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
		"^@styles": "<rootDir>/src/styles/global.scss",
		"^@sass/(.*)$": "<rootDir>/src/sass/$1",
		"^@redux/(.*)$": "<rootDir>/src/redux/$1",
		"^@hooks/(.*)$": "<rootDir>/src/redux/hooks/$1",
		"^@layout/(.*)$": "<rootDir>/src/components/layout/$1",
		"^@locales/(.*)$": "<rootDir>/src/locales/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/src/__test__/config/importJestDOM.ts"],
};
