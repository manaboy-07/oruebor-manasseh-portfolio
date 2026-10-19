# Manasseh Oruebor — Next.js portfolio

The portfolio rebuilt with **Next.js App Router, TypeScript, React, GSAP, @gsap/react (useGSAP), and Three.js**. It preserves the charcoal/lime design, orbital 3D hero, content, contact information, and future-exploration labels.

## Start here (Windows / VS Code)

Install a current Node.js LTS release (Node 22 or 24 recommended), unzip this folder, and open it in VS Code.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. `npm ci` uses the included package-lock.json to reproduce the installed versions. No API keys, environment variables, database, or backend are required.

## Production

```sh
npm run typecheck
npm run build
npm start
```

`npm start` serves the previously built production app. Stop it with Ctrl+C. Do not run simultaneous builds in the same folder.

## Editing guide

| Location                          | Edit here                                         |
| --------------------------------- | ------------------------------------------------- |
| src/components/Hero.tsx           | Name, introduction and hero links                 |
| src/components/SelectedWork.tsx   | Featured projects and detailed descriptions       |
| src/data/projects.ts              | Add or remove extra project cards                 |
| src/components/Experience.tsx     | Experience and certifications                     |
| src/components/TechStack.tsx      | Current skills and labelled learning goals        |
| src/components/Personal.tsx       | Hobbies and future explorations                   |
| src/components/Contact.tsx        | Email, phone and contact copy                     |
| src/components/About.tsx          | Biography                                         |
| src/components/Footer.tsx         | Footer links                                      |
| src/app/globals.css               | Colours, layout, typography and responsive styles |
| src/components/MotionProvider.tsx | Scoped GSAP animations and motion state           |
| src/components/OrbitalScene.tsx   | Deferred Three.js scene                           |
| src/app/privacy/page.tsx          | Privacy policy                                    |
| src/app/layout.tsx                | Page metadata and root layout                     |

### Add a project

Append a typed entry to the `projects` array in `src/data/projects.ts`:

```ts
{
  title: "My new project",
  description: "The problem it solves and my contribution.",
  tags: ["Next.js", "NestJS"],
  url: "https://github.com/manaboy-07/your-repository",
},
```

Cards are server rendered, so they appear without waiting for a browser fetch. Featured project case studies are maintained separately in SelectedWork.tsx. Go, C#, Python and AI engineering are intentionally labelled **future explorations**, not current professional skills.

## Architecture

- The page, sections and project cards are Server Components.
- MotionProvider and OrbitalScene are Client Components for browser-only behaviour.
- `useGSAP` scopes selectors and reverts animations/ScrollTriggers when motion is paused or the component unmounts.
- Motion starts disabled for consistent hydration, then follows the operating system's reduced-motion preference. A visible button can override it for the current visit.
- Three.js is imported after initial rendering. Rendering is capped at 30fps, pixel density is limited, and the loop stops off-screen, while the tab is hidden, or when motion is paused.
- Three.js geometries, materials, renderer, observers, events, timeout and animation frames are cleaned up on unmount, including React Strict Mode's mount cycle.
- Local fonts are bundled through CSS and use `font-display: swap`.
- The preloader exits through a short CSS animation and cannot trap clicks. Reduced-motion users skip it.
- Privacy navigation uses Next Link. There are no contact-form services, analytics, third-party font requests or embedded social widgets.

## Deploy

The original ChatGPT Sites edition is independent of this Next.js project. This archive does not change that site or create a GitHub repository.

### Next.js hosting (for example Vercel)

Push the project to a new repository, then import that repository into a Next.js-compatible host. Build with `npm run build`. The root of this ZIP's extracted project is the project root, not `src/`.

### Static export

This portfolio requires no server features. You can produce a static `out/` folder:

PowerShell:

```powershell
$env:STATIC_EXPORT = "1"
npm run build
Remove-Item Env:STATIC_EXPORT
```

Bash:

```sh
STATIC_EXPORT=1 npm run build
```

Deploy the contents of `out/` to a static host. Use a static file server to preview that output; `next start` does not serve export builds.

For GitHub Pages under a repository path, also set `NEXT_PUBLIC_BASE_PATH` to `/your-repository-name` **before building**. Deploy `out/` through a Pages workflow or a dedicated publishing branch with `.nojekyll`. Do not point Pages at this source tree: it contains Next.js source, not the exported HTML. Official guidance: https://nextjs.org/docs/app/guides/static-exports

## Push to a new GitHub repository

First create an empty repository. From this project's folder:

```sh
git init
git add .
git commit -m "Add Next.js TypeScript portfolio"
git branch -M main
git remote add origin https://github.com/manaboy-07/YOUR-REPOSITORY.git
git push -u origin main
```

Replace YOUR-REPOSITORY with the repository you actually created. Do not commit credentials. `.gitignore` excludes node_modules, build output and environment files.

## Formatting

```sh
npm run format
npm run format:check
```

## Licences

Package dependencies keep their upstream licences (including GSAP's standard licence). Local fonts include SIL Open Font License notices in public/fonts/. No blanket open-source licence is assigned to your original code or personal content.

## Validation performed

- Dependency installation completed with exact versions and package-lock.json.
- Standard Next.js production build passed, including TypeScript and static page generation.
- Standalone `npm run typecheck` passed.
- A static export with a repository base path was built and its asset paths checked.
- Interactive browser checks were attempted but preview connectivity was unavailable in the build environment. Browser animation behaviour and responsive appearance still need a local visual check using `npm run dev`.

This conversion is supplied as source code. It has not been pushed to GitHub or deployed over the existing portfolio.
# oruebor-manasseh-portfolio
