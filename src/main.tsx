import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SimpleLayout} from "./components/SimpleLayout.tsx";
import {GreetingPage} from "./pages/GreetingPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import {MainLayout} from "./components/MainLayout.tsx";
import {DiscoverPage} from "./pages/DiscoverPage.tsx";
import {MyNotesPage} from "./pages/MyNotesPage.tsx";
import {ProfilePage} from "./pages/ProfilePage.tsx";
import {CreatePage} from "./pages/CreatePage.tsx";
import {EditNotePage} from "./pages/EditNotePage.tsx";
import {NotePage} from "./pages/NotePage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";


const router = createBrowserRouter([
    {
        element: <SimpleLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <GreetingPage/>
            },
            {
                path: "/main",
                element: <MainPage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            },
        ]
    },
    {
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/discover",
                element: <DiscoverPage/>
            },
            {
                path: "/my",
                element: <MyNotesPage/>
            },
            {
                path: "/profile",
                element: <ProfilePage/>
            },
            {
                path: "/create",
                element: <CreatePage/>
            },
            {
                path: "/edit",
                element: <EditNotePage/>
            },
            {
                path: "/note",
                element: <NotePage/>
            },
        ],
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
