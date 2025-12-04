# Vercel Deployment Guide

## Environment Variables

Configure these environment variables in your Vercel project settings:

### Required Variables

1. **OPENAI_API_KEY**
   - Your OpenAI API key
   - Must be created within the same org & project as your Agent Builder
   - Get from: https://platform.openai.com/api-keys

2. **NEXT_PUBLIC_CHATKIT_WORKFLOW_ID**
   - Your ChatKit workflow ID (starts with `wf_...`)
   - Get from: https://platform.openai.com/agent-builder (after clicking "Publish")

### Optional Variables

3. **CHATKIT_API_BASE**
   - Custom API base URL
   - Defaults to `https://api.openai.com` if not set

4. **DOMAIN_PK** (if required)
   - Domain verification key for OpenAI domain allowlist
   - Use when configuring domain verification in OpenAI dashboard
   - **Note:** Check `.vercel-secrets.local` file locally for your domain key (not committed to git)

## Deployment Steps

1. **Import Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import: `rahulr4z/ecommerce-ai-agent-support`

2. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables listed above
   - Make sure to set them for Production, Preview, and Development environments as needed

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy

4. **Domain Allowlist**
   - After deployment, get your Vercel domain (e.g., `your-project.vercel.app`)
   - Add it to [OpenAI Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
   - Use the domain key from `.vercel-secrets.local` if required during verification
   - The domain key is stored locally and NOT committed to the repository for security

## Important Notes

- Never commit sensitive keys or tokens to the repository
- All environment variables should be set in Vercel dashboard, not in code
- The domain key should only be used during domain verification in OpenAI dashboard

