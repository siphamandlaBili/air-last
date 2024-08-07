import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
// import HomeLayout from './components/layout/HomeLayout';
import SearchPage from './components/ListingPage';



const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"listings",
    element:<SearchPage/>
  }
])
function App() {
  return <RouterProvider router={router}>
    <div>land</div>
  </RouterProvider>
}

export default App
