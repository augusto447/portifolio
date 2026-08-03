"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        relative
        flex
        sticky
        top-0
        z-50
        px-5
        py-3
        lg:px-10
        bg-black
        shadow-lg
        shadow-red-500/10
        text-white
        items-center
        justify-between
      "
    >
      {/* LOGO */}
      <h1 className="text-2xl font-bold">
        AUGUSTO <span className="text-red-500">MANUEL.</span>
      </h1>

      {/* MENU DESKTOP */}
      <nav className="hidden lg:flex gap-4 text-sm items-center">
        <Link
          className="            text-gray-400 hover:text-white    relative inline-block after:w-0 hover:after:w-full after:absolute after:h-[2px] after:duration-300 after:transition-all after:bottom-1 after:left-0 after:bg-red-500"
          href="#about"
        >
          Sobre
        </Link>

        <Link
          className="relative    text-gray-400 hover:text-white  inline-block after:w-0 hover:after:w-full after:absolute after:h-[2px] after:duration-300 after:transition-all after:bottom-1 after:left-0 after:bg-red-500"
          href="#services"
        >
          Serviços
        </Link>

        <Link
          className="relative   text-gray-400 hover:text-white  inline-block after:w-0 hover:after:w-full after:absolute after:h-[2px] after:duration-300 after:transition-all after:bottom-1 after:left-0 after:bg-red-500"
          href="#projects"
        >
          Projectos
        </Link>

        <Link
          className="relative   text-gray-400 hover:text-white  inline-block after:w-0 hover:after:w-full after:absolute after:h-[2px] after:duration-300 after:transition-all after:bottom-1 after:left-0 after:bg-red-500"
          href="#experiences"
        >
          Experiências
        </Link>

        <Link
          className="relative    text-gray-400 hover:text-white   inline-block after:w-0 hover:after:w-full after:absolute after:h-[2px] after:duration-300 after:transition-all after:bottom-1 after:left-0 after:bg-red-500"
          href="#timeline"
        >
          Timeline
        </Link>

        <Link
          className="relative   text-gray-400 hover:text-white  inline-block after:w-0 hover:after:w-full after:absolute after:h-[2px] after:duration-300 after:transition-all after:bottom-1 after:left-0 after:bg-red-500"
          href="#technogies"
        >
          Tecnologias
        </Link>

        <Link
          href="#contact"
          className="
            rounded-md
            bg-red-500
            px-8
            py-2
            font-bold
            hover:bg-red-600
          "
        >
          Contact
        </Link>
      </nav>

      {/* BOTÃO HAMBURGER MOBILE */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
      >
        <span className="w-7 h-[2px] bg-white"></span>
        <span className="w-7 h-[2px] bg-white"></span>
        <span className="w-7 h-[2px] bg-white"></span>
      </button>

      {/* MENU MOBILE */}
      {open && (
        <nav
          className="
            absolute
            top-full
            left-0
            w-full
            bg-black
            flex
            flex-col
            gap-6
            px-5
            py-8
            lg:hidden
          "
        >
          <Link href="#about" onClick={() => setOpen(false)}>
            Sobre
          </Link>

          <Link href="#services" onClick={() => setOpen(false)}>
            Serviços
          </Link>

          <Link href="#projects" onClick={() => setOpen(false)}>
            Projectos
          </Link>

          <Link href="#experiences" onClick={() => setOpen(false)}>
            Experiências
          </Link>

          <Link href="#timeline" onClick={() => setOpen(false)}>
            Timeline
          </Link>

          <Link href="#tecnologies" onClick={() => setOpen(false)}>
            Tecnologias
          </Link>

          <Link
            href="#contact"
            className="
              w-full
              rounded-md
              bg-red-500
              px-10
              py-2
              font-bold
              text-center
              cursor-pointer
            "
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
