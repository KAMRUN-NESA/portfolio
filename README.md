# Kamrun Nesa - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a CSE graduate, ML researcher, and Teaching Assistant.

## 🌐 Live Demo

Visit: **https://KAMRUN-NESA.github.io/portfolio**

## 📋 Features

✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices  
✅ **10 Comprehensive Sections** - Hero, About, Skills, Projects, Research, Experience, Education, Certifications, Contact, Footer  
✅ **Smooth Animations** - Fade-in effects, scroll animations, and interactive elements  
✅ **Modern UI/UX** - Clean blue (#0F4E8C) and white color scheme  
✅ **Mobile Hamburger Menu** - Easy navigation on small screens  
✅ **Research Spotlight** - Dedicated section for 3 published conference papers  
✅ **Project Showcase** - 4 featured projects with tech badges and links  
✅ **Skills Visualization** - Progress bars and skill tags  
✅ **Experience Timeline** - Visual timeline of roles and achievements  
✅ **SEO Optimized** - Meta tags and structured content  
✅ **Fast & Lightweight** - No heavy frameworks or dependencies  
✅ **GitHub Pages Ready** - Easy deployment  

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main HTML file (all sections)
├── style.css           ← All CSS styling
├── script.js           ← JavaScript for interactivity
├── README.md           ← This file
└── assets/
    ├── img/
    │   ├── profile.jpg       ← Your profile photo (200x200px recommended)
    │   ├── project1.png      ← Hospital Management System screenshot
    │   ├── project2.png      ← Smart Dustbin IoT project photo
    │   ├── project3.png      ← Tic-Tac-Toe AI screenshot
    │   └── project4.png      ← EcoTrack Waste Management screenshot
    └── cv/
        └── kamrun_cv.pdf     ← Your downloadable CV
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive grid and flexbox layouts
- **Vanilla JavaScript** - No frameworks, pure JS for interactions
- **Font Awesome 6.4** - Icons for social media and UI elements
- **Google Fonts** (Optional) - Typography (currently using system fonts)

## 🎨 Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary | `#0F4E8C` | Main color, buttons, headings |
| Primary Dark | `#08355a` | Hover states, gradients |
| Accent | `#0077CC` | Secondary highlights |
| Light BG | `#f8f9fa` | Section backgrounds |
| Text Dark | `#1a1a1a` | Body text |
| Text Light | `#666666` | Secondary text |

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: 480px and below

## 🚀 Getting Started

### 1. Add Your Content

**Profile Photo:**
- Replace `assets/img/profile.jpg` with your professional photo
- Recommended size: 200x200px, JPG format
- Good lighting, plain background

**CV PDF:**
- Place your CV at `assets/cv/kamrun_cv.pdf`
- Users can download it from the hero section

**Project Screenshots:**
- Add screenshots/images for your projects to `assets/img/`
- Update file names: `project1.png`, `project2.png`, etc.

### 2. Update Your Information

Edit `index.html` and replace placeholder content:

- Hero section: Your name, role, tagline
- About section: Your bio and achievements
- Skills: Add your actual skill categories and proficiencies
- Projects: Update project titles, descriptions, tech stacks, and GitHub links
- Research: Update your paper titles, venues, and keywords
- Experience: Your roles, organizations, and responsibilities
- Education: Your schools and GPAs
- Certifications: Your certificates
- Contact: Your email, phone, location, social links

### 3. Update Social Links

In `index.html`, update these URLs to your profiles:

```html
<a href="https://github.com/YOUR-USERNAME" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="https://kaggle.com/your-username" target="_blank">Kaggle</a>
<a href="https://codeforces.com/profile/your-username" target="_blank">CodeForces</a>
<a href="https://codechef.com/users/your-username" target="_blank">CodeChef</a>
```

### 4. Test Locally

Open `index.html` in your browser:

```bash
# Option 1: Double-click the file
# Option 2: Use VS Code Live Server
# Option 3: Use Python local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 📤 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **New Repository**
3. Name it: **portfolio** (exactly this name!)
4. Add description: "My portfolio website"
5. Choose **Public**
6. Click **Create Repository**

### Step 2: Upload Your Files

**Option A: Using Git (Recommended)**

```bash
cd path/to/portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. Open your repository on GitHub
2. Click **Upload files**
3. Drag and drop all files and folders
4. Commit the changes

### Step 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **main** branch
4. Click **Save**
5. Wait 2-3 minutes for the site to build

### Step 4: Access Your Portfolio

Your site will be live at:
```
https://YOUR-USERNAME.github.io/portfolio
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## 🎯 Sections Overview

### Section 01: Hero
- Large, bold introduction with your photo
- Tagline and call-to-action buttons
- Social media icons
- Full-screen attention-grabbing design

### Section 02: About Me
- Brief biography (3-4 sentences)
- Key achievements and passions
- Stats cards showing papers, projects, experience

### Section 03: Skills
- **Programming Languages** with progress bars
- **Data Science & ML** technologies
- **Tools & Platforms** you work with
- **Web Technologies** for backend/frontend

### Section 04: Projects
- 4 featured projects in card layout
- Project images, titles, descriptions
- Technology badges
- GitHub and demo links

### Section 05: Research & Publications ⭐
- 3 published/accepted conference papers
- Status badges (Presented/Accepted)
- Paper titles, venues, abstracts
- Keyword tags
- DOI/Paper links

### Section 06: Experience & Leadership
- Vertical timeline of roles
- Organization names and dates
- Bullet points for achievements
- 3+ professional experiences

### Section 07: Education
- Educational institutions
- Degrees and years
- GPA/CGPA information
- Card-based layout

### Section 08: Certifications
- Certificate titles
- Issuing organizations
- Grid layout with icons

### Section 09: Contact
- Email with mailto link
- Phone number
- Location
- Social media links
- Contact form (optional)

## 📝 Customization

### Change Color Scheme

Edit the `:root` variables in `style.css`:

```css
:root {
    --primary-color: #0F4E8C;      /* Primary blue */
    --accent-color: #0077CC;       /* Accent blue */
    /* ... other colors ... */
}
```

### Modify Fonts

Add Google Fonts in `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `style.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add Dark Mode

Add to `script.js`:

```javascript
document.body.addEventListener('click', (e) => {
    if (e.target.id === 'dark-mode-toggle') {
        document.body.classList.toggle('dark-mode');
    }
});
```

### Add Contact Form

Use **Formspree** (free service):

1. Visit https://formspree.io
2. Create a new form
3. Add your email
4. Replace `YOUR_FORM_ID` in the form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Tips

1. **Compress Images** - Use tools like TinyPNG
   - Keep file sizes < 200KB each
   - Use JPG for photos, PNG for logos

2. **Minify CSS & JS** - Use minifiers for production

3. **Lazy Load Images** - Already included in script.js

4. **Cache** - GitHub Pages provides automatic caching

5. **SEO** - Meta tags are already included

## 🐛 Troubleshooting

### Site not showing up?
- Wait 5-10 minutes after pushing (GitHub needs to build)
- Check repository name is exactly "portfolio"
- Verify Pages is enabled in Settings

### Styling looks broken?
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths in index.html
- Ensure CSS and JS files are in the same folder

### Images not loading?
- Check image file names match exactly
- Use relative paths: `assets/img/photo.jpg`
- Compress images if too large

### Links not working?
- Update GitHub URLs to your profile
- Use mailto: for emails
- Use tel: for phone numbers

## 📚 Resources

- [HTML5 Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [GitHub Pages Docs](https://pages.github.com/)
- [Formspree Forms](https://formspree.io)

## ✨ Pro Tips

1. **Update Regularly** - Add new projects and papers as you complete them
2. **Keep It Fresh** - Update the "Currently" section in About
3. **Use Real Content** - Screenshots of actual projects > placeholders
4. **Link Everything** - GitHub repos, Kaggle notebooks, papers
5. **Mobile First** - Test on phone before deploying
6. **SEO Matters** - Update meta descriptions
7. **Tell Your Story** - Personal touches make portfolios memorable

## 📄 License

This portfolio template is free to use and modify for your own purposes.

## 🤝 Contributing

Found a bug or have suggestions? Feel free to fork and improve!

## 📧 Contact

- **Email:** nesakamrun490@gmail.com
- **GitHub:** https://github.com/KAMRUN-NESA
- **LinkedIn:** https://linkedin.com/in/kamrun-nesa-363a9524b

---

**Last Updated:** 2025  
**Version:** 1.0  
**Status:** ✅ Production Ready
