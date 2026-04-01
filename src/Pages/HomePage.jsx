import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import ModuleSection from "@/components/Home/ModuleSection";
import OtherModules from "@/components/Home/OtherModules";
import SinglePointSolution from "@/components/Home/SinglePointSolution";


const HomePage = () => {
    return (
        <div className="">
            <HeroSection />
            <AboutSection />
            <ModuleSection />
            <SinglePointSolution />
            <OtherModules/>
        </div>
    );
};

export default HomePage;