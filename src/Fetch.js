import "../src/Fetch.css";

function Fetch({searchQuery}) {
    const RAPID_API_KEY = "b7f3ac9f24msh5e5e5677fc4d6ebp1d5bf6jsn73d13c65097a";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
  
    // Function to create random number
    function randomNumber(min, max) { // Takes min and max parameters 
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    const randomKey = randomNumber(0, 4);
    fetch(`https://shazam.p.rapidapi.com/search?term=${searchQuery}&limit=5`, options)
    .then(response => response.json())
    .then(data => {
        console.log("response: ",data)
        let artist = data.artists.hits[0].artist;
        let track = data.tracks.hits[randomKey].track
        document.getElementById("apiDiv").innerHTML = (`
        <h2>${artist.name}</h2>
        <h4>${track.title}</h4>
        <img src="${artist.avatar}" />
        `);
    })
    .catch(err => console.error("Error:", err));
}

export default Fetch;