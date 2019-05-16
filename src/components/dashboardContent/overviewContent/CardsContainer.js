import React from 'react';
import FeatureCard from '../../cards/FeatureCard';
import lotsizejpg from '../../../assets/images/overview/lotsize.jpg';
import bedroomsjpg from '../../../assets/images/overview/bedrooms.jpg';
import bathsjpg from '../../../assets/images/overview/baths.jpg';
import yearbuiltjpg from '../../../assets/images/overview/year-built.jpg';
import acresjpg from '../../../assets/images/overview/acres.jpg';
import countertopsjpg from '../../../assets/images/overview/countertops.jpg';
import lazyLotsizejpg from '../../../assets/images/overview/lotsize-lazy.jpg';
import lazyBedroomsjpg from '../../../assets/images/overview/bedrooms-lazy.jpg';
import lazyBathsjpg from '../../../assets/images/overview/baths-lazy.jpg';
import lazyYearbuiltjpg from '../../../assets/images/overview/year-built-lazy.jpg';
import lazyAcresjpg from '../../../assets/images/overview/acres-lazy.jpg';
import lazyCountertopsjpg from '../../../assets/images/overview/countertops-lazy.jpg';
import { numberWithCommas, sqFtToAcreConversion } from '../../../helper-functions/display-functions';

function CardsContainer({ countertops, parcelData }) {
  const cardsArray = [
    { lazyUrl: lazyLotsizejpg, url: lotsizejpg, text: 'SQUARE FEET', value: numberWithCommas(parcelData.homeSquareFootage) + 'ft²' },
    { lazyUrl: lazyBedroomsjpg, url: bedroomsjpg, text: 'BEDROOMS', value: parcelData.numBedrooms },
    { lazyUrl: lazyBathsjpg, url: bathsjpg, text: 'BATHS', value: parcelData.numBathrooms },
    { lazyUrl: lazyYearbuiltjpg, url: yearbuiltjpg, text: 'YEAR BUILT', value: parcelData.yearBuilt },
    { lazyUrl: lazyAcresjpg, url: acresjpg, text: 'ACRES', value: sqFtToAcreConversion(parcelData.lotSquareFootage) },
    { lazyUrl: lazyCountertopsjpg, url: countertopsjpg, text: 'COUNTERTOPS', value: countertops }
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
