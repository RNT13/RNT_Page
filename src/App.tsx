import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider, useSelector } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AsideBar from './containers/asideBar/AsideBar'
import Header from './containers/header/Header'
import i18n from './i18n'
import { RootState, store } from './redux/store'
import { GlobalMain, GlobalMainContent, GlobalStyle } from './styles/globalStyles'
import { themeConfig } from './styles/theme'

// páginas
import CalendarPage from './pages/calendarPage/CalendarPage'
import ContactsPage from './pages/contactsPage/ContactsPage'
import Home from './pages/homePage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
import NewContactsPage from './pages/newContactPage/NewContactPage'
import NewTaskPage from './pages/newTaskPage/NewTaskPage'
import ProductsPage from './pages/productsPage/productsPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import RequestsPage from './pages/requestsPage/RequestsPage'
import TasksPage from './pages/tasksPage/TasksPage'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useSelector((state: RootState) => state.theme.theme)

  const toggleSidebar = () => setIsOpen(prev => !prev)

  return (
    <ThemeProvider theme={themeConfig[theme]}>
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
    </ThemeProvider>
  )
}

const AppContent = () => {
  const language = useSelector((state: RootState) => state.language.language)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const router = createBrowserRouter([
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
        { path: '/CalendarPage', element: <CalendarPage /> },
        { path: '/LoginPage', element: <LoginPage /> },
        { path: '/ProfilePage', element: <ProfilePage /> },
        { path: '/RequestsPage', element: <RequestsPage /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppContent />
      </I18nextProvider>
    </Provider>
  )
}

export default App
