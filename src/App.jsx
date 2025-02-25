import "./layout.scss"
import "./components/navbar/Navbar"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {path:"/",
    element: <HomePage />,
    },
    {
      path: "/list",
      element: <ListPage/>
    },
  ]);
  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage/>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App