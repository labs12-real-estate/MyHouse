// eslint-disable
// this is an auto generated file. This will be overwritten

export const createHouse = `mutation CreateHouse($input: CreateHouseInput!) {
  createHouse(input: $input) {
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
export const updateHouse = `mutation UpdateHouse($input: UpdateHouseInput!) {
  updateHouse(input: $input) {
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
export const deleteHouse = `mutation DeleteHouse($input: DeleteHouseInput!) {
  deleteHouse(input: $input) {
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
