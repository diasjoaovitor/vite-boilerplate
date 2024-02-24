# Vite Boilerplate

This template provides a setup for React development 

## Use This Template

```
npx degit https://github.com/diasjoaovitor/vite-boilerplate your-project
```

## Step by Step

create [Vite App](https://vitejs.dev/guide/)

```
yarn create vite
```

```
✔ Project name: … vite-boilerplate
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

```
cd vite-boilerplate
git init
yarn
yarn dev
```

delete all files in `src` except `App.tsx`, `main.tsx` and `vite-env.d.ts`

**App.tsx**

```tsx
export const App = () => {
  return (
    <div>App</div>
  )
}

export default App
```

**main.tsx**

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

edit `.gitignore`, only include `node_modules` in this file
