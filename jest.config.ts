/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/design-system/**/*.ts(x)?',
    'src/modules/**/*.ts(x)?',
    'src/utils/**/*.ts(x)?',
    'src/stores/**/*.ts(x)?',
    'src/services/**/*.ts(x)?',
    'src/layouts/**/*.ts(x)?',
  ],
  coveragePathIgnorePatterns: [
    '.mock.ts',
    'styles.ts',
    '_app.tsx',
    '_document.tsx',
    'layout.tsx',
    'constants.ts',
    'routes.ts',
    'types.ts',
  ],
  coverageDirectory: '<rootDir>/tests/coverage/',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  resolver: '<rootDir>/tests/resolver.js',
  testMatch: ['**/__tests__/**/*.spec.ts?(x)'],
  coverageProvider: 'v8',
  preset: 'ts-jest', // Ensure Jest uses ts-jest for transformation
  testEnvironment: 'jsdom', // Simulate browser environment for React components
  testEnvironmentOptions: {
    url: 'http://localhost.com',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-dnd|core-dnd|@react-dnd|dnd-core|react-dnd-html5-backend)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@design-system/(.*)$': '<rootDir>/src/design-system/$1',
  },
}

export default createJestConfig(config)
