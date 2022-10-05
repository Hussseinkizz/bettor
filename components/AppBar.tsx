import React from 'react';
import { Navbar, Button } from 'flowbite-react';

type Props = {};

const AppBar = (props: Props) => {
  return (
    <header className="w-full">
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Bettor
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="hidden md:flex">
            <Button>Get started</Button>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default AppBar;
