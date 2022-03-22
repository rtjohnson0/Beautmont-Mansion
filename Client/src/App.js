import logo from './logo.svg';
import './App.css';
import Home from './components';
import HomeInfo from './components/homeInfo';
import Product from './components/products';
import Contact from './components/contact';
import Nav from './components/nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemHighlight from './components/itemHighlight';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
    
    <Router> 
      <div>
        <Route exact path ="/" component = {Home} />
        <Route exact path ="/products" component ={Product} />
        <Route exact path ="/contact" component ={Contact} />
        <Route exact path ="/item" component ={ItemHighlight} />
        
       <Footer />
      </div>
    </Router>
     
    </div>
  );
}

export default App;
