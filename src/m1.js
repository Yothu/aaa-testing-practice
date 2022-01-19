import { f2 } from './m2';

export const f1 = (n) => {
  console.log('M1.JS');
  n = f2(n);
  return n ;
}
