import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

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