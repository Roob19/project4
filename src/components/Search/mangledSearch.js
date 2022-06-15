import React from 'react';
import { useState } from 'react';
// import useReactRouter from 'use-react-router';
import { getYelp, useBusinessSearch } from '../../utilities/yelp-api';

export default function Search() {
    const [location, setLocation] = useState({});
    // const params = new URLSearchParams(location.search);
    const radius = 39999;
    const categories = 'beergardens';
    // const locationParam = params.get('find_loc');
    const [error, setError] = useState('');

    function handleChange(evt) {
        setLocation({...location, [evt.target.name]: [evt.target.value]});
        setError('');
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const location = await getYelp(event.location);
            setLocation(location);
        } catch {
            setError('Search.js failed');
        }
    }

    return (
        <div>
            <div className="search-container" onSubmit={handleSubmit}>
                <form>
                    <label>Zip: </label>
                        <input type="number" name="location" value={location} onChange={handleChange} min={5} required />
                    <button type="submit">BEER!</button>
                </form>
            </div>
        </div>
    )
}

// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens
// https://api.yelp.com/v3/events?location=95742&radius=39999&categories=food-and-drink
