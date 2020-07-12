import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 25%;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

function GiftTrending(props) {
  const [giphy, setGiphy] = useState([]);

  const fetchData = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=p6vD8N2C8x98BRwq6YAtDw1AT5lwz5Fs&q=${props.text}&limit=16&offset=0&rating=g&lang=en`;

    const response = await fetch(url);
    const result = await response.json();
    setGiphy(result.data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [props.text]);
  return (
    <>
      {giphy.length === 0 ? (
        <h3>Data Tidak Ditemukan</h3>
      ) : (
        <CardsList>
          {giphy.map((getData) => {
            return (
              <Card key={getData.id}>
                <Img src={getData.images.fixed_height.url} alt="gif" />
              </Card>
            );
          })}
        </CardsList>
      )}
    </>
  );
}

export default GiftTrending;
