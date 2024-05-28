import type { Config } from "tailwindcss";

const config = {
  corePlugins: {
    container: false,
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primaryLessOpacity: "hsl(var(--primary-less-opacity))",
        primaryLight: "hsl(var(--primary-light))",
        primaryDark: "hsl(var(--primary-dark))",

        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        gray: "hsl(var(--gray))",
        lightGray: "hsl(var(--light-gray))",
        yellow: "hsl(var(--yellow))",
        orange: "hsl(var(--orange))",
        stroke: "hsl(var(--stroke))",
        textColor: "hsl(var(--text-color))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        heading: "hsl(var(--heading-text))",
        placeholder: "hsl(var(--placeholder-text))",

        disabled: "hsl(var(--disabled))",
        inputBorder: "hsl(var(--input-border))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      dropShadow: {
        "xl-opacity": "0 4px 6px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          padding: "0.5rem 0.875rem",

          "@screen md": {
            padding: "1.25rem 1.25rem 1.25rem 1.063rem",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
} satisfies Config;

export default config;
