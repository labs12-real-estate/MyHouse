// eslint-disable
// this is an auto generated file. This will be overwritten

export const createHouse = `mutation CreateHouse($input: CreateHouseInput!) {
  createHouse(input: $input) {
    id
    description
    recentRemodel
    upgradeStory
    userProfilePhoto
    houseBackgroundPhoto
    address
    parcelData {
      latitude
      longitude
      taxYear
      taxValue
      yearBuilt
      lotSquareFootage
      homeSquareFootage
      numBathrooms
      numBedrooms
      lastSoldDate
      lastSoldPrice
      zestimateAmount
      zestimateLastUpdated
      zestimateValueChange
      zestimateValuationRangeHigh
      zestimateValuationRangeLow
    }
    valuation
    solar
    windows
    waterfront
    countertops
    flooring
    furnaceAge
    roofAge
  }
}
`;
export const updateHouse = `mutation UpdateHouse($input: UpdateHouseInput!) {
  updateHouse(input: $input) {
    id
    description
    recentRemodel
    upgradeStory
    userProfilePhoto
    houseBackgroundPhoto
    address
    parcelData {
      latitude
      longitude
      taxYear
      taxValue
      yearBuilt
      lotSquareFootage
      homeSquareFootage
      numBathrooms
      numBedrooms
      lastSoldDate
      lastSoldPrice
      zestimateAmount
      zestimateLastUpdated
      zestimateValueChange
      zestimateValuationRangeHigh
      zestimateValuationRangeLow
    }
    valuation
    solar
    windows
    waterfront
    countertops
    flooring
    furnaceAge
    roofAge
  }
}
`;
export const deleteHouse = `mutation DeleteHouse($input: DeleteHouseInput!) {
  deleteHouse(input: $input) {
    id
    description
    recentRemodel
    upgradeStory
    userProfilePhoto
    houseBackgroundPhoto
    address
    parcelData {
      latitude
      longitude
      taxYear
      taxValue
      yearBuilt
      lotSquareFootage
      homeSquareFootage
      numBathrooms
      numBedrooms
      lastSoldDate
      lastSoldPrice
      zestimateAmount
      zestimateLastUpdated
      zestimateValueChange
      zestimateValuationRangeHigh
      zestimateValuationRangeLow
    }
    valuation
    solar
    windows
    waterfront
    countertops
    flooring
    furnaceAge
    roofAge
  }
}
`;
