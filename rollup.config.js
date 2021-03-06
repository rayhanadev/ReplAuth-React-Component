const { babel } = require('@rollup/plugin-babel');
const { nodeResolve: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const { builtinModules } = require('module');
const { name, dependencies } = require('./package.json');

module.exports = {
	input: 'src/lib/index.js',
	output: [
		{
			file: `dist/umd/${name}-umd.js`,
			format: 'umd',
			preferConst: true,
			sourcemap: true,
			name: 'ReplAuthButton',
			globals: {
				react: 'React',
			},
		},
		{
			file: `dist/iife/${name}-iife.js`,
			format: 'iife',
			preferConst: true,
			sourcemap: true,
			name: 'ReplAuthButton',
			globals: {
				react: 'React',
			},
		},
		{
			file: `dist/common/${name}-common.js`,
			format: 'cjs',
			preferConst: true,
			sourcemap: true,
		},
		{
			file: `dist/esm/${name}-esm.js`,
			format: 'esm',
			preferConst: true,
			sourcemap: true,
		},
	],
	plugins: [
		babel({
			babelHelpers: 'bundled',
			exclude: '**/node_modules/**'
		}),
		commonjs(),
		resolve(),
		terser()
	],
	external: [...builtinModules, ...Object.keys(dependencies)],
};