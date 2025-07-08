<a href="https://www.crayonai.org">
  <img src="https://crayonai.org/img/social-card.png" alt="crayonai"/>
</a>

<p align="center">
  <a href="https://crayonai.org">Homepage</a> ·
  <a href="https://crayonai.org/docs">Documentation</a> ·
  <a href="https://thesys.dev">Thesys</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  <a href="https://x.com/thesysdev"><img src="https://img.shields.io/twitter/url/https/twitter/follow/thesysdev?style=social&label=Follow%20%40thesys" alt="Thesys: Visit" /></a>
  <a href="https://discord.gg/Pbv5PsqUSv"><img src="https://img.shields.io/badge/Discord-Join-blue.svg" alt="Discord: Join" /></a>
  <img src="https://github.com/thesysdev/crayon/actions/workflows/deploy.yml/badge.svg" alt="Deploy Status" />
  <img src="https://github.com/thesysdev/crayon/actions/workflows/build.yml/badge.svg" alt="Build Status" />
</p>

# Crayon
**Generative UI** SDK for your AI agents. <br />

Crayon is a UI framework for building agentic UI interfaces beyond just text. It is a set of extensible React components, lightweight state management and hooks to help you build your own UI that seamlessly integrates with any backend.

## Quick Start

Install the Crayon package:
```bash
npm install @crayonai/react-core
```

Create a new Crayon component:
```tsx
import { type ResponseTemplate, CrayonChat } from "@crayonai/react-core";

const templates: ResponseTemplate[] = [
  {
    name: "breakdown_expenses",
    component: BreakdownExpenses,
  },
]

export default function App() {
  return <CrayonChat templates={templates}/>;
}
```

## Packages

- [react-core](./js/packages/react-core): Core framework and hooks for managing state and agents
- [react-ui](./js/packages/react-ui): Modular UI components for use with Crayon

## Running the Project

This project uses `pnpm` as its package manager. Follow these steps to run the project:

1. **Install dependencies:**
   ```bash
   cd js && pnpm install
   ```

2. **Run Storybook to view UI components:**
   ```bash
   cd js/packages/react-ui && pnpm storybook
   ```
   Storybook will start at http://localhost:6006/

3. **Viewing Chart Components:**
   - Navigate to the "Charts" section in the Storybook sidebar
   - You can find various chart visualizations including:
     - GaugeChart: A semi-circular gauge for displaying values within ranges
     - BubbleChart: A scatter plot with variable point sizes
     - And many other chart components
   
   Each component includes interactive examples, documentation, and customizable props that can be adjusted in the Controls panel.
