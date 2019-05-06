// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    profilePhoto
    houses {
      items {
        id
        description
        recentRemodel
        upgradeStory
        mainPhoto
        address
        valuation
        solar
        windows
        waterfront
        countertops
        flooring
        furnaceAge
        roofAge
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
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      profilePhoto
      houses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getHouse = `query GetHouse($id: ID!) {
  getHouse(id: $id) {
    id
    description
    recentRemodel
    upgradeStory
    mainPhoto
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
export const listHouses = `query ListHouses(
  $filter: ModelHouseFilterInput
  $limit: Int
  $nextToken: String
) {
  listHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      recentRemodel
      upgradeStory
      mainPhoto
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
    nextToken
  }
}
`;
