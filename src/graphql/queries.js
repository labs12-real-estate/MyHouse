// eslint-disable
// this is an auto generated file. This will be overwritten

export const getHouse = `query GetHouse($id: ID!) {
  getHouse(id: $id) {
    id
    photos
    address {
      street
      city
      state
      zip
    }
    parcelData {
      squareFootage
      numBedrooms
      numBathrooms
      lotAcreage
      yearBuilt
      garageSize
      architecturalStyle
      waterfront
    }
    userProvided {
      countertops
      acAge
      furnaceAge
    }
    valuation
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
      photos
      address {
        street
        city
        state
        zip
      }
      parcelData {
        squareFootage
        numBedrooms
        numBathrooms
        lotAcreage
        yearBuilt
        garageSize
        architecturalStyle
        waterfront
      }
      userProvided {
        countertops
        acAge
        furnaceAge
      }
      valuation
    }
    nextToken
  }
}
`;
