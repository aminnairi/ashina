# ashina

Clean and simple dashboard for your self-hosted apps

## Installation

### Requirements

- Docker
- Docker Compose

### Create the working folder

```bash
mkdir ashina
```

### Change the current working folder

```bash
cd ashina
```

### Create the compose file

Copy the content of the [`docker/compose.yml`](./docker/compose.yml) file to your own, or copy the command below to fetch it from the internet.

```bash
curl -O https://raw.githubusercontent.com/aminnairi/ashina/refs/heads/development/docker/compose.yml
```

### Start the dashboard

```bash
docker compose up -d
```

### Stop the dashboard

```bash
docker compose down --remove-orphans --volumes --timeout 0
```

## License

See [`LICENSE`](./LICENSE).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
