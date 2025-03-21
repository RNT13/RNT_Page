import { useNavigate } from 'react-router-dom'
import { LinkButtonToggle } from '../../components/LinkButton'
import { ToggleButton } from '../../components/ToggleButton'
import { AsideAppsDiv, AsideContainer, AsideSocialLinks } from './AsideBar.styles'

const AsideBar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const navigate = useNavigate()

  return (
    <AsideContainer $isOpen={isOpen}>
      <div>
        <ToggleButton $isOpen={isOpen} onClick={toggleSidebar}>
          {isOpen ? '<<' : '>>'}
        </ToggleButton>

        <AsideAppsDiv>
          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/Calendario')}>
            <img src="/images/calendarioIcon.png" alt="Calendário" />
            <span>Calendário</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/Tarefas')}>
            <img src="/images/tarefasIcon.png" alt="Tarefas" />
            <span>Tarefas</span>
          </LinkButtonToggle>

          <LinkButtonToggle $isOpen={isOpen} onClick={() => navigate('/Contatos')}>
            <img src="/images/contatoIcon.png" alt="Contatos" />
            <span>Contatos</span>
          </LinkButtonToggle>
        </AsideAppsDiv>

        <AsideSocialLinks>
          <LinkButtonToggle
            as="a"
            href="https://github.com/RNT13"
            target="_blank"
            rel="noopener noreferrer"
            $isOpen={isOpen}
          >
            <img src="/images/gitHubIcon.png" alt="github logo" />
            <span>GitHub</span>
          </LinkButtonToggle>
          <LinkButtonToggle
            as="a"
            href="https://www.linkedin.com/in/renato-luiz-0b072b327/"
            target="_blank"
            rel="noopener noreferrer"
            $isOpen={isOpen}
          >
            <img src="/images/linkedinIcon.png" alt="LinkedIn logo" />
            <span>LinkedIn</span>
          </LinkButtonToggle>
          <LinkButtonToggle
            as="a"
            href="https://www.instagram.com/renatominoita/"
            target="_blank"
            rel="noopener noreferrer"
            $isOpen={isOpen}
          >
            <img src="/images/instagramIcon.png" alt="github logo" />
            <span>Instagram</span>
          </LinkButtonToggle>
        </AsideSocialLinks>
      </div>
    </AsideContainer>
  )
}
export default AsideBar
