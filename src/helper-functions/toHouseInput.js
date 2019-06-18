export default ({ address, parcel }, { countertops, roofAge, furnaceAge, flooring }) => ({
  address,
  countertops,
  flooring,
  furnaceAge,
  roofAge,
  valuation: parseInt(parcel.zestimate_amount, 10),
  parcelData: {
    yearBuilt: parcel.year_built ? +parcel.year_built : null,
    numBathrooms: parcel.bathrooms ? +parcel.bathrooms : null,
    numBedrooms: parcel.bedrooms ? +parcel.bedrooms : null,
    lotSquareFootage: parcel.property_size ? +parcel.property_size : null,
    homeSquareFootage: parcel.home_size ? +parcel.home_size : null,
    zestimateAmount: +parcel.zestimate_amount,
    zestimateValuationRangeHigh: +parcel.zestimate_valuation_range_high,
    zestimateValuationRangeLow: +parcel.zestimate_valuationRange_low
  }
});
