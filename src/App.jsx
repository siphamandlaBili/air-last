import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/components/Home/Home"
import SearchPage from "../src/components/SearchPage/SearchPage"
import Error from './components/ErrorPage/Error';
import AiDestinationInfo from './components/AIdestination/AiDestinationInfo';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error/>,
  },{
    path:"listings",
    element:<SearchPage/>
  },
  {
    path:"trip-advisor",
    element: <AiDestinationInfo/>
  }
])
function App() {
  return <RouterProvider router={router}>
    <div>land</div>
  </RouterProvider>
}

export default App
