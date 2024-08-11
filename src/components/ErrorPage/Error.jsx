import "./error.css"
import { Link, useRouteError } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Error = ()=>{
    const {data,status}= useRouteError();
    console.log(data, status);

    if(status == 404){
    return <div className="htm">
    <Link to="/" className="fa fa-arrow-left"><FaArrowLeft className="home-error" /></Link>
    <div className="error">
      <h1 className="h1">{status}</h1>
      <p className="p">{data}</p>
    </div>
    </div>
    }
}

export default Error;