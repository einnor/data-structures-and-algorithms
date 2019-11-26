import postfixAlgorithm from './PostfixAlgorithm';

describe('Postfix Algorithm', () => {
  it('returns error if fed invalid input', () => {
    expect(postfixAlgorithm('aaa')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm('')).toEqual({ message: 'Invalid input' });
  });

  it('returns undefined if fed numbers only', () => {
    expect(postfixAlgorithm('123')).toBeUndefined();
  });
});