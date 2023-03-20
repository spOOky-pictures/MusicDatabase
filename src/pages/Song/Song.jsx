import "./Song.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Player from "../../components/Player/Player";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Song = ({ setSearchQuery }) => {
const { songName } = useParams();
const [songResults, setSongResults] = useState();
console.log("ha: ",useParams().songName)
const getResults = async () => {
  const AUTHORISATION = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNjBkNGFlYzBmM2M5NWUyMmE1MGFiOTdiODczYTdhZiIsImp0aSI6ImI3ZjQwNDI0MDRmYWU0YzY1NjBmZGY0NjUxNjdjMWQ3YmIzZDUxZTgxMjVmZDIzYWQ5OWJlMzQ4ODJjOTNlYjZhNWYwMmI5NzAzZDk2YTMxIiwiaWF0IjoxNjc5MTUwMjI5LjY1MDkxNywibmJmIjoxNjc5MTUwMjI5LjY1MDkyLCJleHAiOjMzMjM2MDU5MDI5LjY0OTE1LCJzdWIiOiI3MjMwNDM3MyIsImlzcyI6Imh0dHBzOi8vbWV0YS53aWtpbWVkaWEub3JnIiwicmF0ZWxpbWl0Ijp7InJlcXVlc3RzX3Blcl91bml0Ijo1MDAwLCJ1bml0IjoiSE9VUiJ9LCJzY29wZXMiOlsiYmFzaWMiXX0.sz6RgHpsHB8B0J3Ao18a4uP2j8_UsDpt3kfgBciVrMOZZk40cjWGUp8rVp9rHkB7-gOnxLETvP-HyV1-lq-shEcNarff97w3n-55eVALIoD56raAqOBB-yhGzXdbuHa1U2a_2w_MvqN_-eC7b_QLugzb-D4s31uH6o9L3z_47_vwkwyRWTELPZs2xXVv-a7o867gOWQhPE5xZw-b4yZ5zr3Flr5tctxnacyqLGOvQZGCdGzyOj9wpOorpVA6QB-4e_tu2T0sq2KCGomUrqCtpzVLl7j_TcJl2PymhPOv6UnIULL9emcVhyqHBXPS4pnE70AaT_dyQ6ZdK8Hu6xLe7IP0USzDyaMCKRThp7doiPG1Hz9rHjkgnvpiaWQ_k4UZuYAfFkNUXV9wdMJPWgt4ZGuWW2g8Nvm0K6Qsx0BCuVn3QTfkhjYw2b-7Sfi-GmmZa3_4BA8j2Mk9k9T9JU4c9osM6UQixKJOLNWbi91YBnqRx5iPXB2s0PXC_AVwnavOWwWmAV9KeWsJZBeLl23XvzirelNgWzNxCnsDMDm5Fec3C-wC_CeKUHVepjtkjaeqMndnMV1Q1XI5BUPz31iid6boXzlRKUa7VG4EA9e8c4mDua9bMTdzCpMT6rtmovvPgnqKvHy6dJX-c3raezDnyYYYiDUD72rxJ_p9XZpAsmM";  
  const options = {
    method: "GET",
    headers: {
      "Authorization": AUTHORISATION,
      'Api-User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'
    },
  };
  const queryResponse = await fetch(
    `https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=${songName}&limit=1`,
    options
  );
  const songData = await queryResponse.json();
  setSongResults(songData.pages[0]);
  // console.log("song title:",songData.pages[0])
  return songData;
};
useEffect(() => {
  const getSearchResults = async () => await getResults();
  getSearchResults();
}, [songName]);

    return (
      <div>
        <SearchBar updateSearchQuery={setSearchQuery} />
        <h1>Song Page -  {useParams().songName}</h1>
        {songResults && (
          <p dangerouslySetInnerHTML={{__html: songResults.excerpt}}></p>
        )}
        <Player />
      </div>
    )
}

export default Song;