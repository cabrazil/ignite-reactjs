import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransModal: () => void;
}

export function Header({ onOpenNewTransModal }: HeaderProps ) {
  return (
    <Container>
      <Content>
        <img src={logoimg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}