import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import { App } from './App';
import { routeTree } from './routeTree.gen';

import './App.css';

const router = createRouter({ routeTree });

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('rootが見つかりません');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
