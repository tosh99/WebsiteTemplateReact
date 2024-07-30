import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "@fontsource-variable/work-sans";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import AppLayout from "components/app-layout/app-layout.tsx";
import Template from "src/pages/template/template.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [{
            path: '',
            element: <Template/>
        }]
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Toaster
            position="bottom-center"
            containerStyle={{
                bottom: 60,
            }}
            toastOptions={{success: {duration: 2000}, error: {duration: 3000}}}
        />
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
