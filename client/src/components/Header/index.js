import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


import Home from  '../../pages/home/Home';



const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
   

  };
  return (
    <header>
      <div>

        <nav>

          <div className="flex-container">
              <h1 className="logo">
                <Link style = {{color: `'#0077FE'` }} to="/home"> &#10044; Opensignal </Link>
              </h1>


              {Auth.loggedIn() ? (
                  
          <>
              <ul className="navigation">
                      <Link to="/dashboard">Dashboard</Link>
                      <Link to="/news">News</Link>
                      <Link to="/posts">Blog</Link>
                      <li><a href="#">Support</a></li>
              </ul>

            <a className='login' href="/" onClick={logout}>
              Logout
            </a>

          </>
          
          ):(
            <section>
              <div>
                <ul className="nav-user">
                <Link className='login' to="/login">Login</Link>
                <Link className="signup" to="/signup">Signup</Link>
                </ul>
              </div>
             
            </section>
            
             
          )}

          </div>
        </nav>
      </div>
    </header>
  );


};

export default Header;



