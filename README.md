# Retro Resume Portfolio

A modern, terminal-themed portfolio website built with Next.js, featuring ASCII animations, matrix effects, and glassmorphism design.

## 🚀 Features

- **Terminal Aesthetic**: Retro computer terminal design with green text on black background
- **ASCII Art Animation**: 3D ASCII text animation using Three.js
- **Matrix Background**: Falling matrix characters animation
- **Glassmorphism UI**: Transparent, blurred content cards
- **Responsive Design**: Mobile-first responsive layout
- **Type Animations**: Terminal-style typing effects
- **Project Showcase**: Interactive project modals with detailed information

## 🛠️ Technologies Used

- **Next.js 14** - React framework with static export
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics and animations
- **GSAP** - High-performance animations
- **shadcn/ui** - Modern UI component library

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rohithgg/Rohithgg.github.io.git
   cd Rohithgg.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```


### Automatic Deployment (Recommended)

The repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Configure Repository Settings**:
   - Ensure the repository name is `Rohithgg.github.io`
   - Make sure the repository is public
   - Verify that GitHub Actions are enabled

3. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

The GitHub Actions workflow will automatically:
- Build the Next.js application
- Generate static files in the `out` directory
- Deploy to GitHub Pages
- Your site will be available at `https://rohithgg.github.io`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
# The built files will be in the 'out' directory
# Upload the contents of 'out' to your web server
```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic deployment.

### Customization
- **Matrix Animation**: Adjust density, speed, and opacity in `app/matrixAnimation.tsx`
- **ASCII Animation**: Modify text, colors, and effects in `app/asciiAnimation.tsx`
- **Content**: Update personal information in `app/page.tsx`
- **Styling**: Customize colors and themes in Tailwind classes

## 📂 Project Structure

```
├── app/
│   ├── page.tsx              # Main portfolio page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── asciiAnimation.tsx    # 3D ASCII text component
│   ├── matrixAnimation.tsx   # Matrix rain effect
│   └── textType.tsx          # Typing animation component
├── components/
│   ├── ui/                   # shadcn/ui components
│   └── typing-animation.tsx  # Base typing component
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── public/                   # Static assets
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies and scripts
```
## 🌍 Browser Compatibility
- Modern browsers with WebGL support
- Mobile responsive (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Contact

- **Email**: atworkrohith.gona@gmail.com
- **LinkedIn**: [linkedin.com/in/rohithgona](https://linkedin.com/in/rohithgona)
- **GitHub**: [github.com/Rohithgg](https://github.com/Rohithgg)

---

Built with ❤️ by Rohith Gona