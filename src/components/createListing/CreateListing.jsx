import React from 'react';
import './CreateListing.css';
import Navbar from '../Navbar/homeNav/Navbar';
import MyDropzone from '../MyDropZone/Dropzone';


const CreateListing = () => {
    return (
        <div className="create-listing-container">
            <div className="form-container-listing">
                <Navbar />
                <h2>Create Listing</h2>
                <form>
                    <div className="input-row">
                        <div className="input-group listing-name ">
                            <label htmlFor="listing-name">Listing Name</label>
                            <input type="text" id="listing-name" name="listing-name" />
                        </div>
                        <div className='small-group'>
                        <div className="input-group small-input">
                            <label htmlFor="rooms">Rooms</label>
                            <input type="number" id="rooms" name="rooms" />
                        </div>
                        <div className="input-group small-input">
                            <label htmlFor="baths">Baths</label>
                            <input type="number" id="baths" name="baths" />
                        </div>
                        <div className="input-group select">
                        <label htmlFor="type">Type</label>
                        <select id="type" name="type">
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                        </select>
                    </div>
                        </div>
                    </div>
                    
                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" name="location" />
                        </div>
                    </div>
                    <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description"></textarea>
                        </div>
                    <div className="input-row ">
                        <div className="input-group">
                            <label htmlFor="amenities">Amenities</label>
                            <div className="amenities-container">
                                <input type="text" id="amenities" name="amenities" />
                                <button className="add-button" type="button">Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="input-row input-dead" >
                        <div className="input-group ">
                            <label htmlFor="images">Images</label>
                            <MyDropzone/>
                        </div>
                    </div>
                    <div className="button-group">
                        <button type="submit" className="create-button">Create</button>
                        <button type="button" className="cancel-button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateListing;
