"use client"
import React,{useEffect} from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import anime from "animejs";

export default function Skill() {
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
    <div className="lg:min-h-screen bg-foreground text-secondary flex flex-col items-center gap-5 py-10">
      <div className={` lg:font-medium lg:text-[50px] text-[30px] animate-text`}>My Skill</div>

      <div className="flex lg:flex-row flex-col justify-center items-center text-foreground lg:text-lg gap-20 animate-image">
        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary">
          <CardHeader>
            <CardTitle>FrontEnd</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              I am an expert in using the Next js framework as a FrontEnd. And
              you know i built this website with Next Js
            </p>
          </CardContent>
          <CardFooter>
           <div className="w-[50px] h-[50px]">
           <Image src={"/img/logoNext.png"} height={500} width={500} alt="logo next" className="w-full h-full object-cover"/>
           </div>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary">
          <CardHeader>
            <CardTitle>BackEnd</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              I am an expert in using the Javascript Backend framework like Nest
              js Adonis js and Express js. I'm also just learning Ruby.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between gap-3">
            <div className="w-[50px] h-[50px]">
              <Image src={"/img/logoNest.png"} height={500} width={500} alt="logo nest" className="w-full h-full object-cover"/> 
            </div>
            <div className="w-[50px] h-[50px]">
              <Image src={"/img/logoAdonis.png"} height={500} width={500} alt="logo nest" className="w-full h-full object-cover"/> 
            </div>
            <div className="w-[50px] h-[50px]">
              <Image src={"/img/logoRuby.jpeg"} height={500} width={500} alt="logo nest" className="w-full h-full object-cover"/> 
            </div>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary">
          <CardHeader>
            <CardTitle>SEO Optimazation</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>I am an expert in SEO Optimazation.</p>
          </CardContent>
          <CardFooter>
          <div className="w-[60px] h-[60px]">
           <Image src={"/img/Seo.png"} height={500} width={500} alt="logo next" className="w-full h-full object-cover"/>
           </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
