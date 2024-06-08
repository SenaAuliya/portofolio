"use client"
import React,{useEffect} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import anime from "animejs";

export default function Project() {
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
    <div className="bg-secondary min-h-screen flex flex-col justify-between items-center text-foreground gap-10 py-10">
      <div className={` font-medium lg:text-[50px] text-[30px] animate-text`}>My Project</div>

      <div className="flex lg:flex-row flex-col justify-center items-center text-foreground text-lg gap-20 animate-image">
        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary rounded-t-[12px]">
          <CardHeader className="py-0 my-0 ">
            <div className="w-[300px]">
              <Image
                src={"/img/projekEcommercce.png"}
                width={1000}
                height={500}
                alt="projek web"
                className="w-full h-full rounded-t-[12px]"
              />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Web Ecommerce</CardTitle>
            <CardDescription className="mt-2">
              I made this project using the Next js Sanity io framework and also
              Firebase
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={"https://github.com/SenaAuliya/BeliBersama"}>
              <Button>See Project </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary rounded-t-[12px]">
          <CardHeader className="py-0 my-0 ">
            <div className="w-[300px]">
              <Image
                src={"/img/projekWebJurusan.png"}
                width={1000}
                height={500}
                alt="projek web"
                className="w-full h-full rounded-t-[12px]"
              />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Web Blog</CardTitle>
            <CardDescription className="mt-2">
              I made this project for my school using Next JS Sanity and
              Firebase
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={"https://github.com/SenaAuliya/WEB_TO"}>
              <Button>See Project </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary rounded-t-[12px]">
          <CardHeader className="py-0 my-0 ">
            <div className="w-[300px]">
              <Image
                src={"/img/projekBlog.png"}
                width={1000}
                height={500}
                alt="projek web"
                className="w-full h-full rounded-t-[12px]"
              />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Web Blog</CardTitle>
            <CardDescription className="mt-2">
              I made this project for my school using Adonis js
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={"https://github.com/SenaAuliya/WEB_TO"}>
              <Button>See Project </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-secondary rounded-t-[12px]">
          <CardHeader className="py-0 my-0 ">
            <div className="w-[300px]">
              <Image
                src={"/img/projekDosamurid.png"}
                width={1000}
                height={500}
                alt="projek web"
                className="w-full h-full rounded-t-[12px]"
              />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Web CRUD</CardTitle>
            <CardDescription className="mt-2">
             This is my first project using Laravel framework
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={"https://github.com/SenaAuliya/Laravel-livewire-crud"}>
              <Button>See Project </Button>
            </Link>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
