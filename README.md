# monorepo-openapi

OpenAPIでbackendとfrontendをいい感じに管理するお試し実装のリポジトリ\
`spec`で管理するOpenAPIのスキーマをマスタとして管理する

## Apps

* [api](apps/api)
* [spec](apps/spec)
* [web](apps/web)

# Tasks

## init

initilize for local development with .env file

```sh
cp apps/api/.env.example apps/api/.env.local
cp apps/web/.env.example apps/web/.env.local
```

## clean

remove generated files/directories for refresh

```sh
find . -name '.turbo' -type d -prune -exec rm -rf '{}' +
find . -name 'build' -type d -prune -exec rm -rf '{}' +
find . -name 'generated' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'pnpm-lock.yaml' -type f -prune -exec rm -rf '{}' +
find . -name 'tsconfig.tsbuildinfo' -type f -prune -exec rm -rf '{}' +
```

## up

up docker compose process

```sh
docker compose up -d --wait --wait-timeout=60
```

## down

down docker compose process

```sh
docker compose down
```

## exec-mysql

connect to mysql database on docker compose

```sh
docker compose exec mysql mysql local_db -ulocal_user -plocal_pass
```

## exec-postgres

connect to postgres database on docker compose

```sh
docker compose exec postgres psql -U local_user -d local_db
```
