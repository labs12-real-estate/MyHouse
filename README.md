# Labs 12 - MyHouse

<div align="center"><img src="./src/assets/design-files/myhouse-banner-twitter.png" alt="logo"></div>


## Table of Contents

- [Overview](#Overview)
- [Teams](#Teams)
- [Tech](#Tech)
- [Security](#Security)
- [Testing](#Testing)
- [API](#API)
- [Planning](#Planning)
- [Contributing](#Contributing)


<br/>
<br/>

# Overview

This is a Lambda Labs Capstone Project designed for homeowners. It allows a homeowner to enter their address and then answer some key valuation indicators and receive a more accurate valuation for their home than they can get from standard Parcel Data algorithms. This project also provides a dashboard with several useful tools for homeowners to utilize.

<strong>Front-end Deployment: https://fill-in-later/<br>
Back-end Deployment: https://labs12-real-estate.herokuapp.com/<br>
Wireframe: https://balsamiq.cloud/snv27r3/put06ds/r2278 </strong>

## Key Features

- User authentication using Amazon Web Services Amplify + Cognito
- Allow user to enter address and get an initial low/high valuation for their home.
- Allow user to answer questions about their home's finishes and then receive a more accurate valuation.
- Provide onboarding tour to familiarize user with homeowner dashboard.
- Overview page to give an at-a-glance view of data we've collected about the home.
- MyHouse Profile Page which allows user to provide a story about their home, recent upgrades, keep track and/or change their parcel data and home finishes data, upload a backdrop image, upload a user profile image, upload images into a gallery, the ability to click on the image in the gallery and have a modal open.
- Valuation playground page which allows user to select possible upgrades they could make to their home and see how that upgrade will positively affect their home's valuation.
- Mortgage calculator which allows user to input current mortgage amount, length of the mortgage and interest rate and receive a calculated monthly payment with the number of months required to pay off the mortgage.
- Design studio which allows the user to select different rooms within a home and see hundreds of professional images of that room for design inspiration.
- Settings page which allows user to change user profile image, name, e-mail associated with the account and change the password associated with the account.

<br/>
<br/>

# Teams

## Web Team:

|                                             [Anthony Venturini](https://github.com/adventurini)                                             |                                              [David Lam](https://github.com/DavidLam89)                                              |                                                          [Jordan Stoddard](https://github.com/Jordan-Stoddard)                                                           |                                       [Gabe Samaniego](https://github.com/gsamaniego41)                                       |                                                [Peter Murphy](https://github.com/ptrfrncsmrph)                                                |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://pbs.twimg.com/profile_images/1099429898144366592/snfPARcP_400x400.png" width = "250" />](https://github.com/adventurini) |       [<img src="https://avatars0.githubusercontent.com/u/19841364?s=400&v=4" width = "250" />](https://github.com/DavidLam89)       | [<img src="https://avatars0.githubusercontent.com/u/42726527?s=400&u=a74e6efa13ba1cac3a1a78534cbb0e0f2339523e&v=4" width = "250" />](https://github.com/Jordan-Stoddard) |       [<img src="https://avatars0.githubusercontent.com/u/35754959?s=400&v=4" width = "250" />](https://github.com/gsamaniego41)        |                              [<img src="https://avatars1.githubusercontent.com/u/26548438?s=400&v=4" width = "250" />](https://github.com/ptrfrncsmrph)                              |
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/adventurini)                           |                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/DavidLam89)                        |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jordan-Stoddard)                                       |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gsamaniego41)                   |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ptrfrncsmrph)                           |
|    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/anthony-v-7a18bb111/)     | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/david-lam-462149183/) |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ronald-libago-96487815b/)                 | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/gabriel-samaniego-69525239/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/peter-murphy-3b6949b9//) |

<br>
<br>

## Data Science Team:

|                                                [Peyton Runyan](https://github.com/peytonrunyan)                                                 |                                       [Quinn Dougherty](https://github.com/quinn-dougherty)                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                [<img src="https://avatars0.githubusercontent.com/u/44583861?s=400&v=4" width = "100" />](https://github.com/peytonrunyan)                                |                        [<img src="https://avatars1.githubusercontent.com/u/39039420?s=400&v=4g" width = "100" />](https://github.com/quinn-dougherty)                        | [<img src="https://avatars1.githubusercontent.com/u/39039420?s=400&v=4" width = "250" />](https://github.com/Mister-Corn) | [<img src="https://avatars1.githubusercontent.com/u/37676385" width = "250" />](https://github.com/NandoTheessen) | [<img src="./assets/william.jpg" width = "250" />](https://github.com/ptrfrncsmrph) |
|                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/peytonrunyan)                            |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/quinn-dougherty)                    | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ptrfrncsmrph) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/peyton-runyan/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/quinn-dougherty-581868180/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jordan-stoddard-aa928167/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nandotheessen/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/william-vandolah-89717477/) |

<br>
<br>

# Tech

## Frontend built using:

### React

With its vast eco-system and modular nature React is a great choice for developing the front-end of our project.

### React Hooks
React Hooks simplify working with React due to use near exclusive use of functional components versus class components. Also, because logic can be shared, using React hooks results in smaller package sizes, which maximizes efficiency. It also allows us to abstract out a lot of local state logic keeping our component files smaller, easier to debug and more scalable.

### Redux

With a global store and the ability to separate the concerns of our reducers Redux was a profoundly excellent choice for state management throughout our application to reduce state-driven bugs and share needed state throughout our deeply nested and organized component tree.

### node-sass

SCSS AKA SASS is a styling compiler, however, using node-sass allows us to inherit all of the functionality of the sass styling compiler without having to run a compiler on our local machine during development.

We chose SASS as a methodology for our styling in order to be able to keep styling organized in various partial files, the ability to use mixins, variables and to keep our React component file syntax easier for humans to read.

### Zeit

Our front end was deployed using Zeit. Zeit is a serverless cloud deployment experience which makes Continuous Deployment a breeze by connecting to our github repository. Some of the great features we took advantage of: Zeit only re-builds the parts of your application that have changed. No matter how large your repository. Zeit makes our code blazing fast: cold, hot and in-between. Our deployment is decomposed into small units of execution, all built, deployed and executed independently. Instead of deploying a large server, we deploy lots of small functions that look and act as one.

Minimize friction. Maximize security. Speed up our cloud.

Each incoming request yields a unique thread of computation in the cloud. When our deployment is not actively receiving traffic, our server stays quiet. Instead of worrying about servers uptime, tedious CPU and memory allocations and scaling algorithms, we just think about our code. Scaling doesn’t need to be complicated or expensive.

### Various Third Party Packages

For a full list of all the third-party npm packages we used in the build of the app please visit [this file](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/thirdPartyTools.md)

## Backend built using: 

### Amazon Web Services: Amplify + Cognito

AWS Amplify + Cognito allows us to manage and control our user pool along with federated ID's for full authentication, security and polish for the end user.
It also gives us scalability as our AWS API can handle 1000 calls per second.

### GraphQL

GraphQL has many advantages, one of the big one's for us is it's integration with AWS Amplify. This allows us to build small cloud-based server instances for each user account, significantly increasing the speed of API calls that we make. Additionally, GraphQL allows for speed of development, as prototype development is much faster than REST by defining a schema, which becomes the model.

GraphQL allows for a robust integration process since data is expressed by a schema our server-side developers don't have to try to merge or enrich records on request requirements. GraphQL also comes with added features such as subscriptions, access control, monitoring and error handling. Our GraphQL server provides multiple services including a caching layer, authorization rules, and access traceability.

### Node.js, Express.js

Node.js offers a single free codebase that is fast, easy to learn, and offers multiple modules. Collaborators can quickly get up to speed and easily modify and maintain the code for longterm stability.

Express.js allows us to code and customize the back-end to our liking, and 
gives us more control on what and how the back-end handles requests.

There is very detailed documentation available for each. There also widespread community support for Node and Express.

### PostgreSQL
* Saves the necessary data in an efficient way
* Allows for easy queries through JOIN support
* Allows for very easy deployment
* Has a great community around it and is future proof / very independent of new trends

### Amazon S3

Amazon S3 stores static files for our app. These files include the property photos and user profile images that users will upload themselves. Their cloud storage services are secure and reliable, so our users can be assured that their data will be available when and where they need it to be. Amazon S3 is also easily scalable should the app demand higher request rates. For more information, see the [Amazon S3 Documentation](https://docs.aws.amazon.com/s3/#lang/en_us).


<br/>
<br/>

# Security

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file in the frontend folder containing the following:

```
Fill in later
```

In your backend, create a .env file that includes the following:

```
fill in later
```

<br/>
<br/>

# Testing

This library uses [Jest](https://jestjs.io/) for testing. For the server side, we make use of Supertest, and for the client side, we make use of the [React-Testing-Library](https://testing-library.com/react).

Front end tests can be run by moving into `/src` and running `yarn test`.
<br />
Back end tests can be run by cloning [this repo](https://github.com/labs12-real-estate/labs12-real-estate-BE) moving into the root folder and running `yarn test`.

<br/>
<br/>


# API

You can learn more about our GraphQL API [here](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/GraphQL_API_Documentation.md). 
<br />You can learn more about our data model [here](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/data_model.md).
<br /> You can read our Express/Postgres server documenation [here](https://github.com/labs12-real-estate/labs12-real-estate-BE)

<br/>
<br/>

# Planning
So often with software development we think that coding is the more useful exercise when it comes to building an application. For our MyHouse app we took a different approach. It was our closely held philosophy that if we made a major commitment and investment in planning that it would result in a far more cohesive and organized iteration cycle. This proved to be true.

We spent 48 hours at the beginning of this project doing nothing but coming up with a long-range plan for how we would build the app, broken down by one week sprints prior to ever writing a line of code.

Due to our extensive planning and organized development strategy we actually completed what we anticipated would take 5 weeks in 3 short weeks. Due to this we had to have a Stage 2 planning session where we spent the majority of a day planning what features we could implement with our remaining 2 weeks before project deadline.

Our Technical Design Document AKA Product Canvas is 30 pages long and goes into excruciating detail upon the execution of features, challenges we would potentially encounter, the stories of how our users would interact with the features, the competitive marketplace and much more.

You can view the planning document [here](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/Product_Canvas.md).


<br/>
<br/>


# Contributing
Contributions are welcome. If you choose to contribute to this project, you agree to abide by our [Code of Conduct](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/CODE_OF_CONDUCT.md). Please create an Issue if there is a bug or feature request you are interested in adding to the project. If you would like to implement the pull request for this Issue yourself, please request permission in the Issue commentary and affirm from a Maintainer that you can proceed. Once confirmed, assign yourself the Issue in Github.

Pull requests are made via the git feature branch workflow described [here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Once you are assigned the Issue, you can clone the repo locally, and begin working on the feature branch.

As you implement tests, please ensure you are running tests in both the server and client as described in the testing section. If you are implementing new features, please introduce well thought-out unit/integration tests as needed to ensure the feature works properly. Please also ensure you are running eslint using [our config](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/.eslintrc.json), and eliminating any linting errors before attempting to create a pull request. Please also run Prettier using [our config](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/.prettierrc.json), to ensure you are meeting the formatting standards for this project.

Once your feature has been finished, please use `git push -u origin *feature-name*` to create the branch on the remote repository, then create the pull request in github. As part of the pull request, please fill out the [pull request template](https://github.com/labs12-real-estate/labs12-real-estate-FE/blob/master/AppNotes/pull_request_template.md). Once completed, you may create your pull request. A review from a contributor and ultimate merge approval by an admin will be required. If there are requests raised in the review, please address them.

Thanks for your interest in MyHouse; we look forward to your feedback & participation! <br/>
—Anthony, David, Jordan, Gabe, Peter, Quinn & Peyton