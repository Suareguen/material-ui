import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts";
import SignUp from "../pages/SingIUp/SingUp";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";

const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path: '/profile',
                element: <Profile/>,
                loader: () => {
                    if (!localStorage.getItem("token")) {
                      return redirect("/signUp")  //If the user isn't logged in, we redirect to the login page.
                    } else {
                      return null;
                    }
                  },
            },
            {
                path: '/admin',
                element: <Admin/>,
                loader: () => {
                    if(localStorage.getItem('role') !== 'admin') {
                        alert('este panel es solo para admins')
                        return redirect('/')
                    }
                    else {
                        return null
                    }
                }
            }

        ]
    },
])

export default router