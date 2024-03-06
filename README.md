# Vite Boilerplate

This template provides a setup for React development with:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Commit Linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [Jest](https://jestjs.io/)
- [SWC](https://swc.rs/)
- [React Testing Library](https://testing-library.com/)
- [Plop](https://plopjs.com/)
- [GitHub CI](https://github.com/solutions/ci-cd/)

## Use This Template

```
npx degit https://github.com/diasjoaovitor/vite-boilerplate your-project
```

## Step by Step

create [Vite App](https://vitejs.dev/guide/)

```
yarn create vite
```

```
✔ Project name: … vite-boilerplate
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

```
cd vite-boilerplate
git init
yarn
yarn dev
```

delete all files in `src` except `App.tsx`, `main.tsx` and `vite-env.d.ts`

**App.tsx**

```tsx
export const App = () => {
  return <div>App</div>
}

export default App
```

**main.tsx**

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

add [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)

```
yarn add -D git-commit-msg-linter
```

create `.editorconfig`

```yml
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

configure tests

```
yarn add -D jest @types/jest jest-environment-jsdom @swc/core @swc/jest ts-node @testing-library/react @testing-library/user-event @testing-library/jest-dom jest-fetch-mock
```

create `jest.config.ts`

```ts
export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
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
  }
}
```

create `.jest/setup.ts`

```ts
import '@testing-library/jest-dom'
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks()
```

include `.jest/setup.ts` in `tsconfig.json`

```json
{
  "include": ["src", ".jest/setup.ts"]
}
```

create `src/app.test.tsx`

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render component', () => {
    render(<App />)
    expect(screen.getByText('app')).toBeInTheDocument()
  })
})
```

add scripts

```json
"scripts": {
  "test": "jest --maxWorkers=50%",
  "test:watch": "jest --watch --maxWorkers=25%",
  "test:ci": "jest --runInBand"
}
```

run test

```
yarn test app.test.tsx
```

add [Plop](https://plopjs.com/documentation/)

```
yarn add -D plop
```

create `generators/plopfile.js` and create `templates`

add `script` in `package.json`

```json
{
  "scripts": {
    "generate": "yarn plop --plopfile generators/plopfile.js"
  }
}
```

```
yarn generate main
```

install **Prettier - Code formatter** and **ESLint** extension in your VSCode

configure [Prettier](https://prettier.io/docs/en/install)

```
yarn add -D prettier
echo {}> .prettierrc.json
```

edit `.prettierrc.json`

```
yarn prettier src/ --write
```

create `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true
}
```

config eslint

```
yarn add -D eslint-config-prettier
```

add `prettier` in `.eslintrc.cjs`

create `.eslintignore`

```
!.jest
generators
```

---

add husky and lint-staged

```
yarn add -D husky lint-staged
```

```
npx husky-init && yarn
```

create `.lintstagedrc.cjs`

```js
export default {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `yarn prettier --write ${filenames.join(' ')}`,
    `yarn eslint --fix --ext .ts,.tsx .`,
    `yarn test -- --findRelatedTests ${filenames.join(' ')} --passWithNoTests`
  ]
}
```

edit `.husky/pre-commit.sh`

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

configure alias

set options in `ts.config.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/shared/*"]
    }
  }
}
```

add module mapper in `jest.config.ts`

```ts
{
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/shared/$1'
  }
}
```

and configure in `vite.config.json`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/shared')
    }
  }
})
```

configure vite to use `process.env` instead of `import.meta` in `vite.config.ts`

```ts
export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), 'VITE')
  const envWithProcessPrefix = {
    'process.env': `${JSON.stringify(env)}`
  }
  return {
    plugins: [react()],
    define: envWithProcessPrefix,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/shared')
      }
    }
  }
})
```

this setting fixes the error `SyntaxError: Cannot use 'import.meta' outside a module` when running unit tests

configure ci

create `.github/workflows/ci.yml`

```yml
name: ci
on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
          cache: 'yarn'

      - name: Install dependencies
        run: yarn

      - name: Linting
        run: yarn lint

      - name: Testing
        run: yarn test:ci

      - name: Build
        run: yarn build
```
