import React from 'react';
import FeatureCard from '../../cards/FeatureCard';
import lotsize from '../../../assets/images/overview/lotsize.jpg';
import bedrooms from '../../../assets/images/overview/bedrooms.jpg';
import baths from '../../../assets/images/overview/baths.jpg';
import garage from '../../../assets/images/overview/cars.jpg';
import acres from '../../../assets/images/overview/acres.jpg';
import countertops from '../../../assets/images/overview/countertops.jpg';

function CardsContainer(props) {
  console.log(props.props);
  const cardsArray = [];
  cardsArray.push({ url: lotsize, text: 'LOT SIZE', value: props.props.parcel_data_size_of_lot });
  cardsArray.push({ url: bedrooms, text: 'BEDROOMS', value: props.props.parcel_data_num_bedrooms });
  cardsArray.push({ url: baths, text: 'BATHS', value: props.props.parcel_data_num_bathrooms });
  cardsArray.push({ url: garage, text: 'GARAGE', value: props.props.parcel_data_garage_size });
  cardsArray.push({ url: acres, text: 'ACRES', value: 'N/A' });
  cardsArray.push({ url: countertops, text: 'COUNTERTOPS', value: props.props.user_data_countertops });
  return (
    <div className="overview_cards_container">
      {cardsArray.map(element => (
        <FeatureCard props={element} />
      ))}
    </div>
  );
}

export default CardsContainer;
