import logo from '../assets/logo.png';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner>
        <img
          src={logo}
          alt=''
          className="jh-logo"
        />
        <h2 className="jh-title">Jungle house</h2>        
      </Banner>
      <Cart/>
      <ShoppingList/>
      <Footer/>

    </div>
  );
}

export default App;
