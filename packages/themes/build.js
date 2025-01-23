import * as esbuild from 'esbuild'
import pkg from './package.json' assert { type: 'json' }

const args = process.argv.slice(2)

const dev = args.includes('--dev')
const minify = !dev
const watch = args.includes('--watch')

// 라이브러리의 번들에서 제외할 속성들
const external = Object.keys({
  ...pkg.devDependencies,
  ...pkg.peerDependencies,
})

const baseConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: 'dist',
  external,
}

Promise.all([
  esbuild.context({
    ...baseConfig,
    format: 'esm',
  }),
  esbuild.context({
    ...baseConfig,
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  }),
])
  .then(async (ctxs) => {
    console.log('build success')

    if (watch) {
      await Promise.all(ctxs.map((ctx) => ctx.watch()))
      console.log('watching')
    }
  })
  .catch((e) => {
    console.error('Build failed', e)
    process.exit(1)
  })
