import AboutMe from "../About Me";
import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";

export default function Home () {
    return(
        <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyProjects />
        </>
    )
}