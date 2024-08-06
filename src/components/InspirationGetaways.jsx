import React, { useState } from 'react';
import './InspirationGetaways.css';

const categories = [
  'Destinations for arts & culture',
  'Destinations for outdoor adventure',
  'Mountain cabins',
  'Beach destinations',
  'Popular destinations',
  'Unique Stays',
];

const destinations = {
  'Destinations for arts & culture': [
    { city: 'Phoenix', state: 'Arizona' },
    { city: 'Hot Springs', state: 'Arkansas' },
    { city: 'Los Angeles', state: 'California' },
    { city: 'San Diego', state: 'California' },
    { city: 'San Francisco', state: 'California' },
    { city: 'Barcelona', state: 'Catalonia' },
    { city: 'Prague', state: 'Czechia' },
    { city: 'Washington', state: 'District of Columbia' },
    { city: 'Keswick', state: 'England' },
    { city: 'London', state: 'England' },
    { city: 'Scarborough', state: 'England' },
    { city: 'Barcelona', state: 'Catalonia' },
    { city: 'Prague', state: 'Czechia' },
    { city: 'Washington', state: 'District of Columbia' },
    { city: 'Keswick', state: 'England' },
    { city: 'London', state: 'England' },
    { city: 'Scarborough', state: 'England' },
  ],
};

const InspirationGetaways = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="inspiration-getaways" style={{marginLeft:"105px",marginTop:"5Opx"}}>
      <h1>Inspiration for future getaways</h1>
      <div className="tabs-nav">
        {categories.map(category => (
          <div
            key={category}
            className={`tab-nav ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="destinations">
        {destinations[selectedCategory].map(destination => (
          <div key={destination.city} className="destination">
            <div className="city">{destination.city}</div>
            <div className="state">{destination.state}</div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default InspirationGetaways;
