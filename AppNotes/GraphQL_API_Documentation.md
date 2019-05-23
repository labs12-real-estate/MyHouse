# API Documentation

## Queries:

```
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
```

## Mutations

```
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
      }
      nextToken
    }
  }
}
`;


export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
      }
      nextToken
    }
  }
}
`;


export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
      }
      nextToken
    }
  }
}
`;


export const createHouse = `mutation CreateHouse($input: CreateHouseInput!) {
  createHouse(input: $input) {
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


export const updateHouse = `mutation UpdateHouse($input: UpdateHouseInput!) {
  updateHouse(input: $input) {
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


export const deleteHouse = `mutation DeleteHouse($input: DeleteHouseInput!) {
  deleteHouse(input: $input) {
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
```

## Subscriptions

```
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
      }
      nextToken
    }
  }
}
`;


export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
      }
      nextToken
    }
  }
}
`;


export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
      }
      nextToken
    }
  }
}
`;


export const onCreateHouse = `subscription OnCreateHouse {
  onCreateHouse {
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


export const onUpdateHouse = `subscription OnUpdateHouse {
  onUpdateHouse {
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


export const onDeleteHouse = `subscription OnDeleteHouse {
  onDeleteHouse {
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
```
