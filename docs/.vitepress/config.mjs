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
      { text: 'Tech Department', link: '/tech-department/' }
    ],
    sidebar: {
      '/tech-department/': [
        {
          text: 'Tech Department',
          items: [
            { text: 'Department Structure', link: '/tech-department/structure' },
            { text: 'Strategic Objectives', link: '/tech-department/objectives' },
            {
              text: 'Interfaces',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/tech-department/interfaces' },
                { text: 'Product Management', link: '/tech-department/interfaces/product-management' },
                { text: 'Design', link: '/tech-department/interfaces/design' },
                { text: 'Partnerships', link: '/tech-department/interfaces/partnerships' },
                { text: 'Marketing', link: '/tech-department/interfaces/marketing' },
                { text: 'Operations', link: '/tech-department/interfaces/operations' },
                { text: 'Finance', link: '/tech-department/interfaces/finance' }
              ]
            }
          ]
        }
      ],
      '/interfaces/': [
        {
          text: 'Interfaces',
          items: [
            { text: 'Overview', link: '/interfaces/' },
            { text: 'C-Level Interface', link: '/interfaces/c-level' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/strategy-2025' }
    ]
  }
})
