import { pathsToModuleNameMapper } from 'ts-jest'
import {compilerOptions} from './tsconfig.json';

export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	testPathIgnorePatterns: [
		"/node_modules/",
		"<rootDir>/src/__tests__/Wrapper.tsx"
	  ]
};
