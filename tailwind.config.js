/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px', // Small screens
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      // Remove or comment out 'xl' to remove the min-width of 1556px
      'xl': '1280px', // Extra large screens
    },
    extend: {
      container: {
        // Add margin-right: auto; and margin-left: auto;
        center: true,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
