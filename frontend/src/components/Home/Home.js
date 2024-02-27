import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/bookpic.jpg';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book Catolog</h1>
          <p>Manage your Books with Ease</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          <img src={bookpg} alt='profile' />
        </div>
      </div>
      <div> <br></br>
        <h1 id='about'>About</h1>
        <p>Welcome to Our Book Collection App!
            Our app provides you with a platform to manage your book collection efficiently. Here's what you can do on our platform:<br></br>

            1. Browse and Manage Books: View your collection, add new books, update existing entries, and remove books you no longer own. <br></br>

            2. User Management: Manage user accounts, including registration, login, and profile updates.<br></br>

            3. Search Functionality: Easily search for specific books or authors within your collection.<br></br>

            4. User Dashboard: Access a personalized dashboard with quick links to manage your books and profile.<br></br>

            5. Interactive Interface: Our user-friendly interface makes it easy to navigate and use all features of the app.<br></br>

            6. We hope you enjoy using our app to organize and manage your book collection!<br></br>
        </p>
      
      </div>
    </div>
  );
};

export default Home;