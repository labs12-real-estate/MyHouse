import React from 'react';
import FeatureCard from '../../cards/FeatureCard';
import lotsizejpg from '../../../assets/images/overview/lotsize.jpg';
import bedroomsjpg from '../../../assets/images/overview/bedrooms.jpg';
import bathsjpg from '../../../assets/images/overview/baths.jpg';
import garagejpg from '../../../assets/images/overview/cars.jpg';
import acresjpg from '../../../assets/images/overview/acres.jpg';
import countertopsjpg from '../../../assets/images/overview/countertops.jpg';
import { numberWithCommas, sqFtToAcreConversion } from '../../../helper-functions/display-functions';

function CardsContainer({ countertops, parcelData }) {
  const cardsArray = [
    { url: lotsizejpg, text: 'SQUARE FEET', value: numberWithCommas(parcelData.homeSquareFootage) + 'ft²' },
    { url: bedroomsjpg, text: 'BEDROOMS', value: parcelData.numBedrooms },
    { url: bathsjpg, text: 'BATHS', value: parcelData.numBathrooms },
    { url: garagejpg, text: 'YEAR BUILT', value: parcelData.yearBuilt },
    { url: acresjpg, text: 'ACRES', value: sqFtToAcreConversion(parcelData.lotSquareFootage) },
    { url: countertopsjpg, text: 'COUNTERTOPS', value: countertops }
  ];

  return (
    <div className="overview_cards_container">
      {cardsArray.map(element => (
        <FeatureCard key={element.text} {...element} />
      ))}
    </div>
  );
}

export default CardsContainer;
