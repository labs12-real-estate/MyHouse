import React from 'react';
import FeatureCard from '../../cards/FeatureCard';
import lotsizejpg from '../../../assets/images/overview/lotsize.jpg';
import bedroomsjpg from '../../../assets/images/overview/bedrooms.jpg';
import bathsjpg from '../../../assets/images/overview/baths.jpg';
import garagejpg from '../../../assets/images/overview/cars.jpg';
import acresjpg from '../../../assets/images/overview/acres.jpg';
import countertopsjpg from '../../../assets/images/overview/countertops.jpg';
import { numberWithCommas } from '../../../helper-functions/display-functions';

function CardsContainer({ countertops, parcelData }) {
  const cardsArray = [];
  cardsArray.push({ url: lotsizejpg, text: 'LOT SIZE', value: numberWithCommas(parcelData.homeSquareFootage) + 'ft²' });
  cardsArray.push({ url: bedroomsjpg, text: 'BEDROOMS', value: parcelData.numBedrooms });
  cardsArray.push({ url: bathsjpg, text: 'BATHS', value: parcelData.numBathrooms });
  cardsArray.push({ url: garagejpg, text: 'GARAGE', value: 'N/A' });
  cardsArray.push({ url: acresjpg, text: 'ACRES', value: numberWithCommas(parcelData.lotSquareFootage) + 'ft²' });
  cardsArray.push({ url: countertopsjpg, text: 'COUNTERTOPS', value: countertops });

  return (
    <div className="overview_cards_container">
      {cardsArray.map(element => (
        <FeatureCard {...element} />
      ))}
    </div>
  );
}

export default CardsContainer;
