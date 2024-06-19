import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
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
    	<div className="App overflow-hidden">
			<gameStoreContext.Provider value={{showForm, setShowForm}}>
				<Routes>
					<Route path="/*" element={<Main handleSubmit={handleSubmit} cart={cart} setCart={setCart}></Main>}></Route>
					<Route path="/signup" element={<SignUp></SignUp>}></Route>
					<Route path="/signin" element={<SignIn></SignIn>}></Route>
				</Routes>
			</gameStoreContext.Provider>
    	</div>
  	);
}

export default App;