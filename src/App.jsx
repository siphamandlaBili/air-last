import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/components/Home/Home"
import SearchPage from "../src/components/SearchPage/SearchPage"
import Error from './components/ErrorPage/Error';
import AiDestinationInfo from './components/AIdestination/AiDestinationInfo';
import ReservationsTable from './components/ReservationList/RersavationsTable';
import MyDropzone from './components/MyDropZone/Dropzone';
import CreateListing from './components/createListing/CreateListing';
import ListingDetail from './components/listingDetails/ListingDetail';
import Login from './components/Login/Login'
import Register from './components/Login/Register';
import { SearchProvider } from './SearchContext';
import Search from './components/Search/Search';

{/* <ListingDetail/> single listing details */}
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
    element: <CreateListing/>
  },{
    path:"single/:id",
    element:<ListingDetail/>
  },
  {
    path:'login',
    element:<Login/>
  }
  ,{
    path:'register',
    element:<Register/>
  }
])
function App() {
  return  <SearchProvider>
    <RouterProvider router={router}>
   
     <SearchPage/>
    <Search/>
  </RouterProvider>
  </SearchProvider>
}

export default App
