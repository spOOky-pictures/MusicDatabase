# Music Database

## Description

This project was our group's opportunity to work on a coding project collaboratively, it's been a fantastic opportunity to become better rehearsed with using github branches and pull requests, as well as Netlify. 

The deployed application itself was built on the idea of creating a Music Database where the user can search for information on their favourite Artists, Songs or Albums!
The premise was to keep it simple, clean and minimalistic, filled with the information for the user to read.

We wanted to build an easy to navigate interface that would provide the user with multiple options for their searches, and on their chosen page - give them all the information, as well as Audio and videos. visual guidance necessary to make the dish. 

The project was our first real deep dive into React, which has proven to be a great tool in designing and creating a webpage, however that did not come without troubles.
Starting with major API problems, as we could not fine an API to give us enough information to complete our website, or creating react components and inserting them into relevant pages.The biggest challenge - which has also been very rewarding, has been learning to divide and work on tasks as a group.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

The deployed application can be viewed via this [link](https://delightful-elf-e58a5c.netlify.app/)

## Usage

On load the page will display as follows:  

![Landing page](/src/assets/images/homepage%20.jpg)  

This is the application landing page, on load, the user sees the search bar and an empty background for a minimalistic look.

The user can then type in an artist or song name, and hit enter in order to get the results!

The page will then generate results cards using the Shazam API for most relevant artists and songs based on the inputted search, displaying the image and title of the said artist/song on the screen, as shown below:  

![Search results](/src/assets/images/resultscards.JPG)  

Whilst the API is loading the following loading GIF is shown on screen:  

![Loading image](/src/assets/dlf10_OQFbEEEmHE.gif)  

The user can then select one of the cards that they feel was the most relevant to their search query. Which will then bring back data relevant to that song, for example clicking 'Eminem's Mockingbird' card brings back:

![Song Page](/src/assets/images/songresult%20.jpg)  

The user is provided with the artist's image, artist name, genre of the song, album it comes from and release year.

Undeaneath it is a preview audio player, that allows the user to listen to a snippet of the song, as well as a full YouTube video of the song beneath it.

From here, the user has two options, either clicking the 'HOME' button, which will return the user to the previous search results screen, if the clicked song was not the one they were interested in.

![Search Bar](/src/assets/images/searchbar%20.jpg)  

Otherwise, they can use the search bar at the top to insert a new search parameter, which will take them to the results page with new data.

![Search Bar](/src/assets/images/2ndsearch%20.jpg)  


We suggest to search for 'Eminem' to get full options, however feel free to tes yourself!

## Credits

- Collaborators:  
[David](https://github.com/Davvid96)  
[Elvis](https://github.com/NukeTurtle)  
[Daniel](https://github.com/danielpsnz)  


- Resources Used:  
[Shazam API](https://rapidapi.com/apidojo/api/shazam/)  

## License

MIT License