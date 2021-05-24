export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604f796030d9eb0e65bb6150',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y7pvm4ww',
                  apiId: 'dde5b68e-3b55-4a8a-89ba-f11e15994f12'
                },
                {
                  buildHookId: '604f79604f3a6f0d9d5d24c3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3unry6a9',
                  apiId: '52fe0e19-432e-4d6a-b09a-21f0438e0311'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MAU-Estate/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-3unry6a9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } }
    // {
    //   name: 'document-list',
    //   options: { title: 'Recent Wor', order: '_createdAt desc', types: ['work'] },
    //   layout: { width: 'medium' }
    // }
  ]
};
