import React from 'react';
import { Card, Stack, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react'
import './Discover.css'; // Assuming you will use a separate CSS file for styling

const Discover = () => {
  return (
    <div>

       <Heading size='lg' fontWeight={500} ml={118} mt={75} mb={30}>Discover Airbnb experiences</Heading>
    <div className="discover">
      <div className="discover-options">
        <div className="option">
        <div id='overlay'></div>
          <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/24/17/chef.jpg" alt="Things to do on your trip" />
          <div className="option-text">
            <h2>Things to do <br/> on your trip</h2>
            <button>Experiences</button>
          </div>
        </div>

        <div className="option">
            <div id='overlay'></div>
          <img src="https://th.bing.com/th/id/OIP.gO3Yl8pqRDLj6K2cTkEAPAHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain" alt="Things to do from home" />
          <div className="option-text">
            <h2>Things to do<br/> from home</h2>
            <button> Online Experiences</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Discover;
