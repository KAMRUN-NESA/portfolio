# 🚀 GitHub Pages Deployment Guide

Complete step-by-step instructions to deploy your portfolio to GitHub Pages.

---

## **Step 1: Prepare Your Portfolio Files**

Your folder should look like this:

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── img/
    │   ├── profile.jpg
    │   ├── project1.png
    │   ├── project2.png
    │   ├── project3.png
    │   └── project4.png
    └── cv/
        └── kamrun_cv.pdf
```

**✅ Before deploying, make sure:**
- [ ] `profile.jpg` is added to `assets/img/`
- [ ] `kamrun_cv.pdf` is added to `assets/cv/`
- [ ] Project screenshots are added to `assets/img/`
- [ ] All social links in `index.html` are updated to YOUR profiles
- [ ] All text content is customized with your information
- [ ] Website works locally (test by opening `index.html` in browser)

---

## **Step 2: Create GitHub Repository**

### 2.1 Go to GitHub

1. Open https://github.com in your browser
2. **Sign in** to your account (create one if you don't have it)

### 2.2 Create New Repository

1. Click the **"+"** icon in top right corner
2. Select **"New repository"**
3. Fill in the details:

| Field | Value |
|-------|-------|
| **Repository name** | `portfolio` |
| **Description** | My portfolio website |
| **Visibility** | **PUBLIC** ⚠️ (IMPORTANT!) |
| **Initialize with README** | ✅ Check (optional) |

4. Click **"Create repository"**

✅ **Your repository URL will be:**
```
https://github.com/YOUR-USERNAME/portfolio
```

---

## **Step 3: Upload Your Files**

### **Option A: Using Git Command Line (Recommended)**

#### 3A.1 Install Git

Download from: https://git-scm.com/download/win

#### 3A.2 Open Command Prompt / PowerShell

Navigate to your portfolio folder:

```powershell
cd "c:\Users\nesak\OneDrive\Documents\Documents\ML & AI project\PORT FOLIO"
```

#### 3A.3 Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

✅ If successful, you should see files uploaded on GitHub.

---

### **Option B: Using GitHub Web Interface (Easiest)**

#### 3B.1 Go to Your Repository

1. Open https://github.com/YOUR-USERNAME/portfolio
2. Click **"Add file"** → **"Upload files"**

#### 3B.2 Upload All Files

1. **Drag and drop** your files into the upload area, OR
2. Click **"choose your files"** and select them

**Upload Order (Important):**
1. First upload: `index.html`, `style.css`, `script.js`, `README.md`
2. Then upload: entire `assets/` folder with subfolders and files

#### 3B.3 Commit Changes

1. Add commit message: `"Initial portfolio commit"`
2. Click **"Commit changes"**

✅ Files will now appear on GitHub.

---

## **Step 4: Enable GitHub Pages**

This is the MOST IMPORTANT step!

### 4.1 Go to Settings

1. Go to your repository: https://github.com/YOUR-USERNAME/portfolio
2. Click **"Settings"** tab at the top
3. From left sidebar, click **"Pages"**

### 4.2 Configure GitHub Pages

1. Under **"Source"** section:
   - Select **"main"** branch (or **"master"** if that's your branch)
   - Click the folder dropdown and select **"/ (root)"**
   
2. Click **"Save"**

### 4.3 Wait for Deployment

- GitHub will show: *"Your site is ready to be published at..."*
- **Wait 2-5 minutes** for the site to build and go live
- You'll see a green checkmark when ready

✅ Your site is now **LIVE** at:
```
https://YOUR-USERNAME.github.io/portfolio
```

**Example:**
- Your username: `kamrun-nesa`
- Your portfolio URL: `https://kamrun-nesa.github.io/portfolio`

---

## **Step 5: Verify Your Site**

### 5.1 Test All Sections

Visit your live URL and check:

- [ ] **Hero** section loads with your name and photo
- [ ] **Navigation** menu works (click all links)
- [ ] **Download CV** button works
- [ ] **Social icons** link to your profiles
- [ ] **Skills** section displays correctly
- [ ] **Projects** cards show up
- [ ] **Research** papers are visible
- [ ] **Experience** timeline displays
- [ ] **Contact** section has your email/phone
- [ ] **Mobile responsiveness** works (test on phone)

### 5.2 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| **Images not loading** | Check file paths, ensure images are in `assets/img/` |
| **CSS/JS not working** | Clear browser cache (Ctrl+Shift+Delete) |
| **Links broken** | Update GitHub URLs to your profiles |
| **Page says 404** | Repository name must be exactly `portfolio` |
| **Site takes long to load** | Compress images to < 200KB |

---

## **Step 6: Update Your Portfolio**

Whenever you want to make changes:

### Using Git Command Line:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Updated projects section"
git push
```

### Using GitHub Web Interface:

1. Go to your repository
2. Click on the file you want to edit
3. Click the **pencil icon** to edit
4. Make changes
5. Click **"Commit changes"**

✅ Changes go live in **1-2 minutes**.

---

## **Step 7: Custom Domain (Optional)**

Want your own domain like `kamrunnesa.com`?

### 7.1 Buy a Domain

1. Go to GoDaddy, Namecheap, or any domain registrar
2. Search and buy your domain
3. Note down your domain name

### 7.2 Point Domain to GitHub Pages

1. Go to your domain registrar's DNS settings
2. Add these **A Records**:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. Add **CNAME Record**:
   ```
   www → YOUR-USERNAME.github.io
   ```

4. In GitHub repository **Settings → Pages**:
   - Add **Custom domain**: `yourdomain.com`
   - Enable **Enforce HTTPS**

✅ Site will be live at your custom domain!

---

## **Final Checklist** ✅

- [ ] GitHub account created
- [ ] Repository named exactly "portfolio"
- [ ] Repository is PUBLIC
- [ ] All files uploaded (HTML, CSS, JS, README, assets)
- [ ] GitHub Pages enabled (Settings → Pages → Source = main)
- [ ] Site is live at `https://YOUR-USERNAME.github.io/portfolio`
- [ ] All sections visible and working
- [ ] Images loading correctly
- [ ] Social links point to your profiles
- [ ] Mobile responsive (tested on phone)
- [ ] CV is downloadable

---

## **Troubleshooting**

### **Q: My site shows 404 error**

**A:** 
- Check repository name is exactly "portfolio" (lowercase)
- Make sure it's PUBLIC
- Verify GitHub Pages is enabled in Settings

### **Q: Changes aren't showing up**

**A:**
- Clear browser cache (Ctrl+Shift+Delete)
- Wait 2-5 minutes for GitHub to rebuild
- Check that you committed the changes

### **Q: Images or CSS not loading**

**A:**
- Make sure file paths are correct: `assets/img/photo.jpg`
- Use forward slashes `/` not backslashes `\`
- Check file names match exactly (case-sensitive on GitHub)

### **Q: How do I update my portfolio?**

**A:**
- Make changes locally or in GitHub web editor
- Commit/push changes
- Wait 1-2 minutes for live update
- Clear cache if you don't see changes

### **Q: Can I make my repository private later?**

**A:**
- For GitHub Pages to work with free accounts, repo must be PUBLIC
- With GitHub Pro, you can use private repos with Pages

---

## **Useful Links**

- GitHub Pages Docs: https://pages.github.com/
- Git Installation: https://git-scm.com/
- GitHub Help: https://docs.github.com/
- HTML/CSS Reference: https://developer.mozilla.org/

---

## **Next Steps After Deployment**

1. **Share your portfolio** on LinkedIn, Twitter, GitHub
2. **Add to resume** with the portfolio URL
3. **Keep it updated** with new projects and achievements
4. **Monitor performance** using GitHub Pages analytics
5. **Get feedback** from friends and mentors

---

**🎉 Congratulations! Your portfolio is now live!**

Need help? Refer to the README.md file for customization options.

Last Updated: 2025
