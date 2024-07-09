"use client";

import { Button, Navbar } from "flowbite-react";

export function NavigationBar() {
  return (
    <Navbar className="shadow-lg md:px-20 md:py-5" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
          Cat adoption
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-light-fourth">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:hidden">
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
