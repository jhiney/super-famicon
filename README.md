# Famicom Style Guide

A retro-styled UI component library inspired by the classic Nintendo Famicom aesthetic. Built with Next.js, Tailwind CSS, and a love for 8-bit nostalgia.

![Famicom UI Preview](https://placehold.co/600x400/8b0000/e3c099?text=Famicom+UI+Preview)

## Features

- **Retro Aesthetic**: Authentic Famicom color palette (Deep Red, Gold, Black, White).
- **Interactive Components**:
  - D-Pad (Directional Pad)
  - Action Buttons (A/B)
  - Toggle Switches
  - Retro Inputs
- **Modern Tech**: Powered by React 19, Next.js 16, and Tailwind CSS v4.
- **Fully Responsive**: Looks great on all devices, just like your favorite handhelds.

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/style-guide-app.git
   cd style-guide-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the component library in action.

## Usage

Import components into your Next.js app:

```tsx
import { Button } from '@/components/ui/Button';
import { DPad } from '@/components/ui/DPad';

export default function MyPage() {
  return (
    <div className="p-10 bg-[#e3c099]">
      <DPad onUp={() => console.log('Up!')} />
      <Button variant="A" onClick={() => console.log('A pressed!')} />
    </div>
  );
}
```

## License

MIT
