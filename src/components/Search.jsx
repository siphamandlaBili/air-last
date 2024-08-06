import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import './Search.css';

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-box">
                <div className="search-field">
                    <label htmlFor="location">Location</label>
                    <select id="location">
                        <option value="">Select hotel</option>
                        <option value="new-york">New York</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                        <option value="miami">Miami</option>
                    </select>
                </div>

                <div className="search-field">
                    <label htmlFor="checkin">Check in</label>
                    <input type="date" id="checkin" placeholder="Add dates" />
                </div>
                <div className="search-field">
                    <label htmlFor="checkout">Check out</label>
                    <input type="date" id="checkout" placeholder="Add dates" />
                </div>
                <div className="search-field">
                    <label htmlFor="guests">Guests</label>
                    <input type="text" id="guests" placeholder="Add guests" />
                </div>
                <button className="search-button">
                    <IoSearchSharp />
                </button>
            </div>
        </div>
    );
};

export default Search;
