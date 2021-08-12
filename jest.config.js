module.exports = {
  cacheDirectory: '<rootDir>/.jestcache',

  collectCoverage: true,

  coverageDirectory: '<rootDir>/coverage',

  coverageReporters: [
    ['text', { skipFull: true }],
    'text-summary',
    // 'lcov',
  ],

  // 80 to start
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },

  errorOnDeprecated: true,

  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },

  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@types$': '<rootDir>/src/types',
  },

  modulePaths: ['<rootDir>'],

  preset: 'ts-jest',

  resetMocks: true,

  setupFiles: ['<rootDir>/tests/setupTestEnvironment.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  testMatch: ['**/*.spec.ts?(x)', '**/*.test.ts?(x)'],

  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileTransformer.js',
  },
};
