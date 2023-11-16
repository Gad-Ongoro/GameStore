import React, {useState, createContext} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';
export const gameStoreContext = React.createContext();

function App() {
	const [cart, setCart] = useState(0);
	const [showForm, setShowForm] = useState(false);

	//prevent Default on form submit
	function handleSubmit(e){
        e.preventDefault();
    }
  	return (
    	<div className="App">
			<gameStoreContext.Provider value={{showForm, setShowForm}}>
				<Header handleSubmit={handleSubmit} cart={cart}></Header>
				<Main handleSubmit={handleSubmit} cart={cart} setCart={setCart}></Main>
				<Footer></Footer>
			</gameStoreContext.Provider>
    	</div>
  	);
}

export default App;