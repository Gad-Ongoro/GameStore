import React, {useState} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

function App() {
	const [cart, setCart] = useState(0);

	//prevent Default on form submit
	function handleSubmit(e){
        e.preventDefault();
    }
  	return (
    	<div className="App">
			<Header handleSubmit={handleSubmit} cart={cart}></Header>
			<Main handleSubmit={handleSubmit} cart={cart} setCart={setCart}></Main>
			<Footer></Footer>
    	</div>
  	);
}

export default App;