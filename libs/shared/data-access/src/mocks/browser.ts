import { setupWorker } from 'msw/browser';
import { AuthLogin, AuthRegister } from './auth';


export const worker = () => {
  const start = () => {
    setupWorker(AuthLogin, AuthRegister).start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  };
  return {
    start,
  };
};
