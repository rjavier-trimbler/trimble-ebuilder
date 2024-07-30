import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { worker } from '@trimble-ebuilder/shared/data-access';
import App from './app/app';

// console.log('process.env.NODE_ENV=>', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  worker().start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
