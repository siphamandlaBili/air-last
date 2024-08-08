import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import './Search.css';

const Search = () => {
    return (
        <div className="search-container">
            <form className="search-box">
                <div className="search-field">
                    <label htmlFor="location">Location</label>
                    <select id="location" aria-label="Select location">
                        <option value="">Select hotel</option>
                        <option value="new-york">New York</option>
                        <option value="los-angeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                        <option value="miami">Miami</option>
                    </select>
                </div>

                <div className="search-field">
                    <label htmlFor="checkin">Check in</label>
                    <input type="date" id="checkin" aria-label="Check-in date" />
                </div>
                <div className="search-field">
                    <label htmlFor="checkout">Check out</label>
                    <input type="date" id="checkout" aria-label="Check-out date" />
                </div>
                <div className="search-field">
                    <label htmlFor="guests">Guests</label>
                    <input type="text" id="guests" aria-label="Number of guests" placeholder="Add guests" />
                </div>
                <button type="submit" className="search-button">
                    <IoSearchSharp aria-label="Search" />
                </button>
            </form>
        </div>
    );
};

export default Search;
