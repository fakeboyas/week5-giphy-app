import React, { Component } from "react";

import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 300px;
  margin: 50px;
`;

export default class GiphySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifList: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("")
      .then((response) => response.json())
      .then((results) => this.setState({ gifList:results }));
  }

  render() {
    return (
      <div>
        <form>
          <Input
            placeholder="Search For GIF and Enter"
            type="text"
            name="giphy"
            id="giphy"
          />
        </form>
      </div>
    );
  }
}
