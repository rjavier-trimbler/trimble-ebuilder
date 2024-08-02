import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import Component from './component/component';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="ebuilder-cost" /> */}
      <Component/>
    </StyledApp>
  );
}

export default App;
