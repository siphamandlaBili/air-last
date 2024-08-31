import React, { useState, useEffect } from 'react';
import HotelCard from '../HotelCard/HotelCard';
import Cookies from 'universal-cookie';
import axios from 'axios';

function HotelList() {
  const cookies = new Cookies();
  const loggedInUser = cookies.get('loggedInUser');
  const [hotels, setHotels] = useState([]); // Initialize as an empty array

  useEffect(() => {
    async function getAccommodations() {
      try {
        const response = await axios.get(`http://localhost:5000/api/accommodations/user/${loggedInUser?.user?.id}`, {
          headers: {
            'Authorization': `Bearer ${loggedInUser.token}`
          }
        });
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (loggedInUser) {
      getAccommodations();
    }
  }, [loggedInUser]);

  return (
    <div>
      <h1>My Hotel List</h1>
      {hotels.length === 0 ? (
        <p>No listings made</p>
      ) : (
        hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            image={hotel.image}
            title={hotel.name} // Assuming `name` is the title
            details={`Location: ${hotel.location}, Rating: ${hotel.rating}`} // Combine details
            price={`$${hotel.price}`} // Format price with $
          />
        ))
      )}
    </div>
  );
}

export default HotelList;
