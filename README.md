# Local Search Website

This project is an interactive website designed for users who wants to find any type of attraction, hotel, restaurant, pub around Dublin.
Altough as it is develop through Google Places API, it can show any location around the world.

---
- [Website Here](https://lucassuar.github.io/local_searches_website/)
permalink: /index.html
---

## UX
 
The Design/UI of this website has been created to provide users with a fun and interactive way to discover touristic places
mainly around Dublin.

There is also a Dublin weather widget so users can also look for diferent plan depending on the current weather. Thats weather widget
links to the sourcer website so visitors can see the whole week forescast. This weather widget hides on small screens.


A few potential users are someone who:
1. Tourist planning in visiting Dublin
2. Local people that one to find new places or things to do
3. Tourist that one to look for places outise dublin (altough the weather widget wont apply)

- Initial Wireframes can be found [here](https://github.com/lucassuar/local_searches_website/assets/wireframes)

## Features

This is a simple one page aplication with the following features
- Search functionality with autocompleted technology (Google Place API). No send button needed.
- Dark theme Map skin that matches the look and feel of the app.
- Markers with search locations.
- infowindows for important palces of interest.
- Zoom-in & zoom-out
- Drag icon to access Street view
- All elements are fully responsive.


### Features Left to Implement
- Incorporate to get more information and photos for each place and link to their business website (if provided)
- Weather API with https://home.openweathermap.org -> API Key has never been actiavted on time. (Code writen on weather.js)


## Google Places API

Thre main functionalities were implemented using the official Google code libraries.

1. Search autocomplete.
2. Local searches.
3. Dark theme style.

*IMPORTANT NOTE: All api code used in this project are official code from Google Places API´s documentation.

## Technologies Used

This app relies on the following technologies:

- [HTML] Used to create the skeleton code for this website.
- [Bootstrap] Used to simplify the design and make it easy to access.
- [CSS] Used to style the app.
- [JavaScript] Used to add functionality to the website and stract API´s.
- [Google Places API] Used to access the map and palces information.
- [GIT] Used in order to this project work.
- [GITHUB] Used for uploading all changes to a personal repository.
- [Google Fonts] Used for new fonts.

## Testing

Extensive testing has been carried out for all elements of the application. Below are some details:

- This website-app has been tested throughout development on all the major browsers latest versions. 
- The website renders accordingly on all device screen widths.
- Search functionality works and returns results expected on test.
- Autocomplete search works and suggested similar stuff can can clicked into and return a succesful result.
- Some markers can be clicable (altough had trouble with Google getting more results nd more information).
- Zoom functionality works perfectly
- Weather widget works and dissapear in medium to smaller sizes to avoid cluttering.
- Social media icons in footer links succesfully and hover effects works perfectly
- An error has been detected (GET https://api.openweathermap.org/data/2.5/weather?q=Dublin,Ireland&804ff9591cf3f58dd01ceea9f8c58e20 401 (Unauthorized))
- NOTE RE: API ERROR: as weather API has never been accepted. just decide to leave it on to show some of the code I wrote in order to access JSON data.


## Deployment

The project code was handled by git and then remotely transfered into Github. The repository can be found here:

Repo: <a href= "https://github.com/lucassuar/local_searches_website" target="_blank">https://github.com/lucassuar/local_searches_website</a>

Deployed site on Github pages here. The live site will be updated automatically with each commit on the master branch. Below you 
can see an overview of the process I followed:

- Create a new repository on Github
- Within terminal, created a new repository using 'git init'
- Added files to repository when necessary using 'git add' througout projects creation
- Committing new changes using 'git commit' and add comment
- Entering 'git remote add origin' with the Github URL
- Push repository to Github


### Acknowledgements

* Inspiration on colors: http://raiseapp-html.themeapollo.com/dark/blog_dual_sidebar.html
* Logo/Favicon: http://raiseapp-html.themeapollo.com/dark/blog_dual_sidebar.html
* Weather app: https://www.booked.net
* Second weather API: https://home.openweathermap.org/ (Not actiavated finally on this project.)


#### Licence
Copyright (c) 2019 Lucas Suarez
