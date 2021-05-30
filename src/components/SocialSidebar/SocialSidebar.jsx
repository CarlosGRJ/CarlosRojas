import React from 'react';

import { useViewport } from '../../hooks/useViewport';
import { SocialNavDesktop } from './SocialNavDesktop/SocialNavDesktop';
import { SocialNavPhone } from './SocialNavPhone/SocialNavPhone';

export const SocialSidebar = () => {

   const { width } = useViewport();
   const breakpoint = 900;

   return (
      width <= breakpoint ? <SocialNavPhone /> : <SocialNavDesktop />
   );
};
