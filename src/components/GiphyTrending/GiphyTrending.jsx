import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardsList = styled.div`
  display: flex;
  align-items:center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width:25%;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

function GiphyTrending() {
  const [giphy, setGiphy] = useState([]);

  const fetchData = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/trending?api_key=p6vD8N2C8x98BRwq6YAtDw1AT5lwz5Fs&limit=12&rating=g";

    const response = await fetch(url);
    const result = await response.json();
    setGiphy(result.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CardsList>
        {giphy !== undefined &&
          giphy.map((getData) => {
            return (
              <Card key={getData.id}>
                <Img src={getData.images.fixed_height.url} alt="gif" />

              </Card>
            );
          })}
      </CardsList>
    </>
  );
}

export default GiphyTrending;
