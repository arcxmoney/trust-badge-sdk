/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        degular: ['Degular'],
        degularBold: ['DegularBold'] 
      },
      fontSize: {
        "banner-title-lg": ["106px", "86px"],
        "banner-title": ["80px", "80px"],
        "heading-1": ["48px", "44px"],
        "heading-2": ["36px", "34px"],
        subtitle: ["24px", "26px"],
        small: ["14px", "20px"],
        base: ["18px", "24px"],
        "base-sm": ["16px", "22px"],
      },
      boxShadow: {
        tooltip: "4px 4px 0px #000000",
      },
      colors: {
        charcoal: {
          DEFAULT: "#1E1C1D",
        },
        lime: {
          DEFAULT: "#D4F178",
          dark: "#BFD96C",
        },
        pink: {
          DEFAULT: "#FF68EB",
        },
        cyan: {
          DEFAULT: "#44D7F8",
          dark: "#3DC1DF",
        },
        beige: {
          DEFAULT: "#FCF5EB",
          dark: "#e3ddd3",
        },
        gray: {
          DEFAULT: "#C5C5C5",
          light: "#F2F2F2",
        },
        red: {
          DEFAULT: "#F15850",
        }
      },
      letterSpacing: {
        "heading-1": "-2px",
        "heading-2": "-2px",
        "2%": "-0.02em",
      },
    },
  },
  plugins: [],
}




