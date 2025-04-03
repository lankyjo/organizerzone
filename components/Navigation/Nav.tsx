"use client";

import { MdMenu } from "react-icons/md";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import NavDraw from "./NavDraw";
import NavItem from "./NavItem";
import { Modal } from "@mantine/core";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const [openModal, setOpenModal] = useState(false);

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
        style={{
          backgroundColor:
            buttonOpacity >= 1
              ? `rgba(75, 85, 99, ${opacity})`
              : `rgba(0, 0, 0, 0.9)`,
        }}
      >
        <nav className="flex justify-between">
          <div id="logo" className="flex items-center gap-10">
            <h1 className="text-3xl font-anton uppercase font-bold">
              <span className="text-primary">W</span>ATAWI
            </h1>
            <div className="hidden md:block">
              <NavItem />
            </div>
          </div>

          {!opened && (
            <MdMenu
              size={30}
              onClick={open}
              className="  cursor-pointer md:hidden"
            />
          )}

          <div className="  items-center gap-2 hidden md:flex">
            {/* <Avatar
              variant="filled"
              radius="xl"
              size={33}
              className=" cursor-pointer"
            /> */}
            <button
              id="CTA"
              onClick={() => setOpenModal(true)}
              className="px-5 text-white py-2 bg-primary rounded-3xl cursor-pointer duration-300 hover:text-white hidden  md:block"
            >
              Create Event
            </button>
          </div>
        </nav>
      </header>
      <NavDraw opened={opened} close={close} setOpenModal={setOpenModal} />

      <Modal
        withCloseButton={false}
        opened={openModal}
        onClose={() => setOpenModal(false)}
        size={"xs"}
        centered
        styles={{
          content: {
            backgroundColor: "rgba(75, 85, 99, 1)",
          },
          overlay: {
            backgroundColor: "transparent", // Slight transparency
          },
        }}
      >
        <p>You will be redirect to Ogaticket to create event</p>
        <div className=" flex justify-end">
          <button
            id="CTA"
            onClick={() => setOpenModal(true)}
            className="px-5 text-white py-2 bg-primary rounded-3xl cursor-pointer duration-300 hover:text-white "
          >
            <Link href={"https://www.ogaticket.com/e"}>Ok</Link>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Nav;
