import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // Use esbuild for fast and efficient minification
    target: 'esnext',  // Set the target to the latest JS syntax for modern browsers
    sourcemap: false,  // Disable sourcemaps for production builds
    cssCodeSplit: true, // Enable CSS code splitting for better caching
    outDir: 'dist',    // Specify output directory for build files
    assetsDir: 'assets', // Specify directory for static assets
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split vendor code into a separate chunk
        },
      },
    },
  },
});
