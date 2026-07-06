# James Mullane — Portfolio

The source for [jamesmullane05.github.io](https://jamesmullane05.github.io), my personal software engineering portfolio.

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- Static export hosted on GitHub Pages

## Local development

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The production command creates a static site in `out/`.

## Deployment

Pushes to `master` run the GitHub Pages workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies with Node.js 24, exports the site, and publishes the `out/` directory.
