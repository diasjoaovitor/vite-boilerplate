module.exports = {
  '*.{js,jsx,ts,tsx}': filenames => [
    `yarn prettier --write ${filenames.join(' ')}`,
    `yarn eslint --fix --ext .ts,.tsx .`,
    `yarn test -- --findRelatedTests ${filenames.join(' ')} --passWithNoTests`
  ]
}
