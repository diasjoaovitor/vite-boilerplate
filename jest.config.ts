export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/*.tsx',
    '!src/**/index.ts',
    '!src/**/style.ts',
    '!src/**/use*.ts',
    '!src/**/nav-items.ts',
    '!src/**/inputs.ts',
    '!src/shared/icons/*',
    '!src/shared/themes/*',
    '!src/shared/firebase/*',
    'src/shared/functions/**/*'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  moduleNameMapper: {
    '^@/shared(.*)$': '<rootDir>/src/shared$1'
  }
}
