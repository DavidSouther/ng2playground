import {UppercasePipe} from './uppercase-pipe';

export const test = describe('UppercasePipe', () => {
  let pipe: UppercasePipe;
  beforeEach(() => {
    pipe = new UppercasePipe();
  });

  it('transforms "abc" to "ABC"', () => {
    expect(pipe.transform('abc')).toBe('ABC');
  });

  it('transforms "abc def" to "ABC DEF"', () => {
    expect(pipe.transform('abc def')).toBe('ABC DEF');
  });

  it('leaves "ABC DEF" as is', () => {
    expect(pipe.transform('ABC DEF')).toBe('ABC DEF');
  });
});