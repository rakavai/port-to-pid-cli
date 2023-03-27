/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	// preset: 'ts-jest',
	// extensionsToTreatAsEsm: ['.ts', '.tsx'],
	preset: 'ts-jest/presets/js-with-ts',
	// preset: 'ts-jest/presets/default-esm',
	testEnvironment: "node",
	// "extensionsToTreatAsEsm": [".ts"],
	// "transform": {
	// 	"node_modules/variables/.+\\.(j|t)sx?$": ["ts-jest",'<rootDir>/tsconfig.test.json' ]
	// },
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.test.json',
		},
	},
	transformIgnorePatterns: [
		"node_modules/(?!ink-testing-library/.*)",
	],

	//---------------
	// extensionsToTreatAsEsm: ['.ts'],
	// verbose: true,
	// preset: 'ts-jest/presets/default-esm',
	// testEnvironment: 'node',
	// transform: {
	// 	'^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }]
	// },
	// testPathIgnorePatterns: ['./dist']
};
