import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import { Link } from "react-router-dom";
import Layout from "./routes/layout/layout"
import Login from "./routes/login/login";
import SinglePage from "./routes/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([
    {path:"/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/:id",
        element: <SinglePage/>
      },
    ]
    }
  ]);
  return (

    <RouterProvider router={router}/>
  )
}

export default App