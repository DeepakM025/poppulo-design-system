# Poppulo Design System Pro

A lean, tree-shakable, and scalable component library for React applications, built using **ESM**, **Styled Components**, **Rollup**, and **TypeScript**.

## 📦 Installation

Install the package via npm or yarn:

```sh
npm install poppulo-design-system-pro
# or
yarn add poppulo-design-system-pro
```

## 🚀 Usage

Import and use the components in your React project:

```tsx
import { Button } from 'poppulo-design-system-pro';

function App() {
  return <Button variant="primary">Click Me</Button>;
}

export default App;
```

## 🎨 Features

- **ESM Build for Tree Shaking**: Ensures unused components are removed from the final bundle.
- **Styled Components**: Provides scoped, dynamic styling.
- **TypeScript Support**: Includes type definitions for strong typing.
- **Optimized Build**: Uses **Rollup** for a lightweight output.
- **Storybook for UI Documentation**: Allows interactive component testing.
- **Jest & Testing Library**: Ensures high test coverage.

## 🛠 Development Setup

Clone the repository:

```sh
git clone https://github.com/DeepakM025/poppulo-design-system-pro.git
cd poppulo-design-system-pro
npm install
```

### 📖 Storybook

Run Storybook to develop and test components interactively:

```sh
npm run storybook
```

To build Storybook:

```sh
npm run build-storybook
```

### 🏗 Build the Library

The library is bundled using **Rollup**. Run the following command to generate the `dist/` output:

```sh
npm run build
```

### ✅ Testing

Run unit tests using **Jest**:

```sh
npm run test
```

Watch mode:

```sh
npm run test:watch
```

Check test coverage:

```sh
npm run test:coverage
```

## ⚙️ Tree Shaking & Optimization

This package is designed to support **tree shaking** to ensure unused components are excluded from the final bundle. Verify tree shaking by checking the final bundle size after importing specific components:

```js
import { Button } from 'poppulo-design-system-pro'; // Only Button should appear in the final bundle
```

If `Tooltip` or other unused components are missing in the final bundle, tree shaking is working! 🎉