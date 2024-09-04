import React, { useState } from 'react';
import './CreateListing.css';
import MyDropzone from '../MyDropZone/Dropzone';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateListing = () => {
    const cookies = new Cookies();
    const { token, user } = cookies.get('loggedInUser');
    
    const [useDropzone, setUseDropzone] = useState(true);
    const [formData, setFormData] = useState({
        host: `${user.name}`,
        name: '',
        bedrooms: '',
        bathrooms: '',
        beds: 3,
        type: 'apartment',
        location: '',
        description: '',
        amenities: '',
        createdBy: `${user.id}`,
        guests: 4,
        rating: 5,
        price: 420,
        images: ['', '', '', ''] // Initialize with 4 empty strings for image links
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageLinkChange = (index, value) => {
        const newImageLinks = [...formData.images];
        newImageLinks[index] = value;
        setFormData({
            ...formData,
            images: newImageLinks,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://airbnb-backend-1-ebkj.onrender.com/api/accommodations', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            toast.success('created listing');
        } catch (error) {
            toast.error('Error submitting the form:');
        }
    };

    return (
        <div className="create-listing-container">
               <ToastContainer position="top-center" autoClose={500} />
            <div className="form-container-listing">
                <h2>Create Listing</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <div className="input-group listing-name">
                            <label htmlFor="listing-name">Listing Name</label>
                            <input
                                type="text"
                                id="listing-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='small-group'>
                            <div className="input-group small-input">
                                <label htmlFor="bedrooms">Bedrooms</label>
                                <input
                                    type="number"
                                    id="bedrooms"
                                    name="bedrooms"
                                    value={formData.bedrooms}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group small-input">
                                <label htmlFor="bathrooms">Bathrooms</label>
                                <input
                                    type="number"
                                    id="bathrooms"
                                    name="bathrooms"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group select">
                                <label htmlFor="type">Type</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                >
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
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label htmlFor="amenities">Amenities</label>
                            <div className="amenities-container">
                                <input
                                    type="text"
                                    id="amenities"
                                    name="amenities"
                                    value={formData.amenities}
                                    onChange={handleChange}
                                />
                                <button className="add-button" type="button">Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="input-row input-dead">
                        <div className="input-group">
                            <label htmlFor="images">Images</label>
                            <div className="toggle-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="imageOption"
                                        value="dropzone"
                                        checked={useDropzone}
                                        onChange={() => setUseDropzone(true)}
                                    />
                                    Dropzone
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="imageOption"
                                        value="links"
                                        checked={!useDropzone}
                                        onChange={() => setUseDropzone(false)}
                                    />
                                    Use Links
                                </label>
                            </div>
                            {useDropzone ? (
                                <MyDropzone />
                            ) : (
                                <div className="image-links">
                                    {formData?.images?.map((link, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            placeholder={`Image Link ${index + 1}`}
                                            value={link}
                                            onChange={(e) => handleImageLinkChange(index, e.target.value)}
                                        />
                                    ))}
                                </div>
                            )}
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
