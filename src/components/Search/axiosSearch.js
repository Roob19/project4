import { useState } from 'react';
import axios from 'axios';
import * as yelpAPI from '../../utilities/services/yelp-api';

function AxiosBizs(req, res) {
    // const [bizs, setBizs] = useState([]);
    const location = 95742;
    const radius = 39999;
    const categories = "beergardens"; // barcrawl beer_and_wine beerbar beergardens beertours

    // console.log("bizs before axios.get= ", bizs);

  // https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens&sort_by=rating
    axios.get(`${yelpAPI.YELP_BIZ_URL}?location=${location}&radius=${radius}&categories=${categories}&sort_by=rating`, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_YELP_TOKEN}`,
        }, 
        mode: "no-cors",
    })
    .then(response => res.json(response.data))
    .catch(err => {
        res.status(500).json(err)
    })
}

export {
    AxiosBizs,
}