
import MainLayOut from "@/LayOut/MainLayOut";
import Features from "@/Pages/Features";
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
                
            },
            {
                path: "মূল-পাতা",
                element: <HomePage/>
                
            },
            {
                path: "ফীচার",
                element: <Features/>
                
            },
        ]
    },
]);