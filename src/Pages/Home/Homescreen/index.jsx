import AboutMe from "../About Me";
import ContactMe from "../Contact Me";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home () {
    return(
        <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <ContactMe />
        <Footer />
        </>
    )
}