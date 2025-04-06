import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButtonToggle } from '../../components/LinkButton/LinkButton'
import { ToggleButton } from '../../components/ToggleButton/ToggleButton'
import { AsideAppsDiv, AsideContainer, AsideSocialLinks } from './AsideBarStyles'

const AsideBar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <AsideContainer $isOpen={isOpen}>
      <div>
        <ToggleButton $isOpen={isOpen} onClick={toggleSidebar}>
          {isOpen ? '<<' : '>>'}
        </ToggleButton>

        <AsideAppsDiv>
          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/CalendarPage')} $isActive={location.pathname === '/CalendarPage'} title="Calendar">
            <img src="/images/calendarioIcon.png" alt="CalendarPage" />
            <span>Calendar</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/TasksPage')} $isActive={location.pathname === '/TasksPage'} title="Tasks">
            <img src="/images/tarefasIcon.png" alt="TasksPage" />
            <span>Tasks</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/ContactsPage')} $isActive={location.pathname === '/ContactsPage'} title="Contacts">
            <img src="/images/contatoIcon.png" alt="ContactsPage" />
            <span>Contacts</span>
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
