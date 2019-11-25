import Stack from './Stack';
import { IStack } from './@types';

const postfixAlgorithm = (input: string): number | void => {
  if (!isValid(input)) {
    return;
  }

  // input.split(/[\s,]+/)
  const stack: IStack <number> = new Stack();
};

const isValid = (input: string): boolean => {
  if (input.length === 0) {
    return false;
  }

  return false;
};

const isOperator = (value: string): boolean => {
  switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
          return true;
      default:
          return false;
  }
}

const symbolToOperator = (symbol: string) => {
  switch (symbol) {
      case '+': return plus;
      case '-': return minus;
      case '*': return multiply;
      case '/': return divide;
      case '%': return modulo;
  }
}

const compute = (a: number, operator: (a: number, b: number) => number, b: string) =>
  operator(a, b);

  const plus = (a: number, b: number) => a + b;

  const minus = (a: number, b: number) => a - b;

  const multiply = (a: number, b: number) => a * b;

  const divide = (a: number, b: number) => a / b;

  const modulo = (a: number, b: number) => a % b;

export default postfixAlgorithm;
