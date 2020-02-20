import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #444;
  color: #f4f4f4;
`;
const Title = styled.h1`
  margin-left: 0.75rem;
  color: #f4f4f4;
  padding: 0.5rem;
  border-bottom: 2px dotted #fff;
`;

const CartButton = styled.button`
  width: 5%;
  padding: 0.5rem;
  margin: 0 0.75rem 0 0;
  font-size: 1.1rem;
  cursor: pointer;
  background: #444;
  border: 1px solid #fff;
  color: #f4f4f4;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0 0.3rem;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Nav>
        <Title>
          <i class="fas fa-space-shuttle"></i> Ecommerce
        </Title>

        <div>
          <label>Pesquisar:</label>
          <Input type="text" placeholder="Valor mín" />
          <Input type="text" placeholder="Valor máx" />
          <Input type="text" placeholder="Nome" />
        </div>

        <CartButton>
          <i class="fas fa-shopping-cart"></i>
        </CartButton>
      </Nav>
    );
  }
}

export default Navbar;
