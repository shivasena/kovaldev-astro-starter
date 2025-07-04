# Footer Component

A reusable footer component for Astro projects that can be easily customized for any organization or company.

## Features

- ✅ Fully customizable company information
- ✅ Optional contact details (phone, email, website)
- ✅ Social media links support
- ✅ Custom logo support
- ✅ Responsive design
- ✅ Accessible with proper ARIA labels
- ✅ TypeScript support
- ✅ Follows Astro starter design system

## Basic Usage

```astro
---
import Footer from "@components/Footer.astro";
---

<Footer
  companyName="Your Company"
  location="Your City, State"
  phone="+1 (555) 123-4567"
  email="hello@yourcompany.com"
  website="https://yourcompany.com"
/>
```

## Props

| Prop                | Type           | Default          | Description                 |
| ------------------- | -------------- | ---------------- | --------------------------- |
| `companyName`       | `string`       | `"Your Company"` | Company/organization name   |
| `location`          | `string`       | `undefined`      | Company location            |
| `phone`             | `string`       | `undefined`      | Phone number                |
| `email`             | `string`       | `undefined`      | Email address               |
| `website`           | `string`       | `undefined`      | Website URL                 |
| `logo`              | `any`          | `undefined`      | Custom logo component       |
| `backgroundColor`   | `string`       | `"bg-accent"`    | Footer background color     |
| `textColor`         | `string`       | `"text-white"`   | Footer text color           |
| `showSocial`        | `boolean`      | `false`          | Show social media links     |
| `socialLinks`       | `SocialLink[]` | `[]`             | Array of social media links |
| `additionalContent` | `any`          | `undefined`      | Additional footer content   |
| `class`             | `string`       | `""`             | Additional CSS classes      |

## Social Media Links

```astro
<Footer
  companyName="Tech Company"
  showSocial={true}
  socialLinks={[
    {
      platform: "Twitter",
      url: "https://twitter.com/yourcompany",
      label: "Follow us on Twitter"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/yourcompany",
      label: "Connect with us on LinkedIn"
    }
  ]}
/>
```

## Custom Styling

```astro
<Footer
  companyName="Creative Agency"
  backgroundColor="bg-primary"
  textColor="text-white"
  class="shadow-lg"
/>
```

## Minimal Footer

```astro
<Footer companyName="Simple Company" />
```

## Integration with Layout

The footer is automatically included in the main layout. To customize it for your project, update the props in `src/layouts/Layout.astro`:

```astro
<Footer
  companyName="Your Company"
  location="Your City, State"
  email="hello@yourcompany.com"
  website="https://yourcompany.com"
/>
```

## Accessibility

- Uses semantic HTML with `<footer>` and `<address>` elements
- Includes proper ARIA labels for screen readers
- Keyboard navigation support
- High contrast color scheme by default

## Design System Integration

The footer component uses your project's design tokens:

- Uses `text-small` for typography
- Uses `bg-accent` for background color
- Responsive spacing with Tailwind utilities
- Follows the established color scheme
