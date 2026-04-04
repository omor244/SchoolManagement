import AndroidAppSection from "@/components/Features/AndroidAppSection";
import DynamicWebsiteSection from "@/components/Features/DynamicWebsiteSection";
import FeeCollectionSection from "@/components/Features/FeeCollectionSection";
import OnlineAdmissionSection from "@/components/Features/OnlineAdmissionSection";



const Features = () => {
    return (
        <div className="">
            <OnlineAdmissionSection />
            <AndroidAppSection />
            <FeeCollectionSection />
            <DynamicWebsiteSection/>
        </div>
    );
};

export default Features;