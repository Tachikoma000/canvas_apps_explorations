# shadcn/ui Styling Guide

This guide provides a comprehensive overview of the styling approach used in shadcn/ui to help you create applications with a consistent look and feel.

## Table of Contents
- [Color System](#color-system)
- [Typography](#typography)
- [Border Radius](#border-radius)
- [Spacing](#spacing)
- [Shadows](#shadows)
- [Transitions & Animations](#transitions--animations)
- [Component Patterns](#component-patterns)
- [Dark Mode](#dark-mode)

## Color System

shadcn/ui uses a semantic color system that maps specific color roles to their function in the UI. This approach makes theming much easier as you only need to change a few variables to update your entire application.

### Base Color Palette

The default color system uses Tailwind CSS colors. You can choose from:

- slate
- gray
- zinc
- neutral
- stone

### Semantic Color Variables

The key semantic color variables used throughout shadcn/ui are:

```css
:root {
  /* Base colors */
  --background: hsl(0 0% 100%);
  --foreground: hsl(222.2 47.4% 11.2%);
  
  /* Muted backgrounds (for subtle emphasis) */
  --muted: hsl(210 40% 96.1%);
  --muted-foreground: hsl(215.4 16.3% 46.9%);
  
  /* Card backgrounds */
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Popover backgrounds */
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Borders */
  --border: hsl(214.3 31.8% 91.4%);
  
  /* Input elements */
  --input: hsl(214.3 31.8% 91.4%);
  
  /* Primary action colors */
  --primary: hsl(222.2 47.4% 11.2%);
  --primary-foreground: hsl(210 40% 98%);
  
  /* Secondary action colors */
  --secondary: hsl(210 40% 96.1%);
  --secondary-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Accents */
  --accent: hsl(210 40% 96.1%);
  --accent-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Destructive actions */
  --destructive: hsl(0 100% 50%);
  --destructive-foreground: hsl(210 40% 98%);
  
  /* Ring focus */
  --ring: hsl(215 20.2% 65.1%);
  
  /* Border radius */
  --radius: 0.5rem;
}

.dark {
  --background: hsl(224 71% 4%);
  --foreground: hsl(213 31% 91%);
  
  --muted: hsl(223 47% 11%);
  --muted-foreground: hsl(215.4 16.3% 56.9%);
  
  --card: hsl(224 71% 4%);
  --card-foreground: hsl(213 31% 91%);
  
  --popover: hsl(224 71% 4%);
  --popover-foreground: hsl(215 20.2% 65.1%);
  
  --border: hsl(216 34% 17%);
  --input: hsl(216 34% 17%);
  
  --primary: hsl(210 40% 98%);
  --primary-foreground: hsl(222.2 47.4% 1.2%);
  
  --secondary: hsl(222.2 47.4% 11.2%);
  --secondary-foreground: hsl(210 40% 98%);
  
  --accent: hsl(216 34% 17%);
  --accent-foreground: hsl(210 40% 98%);
  
  --destructive: hsl(0 63% 31%);
  --destructive-foreground: hsl(210 40% 98%);
  
  --ring: hsl(216 34% 17%);
}
```

### Using Colors in Tailwind

In your components, use these semantic color classes:

```html
<!-- Background colors -->
<div class="bg-background">...</div>
<div class="bg-muted">...</div>
<div class="bg-primary">...</div>
<div class="bg-secondary">...</div>
<div class="bg-accent">...</div>
<div class="bg-destructive">...</div>

<!-- Text colors -->
<p class="text-foreground">...</p>
<p class="text-muted-foreground">...</p>
<p class="text-primary-foreground">...</p>
<p class="text-secondary-foreground">...</p>
<p class="text-accent-foreground">...</p>
<p class="text-destructive-foreground">...</p>

<!-- Border colors -->
<div class="border border-border">...</div>
<div class="border border-input">...</div>
<div class="ring ring-ring">...</div>
```

### Adding Custom Colors

To add a new color (like a warning color):

```css
:root {
  --warning: hsl(38 92% 50%);
  --warning-foreground: hsl(0 0% 100%);
}

.dark {
  --warning: hsl(38 92% 50%);
  --warning-foreground: hsl(0 0% 100%);
}
```

Then in your Tailwind config:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
      },
    },
  },
}
```

## Typography

shadcn/ui uses a clean, modern typography system based on the sans-serif font family by default.

### Font Family

```css
:root {
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

You can customize this in your Tailwind config:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
```

### Typography Scale

shadcn/ui follows a consistent typography scale:

| Class       | Size          | Line Height | Use Case                       |
|-------------|---------------|-------------|--------------------------------|
| text-xs     | 0.75rem (12px)| 1rem (16px) | Small labels, captions         |
| text-sm     | 0.875rem (14px)| 1.25rem (20px) | Secondary text, form labels   |
| text-base   | 1rem (16px)   | 1.5rem (24px) | Body text                     |
| text-lg     | 1.125rem (18px)| 1.75rem (28px) | Emphasized body text          |
| text-xl     | 1.25rem (20px)| 1.75rem (28px) | Subheadings                   |
| text-2xl    | 1.5rem (24px) | 2rem (32px)  | Small headings                |
| text-3xl    | 1.875rem (30px)| 2.25rem (36px) | Medium headings               |
| text-4xl    | 2.25rem (36px)| 2.5rem (40px) | Large headings                |
| text-5xl    | 3rem (48px)   | 1            | Extra large headings          |

### Font Weights

| Class          | Weight | Use Case                    |
|----------------|--------|----------------------------|
| font-light     | 300    | Light text                 |
| font-normal    | 400    | Regular body text          |
| font-medium    | 500    | Slightly emphasized text   |
| font-semibold  | 600    | Headings, buttons         |
| font-bold      | 700    | Strong emphasis           |

## Border Radius

shadcn/ui uses consistent border radius values throughout the components:

```css
:root {
  --radius: 0.5rem;
}
```

| Component Size | Border Radius Class | Value       |
|----------------|---------------------|-------------|
| Extra Small    | rounded-sm          | 0.125rem    |
| Small          | rounded             | 0.25rem     |
| Medium         | rounded-md          | var(--radius) (0.5rem) |
| Large          | rounded-lg          | 0.75rem     |
| Extra Large    | rounded-xl          | 1rem        |
| Full Circle    | rounded-full        | 9999px      |

## Spacing

shadcn/ui follows Tailwind's spacing scale, which is based on a 4px (0.25rem) grid:

| Size | Value        | Use Case                      |
|------|--------------|-------------------------------|
| px   | 1px          | Border width                  |
| 0.5  | 0.125rem (2px) | Tiny spacing                 |
| 1    | 0.25rem (4px)| Very small spacing            |
| 2    | 0.5rem (8px) | Small spacing                 |
| 3    | 0.75rem (12px) | Medium-small spacing        |
| 4    | 1rem (16px)  | Standard spacing             |
| 5    | 1.25rem (20px) | Medium spacing              |
| 6    | 1.5rem (24px)| Medium-large spacing         |
| 8    | 2rem (32px)  | Large spacing                |
| 10   | 2.5rem (40px)| Extra large spacing          |
| 12   | 3rem (48px)  | Very large spacing           |

## Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

These can be used via Tailwind classes:

```html
<div class="shadow-sm">...</div>
<div class="shadow">...</div>
<div class="shadow-md">...</div>
<div class="shadow-lg">...</div>
<div class="shadow-xl">...</div>
```

## Transitions & Animations

shadcn/ui uses subtle but effective transitions for interactive elements:

| Duration | Value    | Use Case                     |
|----------|----------|------------------------------|
| 150ms    | duration-150 | Quick interactions (hover, focus) |
| 200ms    | duration-200 | Standard transitions       |
| 300ms    | duration-300 | More noticeable transitions |
| 500ms    | duration-500 | Emphasis transitions       |

Most common easing functions:
- ease-in-out
- ease-out
- ease-in

Example:
```html
<button class="transition-colors duration-200 ease-in-out hover:bg-primary">
  Click me
</button>
```

## Component Patterns

### Button Variants

```html
<!-- Default -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary
</button>

<!-- Secondary -->
<button class="bg-secondary text-secondary-foreground hover:bg-secondary/80">
  Secondary
</button>

<!-- Destructive -->
<button class="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  Destructive
</button>

<!-- Outline -->
<button class="border border-input bg-background hover:bg-accent hover:text-accent-foreground">
  Outline
</button>

<!-- Ghost -->
<button class="hover:bg-accent hover:text-accent-foreground">
  Ghost
</button>

<!-- Link -->
<button class="text-primary underline-offset-4 hover:underline">
  Link
</button>
```

### Input Styling

```html
<input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
```

### Card Pattern

```html
<div class="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
  <div class="p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">Card Title</h3>
    <p class="text-sm text-muted-foreground">Card Description</p>
    <div class="mt-4">
      <!-- Card content -->
    </div>
  </div>
</div>
```

## Dark Mode

shadcn/ui supports dark mode out of the box. You can toggle between light and dark mode by adding or removing the `dark` class to the `html` element.

With the CSS variables approach, dark mode styling is handled by providing alternative values for the semantic color variables under the `.dark` selector.

### Setting Up Dark Mode with Next.js

```jsx
// In your layout or a provider component
"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeProvider({ children }) {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("light") // Or "dark", "system"
  }, [])

  return <>{children}</>
}
```

### Theme Toggle Component

```jsx
"use client"

import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 hover:bg-accent"
    >
      {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  )
}
```

---

This guide should help you create applications with a consistent look and feel inspired by shadcn/ui. Remember that shadcn/ui is designed to be customized, so feel free to adapt these guidelines to match your project's specific needs.


// globals.css
// This is what you would add to your CSS file to implement the shadcn/ui color system

:root {
  /* Base colors */
  --background: hsl(0 0% 100%);
  --foreground: hsl(222.2 47.4% 11.2%);
  
  /* Muted backgrounds */
  --muted: hsl(210 40% 96.1%);
  --muted-foreground: hsl(215.4 16.3% 46.9%);
  
  /* Card backgrounds */
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Popover backgrounds */
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Borders */
  --border: hsl(214.3 31.8% 91.4%);
  
  /* Input elements */
  --input: hsl(214.3 31.8% 91.4%);
  
  /* Primary action colors */
  --primary: hsl(222.2 47.4% 11.2%);
  --primary-foreground: hsl(210 40% 98%);
  
  /* Secondary action colors */
  --secondary: hsl(210 40% 96.1%);
  --secondary-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Accents */
  --accent: hsl(210 40% 96.1%);
  --accent-foreground: hsl(222.2 47.4% 11.2%);
  
  /* Destructive actions */
  --destructive: hsl(0 100% 50%);
  --destructive-foreground: hsl(210 40% 98%);
  
  /* Ring focus */
  --ring: hsl(215 20.2% 65.1%);
  
  /* Border radius */
  --radius: 0.5rem;
}

.dark {
  --background: hsl(224 71% 4%);
  --foreground: hsl(213 31% 91%);
  
  --muted: hsl(223 47% 11%);
  --muted-foreground: hsl(215.4 16.3% 56.9%);
  
  --card: hsl(224 71% 4%);
  --card-foreground: hsl(213 31% 91%);
  
  --popover: hsl(224 71% 4%);
  --popover-foreground: hsl(215 20.2% 65.1%);
  
  --border: hsl(216 34% 17%);
  --input: hsl(216 34% 17%);
  
  --primary: hsl(210 40% 98%);
  --primary-foreground: hsl(222.2 47.4% 1.2%);
  
  --secondary: hsl(222.2 47.4% 11.2%);
  --secondary-foreground: hsl(210 40% 98%);
  
  --accent: hsl(216 34% 17%);
  --accent-foreground: hsl(210 40% 98%);
  
  --destructive: hsl(0 63% 31%);
  --destructive-foreground: hsl(210 40% 98%);
  
  --ring: hsl(216 34% 17%);
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

// tailwind.config.js
// This is what you would add to your Tailwind config to implement the shadcn/ui color system

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

// utils.js
// This utility function helps combine class names
// Similar to the cn function used in shadcn/ui

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// components/ui/button.jsx
// Example of a Button component styled like shadcn/ui

import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? React.Fragment : "button";
  
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        
        // Variants
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        variant === "link" && "text-primary underline-offset-4 hover:underline",
        
        // Sizes
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 rounded-md px-3",
        size === "lg" && "h-11 rounded-md px-8",
        size === "icon" && "h-10 w-10",
        
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };

// components/ui/input.jsx
// Example of an Input component styled like shadcn/ui

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

// components/ui/card.jsx
// Example of Card components styled like shadcn/ui

import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

// Usage example
// Example page showing how to use the components

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Example() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <Input id="email" placeholder="m@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign In</Button>
          </CardFooter>
        </Card>
        
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold">Button Variants</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <h3 className="text-lg font-semibold">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <span className="h-4 w-4">+</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}