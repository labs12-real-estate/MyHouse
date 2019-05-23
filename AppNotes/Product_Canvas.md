# MyHouse



## Idea 

MyHouse is an application that will give power back to homeowners, through a suite of homeowner tools and a proprietary home valuation algorithm, MyHouse empowers homeowners to make their own decisions throughout the lifecycle of homeownership.

Data Science thoughts: 
Home valuations have long troubled internet algorithms. Realtors have consistently been able to come up with better valuations, but that time is going to come to an end. Data scientists have never had the same information that realtors have had about home attributes. And realtors have clear incentives to cheat on Broker Price Opinions. Therefore, once we give data science the same information as realtors, this problem will be solved.

Data scientists will collect information about home values (such as age of systems, type of flooring, and type of countertop). This data will be cross referenced with words from the public remarks in the MLS and sales price.


# Mission statement (In your own words):

Providing transparency and empowerment to homeowner’s throughout the lifecycle of home ownership.

### Target User
MVP: Homeowners.<br >
Future Target Users: Investors, Buyers, Observers, Tenants, Realtors, Mortgage Brokers, Appraisers, Insurance Companies, Home Builders.<br >
<br >
# User Journey
User Story, John:

John is a 47 year old accountant from Shelby Township, MI. He goes on Zillow 4 times a month looking at other homes in the area (for sale, pending, sold). He wants to know what his home is worth, but he still never gets a good grasp. 

John discovers MyHouse. He begins inputting a small set of information, curious as to the most accurate valuation of his home’s value. Soon, he has uploaded a whole profile of vast amounts of data to MyHouse. MyHouse cross references this with prices in the area, and calculates his accurate value. 
Solutions

# Features for MVP:
- Enter Address using Auto Complete Form (initial value, moderate accuracy) ->
- 4 Step Multi Form Wizard (Furnishing Collection: Countertops, Roofs, Furnace, Flooring) 
- Data Scientists will scrape public remarks for weighted average on finishes
- Ability to log-in via email, Google, and Facebook // auth0?
- Connect homes with users (Database modelling)
- Home Owner Dashboard to include following:
	- Parcel Data
	- Mortgage Calculator(does not have to work)
	- Valuation Playground
	- Home Profile

## Features for future releases:
- Ability to upload photos
- Create social profile
- Ability to interact with other social users

# Design / Wireframes
<br>

[See wireframes by clicking here](https://balsamiq.cloud/snv27r3/put06ds/r2278)
<br/>
<br>

# Why build this?
## What is the problem?  
Homeowners have no objective source of truth for understanding the true value of their home. Current sources that a homeowner might go to to gain this information have a vested self-interested in providing an inaccurate valuation.

Having a truly accurate valuation for your home empowers you to make decisions across every stage of your home ownership.

## How does your application solve the problem?  
This application strives to provide the most accurate and objective home valuation available on the market today. It will provide tools such as a valuation playground, mortgage calculations, and public parcel data on which to craft an accurate summary of your home’s information.
It will be a seamless, low-friction solution that makes the process painless and transparent.

# Key Features

## What is the “bread and butter” of your app? What makes your app yours? 
- The proprietary home valuation algorithm..
- Signup/Login/Authentication (unique user/home)
- Valuation Playground
- Mortgage calculator page
- Home profile page
- Form Wizard

## Discuss as a team how long it will take to implement these features.
 
 Can you build it in the first 3 weeks? (Note: It is preferred to drop features and spend more time working on these key features.)

We will have no problem building the core features. We are hoping to really nail down a solid design and have the core function working fantastic. Then we will look at possibly stretching.

# Competitive Landscape

Who are your competitors and how do they solve this problem? List at least three. Link to screenshots or samples features.

- NextDoor
- Zillow
- HomeZada

If these three companies had a baby, it would be called MyHouse. 
Zillow is amazing at generating transaction traffic and are currently the best home valuation API. HomeZada has a decently powerful homeowner dashboard. And NextDoor connects homeowners through their neighborhood.
Users
How many types of user accounts will you need for this project?  For each user account type, answer the following:

# Account Type: Homeowner
- Description: Homeowner who is interested in getting their home’s value, and having a place to store data about their home.
Needs: Accurate valuation of their home, place to store information about their home, tools to monitor/understand what may change the valuation of their home.

## Monetization
- MVP Version will not monetize.

## Which users would be willing to pay for your app?
- Potential appraiser and consumer tool for valuation.

## What features can you charge for in your app?
- The appraisal / valuation

## Is there a possibility of a subscription model? Or a one time purchase?

- One time purchase




# Features
## For each feature in your spec answer the following:

- Feature Name: Home Valuation
- User access: ALL

### User Stories
- Homeowner: As a homeowner I want to know my valuation so that I understand my financial picture.
- Home Buyer: As a buyer I want to know a valuation so that I am capable of making proper offers.
- Appraiser: As an appraiser I want to have a suite of tools so that I can make remote appraisals

### What internal APIs will you build to implement this feature?

- Home valuation API (it will use $ / square foot data for each city in MI, and then pull weighted averages for each feature). 
(Data Science note - it’s unlikely to be weighted averages. More likely a random forest, a gradient boosted tree, or an ensemble of a forest/tree and a neural network. Either way, user gives us their info, they get a number back - it could be $/sqft or total price estimate.)

### Are there third party services, APIs, or platforms will you use to implement this feature?

- There are lots. It will take a minute to figure out which ones to use. 

### Have you considered using native frameworks?
- No.

### What are the costs and benefits of using the third party solution?

- Costs are A LOT. But there are some free options.

# Views
## For each view in your spec answer the following:

- View Name: Address Input/Landing Page
- User access: Public
- How will the user navigate to the view? Typing in website URL or search
- What elements/animations will you use to create the view? React components, styling.
- Are there third party services, APIs, or platforms will you use to implement this view? No
- What are the costs and benefits of using the third party solution?

### View Name: Success! Moderate Home Value Display
- User access: Public
- How will the user navigate to the view? After pressing enter/click on address input
- What elements/animations will you use to create the view? Maybe some minor animations for UI components.
- Are there third party services, APIs, or platforms will you use to implement this view? No
- What are the costs and benefits of using the third party solution?

### View Name: Form Wizard
- User access: Public
- How will the user navigate to the view? By clicking CTA button for more accurate valuation
- What elements/animations will you use to create the view? Slide-ins for the wizard
- Are there third party services, APIs, or platforms will you use to implement this view? Maybe?
- What are the costs and benefits of using the third party solution? Quick pre-built components to serve this function/may not be customizable for our needs.

### View Name: Form Wizard -> Sign Up
- User access: Public
- How will the user navigate to the view? By clicking through form wizard answers
- What elements/animations will you use to create the view? Slide-ins for the wizard
- Are there third party services, APIs, or platforms will you use to implement this view? Maybe?
- What are the costs and benefits of using the third party solution? Quick pre-built components to serve this function/may not be customizable for our needs.


### View Name: Dashboard Landing Page/Valuation Playground
- User access: Signed in User/Homeowner
- How will the user navigate to the view? By logging in or registering for the first time or clicking on the dashboard navigation or going directly to the URL if logged in.
- What elements/animations will you use to create the view? Custom-built components.
- Are there third party services, APIs, or platforms will you use to implement this view? Maybe?
- What are the costs and benefits of using the third party solution?  Quick pre-built components to serve this function/may not be customizable for our needs.

### View Name: Dashboard Landing Mortage Calculator
- User access: Signed in User/Homeowner
- How will the user navigate to the view? Clicking dashboard navigation buttons, going directly to URL if logged in.
- What elements/animations will you use to create the view? - Custom-built components.
- Are there third party services, APIs, or platforms will you use to implement this view? https://www.mortgagecalculator.net/webmaster/, possible others.
- What are the costs and benefits of using the third party solution? Quick pre-built components to serve this function/may not be customizable for our needs.

### View Name: Dashboard Homeowner Home Profile View
- User access: Signed in User/Homeowner
- How will the user navigate to the view? Clicking dashboard navigation buttons, going directly to URL if logged in.
- What elements/animations will you use to create the view? Custom-built components.

[STRETCH]:

### View Name: Dashboard Homeowner Design Studio
- User access: Signed in User/Homeowner
- How will the user navigate to the view? Clicking dashboard navigation buttons, going directly to URL if logged in.
- What elements/animations will you use to create the view? Custom-built components.

[STRETCH]:

### View Name: Public View Homeowner Profile Page (read-only)
- User access: Anyone who is given link by homeowner.
- How will the user navigate to the view? By clicking button inside Home Profile that sends user to read-only page.
- What elements/animations will you use to create the view? Custom-built components.

# Architectural Recommendations
## Front End
- What technology solution will you use for your front-end?
_React-Redux, hooks for component level state and component lifecycle methods._
- What problems does this solution solve for this specific project?
_We will need to manage state all over this application. And with Reacts/hooks, it will make it a lot easier to manage using only functional components.._
- What are the drawbacks of using this solution over alternatives?
_There will be some boilerplating done._

# Design Framework
- What library or framework will you be using for styling and presentation? _Node-Sass._
- We will be structuring our files to include an index.scss, where global styles will be imported. We will then create .scss files at the component folder level for each component, utilizing the component’s file name as the naming convention for the style sheet.
- What problems does this solution solve for this specific project?
_Will allow us to style various pages to detail, having consistent styling across different views with different developers working on them._
- What are the drawbacks of using this solution over alternatives?
_Other developers on the team may be less familiar with them._

## Back End
- What technology solution will you use for your back-end?
_Possible solutions: Node/Express, Node/GraphQL._

-What problems does this solution solve for this specific project?
_Either of these solutions give us a way to persist our user/home profile data._

- What are the drawbacks of using this solution over alternatives?
_Node/Express we have a technology we understand. GraphQL is more flexible.
_

## Deployment
- What technology solution will you use to deploy your front-end and back-end?
_Zeit for front end, heroku for back end._

- What problems does this solution solve for this specific project?
_Zeit and Heroku both allow for automatic deployment._


## Database
- What technology solution will you use for your database?
_Again, it will be decided as a group._
- What problems does this solution solve for this specific project?
- What are the drawbacks of using this solution over alternatives?
_Data Science or Reporting_


## What are the data sources you need to generate your data report or run your data analysis?

Michigan realty license so we’re using data from that
Zillow data if necessary
Scraping data other realty websites if necessary
Public parcel data (e.g. https://data.detroitmi.gov/Property-Parcels/Parcel-Points-Ownership/dxgi-9s8s ) 

## Write a description for what report or data science problem is trying to solve:

We are trying to accurately predict the value of a home as a prediction interval
We may try to return a max/min range (filling NaN columns) if our users are being encouraged to provide more and more information to get a more accurate home price

What is the target output that the report API or data science students can deliver to the front-end to ingest and use in the app?

There are several possibilities:
Primary output is going to be a price range for value of the home (“your home is worth between $295,902 and $365,656”)
It’s easy to derive a $/sqft value by just diving the output price by the size of the home
It may be possible to do something like a PDP or something similar to see how home additions impact price
“Adding a pool would increase the value of your home between $X and $Y”
Model
What data do you need?
(Data Science)
Standard housing parcel data 
Sale price of the home
Additional information like counters, cabinets, etc. as determined by our SME
(Web)
We will need the user authentication information and the user provided data about their home as shown in representation below.


## Where will you get the data?
(Data Science)
See the earlier data sources section
(Web)
Data will be provided by the user.
Will your data be stored locally on your front-ends (Mobile, FE Web)?
It will be stored wither in our redux store or on component level state.
How is your data related?
Data is related around home attributes and user.

## What models do you need to represent your data fully in the database in a manner that is logical and consistent? For each model, show properties and initializers.


```js 
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


# APIs - Internal and Third Party Services
## Feature List
### For each feature identified above, add the following information.
(Every feature should be listed and considered)


## Feature Name: Home valuation API
- What internal APIs will you build to implement this feature?
_Home valuation API will be built internally by DS team._
- Are there third party services, APIs, or platforms will you use to implement this feature?
_No_
- What are the costs and benefits of using the third party solution?

 # 
 
 <br >
 <br >

# Summary
Use the information above to fill out the following table:


## NAME
MyHouse is an application that solves individual homeowner valuation by providing an easy to interface for the homeowner to input parcel and finish data which we run through an complex machine learning model to get as accurate a valuation as possible.

It also provides useful tools such as a Valuation Playground, Mortgage Calculator, and Home Profile for keeping track of the details of your home all in one convenient place.
- Front End
- Back End
- Database
- React/Redux
- Node.js with Express.js
- Development: Sqlite3
- Testing: Sqlite3
- Production: PostgreSQL
- Amazon S3

## List of APIs:
- Internally built user/home API.
- Internally built valuation API. 
- Google Places API/Googlefont.
- AWS/Amplify + s3 + cognito
- [stretch]: third party image API for design center. 

## List of Additional Services:
- Home profile to keep track of home data.
- Mortgage calculator.
- Valuation Playground.
- [stretch] Design studio.
- [stretch] Social aspect which allows users to interact with each other and share their home profile with others.
- [stretch] Mini tutorial for new or returning user to teach/remind how to interact with the app.
- [stretch] Create a way to download personal home data as a CSV or PDF.


# Features:


## Navigation

### Front End: 
- Top Nav Bar
- Includes login/logout
- Hello {username} section
- Hamburger button screen left
- MyHouse Logo at center available in all views.
- Side Nav Bar
- Includes buttons for in order: 
- Overview
- Home Profile
- Valuation Playground
- [Stretch] Design Studio
- Mortgage Calculator

### Back End:
- Authentication:
- E-mail sign in
- User table:
- Username
- Password
- Email
- primary_id


### Data Science:
- No needs.


## Landing Page

### Front End: 
- CTA Section:
- Screen-wide DIV, with linear gradient background
- Png images to bring to life
- Input for entering your home address
- Includes AutoComplete powered by Google to get specific addresses.
- [Stretch] Include an error modal to give direction if address does not exist. 
- Jumbotron set in column format
- Text phrase with snippet about MyHouse
- Image with information about our tech
- Large Quote with line spacer
- 3 Cards with svg’s and marketing content
- CTA2 that directs back to enter address at top of page.
- Footer
- MyHome logo
- Social media svg’s
- About us section: Team, repository contact
- Copyright, privacy policy, terms & conditions



## Form Wizard Step 1
### Introduction to value & copy for getting started
- Logo
- Address
- Initial value range
- Copy about the initial value
- Get started button


## Form Wizard Step 2
### Countertops

Front End: 
- Logo
- Address
- Initial value range
- Progress bar
- Copy about countertops
- Inputs for countertop type:
- Laminate
- Marble/Quartz
- Granite/Concrete
- Formica/Tile
- Other/None/Skip. (If not these four options, not statistically significant to determine value)
- User should be able to click on an option, have it highlight, then click next button to move to next step.


## Form Wizard Step 3
### Roof Age

Front End: 
- Logo
- Address
- Initial value range
- Progress bar
- Copy about countertops
- Inputs for roof age:
- 0-4 years
- 5-9 years
- 10-14 years
- 15+ years
- Other/None/Skip. (If not known, will not improve accuracy of valuation)
- User should be able to click on an option, have it highlight, then click next button to move to next step.


## Form Wizard Step 3
### Kitchen Flooring

Front End: 
- Logo
- Address
- Initial value range
- Progress bar
- Copy about countertops
- Inputs for kitchen flooring type:
- Hardwood
- Engineered/Laminate
- Ceramic Tile
- Porcelain Tile/Concrete
- Other/None/Skip. (If not these four options, not statistically significant to determine value)
- User should be able to click on an option, have it highlight, then click next button to move to next step.

## Form Wizard Step 4
### Furnace Age

Front End: 
- Logo
- Address
- Initial value range
- Progress bar
- Copy about countertops
- Inputs for roof age:
- 0-4 years
- 5-9 years
- 10-14 years
- 15+ years
- Other/None/Skip. (If not known, will not improve accuracy of valuation)
- User should be able to click on an option, have it highlight, then click next button to move to next step.

 Form Wizard Completion

Front End:
- Summary of answers:
    - Countertop
    - Roof Age
    - Kitchen Flooring Type
    - Furnace Age
- Ask user to review answers and give ability to go back to any question and make a change.
- Provide sign up form to be able to sign up so that you can see your valuation.

Back End: 
- Will take state and make post call to place answers in home table, and username/password/user_id and place in user table.

Data Science:
- Send information about home finishes to increase accuracy of valuation model.

## Authentication

Front End: 
- All dashboard routes should be protected routes, on attempt to access redirect to landing page.

Back End: 
- Access to user data/home data should be accessible only when providing a token/user_id.
- Token will be generated using jwtoken.
- Custom middleware to prevent data access without proper authentication creds.



## Overview Page:

Front End:

- User story:  Once the user has signed up they will be navigated to the overview page of their MyHouse dashboard.
- Modal will pop up the first time they are navigated to this page giving a welcome and showing their home valuation. Modal will be controlled by user created date.
- Copy inside will invite user to navigate through their dashboard or - - stretch: allow them to watch a short tutorial video.
- Overview Page will have a valuation box at the top with the current most accurate valuation.
- Below that a section with address and parcel data/finish data, overview of their home data.
[stretch] Allow user to download data as a .csv.
	

Back End: 
- Home Table with Parcel Data + Finish Data.

## Home Profile Page:

Front End:

- Backdrop Image at Top is an image of home, (should be your best picture)
- Backdrop Image will be defaulted to either a default img or a gradient background.
- When user attempts to upload image from their local computer it will get sent to a third-party hosting service (such as Cloudinary)
- Then we will populate our API with the URLs from Cloudinary(or whatever)
- From there we will display the image to the profile page.
- User profile image
- Same process as backdrop image.
- Just below image will be the homeowner name
- Address of Home
- Your Home’s Story/description. (CRUD)
- Box for bullet-point version of finish data.
- For editing, a drop down input will be used to limit user to specific entries for finish data.
- Box for bullet-point version of parcel data. (CRUD)
- Recent remodelling. (CRUD)
- Upgrades installed since last purchase. (CRUD)
- Area to add more pictures of your home.
[stretch] Interactive google widget to see overhead view of home location, clicking on navigates user to google maps with address pre-populated.

Back End: 

- Sends up home table data, makes CRUD calls on all saved data.

## Valuation Playground Page:
Front End:
- Box for valuation changes
- Section for current valuation
- Estimated cost of upgrade
- Estimated increase in ROI if upgraded.
- New Valuation Estimate
- Box for Types of Upgrades
- Countertop
    - Laminate
    - Granite/Concrete
    - Marble/Quartz
- New Roof
    - Asphalt
    - Metal
    - Solar
    - Concrete/Clay
    - Cedar/Shake
- Siding
    - Stucco
    - Cedar/Shake
    - Vinyl
    - Brick
    - Wood Siding
    - Fiber Cement
- New A/C
    - Central AC
    - Ductless AC
    - Window AC
- New Furnace
    - Electric Furnace
    - Propane Furnace
    - Oil-Fired Furnace
    - Natural Gas Furnace
- Flooring
    - Carpet
    - Tile
    - Engineered Wood/Laminate
    - Hardwood
    - Concrete
- Adding Sq. Ft
    - Loft
    - Furnished Basement
    - Bathroom
    - Bedroom
- Painting:
    - Exterior Paint
    - Interior Paint
    - Paint front door
    - Replace front door



## Mortgage Calculator Page:

Front End: 
- Mortgage Calculator API.
- Box indicating Mortgage Calculator
- SVG below title
- Mortgage Calculator brought in from library. (type TBD)



## Design Studio Page:

Front End: 
- Box with Design Studio title
- SVG Below Title
- Buttons that run along top:
- Kitchen
- Bath
- Living Spaces
- Lighting
- Bedroom
- Exterior
- Water Feature
- Section for unsplash images organized using CSS Grid.
- When user clicks on one of the buttons it will make an API call to unplash with that category as the search query for the images.


Back End: 
- Call to unsplash API.

# Stage 2 Planning:
## Landing Page:
- Top nav bar distances fixed to be more even both in logged in and logged out state, fully responsive, Have icon + MyHouse logo? (+ tagline at desktop?)
- Make navbar “sticky” once you scroll out of screen.
- Floating image: Change to something Anthony doesn’t hate.
- When click “Get Started” or “MyHouse” in footer, scrolls to top smoothly. (possibly use react-scroll)
- Social media buttons: if they’re there they should link to somewhere.
- Forgot Password page 2: Send semantic errors to user in various error states.
- GIF for computer picture on landing page?
- Review section, change icon picture to female icon.

### Address bar:
- Cannot go through form wizard if logged in. (UI to inform user)
- “Get started” text inside button changes to white spinner after submitting address during “fetching” state.
- “Get started” button turns into a search icon at mobile and stays in-line.
- Address drop down functionality: Can tab + use arrows (implement combo-box), when address is clicked on drop down disappears. If click off input onto screen, drop down disappears.
- If address is not in DB display information to user. If other types of errors display information to user. (error messages should look good at all viewport sizes.
- Switch Google API to be one for client-side rather than server-side. (david)


## Wizard Form:
- Welcome page: Add a little more information for the user and make text more readable. (make sure new text looks good at every viewport)
- Wizard form question pages: 
- Add overlay to side picture/new picture. 
- Get rid of radio button. 
- Make border highlight on hover instead of radio button highlight. 
- Make ‘Prev’ Button opacity 1, with a minor change in color on hover, similar to skip button & box shadows. 
- Register page: Don’t ask user to do two things at once. We need to add another page for registration. So after 4 questions you’ll have a page to review your answers, then a final page for registering.
- Re-design review page and register page.

## Team Page:
- Each team member inputs a picture, bio and social media info.
- Design to go around outside of pictures.

## Dashboard sidebar/topbar:
- Change out icons with flaticons.
- Change color scheme of sidebar, topbar background.
- Make ‘MyHouse’ ‘MyHouse Profile’?
- When in mobile version, if tab is clicked, close sidebar.
- Add settings page with icon of tools + gears or something.
- Fix topbar so icons don’t look lopsided at mobile.

## Overview Page:
- Add skeleton so that while fetching skeleton shows until data has loaded.
- Lazy loading strategy for images/skeleton?
- Change ‘Year Built’ picture to picture of blueprints or construction site.
- First time you register and reach the overview page have a welcome modal?
- Change picture in Jumbotron to drone picture.


## MyHouse Profile Page:
- Make text boxes turn to editing mode when clicked on, leave edit mode on blur.
- In editing mode make X and checkmark large, side by side and colored.
- While fetching make UI a skeleton or spinner if looks better.
- Home Story: 
If Home Story is null display -> “Here’s your opportunity to tell the story of your home! Click here to get started.”
- Add CSS to text area <pre>’s: white-space: pre-line; word-wrap: break-word;
- Only allow user a limited number of characters in story/recent upgrades. If user attempts to add more than limit provide UI feedback that let’s them know how many characters they’re over the limit, and to try again.
- Recent Story:
If Recent Upgrades is null display -> “Click here to list out any and all upgrades that have been made to your home.”
- Same two checks as Home Story.
- Parcel Data:
Require user to enter only numbers and fractions of numbers, if user attempts to add non-numbers or fractions, provide UI feedback that gives instruction.
- Limit entry length to the widest the length might be in Mobile version.
- Add photo gallery that allows you to add multiple pictures of your home and display them within MyHouse profile.
- Add google maps widget that starts on location of this user’s home?
- Change default picture for Jumbotron to be a gradient-type thing that’s obvious it should be changed. (Think LinkedIn default backdrop), make it so user can upload an image for their backdrop. Send error to user if they attempt to upload a picture that’s greater than 2.5MB. Use toastify?
- Change default image for user to be some default icon, give user ability to upload an image for their profile picture.
Set loader image for if image backdrop image is loading.

## Valuation Playground:
- Image?

## Design Studio:
- Make pictures fade in on load?

## Settings Page:
- Design mock up.
- Ability to:
- Change ‘Name’
- Change e-mail.
- Change password.
- Change profile picture.
- Look good at every viewport.

## Security: 
- Make all API keys environment variables.
- Do research to find out how to make environment variables on the front end.

## Testing:
- Test each helper function with automated unit testing.
- Test all AWS GraphQL calls.
- Test renders on front end with supertest.

## Readme:
- Readme written for frontend/backend, datascience.
