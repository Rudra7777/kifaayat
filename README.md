# Kifaayat

**Décor with Soul.**

Kifaayat is a premium, editorial E-commerce experience dedicated to authentic, handcrafted home décor from local Indian bazaars. It emphasizes transparency, fair pricing, and storytelling over aggressive sales tactics.

![Project Screenshot](/public/images/lamp.png)

## ✨ Features

-   **Editorial Design System:** A calm, trustworthy aesthetic using warm neutrals (`#F5F2EA`), serif typography (`Playfair Display`), and generous whitespace.
-   **Immersive Product Pages:** Detailed storytelling, pricing transparency context, and "One-of-a-kind" availability logic.
-   **Functional Cart:** Client-side persistent cart (Context API + LocalStorage) with real-time updates.
-   **Global Navigation:** Sticky glassmorphic navbar with dynamic cart badges.
-   **Mobile-First:** Fully responsive design with sticky bottom CTAs for better mobile conversion.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **State Management:** React Context API
-   **Language:** TypeScript
-   **Fonts:** Google Fonts (Playfair Display & Inter)

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/kifaayat.git
    cd kifaayat
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit `http://localhost:3000` (or `3001` if 3000 is taken).

## 📦 Deployment

This project is configured for static export and deployment to **GitHub Pages**.

### Automatic Deployment (GitHub Actions)
A workflow file is included at `.github/workflows/deploy.yml`.

1.  Push your code to GitHub.
2.  Go to **Settings** > **Pages** in your repository.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The action will automatically build and deploy the site.

### Static Export Config
-   `output: 'export'` is enabled in `next.config.mjs`.
-   `generateStaticParams` is implemented for dynamic product routes.
-   Image optimization is disabled (`unoptimized: true`) for compatibility.

## 📂 Project Structure

```
app/
├── cart/           # Cart page
├── collection/     # Product listing page
├── components/     # Reusable UI components (Navbar, Footer, Hero...)
├── context/        # Global state (CartContext)
├── product/[id]/   # Dynamic product detail pages
├── layout.tsx      # Root layout & global providers
└── page.tsx        # Homepage
public/
└── images/         # Static assets
```

---
*Built with care.*
# kifaayat
