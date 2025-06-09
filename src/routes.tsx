import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AsideBar from './containers/asideBar/AsideBar'
import Header from './containers/header/Header'
import i18n from './i18n'
import { RootState } from './redux/store'
import { AppLayout, ContentWrapper, GlobalStyle } from './styles/globalStyles'
import { themeConfig } from './styles/theme'

// pages
import { useSelector } from 'react-redux'
import { AsideWrapper } from './containers/asideBar/AsideBarStyles'
import Footer from './containers/footer/Footer'
import { HeaderWrapper } from './containers/header/HeaderStyles'
import CalendarPage from './pages/calendarPage/CalendarPage'
import CartPage from './pages/cartPage/CartPage'
import CategoryPage from './pages/categoryPage/CategoryPage'
import ContactsPage from './pages/contactsPage/ContactsPage'
import DetailsPage from './pages/detailsPage/DetailsPage'
import Home from './pages/homePage/HomePage'
import LoginPage from './pages/loginPage/LoginPage'
import NewContactsPage from './pages/newContactPage/NewContactPage'
import NewTaskPage from './pages/newTaskPage/NewTaskPage'
import ProductsPage from './pages/productsPage/ProductsPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import RequestsPage from './pages/requestsPage/RequestsPage'
import TasksPage from './pages/tasksPage/TasksPage'
import TestPage from './pages/testPage/TestPage'

const Layout = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)

  return (
    <ThemeProvider theme={themeConfig[theme]}>
      <GlobalStyle />
      <AppLayout $isOpen={isOpen}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <AsideWrapper>
          <AsideBar />
        </AsideWrapper>

        <ContentWrapper>
          <Outlet />
          <Footer />
        </ContentWrapper>
      </AppLayout>
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
        { path: '/RequestsPage', element: <RequestsPage /> },
        { path: '/TestPage', element: <TestPage /> },
        { path: '/CartPage', element: <CartPage /> },
        { path: '/DetailsPage/:id', element: <DetailsPage /> },
        { path: '/CategoryPage', element: <CategoryPage /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppContent
