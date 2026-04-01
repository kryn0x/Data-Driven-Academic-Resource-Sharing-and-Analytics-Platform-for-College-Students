# Deployment Guide for AcadIntel

## Prerequisites
- GitHub account
- Vercel account (free)
- Render account (free)

---

## Step 1: Deploy Backend to Render

### 1.1 Create Render Account
1. Go to https://render.com
2. Sign up with GitHub

### 1.2 Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select this repository

### 1.3 Configure Backend Service
**Build Settings:**
- **Name**: `acadintel-backend`
- **Root Directory**: `backend`
- **Environment**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free`

### 1.4 Add Environment Variables
Click "Environment" and add:
```
PORT=5000
MONGODB_URI=mongodb+srv://pr1174682_db_user:Zv2iySpE3Gt9uGwX@cluster0.74f8jjm.mongodb.net/paperdb?appName=Cluster0
JWT_SECRET=acadintel_secret_key_2024_mvp
```

### 1.5 Deploy
1. Click "Create Web Service"
2. Wait for deployment (5-10 minutes)
3. Copy your backend URL (e.g., `https://acadintel-backend.onrender.com`)

---

## Step 2: Update Frontend API URL

### 2.1 Create Environment File
In `frontend/` directory, create `.env.production`:
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

Replace `your-backend-url` with your actual Render backend URL.

### 2.2 Update API Configuration
The frontend code needs to use environment variables for the API URL.

---

## Step 3: Deploy Frontend to Vercel

### 3.1 Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub

### 3.2 Import Project
1. Click "Add New..." → "Project"
2. Import your GitHub repository
3. Select the repository

### 3.3 Configure Frontend
**Framework Preset**: Vite
**Root Directory**: `frontend`
**Build Command**: `npm run build`
**Output Directory**: `dist`

### 3.4 Add Environment Variables
In Vercel project settings → Environment Variables:
```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### 3.5 Deploy
1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. Your app will be live at `https://your-project.vercel.app`

---

## Step 4: Update CORS Settings

After deployment, update backend CORS to allow your Vercel domain:

In `backend/server.js`, update CORS configuration:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-project.vercel.app'],
  credentials: true
}));
```

Commit and push changes - Render will auto-deploy.

---

## Alternative: Deploy Both to Render

### Backend (Same as above)

### Frontend on Render
1. Create new "Static Site"
2. **Build Command**: `cd frontend && npm install && npm run build`
3. **Publish Directory**: `frontend/dist`
4. Add environment variable: `VITE_API_URL`

---

## Troubleshooting

### Backend Issues
- Check Render logs for errors
- Verify MongoDB connection string
- Ensure all environment variables are set

### Frontend Issues
- Check browser console for API errors
- Verify API URL is correct
- Check CORS settings on backend

### File Upload Issues
- Render free tier has ephemeral storage
- Consider using AWS S3 or Cloudinary for production

---

## Post-Deployment Checklist

- [ ] Backend is running on Render
- [ ] Frontend is deployed on Vercel
- [ ] Can register new user
- [ ] Can login successfully
- [ ] Can upload PDF (note: files won't persist on Render free tier)
- [ ] Can view resources
- [ ] Can delete resources

---

## Production Recommendations

1. **File Storage**: Use AWS S3 or Cloudinary instead of local storage
2. **Database**: MongoDB Atlas is already cloud-based ✓
3. **Environment Variables**: Never commit .env files
4. **HTTPS**: Both Vercel and Render provide HTTPS by default ✓
5. **Monitoring**: Set up error tracking (Sentry, LogRocket)

---

## Quick Deploy Commands

```bash
# Commit all changes
git add .
git commit -m "Prepare for deployment"
git push origin main

# Both Vercel and Render will auto-deploy from GitHub
```

---

## Need Help?

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://www.mongodb.com/docs/atlas/
