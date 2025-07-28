export function desaturateHex(hex, desaturation = 0.5) {
  // Clamp desaturation between 0 (no change) and 1 (fully grey)
  desaturation = Math.max(0, Math.min(1, desaturation));

  // Convert hex to RGB
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  // Convert RGB to HSL
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h /= 6;
  }

  // Apply desaturation
  s *= 1 - desaturation;

  // Convert back to RGB
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  r = hue2rgb(p, q, h);
  g = hue2rgb(p, q, h);
  b = hue2rgb(p, q, h);

  // Convert back to hex
  const toHex = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
import { worldAreas } from "./data";
export const findAreaByChar = (char) => {
    if (char === 'w') return null;
    return Object.values(worldAreas).find(area => area.char === char);
  };
export const isUpperCase = (char) => {
  return char === char.toUpperCase();
}
export  const getAreaNameFromChar = (char) => {
  console.log(char)
  for (const [name, data] of Object.entries(worldAreas)) {
    if (data.char === char) {
      return name;
    }
  }
  return null; // not found
};

import { colors } from "./data";

export   const getAreaColor = (area) => {
    const AreaIdeology = area.sides[5].ideology;
    //console.log(colors.ideologies[AreaIdeology])
    return colors.ideologies[AreaIdeology]
  }