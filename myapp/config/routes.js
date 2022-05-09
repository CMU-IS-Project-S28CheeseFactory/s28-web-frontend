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
      },
      {
        path: '/purchase/culturepurchase',
        name: 'Culture Purchase',
        component: './Purchase/CulturePurchase'
      }
    ]
  },
  {
    name: 'Information',
    icon: 'table',
    path: '/information',
    component: './Information',
    routes: [
      {
        path: '/information/cheeseinfo',
        name: 'Cheese Info',
        component: './Information/CheeseInfo'
      },
      {
        path: '/information/cutwheelinfo',
        name: 'Cut Wheel Info',
        component: './Information/CutWheelInfo'
      },
      {
        path: '/information/dailyweather',
        name: 'Daily Weather',
        component: './Information/DailyWeather'
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
