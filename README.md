# uniruddh.github.io

Personal site for Aniruddh Bhilvare. Astro 7 + Tailwind 4, deployed to GitHub Pages by GitHub Actions.

**Live:** https://uniruddh.github.io

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
```

## Editing content

All copy lives in `src/data/` as JSON. You should not need to touch a component to update the site.

| File | Controls |
|---|---|
| `profile.json` | Name, title, tagline, About paragraphs, email, links, CV filename |
| `focus.json` | The "What I'm building now" section |
| `experience.json` | Work history — add a new object at the top |
| `projects.json` | Selected projects grid |
| `skills.json` | Skill groups and chips (`featured: true` renders in the accent colour) |
| `credentials.json` | Education and publications |

Adding a job: prepend an object to `experience.json` and set `"current": true` on it (and `false` on the previous one — that flag drives the accent dot on the timeline).

Adding a publication link: fill the empty `url` field in `credentials.json` and the title becomes a link automatically.

## Replacing the CV

Drop the new PDF at `public/Aniruddh-Bhilvare-Resume.pdf`, keeping the filename. If you rename it, update `resumeFile` in `profile.json`.

## Regenerating the social card

`public/og-image.png` is a 1200×630 PNG rendered from an HTML template. To change it, edit the markup and re-screenshot at that exact viewport — the dimensions are declared in the `og:image:width` / `height` meta tags and must match.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. No manual step.

The repo Pages source must be set to **GitHub Actions** (Settings → Pages), not "Deploy from a branch". If that's wrong the workflow goes green and the site 404s.

## Notes

- This is a *user site* (repo name matches the username), so it serves from the domain root and `astro.config.mjs` needs no `base` value.
- The only client-side JavaScript is the theme toggle and a scroll-reveal observer. Both degrade gracefully with JS disabled.
- Dark mode is class-based, set before first paint by an inline script in `Layout.astro` to avoid a flash of the wrong theme.
