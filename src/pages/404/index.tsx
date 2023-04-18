import { Container } from './styled';
export default function Erro404({ msg = 'Pagina não Encontrada' }) {
  return (
    <Container>
      <p>{msg}</p>
    </Container>
  );
}
