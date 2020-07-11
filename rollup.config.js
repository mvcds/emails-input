import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import inlineSvg from 'rollup-plugin-inline-svg'
import babel from '@rollup/plugin-babel'

import pkg from './package.json'

const plugins = [
  resolve({
    browser: true
  }),
  commonjs(),
  inlineSvg(),
  babel({
    babelHelpers: 'runtime',
    extensions: ['.js'],
    exclude: ['node_modules/@babel/**'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: 'defaults'
        }
      ]
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-transform-runtime',
        {
          useESModules: true
        }
      ]
    ]
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
