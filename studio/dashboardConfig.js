export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '613c22df86aceeb7b973b23e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cxqjeg5i',
                  apiId: 'b38e66e1-68b8-4394-b949-98362f32a4e9'
                },
                {
                  buildHookId: '613c22dff567d9cf83885e1b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dy5qu4ah',
                  apiId: '1d2117aa-68cf-4a75-aff7-1dbc87f05505'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cloudcrcr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dy5qu4ah.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
