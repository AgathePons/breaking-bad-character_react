// == Import
import { useState, useEffect } from 'react';
import {
  Container,
  Segment,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import requestChracters from '../requests/breakingBadApi';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import TableContainer from './TableContainer';

// == Composant
function App() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadData = async () => {
    setIsLoading(true);
    try {
      const response = await requestChracters();
      setCharacters(response.data);
      setIsLoading(false);
    }
    catch (error) {
      console.error(error);
      setIsLoading(false);
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
          {!characters && isLoading && (
            <>
              <Dimmer active>
                <Loader />
              </Dimmer>
              <Paragraph text="List of Breaking Bad characters" />
            </>
          )}
          {characters && !isLoading && (
            <>
              <Paragraph text="List of Breaking Bad characters" />
              <TableContainer characters={characters} />
            </>
          )}
        </Segment>
      </Container>
    </div>
  );
}

// == Export
export default App;
