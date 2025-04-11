# Vercel Deployment Guide for Canvas Notes App

This guide explains how to deploy the Canvas Notes App to Vercel.

## Deployment Configuration

The following files have been configured for Vercel deployment:

- **Root vercel.json**: Main configuration file at the repository root that tells Vercel where to find your project
- **App vercel.json**: Secondary configuration inside the app directory
- **.npmrc**: Ensures smooth package installation with modern React
- **_redirects**: Handles client-side routing redirects
- **package.json**: Includes a dedicated vercel-build script and engine specifications

### Important Note About Project Location

Since this project is located in a subdirectory (`canvas_apps/canvas-notes-app`) of the repository, it's crucial to:

1. Use the root `vercel.json` file to correctly specify the project location
2. Set the correct **Root Directory** in Vercel dashboard (`./` for using the root vercel.json configuration)

## Manual Deployment Steps

### Using Vercel CLI

1. Install the Vercel CLI globally if you haven't already:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

3. From the project root (`canvas-notes-app` directory), deploy the app:
   ```bash
   vercel
   ```

4. Follow the CLI prompts:
   - Set up and deploy: `Y`
   - Which scope (usually your personal account or team)
   - Link to existing project: `N` (unless you've previously deployed this project)
   - Project name: Accept default or provide a custom name
   - Directory: `.` (current directory)
   - Override settings: `N` (the vercel.json file will be used)

5. Once deployed, Vercel will provide a URL where your app is live.

### Using Vercel Dashboard

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Visit [vercel.com](https://vercel.com) and log in
3. Click "New Project"
4. Import your project from Git or upload your build files
5. Configure the project as needed (most settings should be auto-detected)
6. Click "Deploy"

## Setting Up Automatic Deployments

For a CI/CD workflow, connect your GitHub repository to Vercel:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and log in
3. Click "New Project"
4. Import your repository
5. Configure as needed
6. Click "Deploy"

With this setup, every push to your main branch will trigger a new deployment automatically. You can also set up preview deployments for pull requests.

## Environment Variables

If your app requires environment variables:

1. Locally, create a `.env.local` file based on the provided `.env.example`
2. In Vercel:
   - Go to your project settings
   - Navigate to the "Environment Variables" tab
   - Add your variables with the same names used in the app
   - Select which environments (Production, Preview, Development) should use each variable

## Custom Domains

To use a custom domain:

1. Go to your project settings in Vercel
2. Navigate to the "Domains" tab
3. Add your domain
4. Follow the instructions for DNS configuration

## Troubleshooting

### Build Errors

- Check build logs in Vercel dashboard
- Ensure all dependencies are correctly listed in package.json
- Verify node version compatibility (set in package.json "engines")

### Route Issues

- Check that the routing configuration in vercel.json matches your app's needs
- For client-side routing, ensure _redirects file is working correctly

### Environment Variables

- Make sure environment variables are correctly set in Vercel
- Variable names should match exactly what's used in the code (case-sensitive)
- Remember that REACT_APP_ prefix is required for environment variables in Create React App

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
