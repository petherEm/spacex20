import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, isSetOpen] = useState(false);

  const openHandler = () => {
    !open ? isSetOpen(true) : isSetOpen(false);
  };

  return (
    <nav className="max-w-6xl mx-auto flex items-center justify-between p-2">
      <div className="relative h-24 w-56">
        <Image src="/img/logo.png" layout="fill" objectFit="contain" />
      </div>

      <div>
        <ul className="hidden uppercase md:flex space-x-4 text-white">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Falcon 9
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Falcon Heavy
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Dragon
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Starship
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Human Spaceflight
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Rideshare
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Starlink
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-white hover:animate-pulse">
            Shop
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}

      <div className="md:hidden">
        <button
          id="menu-btn"
          type="button"
          className={
            open
              ? "open z-40 block hamburger md:hidden focus:outline-none"
              : "z-40 block hamburger md:hidden focus:outline-none"
          }
          onClick={openHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          open
            ? "absolute z-30 top-0 bottom-0 left-0 flex md:hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black"
            : "absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black"
        }
        onClick={openHandler}
      >
        <Link href="/">
          <a className="hover:text-indigo-500">O nas</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Falcon 9</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Falcon Heavy</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Dragon</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Starship</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Human Spaceflight</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Rideshare</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Starlink</a>
        </Link>
        <Link href="/">
          <a className="hover:text-indigo-500">Shop</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
