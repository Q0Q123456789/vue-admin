import layout from '@/layout'

const route = [
  {
    path: '/',
    name: '',
    // redirect: '/',
    component: layout,
    children: [
      {
        path: '/',
        name: 'home_page',
        meta: {
          title: '首页',
          husband: '1',
          name: '1-1'
        },
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  }
]

export default route
