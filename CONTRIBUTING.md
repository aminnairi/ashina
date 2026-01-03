## Contributing

### Requirements

- Git
- Docker
- Docker Compose

### Setup the development environment

```bash
git clone https://github.com/aminnairi/ashina
cd ashina
docker compose up --build -d
docker compose exec ashina npm i
```

### Run the development server app

```bash
docker compose exec ashina npm -w apps/server run dev
```

### Run the development client app

```bash
docker compose exec ashina npm -w apps/client run dev
```

### Shutdown the development containers

```bash
docker compose down --remove-orphans --volumes --timeout 0
```

### Build the production app

```bash
docker compose build
```

### Test the production app

```bash
cd docker
docker compose up -d
```

### Push production image

```bash
docker login ghcr.io/aminnairi/ashina -u aminnairi -p <CLASSIC_PERSONNAL_ACCESS_TOKEN>
docker compose push
docker logout
```
