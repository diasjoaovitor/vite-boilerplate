# Vite Boilerplate

This template provides a setup for React development with:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Jest](https://jestjs.io/)
- [SWC](https://swc.rs/)
- [React Testing Library](https://testing-library.com/)
- [Plop](https://plopjs.com/)
- [GitHub CI](https://github.com/solutions/ci-cd/)

## Step by Step

create [Vite](https://vitejs.dev/guide/) app

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
yarn
yarn dev
```

---

install [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)

```
yarn add -D git-commit-msg-linter
```

---

create `.editorconfig`

---

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

install [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

```
yarn add -D eslint-config-prettier
```

extend `prettier` in `.eslintrc.json`

---

install [husky and lint-staged](https://prettier.io/docs/en/install#eslint-and-other-linters)

```
yarn add -D husky lint-staged
```

configure [Husky](https://typicode.github.io/husky/getting-started.html)

```
npx husky-init && yarn
```

create `.lintstagedrc.ts`

---

configure [Jest](https://jestjs.io/docs/getting-started) and [SWC](https://swc.rs/docs/getting-started)

```
yarn add -D jest @types/jest jest-environment-jsdom ts-node @swc/core @swc/jest
```

install [react testing library](https://testing-library.com/docs/react-testing-library/intro/), [jest-dom](https://github.com/testing-library/jest-dom) and [jest-fetch-mock](https://github.com/jefflau/jest-fetch-mock#readme)

```
yarn add -D @testing-library/react @testing-library/jest-dom jest-fetch-mock
```

create `jest.config.ts`

create `.jest/setup.ts`

import libraries in `.jest/setup.ts`

include `.jest/setup.ts` in `tsconfig.json`

```json
{
  "include": [".jest/setup.ts"]
}
```

add scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
  }
}
```

---

install [MUI](https://mui.com/material-ui/getting-started/installation/)

```
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
```

---

install [Plop](https://plopjs.com/documentation/)

```
yarn add -D plop
```

create `generators/plopfile.js` and create `templates`

create `script` in `package.json`

```json
{
  "scripts": {
    "generate": "yarn --no plop --plopfile generators/plopfile.js"
  }
}
```

```
yarn generate layout
```

---

create `.github/workflows/ci.yml`
