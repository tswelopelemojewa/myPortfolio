
import data from "./data.json" assert {type:'json'};

import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
// import data from './data.json';

export default defineConfig({
    base : '/responsive_webpages/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                contact: 'contact.html',
                about: 'about.html',
                projects: 'projects.html'
            }
        },
    },
    plugins: [handlebars({
      context : {
        data
      }
  })]
    
});