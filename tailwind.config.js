/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customDarkPink: "#ba4270",
        linkWaterWhite: "#fbfcfe",
        sanJuanBlue: "#36536b",
        mirageBlue: "#1b262f",
        charmPinkActive: "#da6d97",
        lightSanJuanBlue: "#6c8294"
      },
      fontFamily: {
        sans: ['Public Sans', 'sans - serif'],
        serif:['DM Serif Display', 'serif']
      },
      fontSize: {
        headingExtraLarge: "72px",
        headingLarge: "56px",
        headingMedium: "48px",
        headingSmall: "32px",
        headingExtraSmall: "24px",
        headingExtraExtraSmall: "18px",
        bodyText:"15px",
      }
    },
  },
  plugins: [],
}
