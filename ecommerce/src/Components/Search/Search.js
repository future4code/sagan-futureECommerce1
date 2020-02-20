import React, { Component } from "react";
import styled from "styled-components";

const SearchContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #a3c6ff;
  width: 100%;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <SearchContainer></SearchContainer>;
  }
}

export default Search;
