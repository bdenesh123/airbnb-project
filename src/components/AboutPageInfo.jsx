import {
  Cloud,
  Cloudy,
  LockKeyhole,
  Palette,
  Pin,
  Repeat,
  Rocket,
  Router,
  Settings,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardHeader, Separator } from './ui';

const AboutPageInfo = () => {
  return (
    <Card className='mx-auto w-full max-w-[800px]'>
      <CardHeader>
        <h2 className='text-center text-2xl font-bold'>
          Welcome to my Airbnb webpage!
        </h2>
        <p className='text-center text-muted-foreground'>About this project</p>
        <Separator />
      </CardHeader>
      <CardContent className='space-y-8'>
        <section>
          <div className='mb-2 flex items-center gap-2'>
            <Pin />
            <h3 className='text-xl font-semibold'>Project Overview</h3>
          </div>
          <p>
            This website is a mock booking platform inspired by Airbnb and
            Booking.com. The goal of the project is to gain hands on experience
            with the core concepts and best practices of modern React
            development.
          </p>
          <p>
            Throughout the development of this platform, I explored and
            implemented a wide range of React principles and tools, from
            component-based architecture to global state management, client-side
            routing, data fetching, authentication, and performance
            optimization.
          </p>
          <p>
            This site serves as both a functional showcase of my development
            skills and a technical portfolio to demonstrate my grasp of the
            React ecosystem. Whether you're a recruiter, fellow developer, or
            curious visitor, this project is a reflection of my growth as a
            frontend engineer and my ability to build scalable, maintainable,
            and user-friendly applications.
          </p>
          <p>
            At the core of this project is React's component-based architecture.
            The UI is built using reusable, modular components that enhance
            maintainability and readability. In the sections below, I’ll break
            down the key React principles and techniques applied across the
            platform.
          </p>
          <section>
            View the project code on{' '}
            <a
              href='https://github.com/bdenesh123/airbnb-project'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline hover:text-blue-800'
            >
              GitHub
            </a>
            .
          </section>
        </section>
        <Separator />

        <section>
          <div className='mb-2 flex items-center gap-2'>
            <Repeat />
            <h3 className='text-xl font-semibold'>
              Hooks and State Management
            </h3>
          </div>
          <p>
            To handle state, I implemented both built-in and custom React hooks:
          </p>
          <ul className='list-inside list-disc space-y-1'>
            <li>useState for managing local component state.</li>
            <li>useEffect for side effects such as data fetching.</li>
            <li>useLayoutEffect for synchronous side effects.</li>
            <li>useQuery for fetching and caching data.</li>
            <li>useMutation for creating/updating/deleting data.</li>
            <li>useRef for storing mutable values across renders.</li>
            <li>
              useContext for sharing state or values globally across components.
            </li>
            <li>Custom hooks for logic reuse (e.g. auth, fetch).</li>
            <li>
              Redux for larger-scale state management, such as user
              authentication, favourites and listing data.
            </li>
          </ul>
        </section>
        <Separator />
        <section>
          <div className='mb-2 flex items-center gap-2'>
            <Rocket />
            <h3 className='text-xl font-semibold'>Routing & Navigation</h3>
          </div>
          <p>
            Client-side routing was implemented using React Router, enabling
            seamless navigation without full page reloads. Key features include:
          </p>
          <ul className='list-inside list-disc space-y-1'>
            <li>React Router for client-side navigation.</li>
            <li>Dynamic routes(/listing/:id) for detail pages.</li>
            <li>Protected routes for authenticated users.</li>
            <li>Nested routes and layout components.</li>
          </ul>
        </section>
        <Separator />
        <section>
          <div className='mb-2 flex items-center gap-2'>
            <LockKeyhole />
            <h3 className='text-xl font-semibold'>Authentication</h3>
          </div>
          <p>
            To simulate a real-world product experience, I implemented an
            authentication system using access and refresh tokens, with the help
            of the jose library for secure JWT creation and verification.
          </p>
          <ul className='list-inside list-disc space-y-1'>
            <li>React Hook Form for building and validating forms.</li>
            <li>Access and refresh tokens handling and storage.</li>
            <li>Auth context and Redux for user session control.</li>
          </ul>
        </section>
        <Separator />
        <section>
          <div className='mb-2 flex items-center gap-2'>
            <Settings />
            <h3 className='text-xl font-semibold'>Tools & Libraries</h3>
          </div>
          <ul className='list-inside list-disc space-y-1'>
            <li>React Hook Form - form handling and validation.</li>
            <li>React Query - data fetching and caching.</li>
            <li>Redux Toolkit - global state handling.</li>
            <li>jose - secure JWT creation and verification.</li>
            <li>Axios - API requests.</li>
            <li>Cypress - end-to-end testing (login, listing creation).</li>
          </ul>
        </section>
        <Separator />
        <section>
          <div className='mb-2 flex items-center gap-2'>
            <Palette />
            <h3 className='text-xl font-semibold'>Styling</h3>
          </div>
          <ul className='list-inside list-disc space-y-1'>
            <li>Tailwind CSS for fast and responsive UI.</li>
            <li>Shadcn to build component-driven UIs.</li>
            <li>Radix UI customisable UI components.</li>
            <li>Lucide for icons and symbols.</li>
          </ul>
        </section>
        <Separator />
        <section>
          <div className='mb-2 flex items-center gap-2'>
            <Router />
            <h3 className='text-xl font-semibold'>Deployment</h3>
          </div>
          <p>
            After development, the application was deployed to Vercel. The
            result is a fully deployed, public-facing project that users can
            interact with live.
          </p>
        </section>
      </CardContent>
    </Card>
  );
};

export default AboutPageInfo;
