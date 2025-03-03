# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. This document provides information about the deployment configuration and troubleshooting tips.

## Deployment Configuration

### GitHub Actions Workflow

The deployment is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. This workflow:

1. Triggers automatically when changes are pushed to the `main` branch
2. Can also be triggered manually from the GitHub Actions tab
3. Sets up Node.js and installs dependencies
4. Builds the VitePress site
5. Deploys the built site to GitHub Pages

### VitePress Configuration

The VitePress configuration in `docs/.vitepress/config.mjs` includes:

```javascript
export default defineConfig({
  base: '/strategy_2025/', // Base path for GitHub Pages
  // other configuration...
})
```

The `base` path is set to match your repository name, which is required for GitHub Pages to correctly resolve assets.

### Special Files

- `.nojekyll`: Located in `docs/.vitepress/public/`, this empty file prevents GitHub Pages from processing the site with Jekyll.
- `CNAME`: Located in `docs/.vitepress/public/`, this file is used if you want to use a custom domain with GitHub Pages.

## Setting Up GitHub Pages

To enable GitHub Pages for your repository:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment", set the Source to "GitHub Actions"
4. The workflow will handle the rest

## Troubleshooting

### Assets Not Loading

If assets (CSS, JavaScript, images) are not loading:

- Check that the `base` path in `config.mjs` matches your repository name
- Ensure all asset paths in your content are relative, not absolute

### Deployment Failures

If the GitHub Actions workflow fails:

1. Check the workflow logs for specific errors
2. Ensure your repository has the necessary permissions set up
3. Verify that the build process works locally with `npm run docs:build`

### Custom Domain Issues

If using a custom domain:

1. Uncomment and update the domain in the `CNAME` file
2. Configure your DNS provider as per GitHub's documentation
3. In your repository settings, add the custom domain in the GitHub Pages section

## Local Testing

To test the build locally before deploying:

```bash
# Build the site
npm run docs:build

# Preview the built site
npm run docs:preview
```

This will build the site with the GitHub Pages base path and allow you to preview it locally.

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [VitePress Deployment Guide](https://vitepress.dev/guide/deploy)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
