const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `npx eslint --fix ${files.join(' ')} --report-unused-disable-directives --max-warnings 0`,
    `npx prettier --write ${files.join(' --file ')}`,
    `npx vitest related ${files.join(' ')} --passWithNoTests --no-file-parallelism --run`
  ]
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}
