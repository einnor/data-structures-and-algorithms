import postfixAlgorithm from './PostfixAlgorithm';

describe('Postfix Algorithm', () => {
  it('should returns error if fed invalid input', () => {
    expect(postfixAlgorithm('aaa')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm('aaa bbb')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm('')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm('   ')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm(' a ')).toEqual({ message: 'Invalid input' });
    expect(postfixAlgorithm('+/-')).toEqual({ message: 'Invalid input' });
  });

  it('shouldreturns undefined if fed numbers only', () => {
    expect(postfixAlgorithm('123')).toBeUndefined();
    expect(postfixAlgorithm('123 456')).toBeUndefined();
    expect(postfixAlgorithm('123 456 7')).toBeUndefined();
  });

  it('should returns undefined if fed operators only', () => {
    expect(postfixAlgorithm(' + / - ')).toBeUndefined();
  });

  it('should evaluate correctly when fed valid input', () => {
    expect(postfixAlgorithm('500 40 +')).toBe(540);
    expect(postfixAlgorithm('2 3 1 * + 9 -')).toBe(-4);
    expect(postfixAlgorithm('100 200 + 2 / 5 * 7 +')).toBe(757);
    expect(postfixAlgorithm('20 50 3 6 + * * 300 / 2 -')).toBe(28);
  });
});