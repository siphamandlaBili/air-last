// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GrFavorite } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import "./listing.css";

const SearchResult = ({img,location,title,description,star,price,total,}) => {
  
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <GrFavorite className="searchResult_heart" />
      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>----</p>
          <p>{description}</p>
          <p>----</p>
        </div>
        <div className="searchResult_infoBottom">
          <div className="searchResult_stars">
            <p>
              <span>{star}</span>
              <FaStar style={{color:"orange",fontSize:"20px",marginRight:"14px"}}/>
              <span>(318 reviews)</span>
            </p>
          </div>
          <div className="searchResult_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;