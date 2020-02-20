import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr;
  width: 100%;
`;

// const Article = styled.article`
//   height: 100px
//   width: 30%;
//   border: 1px solid #444;
// `;

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Section></Section>;
  }
}

export default Products;
