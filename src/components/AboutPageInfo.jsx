import React from 'react';

import { Card, CardContent, CardHeader, Separator } from './ui';

const AboutPageInfo = () => {
  return (
    <Card className='mx-auto w-[800px]'>
      <CardHeader>
        <h2 className='text-center text-2xl'>About Page</h2>
        <p className='text-center text-muted-foreground'>
          Create a new listing
        </p>
        <Separator />
      </CardHeader>
      <CardContent>Hello</CardContent>
    </Card>
  );
};

export default AboutPageInfo;
