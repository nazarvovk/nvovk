import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // Disable type checking for tests
        isolatedModules: true,
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/temp/'],
  testTimeout: 20 * 1000,
}

export default jestConfig
