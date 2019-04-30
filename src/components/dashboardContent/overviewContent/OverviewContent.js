import React, { useState, useEffect } from 'react';
import DashboardJumbo from '../../jumbotrons/DashboardJumbo';
import CardsContainer from './CardsContainer';
import axios from 'axios';

function OverviewContent() {
  const [house, setHouse] = useState({});

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://labs12-real-estate.herokuapp.com/api/houses/10')
      .then(res => {
        setHouse(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboard_content_container">
      <h1>Overview</h1>
      <DashboardJumbo props={house} />
      <CardsContainer props={house} />
    </div>
  );
}

export default OverviewContent;
