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

You can also use a [Docker Context](https://docs.docker.com/engine/manage-resources/contexts/) if you want to deploy the container directly to your VPS.

> [!IMPORTANT]
> If you just purchased your VPS, you'll need to [install Docker](https://docs.docker.com/engine/install/) before running the following command.

```bash
docker context create --docker host=ssh://user@1.2.3.4 domain.com
docker -c domain.com compose up -d
```

> [!WARNING]
> You'll need to check that you have a working SSH connexion if you want to use a [Docker Context](https://docs.docker.com/engine/manage-resources/contexts/). Please make sure it is working before running the above command.

### Stop the dashboard

```bash
docker compose down --remove-orphans --volumes --timeout 0
```

If using a [Docker Context](https://docs.docker.com/engine/manage-resources/contexts/), use the following command.

```bash
docker -c domain.com compose down --remove-orphans --volumes --timeout 0
```

## License

See [`LICENSE`](./LICENSE).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).
