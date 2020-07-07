import React, { useState, useEffect } from "react";
// import styled from "styled-components";

function GiphySearch(props) {
  const [data, setData] = useState([{}]);
  const [text, setText] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setText(event.target.value);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const url =
        text === ""
          ? "https://api.giphy.com/v1/gifs/trending?api_key=loiUj4j9gaeC74djzbdCUiCA7eKXIxZk&limit=10&rating=g"
          : `https://api.giphy.com/v1/stickers/search?api_key=zlNui05GSxdulhyvyRrH0dKeTAZblPBU&q=${text}&limit=25&offset=0&rating=g&lang=en`
          
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(data)
    };

    fetchData();
    // eslint-disable-next-line
  }, [text ]);

  return (
    <div>
      <h1>Giphy Search App</h1>
      <form>
        <input
          placeholder="Type a username and press Enter"
          type="text"
          name="username"
          id="username"
          onKeyPress={handleKeyPress}
        />
      </form>

    </div>
  );
}

export default GiphySearch;
