# Color Guidelines

This guide explains when and how to use each predefined color in your design system. All colors are defined using OKLCH color space for perceptual uniformity and accessibility.

## 🎨 Available Colors

### **Primary Color**

- **Hex Equivalent**: `oklch(0.78 0.1687 65.71)`
- **When to use**: Main brand actions, primary CTAs, important highlights
- **Usage**:
  - `bg-primary text-white` - Primary buttons, main CTAs
  - `text-primary` - Important links, brand accents
  - `border-primary` - Primary element borders
- **Examples**: "Sign up", "Buy now", "Learn more" buttons, active navigation links

### **Accent Color**

- **OKLCH Definition**: `oklch(0.51 0.196 22.53)`
- **When to use**: Secondary actions, subtle highlights, supporting elements
- **Usage**:
  - `bg-accent text-light` - Secondary buttons, alternative CTAs
  - `text-accent` - Secondary links, subtle highlights
  - `border-accent` - Secondary borders
- **Examples**: "Learn more" buttons, section dividers, hover states

### **Secondary Color**

- **OKLCH Definition**: `oklch(0.34 0.1251 330.49)`
- **When to use**: Tertiary actions, subtle accents, softer interactive elements
- **Usage**:
  - `bg-secondary text-light` - Primary buttons, main solid buttons
  - `text-secondary` - Tertiary links, subtle text accents
  - `border-secondary` - Secondary borders, dividers
- **Examples**: Main button backgrounds, muted accents, tertiary navigation elements

### **Light Color**

- **Hex Equivalent**: `color-mix(in oklch, var(--color-primary) 5%, white)`
- **When to use**: Main backgrounds, subtle sections, light mode content areas
- **Usage**:
  - `bg-light text-dark` - Page backgrounds, content cards
  - `text-light` - Text on dark backgrounds
- **Examples**: Main page backgrounds, content containers, light mode sections

### **Dark Color**

- **Hex Equivalent**: `color-mix(in oklch, var(--color-primary) 5%, black)`
- **When to use**: Footer backgrounds, dark sections, contrasted content areas
- **Usage**:
  - `bg-dark text-light` - Footers, dark hero sections
  - `text-dark` - Body text on light backgrounds
- **Examples**: Site footer, dark navigation bars, contact sections

### **White**

- **When to use**: Content needing maximum contrast, overlays, pure backgrounds
- **Usage**:
  - `bg-white text-dark` - Modal backgrounds, high-contrast cards
  - `text-white` - Text on dark backgrounds
- **Examples**: Modal overlays, pure contrast areas, high-impact sections

### **Black**

- **When to use**: Maximum contrast areas, dramatic elements, pure dark backgrounds
- **Usage**:
  - `bg-black text-white` - Dramatic sections, hero backgrounds
  - `text-black` - High contrast text
- **Examples**: Hero sections, dramatic CTAs, pure black areas

## 🔗 Color Combinations

### Button Hierarchy

```css
/* Primary Action - Most Important */
bg-primary text-white hover:bg-primary/90

/* Secondary Action - Main Solid Buttons */
bg-secondary text-light hover:bg-secondary/90

/* Tertiary Action - Alternative */
bg-accent text-light hover:bg-accent/90

/* Outline/Ghost - Subtle */
bg-transparent text-primary border-primary hover:bg-primary/10

/* Text/Link - Minimal */
text-primary hover:text-primary/80 underline-offset-4
```

### Layout Backgrounds

```css
/* Standard Content Area */
bg-light text-dark

/* Footer/Dark Sections */
bg-dark text-light

/* High Contrast Areas */
bg-white text-dark
bg-black text-white
```

### Text Hierarchy

```css
/* Brand/Essential */
text-primary

/* Regular Body Text */
text-dark    /* on light backgrounds */
text-light   /* on dark backgrounds */

/* Pure Contrast */
text-white   /* on dark backgrounds */
text-black   /* on light backgrounds */
```

## ⚡ Quick Reference

| Use Case        | Background       | Text           |
| --------------- | ---------------- | -------------- |
| Primary CTA     | `bg-primary`     | `text-white`   |
| Secondary CTA   | `bg-secondary`   | `text-light`   |
| Tertiary CTA    | `bg-accent`      | `text-light`   |
| Ghost Button    | `bg-transparent` | `text-primary` |
| Page Background | `bg-light`       | `text-dark`    |
| Footer          | `bg-dark`        | `text-light`   |
| Hero Section    | `bg-black`       | `text-white`   |
| Card Background | `bg-white`       | `text-dark`    |

## 🎯 Design Principles

1. **Contrast First**: Always ensure sufficient color contrast for accessibility
2. **Hierarchy**: Use primary for most important actions, secondary for main CTAs, accent for tertiary
3. **Consistency**: Stick to predefined combinations for cohesive design
4. **Semantic**: Choose colors based on meaning, not aesthetics
5. **Accessibility**: Test all color combinations for WCAG compliance

## 🛠 Customizing Colors

To modify the color palette, update the CSS custom properties in `src/styles/global.css`:

```css
@theme {
  --color-primary: oklch(0.78 0.1687 65.71);
  --color-accent: oklch(0.51 0.196 22.53);
  --color-secondary: oklch(0.34 0.1251 330.49);
}
```

- Use the OKLCH color picker for perceptual uniformity
- Maintain the 5% primary color mix for light/dark variants
- Test all combinations for accessibility compliance

## 📱 Responsive Considerations

Colors maintain the same meaning across all device sizes:

- Mobile: Same color usage for consistent UX
- Tablet: Preserve color relationships for familiar navigation
- Desktop: Utilize full color palette for enhanced hierarchy

## ♿ Accessibility Notes

- All predefined colors meet WCAG AA contrast requirements
- Use semantic markup with color (not color alone for meaning)
- Test with color blindness simulators for usability
- Provide focused state indicators for interactive elements
