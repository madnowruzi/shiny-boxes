import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import toColorValue from "tailwindcss/lib/util/toColorValue";

const cssFilterValue = [
  "var(--tw-blur)",
  "var(--tw-brightness)",
  "var(--tw-contrast)",
  "var(--tw-grayscale)",
  "var(--tw-hue-rotate)",
  "var(--tw-invert)",
  "var(--tw-saturate)",
  "var(--tw-sepia)",
  "var(--tw-drop-shadow)",
].join(" ");

export const glowPlugin = plugin(function ({ matchUtilities }) {
  const glow = [`0`, `0`, `var(--tw-glow-blur-radius)`, `var(--tw-glow-color)`].join(" ");

  matchUtilities(
    {
      glow: (value) => {
        return {
          "--tw-drop-shadow": `drop-shadow(${glow})`,
          "--tw-glow-blur-radius": value ?? "2px",
          "@defaults filter": {},
          filter: cssFilterValue,
        };
      },
    },
    {
      values: {
        sm: "1px",
        base: "2px",
        md: "4px",
        lg: "6px",
      },
    }
  );
});

export const glowColorPlugin = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      glow: (value) => {
        return {
          "--tw-glow-color": toColorValue(value),
        };
      },
    },
    {
      values: flattenColorPalette(theme("borderColor")),
      type: ["color", "any"],
    }
  );
});
