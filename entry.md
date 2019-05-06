## Individual Accomplishments

I worked on the user registration flow.
This consists of at least two parts that are themselves pretty complicated:
- **The wizard form** is a multi-part form that a new user of the app has to go through before they can create a profile. It consists of four multiple choice questions followed by a confirmation page where the user can change or confirm each of their choices. In addition to the state of the form being tracked locally in the app, we also wanted to maintain form state in `localStorage`---in the event that a user might refresh the page, we wanted to be able to retrieve the answers they had completed as well as the current step of the form that they were on so that they ended up in the exact same state. Keeping track of state in two places always adds complexity, but I think David and myself arrived at a decent solution.
- **The user registration form** is nested in the confirmation page and completion of which kicks off a series of asynchronous events that need to be chained sequentially: first we fire off a sign-up action, which will trigger AWS to send an email to the user with a confirmation code, so we switch to a confirmation code input form. On submission of that, we handle the success of that by signing the user in (using stored credentials from the sign up form) _then_ create a house associated with the user and _then_ redirect the user.

## Team Dynamic

Our group dynamic has been great, I think that everyone has done a solid job of jumping around to different roles while still maintaining ownership of the parts of the codebase that they have authored.
We have also done a lot of pair programming which has been very effective as a means of keeping everyone on task and goal-oriented.
It has also been a great learning opportunity for collaboration process and just learning from the skillsets of others.
Always walk away from a pair programming session having learnt something.

## Detailed Analysis

I spent quite a bit of time learning the AWS ecosystem and am still a bit overwhelmed by it.
Running into a bug currently that seems very difficult to debug: the AppSync generated query for e.g. `listItems` (for whatever resource) _sometimes_ returns an empty array despite there being rows in the database (for example `getItem` by ID for a valid ID will return the item). 
Not really sure where to start with debugging, but one possible solution would be to maintain our own users table, which is not ideal as it would add a lot of complexity and undermine the motivation for using AppSync in the first place.

