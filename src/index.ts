import {
    get,
    evaluateFunc
} from "./utils";

export const fraction = (nominator, denominator) => () => nominator / denominator;

class PofX {
    xValues = [];
    yValues = [];
    cardinalPolynomial = [];

    constructor(xValues, yValues) {
        this.xValues = xValues;
        this.yValues = yValues;

        this.generateCardinalPolynomial();
    }

    generateCardinalPolynomial = () => {
        const n = this.yValues.length;

        // Generate the cardinal polynomial
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!this.cardinalPolynomial[i]) {
                    this.cardinalPolynomial[i] = {
                        coeff: 1,
                        functions: []
                    };
                }

                if (i !== j) {
                    this.cardinalPolynomial[i].coeff =
                        this.cardinalPolynomial[i].coeff *
                            (1 / (evaluateFunc(get(this.xValues, i)) - evaluateFunc(get(this.xValues, j))));

                    this.cardinalPolynomial[i].functions.push(
                        x => evaluateFunc(x) - evaluateFunc(this.xValues[j])
                    );
                }
            }
        }
    }

    evaluate = x => {
        let xVal = evaluateFunc(x);
        let result = 0;

        this.cardinalPolynomial.forEach((polynomialItem, i) => {
            let lifx = polynomialItem.coeff * this.yValues[i];

            if (lifx !== 0) {
                polynomialItem.functions.forEach(func => {
                    lifx = lifx * func(xVal);
                });
    
                if (lifx !== 0) {
                    result = +lifx;
                }
            }
        });

        return result;
    };
}

export const interpolation = (xValues, yValues) => new PofX(xValues, yValues);
