# Frontend Interface

A React + TypeScript front‑end project. This README gives you everything you need to install dependencies, run the app locally, and understand the repo layout. It also includes fixes for common issues like `Cannot find module 'lucide-react'` and a clean checklist for collaborators.

> If you want this README tailored to your exact code and scripts, share your `package.json` and any `README` notes you already have. I’ll auto‑fill commands and features.

---

## ✨ Features
- React + TypeScript UI
- Component library under `src/components/ui` (e.g. `menubar.tsx`, `sheet.tsx`)
- Icon support via [`lucide-react`](https://www.npmjs.com/package/lucide-react)
- Ready for shadcn/ui components (optional)

---

## 📦 Requirements

- **macOS / Linux / Windows**
- **Node.js (which includes npm)**

### Install Node.js (macOS via Homebrew)
If `npm` is not found on your machine:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Follow the "Next steps" shown, then:
brew install node

# Verify
node -v
npm -v
```

> On Windows, install Node from https://nodejs.org/ and use PowerShell or Git Bash.

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>  # e.g., cd frontend_interface
npm install
```

### Run the development server
```bash
npm run dev
```
Then open the printed URL (commonly `http://localhost:5173` for Vite or `http://localhost:3000` for Next.js).

### Build for production
```bash
npm run build
```

### Preview a production build (if available)
```bash
npm run preview
```

### Lint & format (if configured)
```bash
npm run lint
npm run format
```

### Test (if configured)
```bash
npm test
```

> The exact script names come from `package.json`. If they differ, update this README accordingly.

---

## 🧱 Project Structure (excerpt)

```
frontend_interface/
├─ src/
│  ├─ components/
│  │  └─ ui/
│  │     ├─ menubar.tsx
│  │     └─ sheet.tsx
│  ├─ assets/            # images, fonts, etc. (optional)
│  ├─ pages/ or app/     # depending on router / framework
│  ├─ hooks/             # custom React hooks (optional)
│  ├─ lib/               # util modules (optional)
│  └─ index.tsx / main.tsx
├─ public/               # static assets
├─ package.json
└─ tsconfig.json
```

---

## 🧩 UI Icons & Components

### lucide-react
Install and use Lucide icons:
```bash
npm install lucide-react
```

Import **without** a version number in the path:
```tsx
import { Menu, X } from "lucide-react";
```

### shadcn/ui (optional)
If you’re using shadcn/ui:
```bash
# Initialize once (if not done yet)
npx shadcn@latest init

# Add components as needed
npx shadcn@latest add button menubar sheet dialog dropdown-menu
```

---

## ⚙️ TypeScript config tips

In `tsconfig.json`, these options are commonly helpful:
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
```
If VS Code gets stuck, run **Command Palette → “TypeScript: Restart TS Server.”**

---

## 🔒 Environment Variables

Create a `.env` file in the project root for your keys.

- For **Vite**, expose variables with `VITE_` prefix:
  ```env
  VITE_API_URL=https://api.example.com
  ```

- For **Next.js**, use `NEXT_PUBLIC_` prefix for client-exposed vars:
  ```env
  NEXT_PUBLIC_API_URL=https://api.example.com
  ```

Never commit secrets. Add `.env` to `.gitignore`.

---

## 🛠️ Troubleshooting

### “Cannot find module 'lucide-react@0.487.0' or its corresponding type declarations. ts(2307)”
- Ensure your import path **does not include a version**. Use:
  ```ts
  import { IconName } from "lucide-react";
  ```
- Install the package:
  ```bash
  npm install lucide-react
  ```
- Restart the TypeScript server in VS Code.
- If you still see type issues, set `"skipLibCheck": true` in `tsconfig.json` (see above).

### `zsh: command not found: npm`
- Install Node as shown in **Requirements** (via Homebrew on macOS or from nodejs.org on Windows).

### Clean reinstall of dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes: `git commit -m "feat: describe your change"`
3. Push the branch: `git push -u origin feat/your-feature`
4. Open a Pull Request

---

## 🧾 License

Add your license here (e.g., MIT).


