import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Programs from './Pages/Programs/Programs'
import Contact from './Pages/Contact  Us/Contact'
import Addmissions from './Pages/Addmissions/Addmissions'


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/try/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    }
    ,
    {
      path: "/addmissions",
      element: <Addmissions />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/programs",
      element: <Programs />
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
