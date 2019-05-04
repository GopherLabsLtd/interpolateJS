<p align="center">
	<h1 align="center">interpolateJS</h1>
	<p align="center">
		Lagrange interpolation to the rescue!
		<br /><br />
		<a href="https://www.npmjs.com/package/@theiliad/interpolatejs">
			<img src="https://img.shields.io/npm/v/@theiliad/interpolatejs.svg" />
		</a>
		<a href="https://github.com/GopherLabsLtd/interpolateJS/blob/master/LICENSE.md">
		    <img src="https://img.shields.io/npm/l/@theiliad/interpolatejs.svg" alt="license">
		</a>
	</p>
</p>

## Intro
InterpolateJS constructs a linear interpolation function `p(x)` for your provided set of x and y-values, using the Lagrange basis polynomials.

!["Lagrange basis polynomials"](./docs/basis_polynomial.svg)

Using `.evaluate()` you can then provide an x-value to the function, and get an interpolated y-value.

## Getting started

### Installation:
```bash
npm i --save @theiliad/interpolatejs
```

## Usage
```js
import { interpolation, fraction } from "@theiliad/interpolatejs/index";

const xValues = [fraction(1, 3), fraction(1, 4), 1];
const yValues = [2, -1, 7];
const pOfx = interpolation(xValues, yValues);

console.log("p(1/3) =", pOfx.evaluate(fraction(1, 3)));
// ==> p(1/3) = 2
```
