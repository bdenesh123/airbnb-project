import { Outlet } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import NavBar from '@/components/Navbar';

const App = () => {
  const { token } = useAuth();

  return (
    <>
      <div>
        {token && <NavBar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;
