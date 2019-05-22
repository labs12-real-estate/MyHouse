export default ({ address, parcel }, { countertops, roofAge, furnaceAge, flooring }) => ({
  address,
  countertops,
  flooring,
  furnaceAge,
  roofAge,
  valuation: parseInt(parcel.zestimate_amount, 10),
  parcelData: {
    latitude: +parcel.latitude,
    longitude: +parcel.longitude,
    taxYear: +parcel.tax_year,
    taxValue: +parcel.tax_value,
    yearBuilt: +parcel.year_built,
    numBathrooms: +parcel.bathrooms,
    numBedrooms: +parcel.bedrooms,
    lotSquareFootage: +parcel.property_size,
    homeSquareFootage: +parcel.home_size,
    zestimateAmount: +parcel.zestimate_amount,
    zestimateValuationRangeHigh: +parcel.zestimate_valuation_range_high,
    zestimateValuationRangeLow: +parcel.zestimate_valuationRange_low
  }
});
