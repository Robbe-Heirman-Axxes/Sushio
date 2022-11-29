import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import LobbyList from "./game/LobbyList";
import ErrorPage from "./ErrorPage";

// React Query provider
const queryClient = new QueryClient()

// Routing
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/lobby",
        element: <LobbyList/>,
        errorElement: <ErrorPage/>
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
