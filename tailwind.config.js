const { flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/result/*.{js, ts, jsx, tsx, mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: { blink: 'blink 6s infinite', bounce: 'bounce 5s infinite', wave: 'wave 5s infinite', }, keyframes: { blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.8 }, }, bounce: { '0%': { transform: 'translateY(0)' }, '25%': { transform: 'translateY(-20px)' }, '50%': { transform: 'translateY(0px)' }, '75%': { transform: 'translateY(20px)' }, '100%': { transform: 'translateY(0px)' } }, wave: { '0%': { transform: 'rotate(0deg)' }, '50%': { transform: 'rotate(-10deg)' }, '100%': { transform: 'rotate(10deg)' }, }, }
  },
  variants: { extend: {}, },
  plugins: [addVariablesForColors],
}

}


