# 📦 shadcn-turbo-starter

A modern **Turborepo-based monorepo starter** template with full support for:

- 🧩 Reusable UI components using [shadcn/ui](https://ui.shadcn.com)
- 🎨 Shared **Tailwind CSS** configuration
- 🛠️ Shared **TypeScript** and **ESLint** config
- 🧰 Centralized **utils/functions** package
- ⚡ Powered by **Turborepo** for blazing-fast builds
- 🧪 Ready for scalable fullstack apps

---

## 🔧 What's Inside?

```
apps/
└── web                 # A Next.js 15 app with Tailwind + ShadCN

packages/
├── ui                 # Reusable ShadCN components with Tailwind styling
├── utils              # Shared utility functions (e.g., cn, formatDate)
├── tailwind-config    # Centralized Tailwind config
├── typescript-config  # Shared tsconfig base
└── eslint-config      # Shared ESLint rules
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Build Packages

```bash
npm run build
```

### 3. Run Development

```bash
npm run dev
```

## ⚙️ Generate Workspace (App /Package)

### 1. Generate new app

```bash
npm run gen app <app-name>
npm run dev
```

### 2. Generate new package

```bash
npm run gen package <package-name>
npm run build
npm run dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `@repo/ui`: a stub React component library with [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `@repo/utils`: Shared utility functions (e.g., cn, formatDate, etc.) used across apps and packages
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.ts`. This was chosen for several reasons:

- Make sharing one `tailwind.config.ts` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.ts` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.ts](packages/tailwind-config/tailwind.config.ts):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Authors

- [@danaralifian](https://www.linkedin.com/in/danar-alifian-1a1581174/)
