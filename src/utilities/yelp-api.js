import { useState, useEffect } from 'react';
// import queryString from 'query-string';

export const YELP_BASE_URL = 'https://api.yelp.com/v3/';
export const YELP_BIZ_URL = 'https://api.yelp.com/v3/businesses/search';
export const YELP_EVT_URL = 'https://api.yelp.com/v3/events';

export const YELP_TOKEN = process.env.YELP_TOKEN;

// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens

export function getYelp( {location} ) {
    // const query = queryString.stringify(queryParams);
    const radius = 39999;
    const categories = 'beergardens';
    
    return fetch (`${YELP_BIZ_URL}?location=${location}&radius=${radius}&categories=${categories}`, {
        headers: {
            Authorization: `Bearer ${YELP_TOKEN}`, 
            Origin: 'localhost', 
            withCredentials: true,
        }
    });
}

export function useBusinessSearch( location, radius, categories ) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({location, radius, categories});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await getYelp(searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total)
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}