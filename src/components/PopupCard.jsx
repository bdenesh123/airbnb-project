import { RotateCcw, Tablet } from 'lucide-react';
import { useEffect, useState } from 'react';

import logo from '@/assets/Logo/logo3.png';
import { Card, CardContent } from '@/components/ui';

const PopupCard = ({ isOpen }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!show) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70'>
      <Card className='w-full max-w-md space-y-4 px-6 py-8 text-center'>
        {/* <CardHeader>
          <img src={logo} alt='Logo' className='mx-auto h-14' />
        </CardHeader> */}
        <CardContent className='space-y-4'>
          <p className='text-lg font-semibold'>
            Mobile Portrait Mode Not Supported
          </p>

          <div className='relative mx-auto h-[60px] w-[60px] text-primary'>
            <Tablet className='absolute left-0 top-0 h-10 w-10' />
            <RotateCcw className='absolute left-10 top-0 h-5 w-5 rotate-90' />
            <Tablet className='absolute left-4 top-4 h-10 w-10 rotate-90 rounded bg-background' />
          </div>

          <p className='text-sm text-muted-foreground'>
            Please rotate your device or use a larger screen for the best
            experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopupCard;
