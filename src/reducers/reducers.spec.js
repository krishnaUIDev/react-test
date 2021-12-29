import elements from './elements-reducer';

describe('Elements', () => {
  it('Returns the initial state of elements', () => {
    expect(elements(undefined, {})).toEqual([]);
  });
});
