import layout from '@/layout'

export const constantRoutes = [
  {
    path: '',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        meta: {
          title: '首页',
          husband: '1',
          name: '1-1'
        },
        component: () => import('@/views/Home')
      }
    ]
  },
  {
    path: '/about',
    redirect: '/about/about_page_a',
    component: layout,
    name: 'about',
    meta: {
      title: 'about',
      icon: 'about'
    },
    children: [
      {
        path: 'about_page_a',
        component: () => import('@/views/About/index'),
        name: '',
        meta: {
          title: '此页'
        }
      },
      {
        path: 'about_page_b',
        component: () => import('@/views/About/index'),
        name: '',
        meta: {
          title: '此页'
        }
      },
      {
        path: 'about_page_c',
        component: () => import('@/views/About/index'),
        name: '',
        meta: {
          title: '此页'
        }
      }
    ]
  }
]
export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]
