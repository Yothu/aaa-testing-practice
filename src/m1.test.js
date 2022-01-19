import { f1 } from './m1';
jest.mock('./m2');

test('should print 2', () => {
  const number = 0;
  const result = f1(number);
  expect(result).toBe(1);
});
