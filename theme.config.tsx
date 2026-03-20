import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 800 }}>Ykaa Scripts</span>,
  project: {
    link: 'https://github.com/ykaa', 
  },
  docsRepositoryBase: 'https://github.com/ykaa/docs',
  footer: {
    text: 'Ykaa Documentation © 2024',
  },
  nextThemes: {
    defaultTheme: 'dark',
  }
}

export default config
