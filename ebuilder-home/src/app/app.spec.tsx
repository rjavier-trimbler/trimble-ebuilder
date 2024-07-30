import { render } from '@testing-library/react';
import App from './app';

import {  server, AuthLogin } from '@trimble-ebuilder/shared/data-access';

describe('App', () => {
  jest.mock('./app.service')

  it('call api', () => {
    server.use(
      AuthLogin
    )
  });
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome ebuilder-home/gi)).toBeTruthy();
  });
});
