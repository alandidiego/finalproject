import React from 'react'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import sv1 from "./assets/1.svg"
import sv2 from "./assets/2.svg"
import sv3 from "./assets/3.svg"



function Home() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
  return (
    <section>
        
            <div className="hero-container">
                <h1 className="hero-header">The cryptoeconomy now at your fingertips</h1>
                <p className="hero-paragraph">Your one-stop crypto empower platform.
                    Track. Learn. Create.</p>
            </div>
            <ul className="hero-buttons">
                <li><Link className="get-started" to="/dashboard">Get Started </Link></li>
                
                <li><Link className="learn-more" to="/news">Learn More</Link></li>
            </ul>
            <div className="how-it-works-container">
                <p className="how-it-works-title-paragraph">HOW IT WORKS</p>
                <h2 className="how-it-works-header">A Simple and Easy Process</h2>
                <p className="how-it-works-explanation-paragraph">In just a few quick steps,
                    you are all set to explore thousands of cryptocurrencies all in one place.
                </p>
            </div>
            <div className="how-it-works-images">
                <img src= {sv1} className="how-it-works-left-img"/>
                <img src= {sv2} className="how-it-works-middle-img"/>
                <img src= {sv3} className="how-it-works-right-img"/>
            </div>
            <div className="features-container">
                <h2 className="features-header">Just some of the ways Opensignal helps you succeed</h2>
                <ul className="features-list">
                    <li><i className="icon-ok"> </i>Monitor thousands of crypto prices using our accurate, real-time price tool</li>
                    <li><i className="icon-ok"> </i>Stay up-to-date with the latest trends in the rapidly changing cryptoeconomy</li>
                    <li><i className="icon-ok"> </i>Get involved and share what you've learned by creating an educational blog post</li>
                </ul>
            </div>


    </section>
  )

}

export default Home