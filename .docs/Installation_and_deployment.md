# Installation and Deployment

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional, for containerized development)

## Local Development

### Using npm

```bash
# Install dependencies
npm install

# Start development server (hot reload enabled)
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Using Docker

```bash
# Start the development container
cd infra/local
docker compose up -d
```

The app will be available at [http://localhost:2708](http://localhost:2708).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run start` | Alias for `npm run dev` |
| `npm run build` | Build for production (outputs to `build/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on source files |

## Production Deployment

### Infrastructure

The production setup uses:
- **Docker** - Application containerization
- **Traefik** - Reverse proxy with automatic HTTPS

### CI/CD

Deployment is automated via GitHub Actions. Pushing to the `main` branch triggers:

1. SSH connection to the cloud server
2. Git pull of latest changes
3. Docker Compose rebuild and restart

### Manual Deployment

```bash
cd infra/prod
export APP_DOMAIN="your-domain.com"
docker compose up -d --build
```

### Required Secrets (GitHub Actions)

| Secret | Description |
|--------|-------------|
| `SSH_HOST` | Server hostname/IP |
| `SSH_USER` | SSH username |
| `SSH_KEY` | SSH private key |
| `SSH_PORT` | SSH port |
| `APP_DOMAIN` | Production domain |
| `GH_TOKEN` | GitHub token for repo access |
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |
