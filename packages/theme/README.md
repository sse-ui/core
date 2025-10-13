# SSE UI Themer

Tailwind CSS Styling Library for Building Modern, Consistent and Accessible Web UIs with Radix UI, Melt UI, and Radix Vue.

## Concept

Imagine SSE Ui Themer as a secret style vault for our UI Kits. It uses Tailwind CSS, making it super easy to customize the look and feel of your components. This means you get a consistent design foundation across all these UI Kits, but with the freedom to tweak things to perfectly match your brand.

## Features

- 🎨 Built-in Palettes
- 🎨 Multi-Theming
- 🛠️ Effortless Customization
- 🚀 Expanded Component Variants
- ♿ Accessibility First
- 🌟 Modern & Trendy

## Quick Start

1. **Install SSE UI Themer:**

```bash
npm install @sse-ui/themer
```

2. **Update your tailwindcss config**

   Import the themer plugins to set your theme and enable data-attributes customizations

```javascript
import type { Config } from 'tailwindcss'

module.exports =  {
  content: [
    // your other paths
    "./node_modules/@sse-ui/themer/dist/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: palettes.trust,
    },
  },
  plugins: []
} satisfies Config
```

## Customize your theme

Use `data-attributes` to customize your theme

## Contributing

SSE UI Themer is an open source project and contributions from the community are always the welcome. If you have any ideas or suggestions for how to improve SSE UI Themer, please feel free to open an issue or submit a pull request.

## Support

If you have any questions or need help with using SSE UI Themer, please feel free to reach out on Twitter.

## License

SSE UI Themer is licensed under the MIT license.

## Author

- [SSE World](https://github.com/sseworld)

## Credits

- [Tailwind CSS](https://www.tailwindcss.com)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind Variants](https://www.tailwind-variants.org/docs/introduction)
- [Flowbite Theme](https://flowbite.com/)
- Special thanks to [Shekinah Tshiokufila](https://twitter.com/tshiokufila) for the continuous support and feedback.
- Special thanks to [Théo Balick](https://twitter.com/theo_balick) whose brainstorming sessions and research fueled the creation of SSE UI Themer.
- [Nuxt Ui](https://ui.nuxt.com/)
