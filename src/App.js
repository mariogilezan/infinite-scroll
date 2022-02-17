import { Container, GlobalStyle } from './styles/globalStyles';
import GistsList from './components/GistsList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Gists</h1>
        <GistsList />
      </Container>
    </>
  );
}

export default App;
