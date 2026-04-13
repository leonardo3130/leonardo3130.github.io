# Leonardo Po Portfolio - Liquid Data Atrium

React + TypeScript portfolio with a persistent Three.js / React Three Fiber scene.

## Stack

- React 19 + Vite
- React Router
- Three.js + React Three Fiber + Drei
- React Postprocessing (Bloom, DOF, noise, vignette)
- Tailwind CSS v4

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

GitHub Actions workflow in `.github/workflows/pages-deploy.yaml` builds `dist/` and deploys to GitHub Pages.
