import React, { Component } from "react";
import styled from "styled-components";

// const Section = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr 1fr;
//   grid-gap: 10px;
//   margin: 0.6rem;
//   width: 100%;
// `;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  margin: 0.6rem;
  text-align: center;
`;

const ItemTitle = styled.h3`
  padding: 0.5rem;
  // border-bottom: 2px solid #444;
  // display: inline-block;
  background: #444;
  color: #f4f4f4;
`;

const Article = styled.article`
  border: 1px dotted #444;
  border-radius: 5px;
  padding: 1rem;
  background: #fafdff;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  border: 1px solid #444;
  object-fit: cover;
`;

const Div = styled.div`
  border-radius: 5px;
  background: #fafaed;
  padding: 0.7rem;
`;

const Button = styled.button`
  color: #f4f4f4;
  background-color: #48a7f0;
  padding: 0.5rem 2rem;
  border: none;
  outline: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 1rem;
  cursor: pointer;
`;

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart:[''],
    };
  }
  componentDidUpdate() {
    
    localStorage.setItem("cartItens", JSON.stringify(this.state.cart));
  }

  componentDidMount() {
      
      const cartString = localStorage.getItem("cartItens")
      const cart = JSON.parse(cartString)

      
      if(cart===null){
        this.setState({ cart: [""] })
      }
      else{
        this.setState({ cart })
      }
      
  }
  addToCart(id){
    
    const item = this.props.products.filter(item =>{
      return item.id === id
    })
    
    const cart = [...this.state.cart,item[0]]
      this.setState({cart: cart })
      window.location.reload()
  }

  render() {
    const showProducts = this.props.products.map((el, index) => {
      
      return (
        <Article key="index">
          <Img src={el.imgLink} alt="Imagem de um satélite" />
          <ItemTitle>
            {el.name} - R$ {el.price},00
          </ItemTitle>
          <hr></hr>
          <Div>
            <p>{el.description}</p>
            <Button onClick={() => this.addToCart(el.id)}>
              <i class="fas fa-cart-plus"></i> Adicionar ao carrinho
            </Button>
          </Div>
        </Article>
      );
    });

    return <Main>{showProducts}</Main>;
  }
}

export default Products;
