import { defineConfig } from 'vocs'

export default defineConfig({
  socials: [ 
    { 
      icon: 'warpcast', 
      link: 'https://github.com/wevm/viem', 
    }, 
    { 
      icon: 'x', 
      link: 'https://twitter.com/wevm_dev', 
    }, 
  ], 
  title: 'Farville',
  //logoUrl: '/farville-logo.jpeg', 
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Gameplay',
      link: '/gameplay',
    },
  ],
  topNav: [ 
    { text: 'Learn More', link: '/getting-started' }, 
    { text: 'Play', link: 'https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md' }, 
  ],
})
