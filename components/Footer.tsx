import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterComponent() {
  return (
    <footer className="flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center bg-secondary w-full h-full lg:py-[82px] p-[24px] lg:px-[139px] lg:gap-0 gap-[52px] m-0 lg:text-[20px] text-[16px] text-foreground">
      <div className="flex flex-col gap-[25px]">
        <div className="flex flex-row items-center gap-5">
          <div className="w-[66px] h-[66px] text-[20px]">
            <Image
              src={"/img/Sena_A.png"}
              width={150}
              height={150}
              alt="logo"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <p>{new Date().getFullYear()} &copy; Sena Corporation</p>
          <p>All rights reserve</p>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-[32px] font-semibold">Menu Utama</h1>
        <ul className="text[20px]">
        <li>
            <Link href={"#"}>Beranda</Link>
          </li>
          <li>
            <Link href={'#about'}>About</Link>
          </li>
          <li>
            <Link href={'#contact'}>Contact</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </div>

      <div className="flex-col flex">
        <h1 className="text-[32px] font-semibold">Hubungi Kami</h1>
        <p><span className="font-bold">Addres</span> :Jepara, Jawa Tengah, Indonesia</p>
            <h1 className="font-bold">Email :</h1> 
            <Link href={'mailto:akhdan254@smk.belajar.id'}>akhdan254@smk.belajar.id</Link>
      </div>
    </footer>
  );
}
