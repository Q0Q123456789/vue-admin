import layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    name: '首页',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: '',
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
    path: '/',
    name: '此页',
    redirect: '/about',
    component: layout,
    children: [
      {
        path: '/about',
        name: '',
        meta: {
          title: '',
          husband: '1',
          name: '1-1'
        },
        component: () => import('@/views/About')
      }
    ]
  }
]
export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]
