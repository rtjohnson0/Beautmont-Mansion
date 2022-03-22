import React from "react";
import Nav from "./nav";

// import './products.json'

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      searchTerm: "",
      desSearchTerm: "select",
    };
    this.lowfilter = (e) => {
      fetch("http://localhost:8080/low")
        .then((res) => res.json())
        .then(
          (data) => {
            this.setState(
              {
                isLoaded: true,
                products: data,
              },
              console.log(data)
            );
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
      e.preventDefault();
    };

    this.highFilter = (e) => {
      fetch("http://localhost:8080/filter")
        .then((res) => res.json())
        .then(
          (data) => {
            this.setState(
              {
                isLoaded: true,
                products: data,
              },
              console.log(data)
            );
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
      e.preventDefault();
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            products: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, products, searchTerm, desSearchTerm } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <header>
            <Nav />
            <div class="header-text">
              <h1>
                {" "}
                WE LOVE <br />
                <span id="photography"> Luxury Homes. </span>
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.{" "}
              </p>
            </div>
          </header>
          <section class="campus">
            <h2>Find Your Next Stay</h2>
            <div class="search-bar">
              <form>
                <div class="location-input">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    onChange={(event) => {
                      this.setState({ searchTerm: event.target.value });
                      event.preventDefault();
                    }}
                  />
                </div>

                <div class="location-input">
                  <button class="btn" onClick={this.lowfilter}>
                    Low
                  </button>
                  <button class="btn" onClick={this.highFilter}>
                    High
                  </button>
                </div>
              </form>
            </div>
          </section>

          <h2 class="title">Beaumont Luxury Homes</h2>
          <div class="row">
            {products
              .filter((products) => {
                if (searchTerm == "") {
                  return products;
                } else if (
                  products.Name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return products;
                }
              })
              .map((products, index) => (
                <div id="topLayer" class="col-4">
                  <a href="/item">
                    <img src={products.Image} alt={products.Alt} />
                  </a>
                  <h3>
                    <a href="/item">{products.Name}</a>
                  </h3>
                  <p>{products.Des}</p>
                  <p>${products.Price}</p>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}
