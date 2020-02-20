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
          <i className="fas fa-space-shuttle"></i> Ecommerce
        </Title>

        <div>
          <label>Pesquisar:</label>
          <Input type="number" placeholder="Valor mín" onChange={this.props.funcaomin} />
          <Input type="number" placeholder="Valor máx" onChange={this.props.funcaomax}/>
          <Input type="text" placeholder="Nome" onChange={this.props.funcaonome}/>
        </div>

        <CartButton>
          <i className ="fas fa-shopping-cart"></i>
        </CartButton>
      </Nav>
    );
  }
}

export default Navbar;
