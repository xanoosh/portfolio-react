export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'ts-jest',
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    '^@app/(.*)$': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: ['node_modules', '.jest-test-results.json'],
};
