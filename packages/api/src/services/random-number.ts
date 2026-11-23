import { randomInt } from 'node:crypto';

export const randomNumber = (): number => {
  return randomInt(1, 11);
};
