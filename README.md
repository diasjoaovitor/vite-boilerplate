# Vite Boilerplate

This template provides a setup for React development 

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
  return (
    <div>App</div>
  )
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

edit `.gitignore`, only include `node_modules` in this file

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
  "include": ["src", ".jest/setup.ts"],
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
