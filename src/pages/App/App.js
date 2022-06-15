import React, { useEffect } from 'react';
import {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import { useBusinessSearch } from '../../utilities/yelp-api';
import SearchForm from '../../components/Search/SearchForm';
import { beerGardenData } from '../../utilities/beergardens-seed';

import * as yelpAPI from '../../utilities/yelp-api';

import './App.css';

function App() {
  const [bizs, setBizs] = useState([]);
  const location = 95742;
  const radius = 39999;
  const categories = 'beergardens';

  const fetchBizs = async () => {
    const res = await fetch(`${yelpAPI.YELP_BIZ_URL}?location=${location}&radius=${radius}&categories=${categories}`, {
      headers: {
          "Authorization": `Bearer ${yelpAPI.YELP_TOKEN}`
      }
    });
    const data = await res.json();
    console.log('data=', data);
    return data
  }

  useEffect(function() {
    fetchBizs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Under Construction
      </header>
      <main className="App-main">
        <SearchForm />
        {fetchBizs()}
        <div>
          {beerGardenData.map((business, idx) => {
            <>
              <div key={business.id}>
                  <img src={business.image_url} alt={business.alias} />
              </div>
              <h1>{idx}</h1>
              <h3>{business.name}</h3>
              <p>{business.location.display_address}</p>
              <p>Cross of {business.location.cross_streets}</p>
              <p>{business.display_phone}</p>
              <p>Yelp: {business.url}</p>
              <p>Open: {business.hours.start} to {business.hours.end}</p>
              <p>Happy Hour: {business.special_hours}</p>
              <p>{business.transactions} available</p>
              <p>{business.price}</p>
              <p>{business.rating}</p>
              <p>{business.review_count} reviews</p>
            </>
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
