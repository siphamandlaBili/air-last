import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './components/Home';
import Home from "../src/components/Home/Home"
import SearchPage from "../src/components/SearchPage/SearchPage"
import Navbar from './components/Navbar/homeNav/Navbar';
import Error from './components/ErrorPage/Error';
// import SearchPage from './components/ListingPage';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error/>
  },{
    path:"listings",
    element:<SearchPage/>
  },
  {
    path:"trip-advisor",
    element: <h1>trip ai advisor</h1>
  }
])
function App() {
  return <RouterProvider router={router}>
    <div>land</div>
  </RouterProvider>
}

export default App
