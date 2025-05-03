import { useTranslation } from 'react-i18next'
import { AiFillInstagram } from 'react-icons/ai'
import { FaCalendarAlt, FaTasks } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuTestTubeDiagonal } from 'react-icons/lu'
import { RiContactsFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/button/button'
import { ToggleButton } from '../../components/toggleButton/ToggleButton'
import { toggleSidebar } from '../../redux/slices/sideBarSlice'
import { RootState } from '../../redux/store'
import { AsideAppsDiv, AsideContainer, AsideContent, AsideSocialLinks } from '../asideBar/AsideBarStyles'

const AsideBar = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen)

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  return (
    <AsideContainer $isOpen={isOpen}>
      <AsideContent>
        <ToggleButton $isOpen={isOpen} onClick={handleToggleSidebar}>
          {isOpen ? '<<' : '>>'}
        </ToggleButton>

        <AsideAppsDiv>
          <Button type="buttonToggle" title="Calendar" to="/CalendarPage" isOpen={isOpen}>
            <div>
              <FaCalendarAlt />
            </div>
            <span>{t('calendar')}</span>
          </Button>

          <Button type="buttonToggle" title={t('tasks')} to="/TasksPage" isOpen={isOpen}>
            <div>
              <FaTasks />
            </div>
            <span>{t('tasks')}</span>
          </Button>

          <Button type="buttonToggle" title={t('contacts')} to="/ContactsPage" isOpen={isOpen}>
            <div>
              <RiContactsFill />
            </div>
            <span>{t('contacts')}</span>
          </Button>

          <Button type="buttonToggle" title={t('test')} to="/TestPage" isOpen={isOpen}>
            <div>
              <LuTestTubeDiagonal />
            </div>
            <span>{t('test')}</span>
          </Button>
        </AsideAppsDiv>

        <AsideSocialLinks>
          <Button
            type="buttonToggle"
            title={t('test')}
            href="https://github.com/RNT13"
            target="_blank"
            rel="noopener noreferrer"
            isOpen={isOpen}
          >
            <div>
              <FaGithub />
            </div>
            <span>GitHub</span>
          </Button>
          <Button
            type="buttonToggle"
            title={t('test')}
            href="https://www.linkedin.com/in/renato-luiz-0b072b247/"
            target="_blank"
            rel="noopener noreferrer"
            isOpen={isOpen}
          >
            <div>
              <FaLinkedin />
            </div>
            <span>LinkedIn</span>
          </Button>
          <Button
            type="buttonToggle"
            title={t('test')}
            href="https://www.instagram.com/renatominoita/"
            target="_blank"
            rel="noopener noreferrer"
            isOpen={isOpen}
          >
            <div>
              <AiFillInstagram />
            </div>
            <span>Instagram</span>
          </Button>
        </AsideSocialLinks>
      </AsideContent>
    </AsideContainer>
  )
}
export default AsideBar
