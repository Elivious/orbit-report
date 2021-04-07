import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite('bob', 'bob', 'bob', 'true', true)).toBeTruthy();
  });
});
