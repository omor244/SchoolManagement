import AndroidAppSection from "@/components/Features/AndroidAppSection";
import FeeCollectionSection from "@/components/Features/FeeCollectionSection";
import OnlineAdmissionSection from "@/components/Features/OnlineAdmissionSection";



const Features = () => {
    return (
        <div>
            <OnlineAdmissionSection />
            <AndroidAppSection />
            <FeeCollectionSection/>
        </div>
    );
};

export default Features;