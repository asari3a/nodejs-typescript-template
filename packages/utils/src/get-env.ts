/**
 * @file 環境変数を取得するためのユーティリティ関数を提供します。
 */

/**
 * 指定された環境変数の値を取得する
 * @param name 環境変数名
 * @returns 環境変数の値
 * @throws {Error} 指定された環境変数が未設定、または空文字列の場合
 */
export const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`環境変数 ${name}が設定されていません。`);
  }
  return value;
};
