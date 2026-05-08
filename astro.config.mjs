// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  adapter: cloudflare(),
  redirects: {
    '/home': {
      status: 301,
      destination: '/',
    },
    '/about': {
      status: 301,
      destination: '/#about',
    },
    '/program': {
      status: 301,
      destination: '/#program',
    },
    '/speakers': {
      status: 301,
      destination: '/#speakers',
    },
    '/venue': {
      status: 301,
      destination: '/#venue',
    },
    '/general-info': {
      status: 301,
      destination: '/#info',
    },
    '/general-information': {
      status: 301,
      destination: '/#info',
    },
    '/info': {
      status: 301,
      destination: '/#info',
    },
    '/people': {
      status: 301,
      destination: '/#people',
    },
    '/application': {
      status: 301,
      destination: '/#apply',
    },
    '/apply': {
      status: 301,
      destination: '/#apply',
    },
    '/aftermovie': {
      status: 301,
      destination: '/#aftermovie',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
