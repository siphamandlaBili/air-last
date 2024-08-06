import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import HomeLayout from './HomeLayout';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[{
      index:true,
      element:<Home/>
    }]
  }
])
function App() {
  return <RouterProvider router={router}>
    <div>land</div>
  </RouterProvider>
}

export default App
