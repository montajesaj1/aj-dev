// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  markdown: {
    remarkPlugins: [
      remarkMath, // <- new plugin
      remarkGfm,
    ],
    rehypePlugins: [rehypeKatex], // <- new plugin
    shikiConfig: {
      themes: { light: "dracula", dark: "dracula" },
      wrap: true,
    },
  },
});
