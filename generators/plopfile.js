import fs from 'fs'
import path from 'path'

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
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        template: "export * from './{{pascalCase name}}'"
      },
      () => {
        const __dirname = path.dirname(new URL(import.meta.url).pathname)
        const indexPath = path.resolve(__dirname, '../src/components/index.ts')
        const content = fs.readFileSync(indexPath, 'utf-8')
        const lines = content.split('\n')
        const updatedContent =
          lines
            .filter((line) => line.trim() !== '')
            .sort()
            .join('\n') + '\n'
        fs.writeFileSync(indexPath, updatedContent)
      }
    ]
  })
}
