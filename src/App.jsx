import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import NavBar from '@/components/Navbar';

import PopupCard from './components/PopupCard';
import useResponsive from './hooks/useResponsive';

const App = () => {
  const { token } = useAuth();
  const isPortrait = useResponsive('(max-width: 720px)');

  return (
    <>
      <div className='relative'>
        {token && <NavBar />}
        <Outlet />
        <Analytics />
        <SpeedInsights />
        {/* Block UI when portrait/small screen mode is detected
        <PopupCard isOpen={isPortrait} /> */}
      </div>
    </>
  );
};

export default App;
