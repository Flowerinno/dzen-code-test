import {compilerOptions} from './tsconfig.json';

export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
	"^@/(.*)$": "<rootDir>/src/$1",
	"^@components/(.*)$": "<rootDir>/src/components/$1",
	"^@utils/(.*)$": "<rootDir>/src/utils/$1",
	"^@pages/(.*)$": "<rootDir>/src/pages/$1",
	"^@redux/(.*)$": "<rootDir>/src/redux/$1",
	"^@assets/(.*)$": "<rootDir>/src/assets/$1",
	"^@sass/(.*)$": "<rootDir>/src/sass/$1",
	"^@hooks/(.*)$": "<rootDir>/src/redux/hooks/$1",
	"^@styles/(.*)$": "<rootDir>/src/styles/$1",
	"^@locales/(.*)$": "<rootDir>/src/locales/$1"
  },
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	testPathIgnorePatterns: [
		"/node_modules/",
		"<rootDir>/src/__tests__/Wrapper.tsx"
	  ]
};
