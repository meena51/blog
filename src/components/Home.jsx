import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      

      <div className="content">
        <h1>Hey Blog Lovers</h1>
        <h2>Welcome to my blogs</h2>
        <Link to="/blogs" className="button">Explore Blogs</Link>
      </div>
    </div>
  );
};

export default Home;
