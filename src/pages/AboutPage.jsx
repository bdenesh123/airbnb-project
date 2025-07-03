import { Separator } from '@radix-ui/react-dropdown-menu';
import React from 'react';

import AboutPageInfo from '@/components/AboutPageInfo';
import { Card, CardContent, CardHeader } from '@/components/ui';

const AboutPage = () => {
  return (
    <div className='container py-4'>
      <AboutPageInfo />
    </div>
  );
};

export default AboutPage;
