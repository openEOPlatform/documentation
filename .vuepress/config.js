module.exports = {
  title: 'openEO Platform Documentation',
  description: 'One of the most important properties for a future-oriented platform on earth observation is the orientation towards simple operation, with a special focus on efficiency of evaluation and availability. Complexity is kept hidden in the background to direct your focus on the data. This is done on one hand by the use of an aggregate API to access the infrastructure, but also by improved user-faced graphical processing. For access to the API, the user has the option to incorporate his own preferences, by choosing between several clients.',
  themeConfig: {
    logo: 'https://openeo.cloud/wp-content/themes/openeo_platform/images/logo-pages.svg',
    editLinks: true,
    docsRepo: 'openEOPlatform/documentation',
    docsBranch: 'main',
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Data Collections', link: '/data-collections/' },
      { text: 'Get Started', items: [
        { text: 'Data Cubes', link: 'https://openeo.org/documentation/1.0/datacubes.html' },
        { text: 'Client Libraries', items: [
          { text: 'JavaScript', link: '/getting-started/javascript/' },
          { text: 'Python', link: '/getting-started/python/' },
//        { text: 'R', link: '/getting-started/r/' },
        ] },
        { text: 'Development Environments', items: [
          { text: 'JupyterLab (Python)', link: '/getting-started/jupyterlab/' },
          { text: 'Editor', link: '/getting-started/editor/' }
        ] },
        { text: 'Authentication', link: '/authentication/' },
        { text: 'Cookbook', link: 'https://openeo.org/documentation/1.0/cookbook/' },
      ] },
      { text: 'Use Cases', items: [
        { text: 'Cookbook', link: 'https://openeo.org/documentation/1.0/cookbook/' },
        { text: 'Analysis-Ready Data (ARD)', items: [
          { text: 'Overview', link: '/usecases/ard/' },
          { text: 'SAR (Sentinel-1)', link: '/usecases/ard/sar/' },
          { text: 'Multi-Spectral Imagery', link: '/usecases/ard/msi/' },
        ] },
        { text: 'Crop classification', link: '/usecases/crop-classification/' },
        { text: 'Forest Change Detection', link: '/usecases/forest-change-detection/' },
      ] },
      { text: 'Processes', link: '/processes/' },
      { text: 'File Formats', link: '/file-formats/' },
      { text: 'Advanced', items: [
        { text: 'Federation Aspects', link: '/federation/' },
        { text: 'HTTP API', link: '/api/' },
      ] },
      { text: 'Contact', link: 'https://openeo.cloud/contact/' },
      { text: 'openeo.cloud', link: 'https://openeo.cloud' }
    ],
    sidebar: 'auto'
  },
  plugins: [
    '@vuepress/register-components',
    'check-md',
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    [
      'code-switcher',
      {
        groups: {
          default: {py: 'Python', js: 'JavaScript'},
        }
      }
    ],
    ['vuepress-plugin-code-copy', true]
  ],
  serviceWorker: true,
  chainWebpack: (config, isServer) => {
    config.module
      .rule('js')
        .test(/\.js$/)
        .exclude.add(filePath => {
          // transpile js-commons
          if (/@openeo\/js-commons/.test(filePath)) {
            return false
          }
          return true;
        }).end()
  }
};
