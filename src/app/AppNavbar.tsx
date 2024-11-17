"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

// Define menu items with their corresponding links
const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // This ensures that `window` is available only on the client side
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <Navbar
      className="h-[10vh] bg-background/30"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold text-inherit"
          >
            MB.
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={currentPath === item.href}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="pt-3">
        {/* Dynamically set active state based on current route */}
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              color={"foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
