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

## Getting started

### Installation:
```bash
npm i --save @theiliad/interpolatejs
```

## Usage
```js
import { interpolation, fraction } from "@theiliad/interpolatejs";

const xValues = [fraction(1, 3), fraction(1, 4), 1];
const yValues = [2, -1, 7];
const pOfx = interpolation(xValues, yValues);
console.log("p(1/3) =", pOfx.evaluate(fraction(1, 3)));
```
