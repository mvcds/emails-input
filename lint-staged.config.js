module.exports = {
  '**/*.js': () => 'npm run lint',
  '(src|e2e)/**/*.js': () => [
    'npm run ghp',
    'git add docs',
    'npm run dev'
  ],
  'src/icons/*.svg': () => [
    'npm run ghp',
    'git add docs'
  ],
  'docs/*.*': () => 'npm run dev'
}
