import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StoreProvider>
);
