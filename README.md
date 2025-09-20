# OTO Website


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) **Version 18+**
- npm (ships with Node)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended editor with Tailwind & TypeScript extensions)

### Installation
Clone the repo and install dependencies:
```bash
git clone <your-repo-url>
cd into directory
npm install
```

### Running the dev server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for production
```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
src/
  components/
    Header.tsx         # Header
    Footer.tsx         # Footer
    ListingsTable.tsx  # Sortable + filterable listings table
  lib/
    types.ts           # TypeScript types
  pages/
    _app.tsx           # Global 
    index.tsx          # Home page
    about.tsx          # Mission & who we are
    apply.tsx          # Application Page
    listings.tsx       # Active Listings page
    api/
      listings.ts      # API route ()
  styles/
    globals.css        # Main styling done on this page
tailwind.config.js     # Tailwind config (v4)
postcss.config.js      # PostCSS config

