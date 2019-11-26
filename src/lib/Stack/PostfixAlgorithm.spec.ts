import postfixAlgorithm from './PostfixAlgorithm';

describe('Postfix Algorithm', () => {
  it('should returns error if fed invalid input', () => {
    expect(postfixAlgorithm('aaa')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm('')).toEqual({ message: 'Invalid input' });
  });

  it('shouldreturns undefined if fed numbers only', () => {
    expect(postfixAlgorithm('123')).toBeUndefined();
  });

  it('should returns undefined if fed operators only', () => {
    expect(postfixAlgorithm('+/-')).toBeUndefined();
  });
});