import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {

   //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

   tutorialSidebar: [
        'intro',
      {
        type: 'category',
        label: 'greeting',
        collapsed: false,
        items: [
          'greeting',
        ],
      },
      {
        type: 'html',
        value: '<img src="/img/logo.svg" alt="Sponsor" />', // The HTML to be rendered
        defaultStyle: false, // Use the default menu item styling
      },
       // External link
      {
        type: 'link',
        label: 'Facebook', // The link label
        href: 'https://facebook.com', // The external URL
      },

       // Internal link
      {
        type: 'link',
        label: 'Home', // The link label
        href: '/', // The internal path
      },
   ],
};

export default sidebars;
