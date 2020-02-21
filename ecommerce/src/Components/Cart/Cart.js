import React, { Component } from "react";
import styled from "styled-components";


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    
      const showItens = this.props.cart.map((item, index) => {
        
        return (
            <div>
              <p>{item.name}</p>
            </div>    
        );
      });
      
      return <div>{showItens}</div>;
      
    }
    
    
}

export default Cart;
