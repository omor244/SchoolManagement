import AboutSection from "@/components/Home/AboutSection";
import AchievementStats from "@/components/Home/AchievementStats";
import BenefitsSection from "@/components/Home/BenefitsSection";
import HeroSection from "@/components/Home/HeroSection";
import InstitutionInHands from "@/components/Home/InstitutionInHands";
import ModuleSection from "@/components/Home/ModuleSection";
import NationwideReach from "@/components/Home/NationwideReach";
import OtherModules from "@/components/Home/OtherModules";
import ServiceFeatures from "@/components/Home/ServiceFeatures";
import SinglePointSolution from "@/components/Home/SinglePointSolution";
import SpeedEfficiency from "@/components/Home/SpeedEfficiency";


const HomePage = () => {
    return (
        <div className="">
            <HeroSection />
            <AboutSection />
            <ModuleSection />
            <OtherModules/>
            <SinglePointSolution />
            <ServiceFeatures />
            <InstitutionInHands />
            <BenefitsSection />
            <SpeedEfficiency />
            <NationwideReach />
            <AchievementStats/>
        </div>
    );
};

export default HomePage;