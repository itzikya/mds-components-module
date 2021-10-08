import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import url from 'postcss-url';

const packageJson = require('./package.json');

export default {
	input: 'src/index.js',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			exports: 'named',
		},
		{
			file: packageJson.module,
			format: 'es',
			exports: 'named',
		},
	],
	external: ['react', 'react-dom', 'prop-types'],
	plugins: [
		peerDepsExternal(),
		resolve(),
		babel({
			exclude: '/node_modules/**',
			presets: ['@babel/env', '@babel/preset-react'],
		}),
		commonjs(),
		postcss({
			plugins: [
				url({
					url: 'inline', // enable inline assets using base64 encoding
					maxSize: 10, // maximum file size to inline (in kilobytes)
					// fallback: 'copy', // fallback method to use if max size is exceeded
				}),
			],
		}),
		image(),
	],
};
