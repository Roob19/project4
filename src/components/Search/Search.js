import React from 'react';
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from '../../utilities/yelp-api';

export function Search() {
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const radius = 39999;
    const categories = 'beergardens';
    const locationParam = params.get('find_loc');

    return (
        <div>
            
        </div>
    )
}

// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens
