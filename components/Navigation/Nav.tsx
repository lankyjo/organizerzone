"use client";

import { MdMenu } from "react-icons/md";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import NavDraw from "./NavDraw";
import NavItem from "./NavItem";
import { Avatar } from "@mantine/core";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 200, 1);
  const buttonOpacity = Math.min((scrollY - 50) / 150, 1);

  return (
    <>
      <header
        className="fixed top-0 w-full p-4 transition-all duration-300 z-50"
        style={{ backgroundColor: `rgba(75, 85, 99, ${opacity})` }}
      >
        <nav className="flex justify-between">
          <div id="logo" className="flex items-center gap-10">
            <h1 className="text-3xl uppercase font-bold">
              <span className="text-primary">O</span>rganizer
            </h1>
            <div className="hidden md:block">
              <NavItem />
            </div>
          </div>
          <MdMenu
            size={30}
            onClick={open}
            className="  cursor-pointer md:hidden"
          />

          <div className="  items-center gap-2 hidden md:flex">
            <Avatar
              variant="filled"
              radius="xl"
              size={33}
              className=" cursor-pointer"
            />
            <button
              id="CTA"
              className="px-5 py-2 bg-primary text-gray-950 rounded-3xl cursor-pointer duration-300 hover:text-white hidden  md:block"
              style={{ opacity: buttonOpacity }}
            >
              <Link href="/">Explore Concert</Link>
            </button>
          </div>
        </nav>
      </header>
      <NavDraw opened={opened} close={close} />
    </>
  );
};

export default Nav;
