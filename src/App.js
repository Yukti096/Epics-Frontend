import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Homepg/Navbar';
import Carousel from './Homepg/Carousel';
import Slick from './Homepg/Slick';
import { FooterContainer } from './Homepg/Container'

function App() {
    return ( 
        <div className = "App" >
        <Navbar />
        <Carousel/>
        <center><h2>Explore Courses</h2></center>
        <Slick/>
        <FooterContainer/>
        <center><p>Developed for EPICS by team Pedagogy</p></center>
        </div>
    );
}
export default App;