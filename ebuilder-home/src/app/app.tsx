import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { useEffect } from 'react';
import { fetchSomething } from './app.service';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const fetchApi = () => {
    fetchSomething().then((res) => res.json)
    .then((data) => console.log(data))
    .catch((error) => console.error('Error: ', error))
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <StyledApp>
      <NxWelcome title="ebuilder-home" />
    </StyledApp>
  );
}

export default App;
