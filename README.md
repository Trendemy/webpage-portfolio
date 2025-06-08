# Trendemy Portfolio Website

This repository contains the portfolio website for Trendemy. It's built with React + Vite and uses modern web technologies for optimal performance.

## ⚠️ Branch Information
- `main` - Production branch. All changes here are automatically deployed to production.
- Please create feature branches from `main` for development.

## 🚀 Quick Start

### Local Development

1. **Prerequisites**
   - Node.js 20.x or later
   - npm 9.x or later

2. **Install Dependencies**
   ```bash
   npm ci
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

### 🐳 Docker Development

1. **Build Development Image**
   ```bash
   docker build --target development -t portfolio:dev .
   ```

2. **Run Development Container**
   ```bash
   docker run -p 5173:5173 -v $(pwd):/app portfolio:dev
   ```
   The application will be available at `http://localhost:5173`

### 🚀 Docker Production

1. **Build Production Image**
   ```bash
   docker build --target production -t portfolio:prod .
   ```

2. **Run Production Container**
   ```bash
   docker run -p 80:80 portfolio:prod
   ```
   The application will be available at `http://localhost`

## 🔄 CI/CD Pipeline

- Pushing to `main` triggers automatic deployment
- Images are built and pushed to AWS ECR
- Deployment happens automatically to production EC2

## 📝 Development Guidelines

1. **Branch Naming**
   - Feature: `feature/your-feature-name`
   - Bugfix: `bugfix/issue-description`
   - Hotfix: `hotfix/urgent-fix`

2. **Commit Messages**
   - Use clear, descriptive commit messages
   - Start with a verb (add, fix, update, etc.)

3. **Pull Requests**
   - Create PR against `main` branch
   - Ensure all tests pass
   - Get code review before merging

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Environment Variables

Create a `.env` file in the root directory:
```env
# Add your environment variables here
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
