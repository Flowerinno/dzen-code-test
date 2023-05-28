export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^src/(.*)$": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/src/__test__/config/importJestDOM.ts"],
};
