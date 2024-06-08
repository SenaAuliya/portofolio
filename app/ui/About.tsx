"use client"
import React,{useEffect} from "react";
import { Patrick_Hand } from "next/font/google";
import Image from "next/image";
import anime from "animejs";

const SansSerif = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function About() {
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
    <div id="about" className="flex flex-col items-center w-full lg:min-h-screen text-foreground bg-secondary py-20">
      <div className={`${SansSerif.className} lg:font-extrabold lg:text-[120px] text-[60px] animate-text`}>
        I'm Sena.
      </div>

      <div className="flex lg:flex-row flex-col w-full justify-between lg:px-40 px-10">
        <div className="lg:w-[300px] lg:h-[500px] ">
          <Image className="w-full h-full object-cover rounded-t-[60px] animate-image" src={"/img/profile.jpeg"} height={500} width={300} alt="profile"/>
        </div>
        <div className="lg:w-[700px]">
          <div className={`${SansSerif.className} lg:font-bold lg:text-[60px] text-[30px] text-center text-pretty animate-text`}>
            I'm a Frontend and Backend Developer working remotely from
            Jepara,Indonesia.
          </div>

          <div className="lg:text-lg font-medium text-base text-pretty text-center animate-text">
            I am Sena Auliya. I live in Jepara, Central Java, Indonesia. I
            studied at SMK Negeri 1 Bangsri. I am in Class 12 and will graduate
            in a year
          </div>
        </div>
      </div>
    </div>
  );
}
