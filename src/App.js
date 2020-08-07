import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
//import Home from './pages/Home'
import Footer from './components/Footer/Footer'


// cuma buat test aja
// import Test from './components/Testing/Test'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                
                <Footer />
            </div>
        );
    }

}

export default App
