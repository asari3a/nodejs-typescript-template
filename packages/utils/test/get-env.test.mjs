import { afterEach, expect, test, vi } from 'vitest';

import { getEnv } from '../src/get-env.ts';

const name = 'UTILS_GET_ENV_TEST_VALUE';

afterEach(() => {
  vi.unstubAllEnvs();
});

test('指定した環境変数の値を取得できる', () => {
  vi.stubEnv(name, '0');

  expect(getEnv(name)).toBe('0');
});

test.each([undefined, ''])(
  '環境変数が設定されていない場合もしくは値が空文字列の場合、エラーを投げる',
  (value) => {
    vi.stubEnv(name, value);

    expect(() => getEnv(name)).toThrow(new Error(`環境変数 ${name}が設定されていません。`));
  },
);
