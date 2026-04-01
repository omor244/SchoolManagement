import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Outlet } from "react-router";



const MainLayOut = () => {
    return (
        <div>
           
            <header>
                
            </header>
            <main>
                <Outlet/>
            </main>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayOut;