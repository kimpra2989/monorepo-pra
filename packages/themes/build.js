import run from '@fc/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})