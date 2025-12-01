# Deployment Options

This project is ready to be deployed. Below are simple, reliable options to make the site public and persistent.

1) GitHub Pages (automatic via GitHub Actions)

- Steps:
  1. Create a GitHub repository and push this project to the `main` branch.
  2. The included GitHub Action (`.github/workflows/deploy.yml`) will run on push to `main`, build the site, and publish the `dist/` folder to the `gh-pages` branch.
  3. Enable GitHub Pages in the repo settings (Site from `gh-pages` branch). Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

- Notes:
  - The app uses `HashRouter`, so client-side routing works on static hosting.
  - No additional configuration is required once the repo is pushed.

2) Netlify (recommended for easy continuous deploys)

- Steps:
  1. Create an account at https://app.netlify.com/.
  2. Click "New site from Git" and connect your GitHub repository.
  3. Set build command: `npm run build` and publish directory: `dist`.
  4. Netlify will build and host the site. The `netlify.toml` is included.

3) Vercel

- Steps:
  1. Create an account at https://vercel.com/ and import the Git repository.
  2. Set the framework to "Other" and build command `npm run build`, output directory `dist`.

4) Manual upload / other hosts

- You can also upload the generated `dist/` folder to any static host (S3, Cloudflare Pages, FTP host, etc.).

Helpful commands (run locally before pushing):

```powershell
# Build locally
npm ci
npm run build

# Preview locally (already added as helpful scripts)
npm run serve
# or to open built dist/index.html
npm run open-dist
```

If you want, I can push this repository to a new GitHub repo for you and trigger the GitHub Actions deployment — say "Please push to GitHub" and give me the repo name you want. Alternatively I can walk you through connecting to Netlify or Vercel.
