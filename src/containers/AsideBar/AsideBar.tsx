import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButtonToggle } from '../../components/linkButton/LinkButton'
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
            <img src="/images/calendarioIcon.png" alt="CalendarPage" />
            <span>{t('calendar')}</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/TasksPage')} $isActive={location.pathname === '/TasksPage'} title={t('tasks')}>
            <img src="/images/tarefasIcon.png" alt="TasksPage" />
            <span>{t('tasks')}</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/ContactsPage')} $isActive={location.pathname === '/ContactsPage'} title={t('contacts')}>
            <img src="/images/contatoIcon.png" alt="ContactsPage" />
            <span>{t('contacts')}</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/TestPage')} $isActive={location.pathname === '/TestPage'} title={t('test')}>
            <img src="/images/FormIcon.png" alt="TestPage" />
            <span>{t('test')}</span>
          </LinkButtonToggle>
        </AsideAppsDiv>

        <AsideSocialLinks>
          <LinkButtonToggle as="a" href="https://github.com/RNT13" target="_blank" rel="noopener noreferrer" $isOpen={isOpen} $isActive={false} title="Github">
            <img src="/images/gitHubIcon.png" alt="github logo" />
            <span>GitHub</span>
          </LinkButtonToggle>
          <LinkButtonToggle as="a" href="https://www.linkedin.com/in/renato-luiz-0b072b327/" target="_blank" rel="noopener noreferrer" $isOpen={isOpen} $isActive={false} title="LinkedIn">
            <img src="/images/linkedinIcon.png" alt="LinkedIn logo" />
            <span>LinkedIn</span>
          </LinkButtonToggle>
          <LinkButtonToggle as="a" href="https://www.instagram.com/renatominoita/" target="_blank" rel="noopener noreferrer" $isOpen={isOpen} $isActive={false} title="LinkedIn">
            <img src="/images/instagramIcon.png" alt="github logo" />
            <span>Instagram</span>
          </LinkButtonToggle>
        </AsideSocialLinks>
      </div>
    </AsideContainer>
  )
}
export default AsideBar
