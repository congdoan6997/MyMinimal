import { useRoutes } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
import { mainRoutes, HomePage } from './main';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    // Main routes
    ...mainRoutes,
  ]);
}
