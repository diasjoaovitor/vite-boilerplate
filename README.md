Vou mostrar o passo a passo de como realizar todas as configurações que utilizo nos meus projetos **ReactJS** usando o [Vite](https://vitejs.dev/)

Baseado no [boilerplate-apps-router](https://github.com/React-Avancado/boilerplate-apps-router) do curso [React Avançado](https://reactavancado.com.br/)

## Passo a Passo

Escrevi o artigo denominado [Como criar um boilerplate para projetos com Next.js](https://www.tabnews.com.br/diasjoaovitor/tutorial-como-criar-um-boilerplate-para-projetos-com-next-js), esse tutorial segue o mesmo modelo, contento partes iguais ao o texto anterior.

### Inicializar o projeto:

Execute os comandos abaixo:

```
mkdir vite-boilerplate
cd vite-boilerplate
npm init
git init
```

Dessa forma, foi criado o arquivo `package.json`, onde deixei no seguinte molde:

```json
{
  "name": "vite-boilerplate",
  "version": "1.0.0",
  "description": "Boilerplate para projetos React utilizando o Vite",
  "repository": "https://github.com/diasjoaovitor/next-boilerplate.git",
  "author": "João Vitor <jvitordiass@outlook.com.br>",
  "license": "MIT"
}
```

### Especificar a versão do Node:

Crie o arquivo `.nvmrc` e adicione a versão a ser utilizada:

```
lts/iron
```

**É obrigatório** deixar uma linha em branco ao final do arquivo para que essa configuração funcione corretamente.

### Configurar o commit linter

Instale o [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter):

```
npm i -D git-commit-msg-linter
```

Essa biblioteca verifica se a mensagem de um `commit` contém um prefixo semântico como `feat`, `fix`, `refactor` e demais convenções.

Crie o arquivo `.gitignore` e adicione a pasta `node_modules`

### Instalar o React, o Vite e configurar o Typescript

Instale o [react](https://www.npmjs.com/package/react) e o [react-dom](https://www.npmjs.com/package/react-dom)

```
npm i react react-dom
```

Instale o [vite](https://www.npmjs.com/package/vite) o [@vitejs/plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc), o [typescript](https://www.npmjs.com/package/typescript) e demais dependências:

```
npm i -D vite @vitejs/plugin-react-swc typescript @types/react @types/react-dom
```

Crie o diretório `src` e adicione os arquivos `App.tsx`, `main.tsx` e `vite-env.d.ts`:

```tsx
export const App = () => {
  return <div>App</div>
}

export default App
```

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

```ts
/// <reference types="vite/client" />
```

Crie o arquivo `vite.config.ts` e `index.html` na raiz do projeto:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
```

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite Boilerplate</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Crie a pasta `public` e adicione o ícone do projeto, no caso acima, o arquivo `vite.svg`

Crie os arquivos `tsconfig.app.json`, `tsconfig.node.json` e `tsconfig.json`

```json
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

```json
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
```

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

1. **`composite`:** Quando definido como `true`, habilita o modo de projeto composto. Isso permite que o TypeScript otimize a compilação em projetos com dependências entre subprojetos. Por exemplo, se você tem um projeto com vários subdiretórios, o modo composto permite que o TypeScript recompile apenas os arquivos afetados em vez de todo o projeto.

2. **`tsBuildInfoFile`:** Especifica o caminho para o arquivo de informações de compilação (`.tsbuildinfo`). Esse arquivo armazena informações sobre a compilação anterior, permitindo compilações incrementais mais rápidas.

3. **`target`:** Define a versão do ECMAScript para a qual o código TypeScript será compilado. No seu caso, está configurado para `ES2020`.

4. **`useDefineForClassFields`:** Quando definido como `true`, permite o uso da sintaxe de campos de classe com `#` para campos privados.

5. **`lib`:** Especifica as bibliotecas de definições de tipo que o TypeScript deve incluir. Aqui, você está usando as bibliotecas `ES2020`, `DOM` e `DOM.Iterable`.

6. **`module`:** Define o formato de módulo de saída. `ESNext` indica que o TypeScript deve usar o formato mais recente de módulo.

7. **`skipLibCheck`:** Quando definido como `true`, evita a verificação de bibliotecas de definições de tipo.

8. **`moduleResolution`:** Define como os módulos são resolvidos. `bundler` é usado para projetos que usam um empacotador (como Webpack).

9. **`resolveJsonModule`:** Permite a importação de arquivos JSON como módulos.

10. **`isolatedModules`:** Habilita a compilação de módulos independentes, sem a necessidade de um arquivo de saída.

11. **`noEmit`:** Quando definido como `true`, impede a geração de arquivos de saída (JavaScript).

12. **`jsx`:** Define o tipo de sintaxe JSX a ser usado. Aqui, está configurado para `react-jsx`.

13. **`strict`:** Ativa várias verificações rigorosas, como `noUnusedLocals`, `noUnusedParameters` e `noFallthroughCasesInSwitch`.

14. **`include`:** Especifica os padrões de inclusão de arquivos no projeto. No seu caso, todos os arquivos dentro do diretório `src` serão incluídos na compilação.

15. **`allowSyntheticDefaultImports`:** Permite que você importe módulos que não têm uma exportação padrão.

Defina `"type": "module"` e adicione os `scripts` no arquivo `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

Adiciona a pasta `dist` no arquivo `.gitignore`

### Configurar as regras do editor e do código

Instale o [módulo](https://www.npmjs.com/package/prettier) e a [extensão](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) do [prettier](https://prettier.io/):

```
npm i -D prettier
```

Crie o arquivo `.prettierrc.json`:

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

- `"trailingComma": "none"`: Isso indica que o Prettier **não deve adicionar vírgulas** ao final de listas, objetos ou parâmetros de função quando eles são formatados em várias linhas.
- `"semi": false`: Isso significa que o Prettier **não deve adicionar ponto e vírgula** ao final de cada instrução.
- `"singleQuote": true`: Isso especifica que o Prettier **deve usar aspas simples** em vez de aspas duplas, sempre que possível.

Adicione os `scripts`:

```json
{
  "scripts": {
    "prettier:check": "prettier --check .",
    "prettier:fix": "prettier --write ."
  }
}
```

Defina o `prettier` como o formatador padrão do VSCode em `Default Formatter` e habilite a opção `Format On Save`

Crie a pasta `.vscode` e inclua o arquivo `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.autoSave": "off",
  "git.autofetch": true
}
```

- `"editor.formatOnSave": true` - Esta opção faz com que o VSCode formate automaticamente o código quando você salva um arquivo. Isso ajuda a manter o código limpo e consistente com as regras de formatação definidas.
- `"editor.defaultFormatter": "esbenp.prettier-vscode"` - Define o **Prettier** como o formatador de código padrão. O Prettier é uma ferramenta popular que suporta muitas linguagens e estilos de codificação.
- `"files.autoSave": "off"` - Desativa o salvamento automático de arquivos. Com essa configuração, os arquivos não serão salvos automaticamente após um período ou quando o foco é alterado; você precisará salvar manualmente suas alterações.
- `"git.autofetch": true` - Quando habilitado, o VSCode buscará automaticamente as alterações mais recentes do seu repositório Git periodicamente. Isso é útil para manter seu repositório local atualizado com as alterações remotas.

Crie o arquivo `.editorconfig`:

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

- `root = true`: Esta configuração sinaliza que este é o arquivo de configuração principal e que o EditorConfig **não deve procurar** por outros arquivos de configuração nas pastas acima.
- `[*]`: Este é um padrão de correspondência que se aplica a **todos os arquivos** no projeto.

- `indent_style = space`: Define que o estilo de indentação deve ser feito com **espaços** em vez de tabulações.

- `indent_size = 2`: Especifica que o tamanho da indentação deve ser de **dois espaços**.

- `end_of_line = lf`: Indica que o final de linha deve ser formatado usando **LF (Line Feed)**, que é o padrão para sistemas Unix e macOS.

- `charset = utf-8`: Define que o conjunto de caracteres do arquivo deve ser **UTF-8**.

- `trim_trailing_whitespace = true`: Quando verdadeiro, remove automaticamente qualquer **espaço em branco no final das linhas** ao salvar o arquivo.

- `insert_final_newline = true`: Garante que haja uma **nova linha no final** do arquivo ao salvar.

O linting é o processo de aplicar regras a uma base de código e destacar padrões ou códigos problemáticos que não aderem a determinadas diretrizes de estilo. ESLint permite que os desenvolvedores descubram problemas com seu código sem a necessidade de executá-lo.

Instale o [eslint](https://eslint.org/docs/latest/use/getting-started), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser), [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks),
[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh) e o [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier):

```
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-config-prettier
```

Crie o arquivo `.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
}
```

Adicione o `script`:

```json
{
  "scripts": {
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

Instale o [lint-staged](https://github.com/lint-staged/lint-staged) e o [husky](https://typicode.github.io/husky/get-started.html)

```

npm i -D lint-staged husky

```

Crie o arquivo `.lintstagedrc.cjs`:

```js
const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `npx prettier --write ${files.join(' --file ')}`,
    `npx eslint --fix ${files.join(' ')} --report-unused-disable-directives --max-warnings 0`
  ]
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}
```

Inicie as configurações do `husky`:

```
npx husky init
```

Dessa forma, foi criado o script `prepare` no arquivo `package.json` e a pasta `.husky`, onde vamos alterar o conteúdo do arquivo `pre-commit` para:

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

### Configurar testes automatizados

Instale as bibliotecas de testes:

```
npm i -D vitest @vitest/ui jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

Crie o arquivo `vitest.setup.ts`:

```ts
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
```

Adicione as configurações no arquivo `vite.config.ts`

```ts
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  }
})
```

Inclua o setup no arquivo `tsconfig.app.json`:

```json
{
  "include": ["src", "./vitest.setup.ts"]
}
```

Adicione os `scripts`:

```json
{
  "scripts": {
    "test": "vitest --run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

Adicione o comando para rodar os testes no arquivo `lintstagedrc.cjs`:

```js
const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `npx prettier --write ${files.join(' --file ')}`,
    `npx eslint --fix ${files.join(' ')} --report-unused-disable-directives --max-warnings 0`,
    `npx vitest related ${files.join(' ')} --passWithNoTests --no-file-parallelism --run`
  ]
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}
```

### Configurar Integração Contínua

Adicione o script `"test:ci": "vitest --no-file-parallelism --run"` no `package.json` e crie o arquivo `ci.yml` na pasta `.github/workflows`:

```yml
name: ci
on: [pull_request] # O workflow é acionado quando um pull request é aberto, sincronizado ou reaberto.

jobs:
  build: # Este é o trabalho de construção que será executado.
    runs-on: ubuntu-latest # O trabalho será executado na última versão do Ubuntu disponível.
    steps: # Seguem os passos que serão executados em sequência.
      - name: Checkout Repository
        uses: actions/checkout@v4 # Este passo faz o checkout do seu repositório usando a ação checkout v4.

      - name: Setup Node
        uses: actions/setup-node@v4 # Este passo configura o ambiente Node.js usando a ação setup-node v4.
        with:
          node-version: lts/iron # Define a versão do Node.js para a versão LTS mais recente chamada "Iron".
          cache: 'npm' # Habilita o cache para o gerenciador de pacotes NPM.

      - name: Install dependencies
        run: npm install # Este passo instala as dependências listadas no arquivo package-lock.json.

      - name: Linting
        run: npm run lint # Este passo executa o linting no código para verificar erros de estilo.

      - name: Testing
        run: npm run test:ci # Este passo executa os testes definidos para o projeto.

      - name: Build
        run: npm run build # Este passo constrói o projeto.
```

### Configurar gerador de componentes

Instale o [Plop](https://www.npmjs.com/package/plop)

```
npm i -D plop
```

Crie a pasta `generators` na raiz do projeto e adicione o arquivo `plopfile.js`:

```js
export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
```

Crie o arquivo `.prettierignore` e ignore todos os templates:

```
generators/templates
```

Dentro de `generators`, crie o templates `index.tsx.hbs` e `test.tsx.hbs`:

```tsx
export const {{pascalCase name}} = () => {
  return (
    <div>{{pascalCase name}}</div>
  )
}
```

```tsx
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { {{pascalCase name}} } from '.'

describe('<{{pascalCase name}} />', () => {
  test('should render component', () => {
    render(<{{pascalCase name}} />)
    expect(screen.getByText('{{pascalCase name}}')).toBeInTheDocument()
  })
})
```

Adicione o `script`:

```json
{
  "scripts": {
    "generate": "plop --plopfile generators/plopfile.js"
  }
}
```

Crie um componente:

```
npm run generate MyComponent
```

Assim, foi gerado um componente e um teste seguindo o padrão dos templates.

### Configurar o alias

set options in `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Adicione as configurações no arquivo `vite.config.json`

```ts
/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/shared')
    }
  }
})
```

Dentro da pasta `components`, crie o arquivo `index.ts` e exporte o componente:

```
export * from './MyComponent'
```

Essas configurações ajudam a importar todos os componentes exportados nesse arquivo através do alias `@/components` e podem ser replicadas para todas as pastas presentes em `src`

### Considerações finais

Este é um `boilerplate` genérico para projetos `React` utilizando o `Vite`.

O repositório está disponível no [meu perfil do GitHub](https://github.com/diasjoaovitor/vite-boilerplate.git) e está aberto a contribuições.
