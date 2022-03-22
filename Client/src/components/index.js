import React from "react";
import HomeInfo from "./homeInfo";
// import 'src/components/partials/_home.scss'
import Nav from "./nav";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        error: null,
        isLoaded: false,
        products: []
        
        
      
    }

  };
  componentDidMount() {
    fetch('http://localhost:8080/featured')
        .then((res) => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    products: data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
        


}
    render(){
      const { error, isLoaded, products } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
  return (
    <div>
      <div id="hero">
        <div class="texture"></div>

        <video loop muted autoplay="" preload="auto">
          <source src="video/mansiontour.mp4" alt="Mansion tour video" type="video/mp4" />
        </video>

        <article class="caption">
          <Nav />

          <h1>Beaumont Luxury Estates</h1>
          <h2>Where we create your dream home</h2>
          <p>
            Success isn’t always about greatness. It’s about consistency.
            Consistent
            <br />
            hard work gains success. Greatness will come.
          </p>
          <a href="/products" class="btn">
            Explore Now &#8594;
          </a>
        </article>
      </div>

      <div class="categories">
        <HomeInfo />
      </div>

      <section class="small-container">
        <h2 class="title">Featured Products</h2>
        <div class="row">
          
            
              {products.map((products,index) =>( 
                <div class="col-5">
                     <a href="/item">
                     <img src={products.Image} alt = {products.Alt}/>
                   </a>
                   <h3>
                   {products.Name}
                   </h3>
                   {/* Change to h3's */}
                   <div class="rating">
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                     <i class="fa fa-star"></i>
                   </div>
                   <p>{products.Price}</p>
                   </div>
                
              ))}
              
        
        </div>
      </section>
    </div>
  );
}
  }
}
