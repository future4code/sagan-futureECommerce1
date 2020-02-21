import React, { Component } from "react";
// CSS
import "./App.css";
// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import styled from "styled-components";
import Cart from "./Components/Cart/Cart";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  table, th, td {
    border: 1px solid #b8b8b8;
  }

  th {
    background: #444;
    color: #f4f4f4;
    padding: 0.2rem;
  }

  td {
    padding: 0.2rem;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valormin: "",
      valormax: Infinity,
      valornome: "",
      showCart: false,
      cart: [
        // {
        //   id: 2,
        //   name: "Moonwalk 44",
        //   imgLink:
        //     "https://files.slack.com/files-pri/TLAVDH7C2-FU91EDCBX/080314-space-vanguard-hsmall-1130a.grid-6x2.jpg",
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
        //   price: 40
        // }
      ],
      products: [
        {
          id: 1,
          name: "Space A33",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fs48-05-024%2Fs48-05-024~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: 20
        },
        {
          id: 2,
          name: "Moonwalk 44",
          imgLink:
            "https://files.slack.com/files-pri/TLAVDH7C2-FU91EDCBX/080314-space-vanguard-hsmall-1130a.grid-6x2.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: 40
        },
        {
          id: 3,
          name: "Jordan",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fsts088-349-006%2Fsts088-349-006~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: 60
        },
        {
          id: 4,
          name: "Kobe 444",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fsts088-354-031%2Fsts088-354-031~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: 80
        },
        {
          id: 5,
          name: "Turtle 33",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fsts077-711-039%2Fsts077-711-039~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: 1100
        },
        {
          id: 6,
          name: "Mambo 5",
          imgLink:
            "https://images-assets.nasa.gov/image/51I-S-237/51I-S-237~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: 400
        }
      ]
    };
  }

  showCart = () => {
    this.state.showCart === false
      ? this.setState({ showCart: true })
      : this.setState({ showCart: false });
  };

  addToCart = id => {
    const item = this.state.products.find(item => {
      return item.id === id;
    });
    const newItem = [...this.state.cart, item];
    this.setState({ cart: newItem });
  };

  filterValueMin = e => {
    this.setState({
      valormin: e.target.value
    });
  };

  filterValueMax = e => {
    this.setState({
      valormax: e.target.value
    });
  };

  filterName = e => {
    this.setState({
      valornome: e.target.value
    });
  };

  filterByName(name) {
    let prods = this.state.products;
    if (name) {
      prods = prods.filter(item => {
        const nameTest = item.name.toLowerCase();
        if (nameTest.includes(name)) {
          return item;
        }
      });
      return prods;
    } else {
      return prods;
    }
  }

  render() {
    let listaDeProdutos = [...this.state.products];
    listaDeProdutos = listaDeProdutos.filter(item => {
      if (this.state.valormax === "") {
        return item.price >= this.state.valormin && item.price < Infinity;
      } else {
        return (
          item.price >= this.state.valormin && item.price <= this.state.valormax
        );
      }
    });
    listaDeProdutos = this.filterByName(this.state.valornome.toLowerCase());

    return (
      <div className="App">
        <Navbar
          total={this.state.cart}
          showCart={this.showCart}
          funcaomin={this.filterValueMin}
          funcaomax={this.filterValueMax}
          funcaonome={this.filterName}
        />
        {this.state.showCart ? <Cart cart={this.state.cart} /> : null}
        <Products products={listaDeProdutos} addToCart={this.addToCart} />
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
