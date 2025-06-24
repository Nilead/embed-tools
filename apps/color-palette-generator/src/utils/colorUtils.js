// Color utility functions
export const rgbToHex = (r, g, b) => "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

export const rgbToHsl = (r, g, b) => {
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
};

export const hslToRgb = (h, s, l) => {
  let r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

export const getLuminance = (rgb) => {
  const a = rgb.map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getContrastRatio = (rgb1, rgb2) => {
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

export const getContrastColor = (rgb) => {
  return getContrastRatio(rgb, [0,0,0]) > getContrastRatio(rgb, [255,255,255]) ? 'black' : 'white';
};

// Palette generation functions
export const generateMonochromaticSet = (baseRgb) => {
  const baseHsl = rgbToHsl(baseRgb[0], baseRgb[1], baseRgb[2]);
  return [
    hslToRgb(baseHsl[0], baseHsl[1], Math.min(1, baseHsl[2] + 0.2)),
    hslToRgb(baseHsl[0], baseHsl[1], Math.min(1, baseHsl[2] + 0.1)),
    baseRgb,
    hslToRgb(baseHsl[0], baseHsl[1], Math.max(0, baseHsl[2] - 0.1)),
    hslToRgb(baseHsl[0], baseHsl[1], Math.max(0, baseHsl[2] - 0.2))
  ];
};

export const generateAnalogousSet = (baseRgb) => {
  const baseHsl = rgbToHsl(baseRgb[0], baseRgb[1], baseRgb[2]);
  return [
    hslToRgb((baseHsl[0] - 0.083 + 1) % 1, baseHsl[1], baseHsl[2]),
    baseRgb,
    hslToRgb((baseHsl[0] + 0.083) % 1, baseHsl[1], baseHsl[2])
  ];
};

export const generateComplementarySet = (baseRgb) => {
  const baseHsl = rgbToHsl(baseRgb[0], baseRgb[1], baseRgb[2]);
  return [
    baseRgb,
    hslToRgb((baseHsl[0] + 0.5) % 1, baseHsl[1], baseHsl[2])
  ];
}; 