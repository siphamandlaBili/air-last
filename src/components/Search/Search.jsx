import React, { useState } from 'react';
import axios from 'axios';
import { IoSearchSharp } from 'react-icons/io5';
import { useSearch } from '../../SearchContext';
import './Search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const { results, setResults, loading, setLoading, error, setError } = useSearch();
    const navigate = useNavigate()
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Fetch all accommodations
            const response = await axios.get('https://airbnb-backend-1-ebkj.onrender.com/api/accommodations');
            const accommodations = response.data;

            // Filter accommodations by location
            const filteredResults = accommodations.filter(accommodation =>
                accommodation.location.toLowerCase().includes(query.toLowerCase())
            );

            setResults(filteredResults);
            navigate('/listings')

        } catch (error) {
            console.error('Error fetching accommodations:', error);
            setError('Failed to fetch accommodations');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form className="search-box" onSubmit={handleSearch}>
                <div className="search-field">
                    <input
                        type="text"
                        placeholder="Search by location..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div>
                        <input type="date" />
                        {/* <span>check in</span> */}
                    </div>
                    <div>
                        <input type="date" />
                    </div>
                </div>

                <button type="submit" className="search-button" disabled={loading}>
                    <IoSearchSharp aria-label="Search" />
                </button>
            </form>
        </div>
    );
};

export default Search;
