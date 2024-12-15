import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../build', // Output directory
    emptyOutDir: true, // Clear the folder before building
  },
  server: {
    port: 3000, // Optional: Development server port
  },
});

