const NavBar = () => {
  return {
    items: [
      {
        name: 'Home',
        url: './',
        icon: 'icon-home'
      },
      {
        name: 'Socios',
        url: '/partners',
        icon: 'icon-people',
        children: [
          {
            name: 'Nuevo',
            url: '/newPartner',
            icon: 'icon-plus',
          },
          {
            name: 'Modificar',
            url: '/editPartner',
            icon: 'icon-pencil',
          },
          {
            name: 'Eliminar',
            url: '/deletePartner',
            icon: 'icon-close',
          },
        ],
      },
      {
        name: 'Contratos',
        url: '/contract',
        icon: 'icon-book-open',
        children: [
          {
            name: 'Nuevo',
            url: '/newContract',
            icon: 'icon-user',
          },
          {
            name: 'Modificar',
            url: '/editContract',
            icon: 'icon-pencil',
          },
          {
            name: 'Eliminar',
            url: '/deleteContract',
            icon: 'icon-close',
          },
        ]
      },
      {
        name: 'Imprimir Ticket',
        url: '/printTicket',
        icon: 'icon-printer'
      },
      {
        name: 'Pasar cobros',
        url: '/payFees',
        icon: 'icon-credit-card'
      }
    ]
  };
};


const adminOptions = [
  {
    divider: true,
  },
  {
    title: true,
    name: 'Configuraciones de administrador',
  },
  {
    name: 'Nuevo usuario',
    url: '/registerUser',
    icon: 'icon-plus',
  },
  {
    name: 'Radios',
    url: '/ratios',
    icon: 'icon-map',
    children: [
      {
        name: 'Nuevo',
        url: '/newRatio',
        icon: 'icon-plus',
      },
      {
        name: 'Modificar',
        url: '/editRatio',
        icon: 'icon-pencil',
      },
      {
        name: 'Modificar',
        url: '/deleteRatio',
        icon: 'icon-close',
      },
    ],
  },
  {
    name: 'Ultimo Registro',
    url: '/lastLogin',
    icon: 'icon-user'
  },
  {
    name: 'Cuotas',
    url: '/fees',
    icon: 'icon-calculator'
  }
];

const userBarOptions = (user) => {
  debugger;
  const nav = NavBar();
  if (user && user.isAdmin) {
    adminOptions.map((item) => {
      nav.items.push(item);
    });
    return nav;
  } else if (user && user.isVisitant) {
    return { items: [{ name: 'Home', url: './', icon: 'icon-home' }] }
  } else {
    return nav;
  }
}


module.exports = {
  userBarOptions,
  NavBar: NavBar()
}
