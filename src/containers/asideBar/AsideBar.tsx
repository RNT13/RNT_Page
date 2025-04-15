import { useTranslation } from 'react-i18next'
import { AiFillInstagram } from 'react-icons/ai'
import { FaCalendarAlt, FaTasks } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuTestTubeDiagonal } from 'react-icons/lu'
import { RiContactsFill } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButtonIcon, LinkButtonToggle } from '../../components/linkButton/LinkButton'
import { ToggleButton } from '../../components/toggleButton/ToggleButton'
import { AsideAppsDiv, AsideContainer, AsideSocialLinks } from '../asideBar/AsideBarStyles'

const AsideBar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <AsideContainer $isOpen={isOpen}>
      <div>
        <ToggleButton $isOpen={isOpen} onClick={toggleSidebar}>
          {isOpen ? '<<' : '>>'}
        </ToggleButton>

        <AsideAppsDiv>
          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/CalendarPage')} $isActive={location.pathname === '/CalendarPage'} title={t('calendar')}>
            <LinkButtonIcon>
              <FaCalendarAlt />
            </LinkButtonIcon>
            <span>{t('calendar')}</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/TasksPage')} $isActive={location.pathname === '/TasksPage'} title={t('tasks')}>
            <LinkButtonIcon>
              <FaTasks />
            </LinkButtonIcon>
            <span>{t('tasks')}</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/ContactsPage')} $isActive={location.pathname === '/ContactsPage'} title={t('contacts')}>
            <LinkButtonIcon>
              <RiContactsFill />
            </LinkButtonIcon>
            <span>{t('contacts')}</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/TestPage')} $isActive={location.pathname === '/TestPage'} title={t('test')}>
            <LinkButtonIcon>
              <LuTestTubeDiagonal />
            </LinkButtonIcon>
            <span>{t('test')}</span>
          </LinkButtonToggle>
        </AsideAppsDiv>

        <AsideSocialLinks>
          <LinkButtonToggle as="a" href="https://github.com/RNT13" target="_blank" rel="noopener noreferrer" $isOpen={isOpen} $isActive={false} title="Github">
            <LinkButtonIcon>
              <FaGithub />
            </LinkButtonIcon>
            <span>GitHub</span>
          </LinkButtonToggle>
          <LinkButtonToggle as="a" href="https://www.linkedin.com/in/renato-luiz-0b072b327/" target="_blank" rel="noopener noreferrer" $isOpen={isOpen} $isActive={false} title="LinkedIn">
            <LinkButtonIcon>
              <FaLinkedin />
            </LinkButtonIcon>
            <span>LinkedIn</span>
          </LinkButtonToggle>
          <LinkButtonToggle as="a" href="https://www.instagram.com/renatominoita/" target="_blank" rel="noopener noreferrer" $isOpen={isOpen} $isActive={false} title="LinkedIn">
            <LinkButtonIcon>
              <AiFillInstagram />
            </LinkButtonIcon>
            <span>Instagram</span>
          </LinkButtonToggle>
        </AsideSocialLinks>
      </div>
    </AsideContainer>
  )
}
export default AsideBar
