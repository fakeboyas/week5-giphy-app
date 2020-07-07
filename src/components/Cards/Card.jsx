import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Card(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        props.text !== ""
          ? `https://api.giphy.com/v1/gifs/search?api_key=zlNui05GSxdulhyvyRrH0dKeTAZblPBU&q=${props.text}&limit=25&offset=0&rating=g&lang=en`
          : "https://api.giphy.com/v1/gifs/trending?api_key=zlNui05GSxdulhyvyRrH0dKeTAZblPBU&limit=25&rating=g";

      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    };

    fetchData();
    // eslint-disable-next-line
  }, [fetchData]);

  return <div></div>;
}

export default Card;
