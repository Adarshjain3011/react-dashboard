import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // Root is current directory
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
  },
});

