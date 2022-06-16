import { useState, useEffect } from 'react';

export const YELP_BASE_URL = 'https://api.yelp.com/v3/';
export const YELP_BIZ_URL = 'https://api.yelp.com/v3/businesses/search';
export const YELP_EVT_URL = 'https://api.yelp.com/v3/events';

export const YELP_TOKEN = process.env.REACT_APP_YELP_TOKEN;


export async function getYelp( query ) {
    try {
        const res = await fetch (`${YELP_BASE_URL}?${query}`, {
            headers: {
                Authorization: `Bearer ${YELP_TOKEN}`, 
            }
        });
        const data = await res.json();
        console.log('data= ', data);
        return data;
    } catch(err) {
        throw err;
    }
}

// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens
export async function getBiz( query ) {
    const location = query.location;
    const radius = 39999;
    const categories = 'beergardens'; // barcrawl beer_and_wine beerbar beergardens beertours
    
    try {
        const res = await fetch (`${YELP_BIZ_URL}?location=${location}&radius=${radius}&categories=${categories}`, {
            headers: {
                Authorization: `Bearer ${YELP_TOKEN}`, 
            }
        });
        const data = await res.json();
        console.log('data= ', data);
        return data;
    } catch(err) {
        throw err;
    }
}

// https://api.yelp.com/v3/events?location=95742&radius=39999&categories=food-and-drink
export async function getEvt( query ) {
    const location = query.location;
    const radius = 39999;
    const categories = 'food-and-drink';
    
    try {
        const res = await fetch (`${YELP_EVT_URL}?location=${location}&radius=${radius}&categories=${categories}`, {
            headers: {
                Authorization: `Bearer ${YELP_TOKEN}`, 
            }
        });
        const data = await res.json();
        console.log('data= ', data);
        return data;
    } catch(err) {
        throw err;
    }
}

export function BusinessSearch( location, radius, categories ) {
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