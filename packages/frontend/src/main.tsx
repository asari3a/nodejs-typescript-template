import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('rootが見つかりません');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>,
);
