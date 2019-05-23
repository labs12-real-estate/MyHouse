# Data Model

```
type User @auth(rules: [{ allow: owner }]) @model {
  id: ID!
  profilePhoto: AWSURL
  houses: [House] @connection(keyField: "owner")
}

type House @auth(rules: [{ allow: owner }]) @model {
  id: ID!
  description: String
  recentRemodel: String
  upgradeStory: String
  mainPhoto: AWSURL
  address: String!
  parcelData: ParcelData!
  valuation: Int!
  solar: Boolean
  windows: String
  waterfront: Boolean

  # These will be part of the wizard form
  countertops: String
  flooring: String
  furnaceAge: String
  roofAge: String
}

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
```