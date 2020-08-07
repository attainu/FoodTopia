import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'




class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <Footer />
            </div>
        );
    }

}

export default App
