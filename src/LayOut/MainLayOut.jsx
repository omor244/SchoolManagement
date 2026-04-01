import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navber/Navber";
import { Button } from "@/components/ui/button";
import { Outlet, useLocation } from "react-router";



const MainLayOut = () => {

    const location = useLocation()


    return (
        <div>
           
            <header className="bg-[#3a0463]">
                {location.pathname !== "/" && <>  <Navbar />  </> }
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