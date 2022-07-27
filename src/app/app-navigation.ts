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
      },
      {
        text:'agregar',
        icon: 'add',
        path: '/tree'

      },
      {
        text:'Formulario',
        icon:'edittableheader',
        path:'/form'
      }
    ]
  },
  {
    text:'Mapa',
    icon:'map',
    path:'/map'
  },
  {
    text:'Mis Componentes',
    icon:'folder',
    items:[
      {
        text:'Panel de carga',
        icon:'revert',
        path:'/panel'
      },
      {
        text:'validaciones',
        icon:'check',
        path:'/validator'
      }
    ]
  },
  {
    text:'Palette',
    icon:'source',
    path:'/palette'
  },
  {
    text:'html editor',
    icon:'codeblock',
    path:'/editor'
  }
];
