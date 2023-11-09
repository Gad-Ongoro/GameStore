import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';


function App() {
	//prevent Default on form submit
	function handleSubmit(e){
        e.preventDefault();
    }
  	return (
    	<div className="App">
			<Header handleSubmit={handleSubmit}></Header>
			<Main handleSubmit={handleSubmit}></Main>
			<Footer></Footer>
    	</div>
  	);
}

export default App;