"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const categories = ['Makanan', 'Minuman']
  return (
    <header className="lg:border-secondary-foreground lg:border-t-[20px] p-5 min-h-[80px] shadow-sm text-secondary sticky top-0 z-50 bg-secondary">
      <nav className="flex justify-between text-primary">
        <div className="flex flex-row justify-start gap-5 items-center">
          <div className="lg:w-16 lg:h-16 w-[40px] h-[40px] ">
            <Link href={'/'}><Image
              src={"/img/Sena_A.png"}
              height={150}
              width={150}
              alt="Logo"
              className="w-full h-full rounded-full"
            /></Link>
          </div>
        </div>

        <ul className="lg:flex lg:flex-row lg:gap-7 lg:text-xl items-center justify-center hidden">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={'#about'}>About</Link>
          </li>
          <li>
            <Link href={'#contact'}>Contact</Link>
          </li>
        </ul>

        <div className="gap-5 items-center hidden lg:flex">
          <Button>Hello</Button>
        </div>

          <div className="lg:hidden flex flex-row-reverse items-center gap-3">
          <button className="" onClick={() => setIsOpen((prev) => !prev)}>
              {!isOpen ? (<><Menu/></>):(<><X/></>)}
          </button>
          </div>
          {isOpen && (
  <div ref={ref} className={`h-screen bg-white text-primary flex flex-col items-center fixed w-[70%] transition-all right-0 top-0 bg-thirdary`}>

    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'#'} className="mb-[15px] text-[20px]">Beranda</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>
    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'#about'} className="mb-[15px] text-[20px]">About</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>
    <div className="mt-6 items-start flex flex-col justify-center">
      <Link href={'#contact'} className="mb-[15px] text-[20px]">Contact</Link>
      <hr className="border-primary border opacity-[20%] w-[147px]"/>
    </div>

  </div>
)}

      </nav>
    </header>
  );
}
