# monorepo-openapi

OpenAPIでbackendとfrontendをいい感じに管理するお試し実装のリポジトリ\
`spec`で管理するOpenAPIのスキーマをマスタとして管理する

## Apps

* [api](apps/api)
* [spec](apps/spec)
* [web](apps/web)

## Tasks

### init

```sh
cp apps/api/.env.example apps/api/.env.local
cp apps/web/.env.example apps/web/.env.local
```

### clean

```sh
find . -name 'build' -type d -prune -exec rm -rf '{}' +
find . -name 'generated' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
find . -name 'tsconfig.tsbuildinfo' -type f -prune -exec rm -rf '{}' +
```

### up

```sh
docker compose up -d --wait --wait-timeout=60
```

### down

```sh
docker compose down
```

### exec-postgres

```sh
docker compose exec postgres psql -U local_user -d local_db
```
