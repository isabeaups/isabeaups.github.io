# Academic Website 

A clean, minimalist, bilingual (English/French) academic website inspired by the Chandar Lab design at Polytechnique Montreal.

## Features

✅ **Multi-page structure** - Separate HTML pages for each section
✅ **Bilingual support** - EN/FR language toggle with localStorage
✅ **Responsive design** - Mobile-first, works on all devices

## File Structure

```
.
├── index.html          # Home page with team photo grid and news
├── research.html       # Research interests, projects, publications
├── team.html          # Team members with photos and alumni
├── teaching.html      # Courses and teaching philosophy
├── prospective.html   # Information for prospective students
├── styles.css         # Minimalist styling
├── script.js          # Language switching and interactions
├── README.md          # This file
└── assets/            # Create this folder for images
    └── images/
        ├── your-photo.jpg
        ├── student1.jpg
        ├── student2.jpg
        └── ...
```

## Setup Instructions

### 1. Add Your Photos

Create an `assets/images/` folder and add photos for:
- Your profile photo (e.g., `your-photo.jpg`)
- Team member photos (e.g., `student1.jpg`, `student2.jpg`, etc.)

Photos should ideally be:
- Square aspect ratio (e.g., 400x400px)
- Optimized for web (< 200KB each)
- Consistent in quality and style

### 2. Customize Content

Edit each HTML file and replace placeholder text:

#### index.html (Home Page)
- Replace `[Your Name]` with your actual name (in both EN and FR)
- Update the photo grid with your team member images:
  ```html
  <img src="assets/images/your-photo.jpg" alt="Dr. Your Name">
  ```
- Fill in the "About the Lab" section
- Add recent news items

#### research.html
- Add your research interests
- Describe current research projects
- Update Google Scholar profile link:
  ```html
  <a href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID">
  ```

#### team.html
- Add team member information:
  - Photos (link to assets/images/)
  - Names
  - Research areas
  - Personal websites
- Update alumni section with past students and their placements

#### teaching.html
- Add your teaching philosophy
- List current and past courses
- Include office hours

#### prospective.html
- Update recruiting status
- Describe what you look for in students
- Add funding information
- Update application deadlines

### 3. Update All Bilingual Content

For each section, make sure to update BOTH:
- `data-en="English text"`
- `data-fr="Texte français"`

Example:
```html
<p data-en="I am a professor at Université Laval."
   data-fr="Je suis professeur à l'Université Laval.">
   I am a professor at Université Laval.
</p>
```

### 4. Configure Google Scholar (Optional)

To show your publications:

**Option 1: Simple Link (Recommended)**
- Just update the Google Scholar profile URL in `research.html`

**Option 2: Embedded Profile**
- Uncomment the iframe section in `research.html`
- Replace `YOUR_SCHOLAR_ID` with your actual Scholar ID

**Option 3: BibBase Integration**
- Sign up at [BibBase](https://bibbase.org/)
- Add your BibTeX file or Google Scholar profile
- Embed the provided script in `research.html`

## Deployment to GitHub Pages

### Method 1: GitHub Web Interface (Easiest)

1. Create a new repository on GitHub:
   - Name it `username.github.io` (for personal site) OR
   - Name it anything (e.g., `academic-website`)

2. Upload all files:
   - Drag and drop files into the repository
   - Include the `assets/` folder with images

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

4. Visit your site:
   - Personal site: `https://username.github.io`
   - Project site: `https://username.github.io/academic-website`

### Method 2: Git Command Line

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Academic website"

# Add remote
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings as above.

## Customization Tips

### Changing Colors

Edit `styles.css` CSS variables:

```css
:root {
    --primary-color: #1a1a1a;      /* Main text color */
    --link-color: #0066cc;         /* Link color */
    --link-hover: #0052a3;         /* Link hover color */
    --text-light: #666666;         /* Secondary text */
    --border-color: #e0e0e0;       /* Borders */
    --bg-light: #f8f8f8;           /* Light backgrounds */
}
```

### Adding More Team Members

In `index.html`, add more profile cards to the hero grid:

```html
<div class="profile-card">
    <img src="assets/images/new-member.jpg" alt="Team Member">
</div>
```

In `team.html`, add to the appropriate section:

```html
<div class="team-member">
    <img src="assets/images/new-member.jpg" alt="Student Name">
    <h3><a href="https://their-website.com">Student Name</a></h3>
    <p class="member-research" data-en="Research Areas:" data-fr="Domaines de recherche :">
        Research Areas: <span data-en="Machine Learning" data-fr="Apprentissage automatique">Machine Learning</span>
    </p>
</div>
```

### Photo Grid Layout

The home page photo grid automatically adjusts based on number of images:
- Principal Investigator photo spans 2x2 (larger)
- Other photos are 1x1 (smaller)
- Grid is responsive and adjusts to screen size

### Custom Domain (Optional)

If you have a custom domain (e.g., `yourdomain.com`):

1. Add a `CNAME` file to your repository with your domain
2. Configure DNS with your domain registrar:
   - Add A records or CNAME record pointing to GitHub Pages
3. See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Updating Your Site

To update content:

1. Edit the HTML files locally
2. Commit and push changes to GitHub
3. GitHub Pages will automatically rebuild (takes 1-2 minutes)

```bash
git add .
git commit -m "Update research projects"
git push
```

## Tips for Academic Websites

### Publications
- Link to Google Scholar for complete list
- Optionally highlight 3-5 key papers manually
- Consider using BibBase for automatic updates

### Team Photos
- Use consistent photo style (same background, lighting)
- Square photos work best for grid layout
- Compress images for faster loading

### News Section
- Keep it current (update monthly)
- Include conference acceptances, awards, new students
- Link to relevant papers or news articles

### For Students
- Be clear about what you're looking for
- Include application deadlines prominently
- Provide specific research topics you're recruiting for

## Troubleshooting

**Photos not showing:**
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify image files were uploaded to GitHub

**Language toggle not working:**
- Check `script.js` is loaded
- Ensure all text has both `data-en` and `data-fr` attributes

**Mobile menu not working:**
- Verify `script.js` is loaded
- Check for JavaScript errors in browser console

**Site not showing on GitHub Pages:**
- Wait 2-3 minutes after enabling
- Check repository settings → Pages
- Ensure branch is set to `main` and folder is `/ (root)`

## License

This template is free to use for academic websites. No attribution required.

## Credits

Design inspired by [Chandar Research Lab](https://chandar-lab.github.io/) at Polytechnique Montreal.

---

**Need help?** Check the [GitHub Pages documentation](https://docs.github.com/en/pages) or open an issue in your repository.

**Last Updated:** November 2025
