import * as React from 'react';
import { useState } from 'react';
import { ModusNavbar, ModusTabs } from '@trimble-oss/modus-react-components';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const EbuilderHome = React.lazy(() => import('ebuilder-home/Module'));

const EbuilderSetup = React.lazy(() => import('ebuilder-setup/Module'));

const EbuilderCost = React.lazy(() => import('ebuilder-cost/Module'));

export function App() {
  const navigate = useNavigate();
  const [activeTabId, setActiveTabId] = useState('home');

  const handleTabSelected = (selectedTabId: string) => {
    const tabRoutes: any = {
      home: '/',
      cost: '/ebuilder-cost',
      setup: '/ebuilder-setup',
    };
    navigate(tabRoutes[selectedTabId]);
  };
  return (
    <React.Suspense fallback={null}>
      <ModusNavbar
        showAppsMenu
        showHelp
        showNotifications
        variant="blue"
        apps={[
          {
            description: 'The One Trimble Design System',
            logoUrl: 'https://modus.trimble.com/favicon.svg',
            name: 'Trimble Modus',
            url: 'https://modus.trimble.com/',
          },
        ]}
        logoOptions={{
          primary: {
            url: 'https://modus-bootstrap.trimble.com/img/trimble-logo-rev.svg',
            height: '24',
          },
          secondary: {
            url: 'https://modus.trimble.com/favicon.svg',
            height: '24',
          },
        }}
      >
        <div slot="notifications">Render your own notifications.</div>
      </ModusNavbar>

      <ModusTabs
        tabs={[
          {
            id: 'home',
            label: 'Home',
            active: activeTabId === 'home',
          },
          {
            id: 'cost',
            label: 'Cost',
            active: activeTabId === 'cost',
          },
          {
            id: 'setup',
            label: 'Setup',
            active: activeTabId === 'setup',
          },
        ]}
        onTabChange={(e: any) => {
          setActiveTabId(e.detail);
          handleTabSelected(e.detail);
        }}
      ></ModusTabs>


      <Routes>
        <Route path="/" element={<EbuilderHome />} />
        <Route path="/ebuilder-setup" element={<EbuilderSetup />} />
        <Route path="/ebuilder-cost" element={<EbuilderCost />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
