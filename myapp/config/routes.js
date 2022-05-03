export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      // {
      //   path: '/admin/sub-page',
      //   name: 'sub-page',
      //   icon: 'smile',
      //   component: './Welcome',
      // },
      {
        path: '/admin/user-manage',
        name: 'User Manage',
        component: './Admin/UserManage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'Purchase',
    icon: 'table',
    path: '/purchase',
    component: './Purchase',
    routes: [
      {
        path: '/purchase/calcium_orders',
        name: 'calcium orders',
        component: './Purchase/CalciumOrders',
      },
      {
        path: '/purchase/milkpurchase',
        name: 'Milk Purchase',
        component: './Purchase/MilkPurchase'
      },
      {
        path: '/purchase/rennet_purchase',
        name: 'Rennet Purchase',
        component: './Purchase/RennetPurchase'
      }
    ]
  },
  {
    name: 'Production',
    icon: 'table',
    path: '/production',
    component: './Production',
    routes: [
      {
        path: '/production/productionprocess',
        name: 'production process',
        component: './Production/Productionprocess',
      }
    ]
  },
  {
    name: 'Sales',
    icon: 'table',
    path: '/Sales',
    component: './Sales',
    routes: [
      {
        path: '/sales/salesorder',
        name: 'sales order',
        component: './Sales/SalesOrder',
      }
    ]
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
