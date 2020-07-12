import React, { useState } from "react";
import styled from "styled-components";

import GiphyTrending from "../../components/GiphyTrending/GiphyTrending";
import GiphySearch from "../../components/GiphySearch/GiftSearch";

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
`;

function LandingPage() {
  const [text, setText] = useState("");

  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setText(event.target.value);
    }
  };
  return (
    <div>
      <h1>Giphy GIF Search</h1>
      <form>
        <Input
          placeholder="Seach GIF"
          type="text"
          name="giphy"
          id="giphy"
          onKeyPress={handleKeypress}
        />
      </form>
      {text !== "" ? <h1>{`${text}'s GIF`}</h1> : <h1>Trending Gif</h1>}
      {text !== "" ? <GiphySearch text={text} /> : <GiphyTrending />}
    </div>
  );
}

export default LandingPage;
