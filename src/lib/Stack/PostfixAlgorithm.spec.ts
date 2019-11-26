import postfixAlgorithm from './PostfixAlgorithm';

describe('Postfix Algorithm', () => {
  it('returns error if fed invalid input', () => {
    expect(postfixAlgorithm('aaa')).toEqual({ message: 'Invalid input' });
  });
});