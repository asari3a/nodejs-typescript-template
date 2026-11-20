# Node.js TypeScript Template

## セットアップ

### パッケージの作成

`packages`下に、npmパッケージを作成する。

- package.json

```json
{
  "name": "@app/shared",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    }
  },
}
```

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true,
    "strict": true
  },
  "include": ["src"]
}
```

## メンテナンス

### パッケージのバージョンアップ

最新の安定版に更新する。

```sh
pnpm -r update hono --latest
```
