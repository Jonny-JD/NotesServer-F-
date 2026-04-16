import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SimpleLayout} from "./components/SimpleLayout.tsx";
import {GreetingPage} from "./pages/GreetingPage.tsx";
import {MainPage} from "./pages/MainPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import {AuthLayout} from "./components/AuthLayout.tsx";
import {DiscoverPage} from "./pages/DiscoverPage.tsx";
import {MyNotesPage} from "./pages/MyNotesPage.tsx";
import {ProfilePage} from "./pages/ProfilePage.tsx";
import {CreatePage} from "./pages/CreatePage.tsx";
import {NotePage} from "./pages/NotePage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import AuthProvider from "./auth/AuthProvider.tsx";
import {EditNotePage} from "./pages/EditNotePage.tsx";

const router = createBrowserRouter([
    {
        element: <AuthProvider/>,
        children: [{
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
                {
                    path: "/discover",
                    element: <DiscoverPage/>
                },
                {
                    path: "/create",
                    element: <CreatePage/>
                },
                {
                    path: "/notes/edit/:id",
                    element: <EditNotePage/>
                },
                {
                    path: "/notes/:id",
                    element: <NotePage/>
                },
            ]
        },
            {
                element: <AuthLayout/>,
                errorElement: <ErrorPage/>,
                children: [
                    {
                        path: "/notes/my",
                        element: <MyNotesPage/>
                    },
                    {
                        path: "/profile",
                        element: <ProfilePage/>
                    },
                ],
            }]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
