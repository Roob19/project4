import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/services/users-service";

import SearchForm from "../../components/Search/SearchForm";
// import { beerGardenData } from '../../utilities/seeds/beergardens-seed';

import * as yelpAPI from "../../utilities/services/yelp-api";

import AxiosBizs from '../../components/Search/axiosSearch';


import "./App.css";

function App() {
  const [bizs, setBizs] = useState([]);
  console.log("bizs before fetch= ", bizs);
  const location = 95742;
  const radius = 39999;
  const categories = "beergardens"; // barcrawl beer_and_wine beerbar beergardens beertours

  // https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beergardens&sort_by=rating
  const fetchBizs = async () => {
    // console.log('Bearer token= ', process.env.REACT_APP_YELP_TOKEN)
    const res = await fetch(
      `${yelpAPI.YELP_BIZ_URL}?location=${location}&radius=${radius}&categories=${categories}&sort_by=rating`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_TOKEN}`,
        },
        mode: "no-cors",
      }
    );
    // console.log(fetchBizs());
    console.log("res= ", res);

    const data = await res.json();

    console.log("data.businesses=", data.businesses);
    
    setBizs(data);
    
    console.log("data= ", data);
    console.log("bizs after fetch= ", bizs);
  };

  useEffect(function () {
    fetchBizs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Under Construction
        <AxiosBizs />
      </header>
      <main className="App-main">
        <div>
          {bizs.map((business, idx) => {
            return (
              <>
                <div key={idx}>
                  <img src={business.image_url} alt={business.alias} />

                  <h1>{idx}</h1>
                  <h3>{business.name}</h3>
                  <p>{business.location.display_address}</p>
                  <p>Cross of {business.location.cross_streets}</p>
                  <p>{business.display_phone}</p>
                  <p>Yelp: {business.url}</p>
                  {/* <p>Open: {business.hours.start} to {business.hours.end}</p> */}
                  <p>Happy Hour: {business.special_hours}</p>
                  <p>{business.transactions} available</p>
                  <p>{business.price}</p>
                  <p>{business.rating}</p>
                  <p>{business.review_count} reviews</p>
                </div>
              </>
            );
          })}
        </div>
        <div></div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
