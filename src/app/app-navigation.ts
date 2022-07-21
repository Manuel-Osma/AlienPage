export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Usuario',
    icon: 'user',
    items: [
      {
        text: 'Perfil',
        icon:'card',
        path: '/profile'
      },
      {
        text: 'Tareas',
        icon:'file',
        path: '/tasks'
      },
      {
        text:"Calendario",
        icon:'event',
        path:'/scheduler'
      }
    ]
  }
];
