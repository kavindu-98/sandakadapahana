/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/sandakadapahana",
});