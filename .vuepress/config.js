module.exports = {
  title: 'openEO Platform Documentation',
  description: 'One of the most important properties for a future-oriented platform on earth observation is the orientation towards simple operation, with a special focus on efficiency of evaluation and availability. Complexity is kept hidden in the background to direct your focus on the data. This is done on one hand by the use of an aggregate API to access the infrastructure, but also by improved user-faced graphical processing. For access to the API, the user has the option to incorporate his own preferences, by choosing between several clients.',
  themeConfig: {
    logo: 'https://openeo.cloud/wp-content/themes/openeo_platform/images/logo-pages.svg',
    editLinks: true,
    docsRepo: 'openEOPlatform/documentation',
    docsBranch: 'main',
    algolia: {
      appId: 'AH1DCGL38F',
      apiKey: '3d026b8a9c3950be6d136a6d0f934029',
      indexName: 'openeo-cloud'
    },
    nav: [
      { text: 'Datasets', link: '/data-collections/' },
      { text: 'Get Started', items: [
        { text: 'Free Trial Registration', link: '/join/free_trial.html' },
        { text: 'Data Cubes', link: 'https://openeo.org/documentation/1.0/datacubes.html' },
        { text: 'Client Libraries', items: [
          { text: 'JavaScript', link: '/getting-started/javascript/' },
          { text: 'Python', link: '/getting-started/python/' },
          { text: 'R', link: '/getting-started/r/' },
        ] },
        { text: 'Development Environments', items: [
          { text: 'JupyterLab (Python)', link: '/getting-started/jupyterlab/' },
          { text: 'Editor', link: '/getting-started/editor/' }
        ] },
        { text: 'Cookbook', link: 'https://openeo.org/documentation/1.0/cookbook/' },
        { text: 'Client-Side Processing (Python)', link: '/getting-started/client-side-processing/' },
      ] },
      { text: 'Clients', items: [
          { text: 'JavaScript', link: 'https://open-eo.github.io/openeo-js-client/latest/' },
          { text: 'Python', link: 'https://open-eo.github.io/openeo-python-client/' },
          { text: 'R', link: 'https://open-eo.github.io/openeo-r-client/' }
      ] },
      { text: 'Use Cases', items: [
        { text: 'Cookbook', link: 'https://openeo.org/documentation/1.0/cookbook/' },
        { text: 'Analysis-Ready Data (ARD)', items: [
          { text: 'Overview', link: '/usecases/ard/' },
          { text: 'SAR (Sentinel-1)', link: '/usecases/ard/sar/' },
          { text: 'Multi-Spectral Imagery', link: '/usecases/ard/msi/' },
	  { text: 'Sen2Like', link: '/usecases/ard/sen2like/' },	
        ] },
        { text: 'Crop Classification', link: '/usecases/crop-classification/' },
        { text: 'Forest Change Detection', link: '/usecases/forest-change-detection/' },
        { text: 'Land Cover Classification', link: '/usecases/landcover/' },
        { text: 'NO₂ monitoring', link: '/usecases/no2-monitoring/' },
        { text: 'Large scale processing', link: '/usecases/large-scale-processing/' },
        { text: 'Global flood monitoring', link: '/usecases/gfm/' },
        { text: 'Vessel Detection', link: '/usecases/vessel-detection/' },
	{ text: 'Fractional canopy Cover', link: '/usecases/Fractional-canopy-Cover/' },
	{ text: 'Crop Conditions', link: '/usecases/crop-conditions/' },          
      ] },      
      {text: 'Processes', items: [
        {text: 'JavaScript & R', link: '/processes/'},
        {text: 'Python', link: 'https://open-eo.github.io/openeo-python-client/api.html#module-openeo.rest.datacube'},
      ]},
      { text: 'File Formats', link: '/file-formats/' },
      { text: 'Advanced', items: [
        { text: 'Accounting', link: '/federation/accounting.html'},
        { text: 'Federation Aspects', link: '/federation/index.html'},
        { text: 'Federation Contract', link: '/federation/backends/index.html' },
        { text: 'Workspaces', items: [
          { text: 'Overview', link: '/workspaces/index.md' },
          { text: 'Provisioning a workspace', link: '/workspaces/provisioning/index.md' },
          { text: 'Registering a workspace', link: '/workspaces/registering/index.md' },
          { text: 'Exporting data to a workspace', link: '/workspaces/exporting/index.md' },
          { text: 'Loading data from a workspace', link: '/workspaces/loading/index.md' },
          { text: 'Listing Files', link: '/workspaces/listfiles/index.md' },
          { text: 'User Collections', link: '/workspaces/usercollections/index.md' },
        ]},
/*      { text: 'Federation Contract', items: [
          { text: 'Introduction', link: '/federation/backends/' },
          { text: 'Collections', link: '/federation/backends/collections.html' },
          { text: 'Processes', link: '/federation/backends/processes.html' },
          { text: 'File Formats', link: '/federation/backends/fileformats.html' },
          { text: 'API', link: '/federation/backends/api.html' },
        ] }, */
        { text: 'HTTP API', link: '/api/' },
      ] },
      { text: 'Contact', link: 'https://openeo.cloud/contact/' }
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
  patterns: ['**/*.md', '**/*.vue', '!DEVELOPMENT.md'],
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
