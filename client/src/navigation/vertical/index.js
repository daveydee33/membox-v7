import { Mail, Home, Plus, Package, Book, BookOpen, Mic, Settings, Image } from 'react-feather'

export default [
  {
    id: 'items',
    title: 'Words and Phrases (Items)',
    icon: <Book size={20} />,
    navLink: '/items'
  },
  // {
  //   id: 'examples',
  //   title: 'Example Uses',
  //   icon: <BookOpen size={20} />,
  //   navLink: '/examples'
  // },
  {
    id: 'collections',
    title: 'Collections',
    icon: <Package size={20} />,
    navLink: '/collections'
  },
  {
    id: 'addWord',
    title: 'Add a Word',
    icon: <Plus size={20} />,
    navLink: '/add-word'
  },
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Settings size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'speech',
    title: 'Speech Recognition',
    icon: <Mic size={20} />,
    navLink: '/speech'
  },
  {
    id: 'image-search',
    title: 'Image Search',
    icon: <Image size={20} />,
    navLink: '/image-search'
  }
]
