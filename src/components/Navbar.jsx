import {
  CirclePlus,
  CircleUser,
  FilePlus2,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  User,
  User2,
  UserRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import api from '@/api';
import logo from '@/assets/Logo/logo3.png';
import { useAuth } from '@/components/AuthProvider';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from '@/components/ui';

import IconLinkWithTooltip from './IconLinkWithTooltip';
import ThemeModeMenu from './ThemeModeMenu';

const NavBar = () => {
  const { setToken, setUser } = useAuth();

  const handleSignOut = async () => {
    try {
      await api.post('/api/signout');

      setToken(null);
      setUser(null);
    } catch {
      setToken(null);
      setUser(null);
    }
  };

  return (
    <>
      <div className='flex flex-row items-center justify-between gap-8 px-8 py-4'>
        <div className='flex flex-row items-center'>
          <Link to='/' className='flex items-center gap-2'>
            <img src={logo} alt='Logo' className='h-14 w-auto' />
          </Link>
        </div>

        <div className='flex-end flex flex-row items-center gap-8'>
          <IconLinkWithTooltip
            to='/'
            label='Homepage'
            icon={<HomeIcon className='cursor-pointer' />}
          />
          <IconLinkWithTooltip
            to='/listings/create'
            label='Create Listing'
            icon={<CirclePlus />}
          />
          <IconLinkWithTooltip
            to='/favorites'
            label='Favorites'
            icon={<HeartIcon />}
          />
          <IconLinkWithTooltip
            to='/about'
            label='About Page'
            icon={<InfoIcon />}
          />

          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <CircleUser />
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent side='bottom' align='center'>
                Account
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent align='end'>
              <Link to='/profile'>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeModeMenu />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default NavBar;
