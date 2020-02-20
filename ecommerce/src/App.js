import React, { Component } from "react";
// CSS
import "./App.css";
// Components
import Navbar from "./Components/Navbar/Navbar";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Search from "./Components/Search/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "item1",
          imgLink: "",
          description: "teste",
          price: "10.00"
        },
        {
          id: 2,
          name: "item1",
          imgLink: "",
          description: "teste",
          price: "10.00"
        },
        {
          id: 3,
          name: "item1",
          imgLink: "",
          description: "teste",
          price: "10.00"
        },
        {
          id: 4,
          name: "item1",
          imgLink: "",
          description: "teste",
          price: "10.00"
        },
        {
          id: 5,
          name: "item1",
          imgLink: "",
          description: "teste",
          price: "10.00"
        },
        {
          id: 6,
          name: "item1",
          imgLink: "",
          description: "teste",
          price: "10.00"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Search></Search> */}
        <MainContainer>
          <Products products={this.state.products} />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
