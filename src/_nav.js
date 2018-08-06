export default {
  items: [
    {
      name: 'Registrar',
      url: '/register',
      icon: 'icon-plus',
      children: [ 
        {
          name: 'Usuario',
          url: '/registerUser',
          icon: 'icon-user',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    }
  ],
};
