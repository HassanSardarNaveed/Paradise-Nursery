import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/Paradise-Nursery/",
  plugins: [react()],
  server: {
    port: 5173,
  },
});
