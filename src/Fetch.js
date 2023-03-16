import $ from "jquery";
import "../src/Fetch.css";

function Fetch() {
    const RAPID_API_KEY = "b7f3ac9f24msh5e5e5677fc4d6ebp1d5bf6jsn73d13c65097a";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
  
    // Function to create random number
    function randomNumber(min, max) { // Takes min and max parameters 
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    const randomKey = randomNumber(0, 24);
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
    .then(response => response.json())
    .then(response => {

        $("#apiDiv").html(`
        <h2>${response.data[randomKey].artist.name}</h2>
        <h4>${response.data[randomKey].title}</h4>
        `);
    })
    .catch(err => console.error("Error:", err));
}

export default Fetch;