import Stack from './Stack';
import { IStack } from './@types';

const postfixAlgorithm = (input: string): number | void => {
  const cleanedInput = cleanInput(input);
  if (!isValid(cleanedInput)) {
    return;
  }

  const stack: IStack <number> = new Stack();
  let result: number | undefined;

  cleanedInput.split('').map((token) => {
    if (isNumber(token)) {
      stack.push({ value: Number(token) });
    } else {
      const rightSide = stack.pop();
      const leftSide = stack.pop();
      if (rightSide && leftSide && rightSide.value && leftSide.value) {
        result = compute(leftSide.value, symbolToOperator(token), rightSide.value);
        if (result !== undefined) {
          stack.push({ value: result });
        }
      }
    }
  });
};

const cleanInput = (input: string): string => {
  return input.replace(' ', '');
};

const isValid = (input: string): boolean => {
  const cleanInput = input.replace(' ', '');
  if (cleanInput.length === 0) {
    return false;
  }

  cleanInput.split('').forEach((character) => {
    if (!isNumber(character) && !isOperator(character)) {
      return false;
    }
  });

  return true;
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

const isNumber = (value: any): boolean => {
  return !isNaN(value);
}

const symbolToOperator = (symbol: string): ((a: number, b: number) => number) | undefined => {
  switch (symbol) {
      case '+': return plus;
      case '-': return minus;
      case '*': return multiply;
      case '/': return divide;
      case '%': return modulo;
      default: return undefined;
  }
}

const compute = (a: number, operator: ((a: number, b: number) => number) | undefined, b: number) => {
  if (operator === undefined) {
    return;
  }

  return operator(a, b);
}

  const plus = (a: number, b: number): number => a + b;

  const minus = (a: number, b: number): number => a - b;

  const multiply = (a: number, b: number): number => a * b;

  const divide = (a: number, b: number): number => a / b;

  const modulo = (a: number, b: number): number => a % b;

export default postfixAlgorithm;
