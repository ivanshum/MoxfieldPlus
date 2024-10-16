import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { ManifestV3Export, crx } from '@crxjs/vite-plugin';
import svgr from 'vite-plugin-svgr';

import manifestJson from './manifest.json';

const manifest = manifestJson as ManifestV3Export;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), svgr(), react(), crx({ manifest })],
});
