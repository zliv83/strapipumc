/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/theme";
import {
  PumcOrange,
  PumcWhite,
  PumcBlue,
  PumcRed,
  PumcYellow,
  PumcGreen,
} from "./theme";

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      llg: {
        raw: "(min-width: 1024px) and (orientation: landscape)",
      },
    },
    extend: {
      colors: {
        PumcWhite: PumcWhite,
        PumcBlue: PumcBlue,
        PumcRed: PumcRed,
        PumcYellow: PumcYellow,
        PumcGreen: PumcGreen,
      },
      width: {
        "button-sm": "5.938rem",
        "button-md": "10.625rem",
        "button-lg": "17rem",
        "button-mobile-lg": "13rem",
      },
      height: {
        "button-sm": "3rem",
        "button-md": "3.5rem",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: PumcWhite,
            foreground: PumcBlue,
            divider: PumcBlue,
            primary: {
              ...PumcOrange,
            },
          },
        },
      },
    }),
  ],
};
