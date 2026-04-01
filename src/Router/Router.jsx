
import MainLayOut from "@/LayOut/MainLayOut";
import HomePage from "@/Pages/HomePage";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [
            {
                index: true,
                element: <HomePage/>
                
            }
        ]
    },
]);