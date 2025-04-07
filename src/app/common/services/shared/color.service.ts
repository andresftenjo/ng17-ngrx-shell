import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  /**
   * Darkens a color by a specified percentage.
   * @param {string} color - The color in hex format (e.g., "#ffffff").
   * @param {number} percent - The percentage to darken (e.g., -0.1 for 10% darker).
   * @returns {string} - The darkened color in hex format.
   */
  darkenColor(color: string, percent: number): string {
    const f = parseInt(color.slice(1), 16);
    const t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * -1 : percent;
    const R = f >> 16;
    const G = (f >> 8) & 0x00FF;
    const B = f & 0x0000FF;

    const darkenedColor = "#" + (0x1000000 + 
      (Math.round((t - R) * p) + R) * 0x10000 + 
      (Math.round((t - G) * p) + G) * 0x100 + 
      (Math.round((t - B) * p) + B)
    ).toString(16).slice(1);

    return darkenedColor;
  }

  /**
   * Sets a CSS variable with the darkened color.
   * @param {string} variableName - The CSS variable name (e.g., "--primary-color").
   * @param {string} color - The original color in hex format.
   * @param {number} percent - The percentage to darken (e.g., -0.1 for 10% darker).
   */
  setDarkenedColor(variableName: string, color: string, percent: number) {
    const darkenedColor = this.darkenColor(color, percent);
    document.documentElement.style.setProperty(variableName, darkenedColor);
  }
}
