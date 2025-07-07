import React from 'react';
import { Link } from 'react-router-dom';

import { Tooltip, TooltipContent, TooltipTrigger } from './ui';

const IconLinkWithTooltip = ({ to, label, icon }) => {
  return (
    <Link to={to}>
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent side='bottom' align='center'>
          {label}
        </TooltipContent>
      </Tooltip>
    </Link>
  );
};

export default IconLinkWithTooltip;
