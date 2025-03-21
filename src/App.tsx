import { useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AsideBar from './containers/AsideBar/AsideBar'
import Header from './containers/header/Header'
import Calendario from './pages/Calendario/Calendario'
import Contatos from './pages/Contatos/Contatos'
import Home from './pages/Home/Home'
import NewTask from './pages/NewTask/NewTask'
import Produtos from './pages/Produtos/Produtos'
import Tarefas from './pages/Tarefas/Tarefas'
import store from './redux/store'
import { GlobalMain, GlobalMainContent, GlobalStyle } from './styles/globalStyles'

// Layout base que sempre renderiza o Header e AsideBar
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(prev => !prev)

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div>
        <Header />
        <AsideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <GlobalMain>
        <GlobalMainContent $isOpen={isOpen}>
          <Outlet />
        </GlobalMainContent>
      </GlobalMain>
    </Provider>
  )
}

// Definindo as rotas com o layout fixo
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/Tarefas', element: <Tarefas /> },
      { path: '/Produtos', element: <Produtos /> },
      { path: '/Contatos', element: <Contatos /> },
      { path: '/Calendario', element: <Calendario /> },
      { path: '/NewTask', element: <NewTask /> }
    ]
  }
])

function App() {
  return <RouterProvider router={rotas} />
}

export default App
