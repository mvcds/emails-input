import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import svg from 'rollup-plugin-svg-icons'

import pkg from './package.json'

const plugins = [
  resolve({
    browser: true
  }),
  commonjs(),
  svg({
    inputFolder: 'public/icons',
    output: 'dist/bundle.svg'
  })
]

export default [
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins
  }
]
