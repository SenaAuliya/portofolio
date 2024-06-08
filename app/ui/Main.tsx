"use client"
import React, { useEffect } from 'react';
import { Patrick_Hand } from "next/font/google";
import Image from "next/image";
import anime from 'animejs';

const SansSerif = Patrick_Hand({subsets:["latin"], weight:"400"});

export default function Main() {
  useEffect(() => {
    anime({
      targets: '.animate-text',
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.animate-image',
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1500,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className="lg:min-h-screen flex flex-col justify-center items-center bg-foreground text-secondary lg:py-0 py-32">
      <div className="flex lg:flex-row flex-col justify-between lg:mx-40 mx-10 items-center">
        <div className="flex flex-col text-center lg:text-[80px] text-[30px]">
          <div className={`${SansSerif.className} animate-text`} >
            Hello I'm Sena Auliya
          </div>
          <div className={`${SansSerif.className} animate-text`} >
            I'm Programmer
          </div>
          <div className='lg:text-lg text-[15px] animate-text'>
            Nice To Meet You I Hope You Enjoy My Website
          </div>
        </div>
        <div>
          <div className='lg:w-[500px] w-[300px] animate-image'>
            <Image src={"/img/hero2.png"} height={1000} width={1000} alt='hero'/>
          </div>
        </div>
      </div>
    </div>
  );
}
