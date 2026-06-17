# James Mullane Portfolio — Fixed Version

This version has been redesigned and cleaned up for software engineering internship applications.

## What changed

- Rebuilt the home page with a stronger internship-focused hero section.
- Added clear calls to action for CV download, projects, GitHub, LinkedIn, and email.
- Rewrote the About page to better position James as a Computer Science & Economics student.
- Reworked the Experience section with stronger, more professional wording.
- Replaced the fragile projects page that depended on `http://localhost:3000` API calls with curated static project data.
- Added stronger project cards with technologies, impact statements, and cleaner layout.
- Built a proper Contact page.
- Reworked the LeetCode page so it does not break during static builds.
- Removed the Google font dependency that caused `next build` to fail when offline.
- Replaced `/public/cv.pdf` with the cleaned resume PDF.
- Fixed lint and TypeScript issues.

## Verified commands

```bash
npm run lint
npm run build
```

Both commands pass in this fixed version.

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Main content file

Most portfolio content now lives in:

```text
src/data/site.ts
```

Edit this file to update projects, skills, links, profile text, and experience.
