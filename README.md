# ashina

Clean and simple dashboard for your self-hosted apps

## Installation

### Requirements

- Docker
- Docker Compose

### Setup

```bash
mkdir ashina
cd ashina
curl -O https://raw.githubusercontent.com/aminnairi/ashina/refs/heads/development/docker/compose.yml
```

### Start

```bash
docker compose up -d
```

## Development

### Requirements

- Git
- Docker
- Docker Compose

### Setup

```bash
git clone https://github.com/aminnairi/ashina
cd ashina
docker compose up --build -d
docker compose exec ashina npm i
```

### Server

```bash
docker compose exec ashina npm -w apps/server run dev
```

### Client

```bash
docker compose exec ashina npm -w apps/client run dev
```

## Build

```bash
docker compose build
```

## Push

```bash
docker compose push
```
