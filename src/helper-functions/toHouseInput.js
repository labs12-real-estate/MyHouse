export default ({ address, point, parcel_data }, { countertops, roofAge, furnaceAge, flooring }) => ({
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
