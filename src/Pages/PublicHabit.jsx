import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PublicHabit = () => {
    return (
      <div className="min-h-screen f">
        <div>
          <Navbar></Navbar>
        </div>
        <div>Public habit</div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default PublicHabit;