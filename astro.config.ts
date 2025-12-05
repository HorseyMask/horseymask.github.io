import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
  site: 'https://horseymask.github.io/',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Hyunsun',
      openGraph: {
        home: {
          title: 'Hyunsun',
          description: 'Personal website/portfolio'
        },
        blog: {
          title: 'Blog',
          description: '"Blog"'
        },
        projects: {
          title: 'Projects'
        },
        hobbies: {
          title: 'Hobbies'
        }
      },
    })
  ]
});

export default config
