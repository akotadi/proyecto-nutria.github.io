module.exports = {
  'src/**/*.{js,jsx,ts,tsx,json,md}': ['eslint --fix', 'prettier --write'],
  'src/**/*.{css,scss}': ['stylelint src/**/*.css --fix', 'prettier --write'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
};
