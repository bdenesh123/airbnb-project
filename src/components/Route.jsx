import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import { Spinner } from '@/components/ui';

const Route = ({ children, isProtected }) => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  useEffect(() => {
    if (isProtected && token === null) {
      navigate('/signin', { replace: true });
    }
  }, [isProtected, navigate, token]);

  return token === undefined || user === undefined ? (
    <div className=' fixed inset-0 z-50 flex items-center justify-center'>
      <Spinner className='h-10 w-10' />
    </div>
  ) : (
    children
  );
};

export default Route;
