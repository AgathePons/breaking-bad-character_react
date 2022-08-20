// == Import
import { useState, useEffect } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import requestChracters from '../requests/breakingBadApi';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import TableContainer from './TableContainer';

// == Composant
function App() {
  const [characters, setCharacters] = useState(null);

  const handleLoadData = async () => {
    try {
      const response = await requestChracters();
      setCharacters(response.data);
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <div className="app">
      <Container>
        <Title title="Breaking Bad characters" />
        <Segment>
          <Paragraph text="List of Breaking Bad characters" />
          {characters && (
            <TableContainer characters={characters} />
          )}
        </Segment>
      </Container>
    </div>
  );
}

// == Export
export default App;
