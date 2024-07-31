import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme.scss';
import '@fontsource-variable/work-sans';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppLayout from 'components/app-layout/app-layout.tsx';
import Website from 'src/pages/website/website.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '',
                element: <Website />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Toaster
            position="bottom-center"
            containerStyle={{
                bottom: 60,
            }}
            toastOptions={{ success: { duration: 2000 }, error: { duration: 3000 } }}
        />
        <RouterProvider router={router} />
    </React.StrictMode>,
);
