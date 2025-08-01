import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  base: '/OctoGon-3D-Portfolio-Page/',
  vite: {
    plugins: [tailwindcss()]
  }
});