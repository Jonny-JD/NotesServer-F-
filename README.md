# Notes — Frontend

Frontend part of the **Notes** full-stack pet project — a web application for creating and browsing public and private notes.

## Tech Stack

- **React** + **TypeScript**
- **Vite** (build tool)
- **React Router** (routing, protected routes)
- **nginx** (serving static files in production)
- **Docker**

## Features

- Create, view, and browse notes
- Public and private notes
- Authentication via session cookies
- Protected routes
- Communication with backend via REST API

## CI/CD Architecture

The project follows a **GitOps approach**: this repository is responsible only for building and publishing the Docker image. Deployment is handled by a separate infrastructure repository.

```
Push to branch
      │
      ▼
GitHub Actions
  ├── docker build -t {dockerhub_user}/notes-frontend:{commit_sha}[-env]
  ├── docker push → Docker Hub
  └── repository_dispatch → NotesServer-Infrastructure
                                     │
                                     ▼
                             Deploy to Kubernetes
                             (bare metal cluster)
```

### Environments

| Branch   | Image tag        | Environment |
|----------|------------------|-------------|
| `master` | `{sha}`          | Production  |
| `feature`| `{sha}-feature`  | Feature     |

Images are always tagged by commit SHA — no `latest` tag, every deployment is reproducible.

## Local Setup

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8080
```

```bash
npm run dev
```

> The backend must be running and accessible at the specified URL.

## Production Build

```bash
npm run build
```

The contents of the `dist/` folder are served via nginx. The Dockerfile includes an nginx config with SPA fallback for React Router to work correctly.

## Related Repositories

- [NotesServer Backend](https://github.com/Jonny-JD/NotesServer-B-) — Java 21, Spring Boot, PostgreSQL
- [NotesServer Autotests](https://github.com/Jonny-JD/NotestServer-Test-) — Selenide, JUnit 5, Allure, Kubernetes, Selenium Grid
- [NotesServer Infrastructure](https://github.com/Jonny-JD/NotesServer-Infrastructure) — Kubernetes (K3s), Helm, Traefik, Let's Encrypt, GitHub Actions

## About

This project was built for my portfolio. It demonstrates:
- Building a SPA with React and TypeScript from scratch
- Session cookie-based authentication with protected routes
- Containerization and publishing images to Docker Hub
- CI/CD pipeline with separated build and deploy stages
- Integration with a Kubernetes-based infrastructure
