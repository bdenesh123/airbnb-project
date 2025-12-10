import {
  CirclePlus,
  CircleUser,
  HeartIcon,
  HomeIcon,
  InfoIcon,
  Menu,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await api.post('/api/signout');
    } finally {
      setToken(null);
      setUser(null);
    }
  };

  return (
    <>
      {/* ✅ Top Bar */}
      <div className='flex items-center justify-between px-4 py-3 sm:px-8'>
        {/* ✅ Logo */}
        <Link to='/' className='flex items-center gap-2'>
          <img src={logo} alt='Logo' className='h-10 w-auto sm:h-14' />
        </Link>

        {/* ✅ Desktop Menu */}
        <div className='hidden items-center gap-8 md:flex'>
          <IconLinkWithTooltip to='/' label='Homepage' icon={<HomeIcon />} />
          <IconLinkWithTooltip
            to='/favorites'
            label='Favorites'
            icon={<HeartIcon />}
          />
          <IconLinkWithTooltip
            to='/listings/create'
            label='Create Listing'
            icon={<CirclePlus />}
          />
          <IconLinkWithTooltip
            to='/about'
            label='About Page'
            icon={<InfoIcon />}
          />

          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild className='cursor-pointer'>
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

        {/* ✅ Mobile Hamburger */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className='flex flex-col gap-4 px-4 pb-4 md:hidden'>
          <Link to='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to='/favorites' onClick={() => setIsOpen(false)}>
            Favorites
          </Link>
          <Link to='/listings/create' onClick={() => setIsOpen(false)}>
            Create Listing
          </Link>
          <Link to='/about' onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to='/profile' onClick={() => setIsOpen(false)}>
            Profile
          </Link>

          <button
            onClick={() => {
              handleSignOut();
              setIsOpen(false);
            }}
            className='text-left text-red-500'
          >
            Sign Out
          </button>

          <ThemeModeMenu />
        </div>
      )}

      <Separator />
    </>
  );
};

export default NavBar;
