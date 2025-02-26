import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  outDir: '.vitepress/dist',
  cacheDir: '.vitepress/cache',
  title: "Strategy 2025",
  description: "Strategic planning documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tech Department', link: '/tech-department/' },
      { text: 'C-Level', link: '/c-level/' }
    ],
    sidebar: {
      '/tech-department/': [
        {
          text: 'Tech Department',
          items: [
            { text: 'Department Structure', link: '/tech-department/structure' },
            { text: 'Processes & Workflows', link: '/tech-department/processes' }
          ]
        }
      ],
      '/c-level/': [
        {
          text: 'C-Level Interfaces',
          items: [
            { text: 'Overview', link: '/c-level/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/strategy-2025' }
    ]
  }
})
