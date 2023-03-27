/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: "node",
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{tsconfig: '<rootDir>/tsconfig.test.json'},
		],
	},
	transformIgnorePatterns: [
		"node_modules/(?!ink-testing-library/.*)",
	]
};
