import React, { useState } from 'react';
import './ListingDetail.css';
import NavbarSearch from '../Navbar/SearchListingNav/NavbarSearch';
import { TbLeaf } from "react-icons/tb";
import { FaKitchenSet, FaWifi } from "react-icons/fa6";
import { TbWashMachine } from "react-icons/tb";
import { TbAirConditioning } from "react-icons/tb";
import { LuRefrigerator } from 'react-icons/lu';
import { MdOutlinePets } from 'react-icons/md';
import { PiSecurityCameraDuotone } from 'react-icons/pi';
import { IoMdBicycle } from 'react-icons/io';
import { AiOutlineFire } from 'react-icons/ai';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { BsCalendar2Date } from 'react-icons/bs';
const ListingDetail = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const reviews = [
        {
            name: 'Jose',
            date: 'December 2021',
            comment: 'Host was very attentive.Wonderful neighborhood, easy access to restaurants and the subway',
            image: 'https://th.bing.com/th/id/OIP.qbIF3gNiqXnB_SZI2bqsugHaFw?rs=1&pid=ImgDetMain'
        }, {
            name: 'Jose',
            date: 'December 2021',
            comment: 'Host was very attentive.Wonderful neighborhood, easy access to restaurants and the subway',
            image: 'https://th.bing.com/th/id/OIP.qbIF3gNiqXnB_SZI2bqsugHaFw?rs=1&pid=ImgDetMain'
        }, {
            name: 'Jose',
            date: 'December 2021',
            comment: 'Host was very attentive.Wonderful neighborhood, easy access to restaurants and the subway',
            image: 'https://th.bing.com/th/id/OIP.qbIF3gNiqXnB_SZI2bqsugHaFw?rs=1&pid=ImgDetMain'
        },
        {
            name: 'Shayna',
            date: 'December 2021',
            comment: 'Wonderful neighborhood, easy access to restaurants and the subway',
            image: 'https://th.bing.com/th/id/OIP.qbIF3gNiqXnB_SZI2bqsugHaFw?rs=1&pid=ImgDetMain'
        },
        {
            name: 'Luke',
            date: 'December 2021',
            comment: 'Nice place to stay!',
            image: 'https://th.bing.com/th/id/OIP.qbIF3gNiqXnB_SZI2bqsugHaFw?rs=1&pid=ImgDetMain'
        },
        {
            name: 'Josh',
            date: 'November 2021',
            comment: 'Well designed and fun space, neighborhood has lots of energy and amenities.',
            image: 'https://th.bing.com/th/id/OIP.qbIF3gNiqXnB_SZI2bqsugHaFw?rs=1&pid=ImgDetMain'
        }
    ];
    return (
        <>
            <NavbarSearch />
            <div className="container">
                {/* Header Section */}
                <div className="header">
                    <h1>Bordeaux Getaway</h1>
                    <div className="rating">
                        <span>⭐ 5.0</span>
                        <a href="#">7 reviews</a>
                        <span> · Superhost</span>
                        <a href="#"> · Bordeaux, France</a>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="gallery">
                    <div className="main-image">
                        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Living Room" />
                    </div>
                    <div className="thumbnail-grid">
                        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Living Room 2" />
                        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Kitchen" />
                    </div>
                </div>

                <div className="show-all">
                    <button>Show all photos</button>
                </div>

                {/* Rental Details Section */}
                <div style={{ display: "flex" }}>
                    <div className="rental-details">
                        <h2>Entire rental unit hosted by Ghazal</h2>
                        <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>

                        <ul className="features">
                            <li>
                                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Entire home" />
                                <span>Entire home</span>
                                <p>You’ll have the apartment to yourself</p>
                            </li>
                            <li>
                                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Enhanced Clean" />
                                <span>Enhanced Clean</span>
                                <p>This Host committed to Airbnb’s 5-step enhanced cleaning process.</p>
                            </li>
                            <li>
                                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Self check-in" />
                                <span>Self check-in</span>
                                <p>Check yourself in with the keypad.</p>
                            </li>
                            <li>
                                <img src="icon-cancellation.png" alt="Free cancellation" />
                                <span>Free cancellation before Feb 14</span>
                            </li>
                        </ul>

                        <p className="description">
                            Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.
                            Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the
                            charms of the city thanks to its ideal location. Close to many shops, bars and restaurants,
                            you can access the apartment by tram A and C and bus routes 27 and 44.
                        </p>

                        <a href="#" className="show-more">Show more ›</a>
                    </div>

                    {/* Booking Summary Section */}
                    <div className="booking-summary">
                        <div className="price-info">
                            <h3>$75 / night</h3>
                            <div className="rating">
                                <span>⭐ 5.0</span>
                                <a href="#">7 reviews</a>
                            </div>
                        </div>

                        <div className="booking-details">
                            <div className="date-selection">
                                <div className="checkin">
                                    <label>CHECK-IN</label>
                                    <input type="date" value="2022-02-19" />
                                </div>
                                <div className="checkout">
                                    <label>CHECKOUT</label>
                                    <input type="date" value="2022-02-26" />
                                </div>
                            </div>

                            <div className="guests-selection">
                                <label>GUESTS</label>
                                <select>
                                    <option value="2">2 guests</option>
                                </select>
                            </div>

                            <button className="reserve-button">Reserve</button>

                            <p className="price-breakdown">
                                <div>
                                    $79 × 7 nights
                                    <span>$555</span>
                                </div>
                                <div>
                                    Weekly discount
                                    <span>-$28</span><br />
                                </div>
                                <div>
                                    Cleaning fee
                                    <span>$62</span><br />
                                </div>
                                <div>
                                    Service fee
                                    <span>$83</span><br />
                                </div>
                                <div>
                                    Occupancy taxes and fees
                                    <span>$29</span><br />
                                </div>
                                <strong>Total<span>$701</span></strong>
                            </p>

                        </div>
                    </div>
                    {/* where you will sleep */}

                </div>
                <div className="where-you-sleep">
                    <h2>Where you’ll sleep</h2>
                    <div className="sleep-details">
                        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Bedroom" />
                        <div className="sleep-info">
                            <h3>Bedroom</h3>
                            <p>1 queen bed</p>
                        </div>
                    </div>
                </div>
                {/* what this place offers */}
                <section className="place-offers">
                    <h2>What this place offers</h2>
                    <div className="offers-list">
                        <div className="offer-item">
                            <i className="icon-leaf">
                                <TbLeaf className="w-icons" />
                            </i>
                            <span>Garden view</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-wifi">
                                <FaWifi className="w-icons" />
                            </i>
                            <span>Wifi</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-washer">
                                <TbWashMachine className="w-icons" />
                            </i>
                            <span>Free washer - in building</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-air-conditioning">
                                <TbAirConditioning className="w-icons" />
                            </i>
                            <span>Central air conditioning</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-refrigerator">
                                <LuRefrigerator className="w-icons" />
                            </i>
                            <span>Refrigerator</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-kitchen">
                                <FaKitchenSet className="w-icons" />
                            </i>
                            <span>Kitchen</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-pets">
                                <MdOutlinePets className="w-icons" />
                            </i>
                            <span>Pets allowed</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-dryer">
                                <AiOutlineFire className="w-icons" />
                            </i>
                            <span>Dryer</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-camera">
                                <PiSecurityCameraDuotone className="w-icons" />
                            </i>
                            <span>Security cameras on property</span>
                        </div>
                        <div className="offer-item">
                            <i className="icon-bicycle">
                                <IoMdBicycle className="w-icons" />
                            </i>
                            <span>Bicycles</span>
                        </div>
                    </div>
                    <button className="show-all-btn">Show all 37 amenities</button>
                </section>
                {/* calendar */}
                <section className="booking-calendar">
                    <h2>{Number(`${endDate.getUTCDate()}`)-Number(`${startDate.getUTCDate()}`)} nights in New York</h2>
                    <p>{`${startDate.toDateString()} - ${endDate.toDateString()}`}</p>
                    <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
                    <br />

                    <div className='clear-date-sect'>
                        <BsCalendar2Date />
                        <button className="clear-dates-btn">Clear dates</button>
                    </div>
                </section>

                {/* reviews */}
                <section className="reviews-section">
                    <h2>5.0 · 7 reviews</h2>
                    <div className="reviews-ratings">
                        <div className="rating-item">
                            <span>Cleanliness</span>
                            <div className="rating-bar">
                                <div className="rating-fill" style={{ width: '100%' }}></div>
                            </div>
                            <span>5.0</span>
                        </div>
                        <div className="rating-item">
                            <span>Communication</span>
                            <div className="rating-bar">
                                <div className="rating-fill" style={{ width: '100%' }}></div>
                            </div>
                            <span>5.0</span>
                        </div>
                        <div className="rating-item">
                            <span>Check-in</span>
                            <div className="rating-bar">
                                <div className="rating-fill" style={{ width: '100%' }}></div>
                            </div>
                            <span>5.0</span>
                        </div>
                        <div className="rating-item">
                            <span>Accuracy</span>
                            <div className="rating-bar">
                                <div className="rating-fill" style={{ width: '100%' }}></div>
                            </div>
                            <span>5.0</span>
                        </div>
                        <div className="rating-item">
                            <span>Location</span>
                            <div className="rating-bar">
                                <div className="rating-fill" style={{ width: '48%' }}></div>
                            </div>
                            <span>3.9</span>
                        </div>
                        <div className="rating-item">
                            <span>Value</span>
                            <div className="rating-bar">
                                <div className="rating-fill" style={{ width: '94%' }}></div>
                            </div>
                            <span>4.7</span>
                        </div>
                    </div>
                    <div className="reviews-list">
                        <div className="layout-reviews">
                            {reviews.map((review, index) => (
                                <div className="review-item" key={index}>
                                    <img src={review.image} alt={`${review.name}`} className="reviewer-image" />
                                    <div className="review-content">
                                        <div className="reviewer-info">
                                            <span className="reviewer-name">{review.name}</span>
                                            <span className="review-date">{review.date}</span>
                                        </div>
                                        <p className="review-comment">{review.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="show-more-btn">Show more</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ListingDetail;
<div className="where-you-sleep">
    <h2>Where you’ll sleep</h2>
    <div className="sleep-details">
        <img src="bedroom-image.jpg" alt="Bedroom" />
        <div className="sleep-info">
            <h3>Bedroom</h3>
            <p>1 queen bed</p>
        </div>
    </div>
</div>