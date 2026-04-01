import { Button } from "@/components/ui/button";
import { Outlet } from "react-router";



const MainLayOut = () => {
    return (
        <div>
           
            <header></header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    );
};

export default MainLayOut;