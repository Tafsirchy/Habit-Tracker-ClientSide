import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

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