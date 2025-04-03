import { useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AsideBar from './containers/AsideBar/AsideBar'
import Header from './containers/Header/Header'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import Home from './pages/HomePage/HomePage'
import NewContactsPage from './pages/NewContactPage/NewContactPage'
import NewTaskPage from './pages/NewTaskPage/NewTaskPage'
import ProductsPage from './pages/productsPage/productsPage'
import TasksPage from './pages/TasksPage/TasksPage'
import { store } from './redux/store'
import { GlobalMain, GlobalMainContent, GlobalStyle } from './styles/globalStyles'

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

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/TasksPage', element: <TasksPage /> },
      { path: '/NewTaskPage', element: <NewTaskPage /> },
      { path: '/ContactsPage', element: <ContactsPage /> },
      { path: '/NewContactsPage', element: <NewContactsPage /> },
      { path: '/ProductsPage', element: <ProductsPage /> },
      { path: '/CalendarPage', element: <CalendarPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={rotas} />
}

export default App
