import serve from 'rollup-plugin-serve'

import rollup from './rollup.config';

const webserver =serve({
  open: true,
  contentBase: ['dist', 'public'],
})

export default rollup.map(c => ({
  ...c,
  plugins: [
    webserver
  ]
}));
