/*
type ParcelData {
  latitude: Float
  longitude: Float
  taxYear: Int
  taxValue: Float
  yearBuilt: Int
  lotSquareFootage: Int
  homeSquareFootage: Int
  numBathrooms: Float
  numBedrooms: Int
  lastSoldDate: AWSDate
  lastSoldPrice: Int
  zestimateAmount: Int
  zestimateLastUpdated: AWSDate
  zestimateValueChange: Int
  zestimateValuationRangeHigh: Int
  zestimateValuationRangeLow: Int
}
*/

const toHouseInput = ({ address, point, parcel_data }, { countertops, roofAge, furnaceAge, flooring }) => ({
  address,
  countertops,
  flooring,
  furnaceAge,
  roofAge,
  valuation: parseInt(point, 10),
  parcelData: {
    latitude: +parcel_data.latitude,
    longitude: +parcel_data.longitude,
    taxYear: +parcel_data.tax_year,
    taxValue: +parcel_data.tax_value,
    yearBuilt: +parcel_data.year_built,
    numBathrooms: +parcel_data.bathrooms,
    numBedrooms: +parcel_data.bedrooms,
    lotSquareFootage: +parcel_data.property_size,
    homeSquareFootage: +parcel_data.home_size,
    zestimateAmount: +parcel_data.zestimate_amount,
    zestimateValuationRangeHigh: +parcel_data.zestimate_valuation_range_high,
    zestimateValuationRangeLow: +parcel_data.zestimate_valuationRange_low
  }
});

toHouseInput(
  {
    high: '308850.0',
    low: '308850.0',
    parcel_data: {
      bathrooms: '3.0',
      bedrooms: '3',
      home_size: '2600',
      last_sold_date: '08/02/2013',
      last_sold_price: '145000',
      latitude: '43.330862',
      longitude: '-85.602092',
      property_size: '95832',
      tax_value: '188200.0',
      tax_year: '2018',
      year_built: '1997',
      zestimate_amount: '252942',
      zestimate_last_updated: '05/02/2019',
      zestimate_percentile: '0',
      zestimate_valuationRange_low: '230177',
      zestimate_valuation_range_high: '313648',
      zestimate_value_change: '941'
    },
    point: '308850.0',
    address: '12388 Cottonwood Ave, Sand Lake, MI 49343'
  },
  { countertops: 'Granite', roofAge: '0-4 years', furnaceAge: '0-4 years', flooring: 'Hardwood' }
); //?

const dsJSON = {
  high: '308850.0',
  low: '308850.0',
  parcel_data: {
    bathrooms: '3.0',
    bedrooms: '3',
    home_size: '1952',
    last_sold_date: '02/23/2007',
    last_sold_price: '387500',
    latitude: '41.683619',
    longitude: '-70.0782',
    property_size: '10019',
    tax_value: '382400.0',
    tax_year: '2019',
    year_built: '2002',
    zestimate_amount: '460604',
    zestimate_last_updated: '05/01/2019',
    zestimate_percentile: '0',
    zestimate_valuationRange_low: '428362',
    zestimate_valuation_range_high: '502058',
    zestimate_value_change: '11528'
  },
  point: '308850.0'
};
