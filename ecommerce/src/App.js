import React, { Component } from "react";
// CSS
import "./App.css";
// Components
import Navbar from "./Components/Navbar/Navbar";
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
          name: "Space A33",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fs48-05-024%2Fs48-05-024~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: "20.00"
        },
        {
          id: 2,
          name: "Moonwalk 44",
          imgLink:
            "https://files.slack.com/files-pri/TLAVDH7C2-FU91EDCBX/080314-space-vanguard-hsmall-1130a.grid-6x2.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: "40.00"
        },
        {
          id: 3,
          name: "Jordan",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fsts088-349-006%2Fsts088-349-006~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: "60.00"
        },
        {
          id: 4,
          name: "Kobe 444",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fsts088-354-031%2Fsts088-354-031~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: "80.00"
        },
        {
          id: 5,
          name: "Turtle 33",
          imgLink:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-assets.nasa.gov%2Fimage%2Fsts077-711-039%2Fsts077-711-039~thumb.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: "1100.00"
        },
        {
          id: 6,
          name: "Mambo 5",
          imgLink:
            "https://files.slack.com/files-pri/TLAVDH7C2-FU91EDHHB/article-migration-image-black-knight-satellite-mystery-decoded-768x432.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maxime.",
          price: "400.00"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Products products={this.state.products} />
        <Footer />
      </div>
    );
  }
}

export default App;
