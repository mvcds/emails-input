import serve from 'rollup-plugin-serve'

import rollup from './rollup.config'

const webserver = serve({
  open: true,
  contentBase: ['dist', 'docs']
})

export default rollup.map(c => ({
  ...c,
  plugins: [
    ...c.plugins,
    webserver
  ]
}))
