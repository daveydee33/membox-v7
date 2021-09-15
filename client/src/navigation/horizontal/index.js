import { Mail, Home, Plus } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'addWord',
    title: 'Add a Word',
    icon: <Plus size={20} />,
    navLink: '/add-word'
  }
]
