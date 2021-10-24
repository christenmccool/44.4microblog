import React from 'react';
import TitleList from './TitleList';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to Microblog, our super innovative site for communicating information to you, our belover user.</h1>
      <TitleList />
    </div>
  )
}

export default Home;