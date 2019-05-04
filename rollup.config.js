import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";

export default {
	input: 'src/index.ts',
	output: [
		{
			file: `dist/index.js`,
			format: 'cjs'
		},
		{
			file: `dist/${pkg.module}`,
			format: 'es'
		},
		{
			file: `dist/${pkg.browser}`,
			format: 'iife',
			name: 'interpolateJS'
		}
	],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		terser()
	]
};
