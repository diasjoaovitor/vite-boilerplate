import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const indexPath = path.resolve(__dirname, '../src/components/index.ts')

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
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      () => {
        if (!fs.existsSync(indexPath)) {
          const dir = path.dirname(indexPath)
          fs.mkdirSync(dir, { recursive: true })
          fs.writeFileSync(indexPath, '')
        }
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        template: "export * from './{{pascalCase name}}'"
      },
      () => {
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
