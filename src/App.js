import React from 'react';
import { Header, Footer } from './pages';
import { Navbar } from './components';
import './App.css';


const App = () => {
    return (
        <div className='App'>
            <div className='overlay'>
                {/* deleted class gradient__bg */}
                <Navbar />
                <Header />
                <Footer />
            </div>
        </div>
    )
}

export default App