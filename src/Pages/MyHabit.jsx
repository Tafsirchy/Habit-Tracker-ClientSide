import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MyHabit = () => {
    return (
      <div className="min-h-screen ">
        <div>
          <Navbar></Navbar>
        </div>
        <div>My habit</div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MyHabit;