import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f4f4f4;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  overflow-y: auto;
`;

const Title = styled.h3`
  align-self: center;
  width: 30%;
  padding: 0.5rem;
  font-size: 1.3rem;
  margin: 0.3rem 0;
  text-transform: uppercase;
  border-bottom: 2px solid #444;
`;

const TableSection = styled.section`
  margin-top: 0.5rem;
  background: #fff;
  align-self: center;
  width: 70%;
  height: auto;
  overflow-y: scroll;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #444.;
`;

const P = styled.p`
  align-self: center;
  width: 30%;
  text-transform: uppercase;
  font-weight: bold;
`;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let total = 0;
    const showItems = this.props.cart.map((el, index) => {
      total += el.price;
      return (
        <tr key={index}>
          <td>{el.name}</td>
          <td>{el.description}</td>
          <td>{el.price}</td>
        </tr>
      );
    });
    let cart;
    if (this.props.cart.length > 0) {
      cart = (
        <TableSection>
          <Table>
            <thead>
              <tr>
                <th width="30%">Nome</th>
                <th>Descrição</th>
                <th width="22%">Preço</th>
              </tr>
            </thead>
            <tbody>{showItems}</tbody>
          </Table>
        </TableSection>
      );
    } else {
      cart = <p>Você não adicionou nenhum item ao carrinho.</p>;
    }

    return (
      <Container>
        <Title>
          <i className="fas fa-shopping-cart"></i> Carrinho de compras
        </Title>
        {cart}
        {this.props.cart.length > 0 ? <P>Total: R$ {total} </P> : null}
      </Container>
    );
  }
}

export default Cart;
