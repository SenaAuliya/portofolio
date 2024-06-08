import FooterComponent  from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import Main from "./ui/Main";
import Skill from "./ui/Skill";
import About from "./ui/About";
import Contact from "./ui/Contact";
import Project from "./ui/Project";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <div>
        <Main/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
      </div>
      <FooterComponent />
    </div>
  );
}
