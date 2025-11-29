import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const AddHabit = () => {
    return (
      <div className="min-h-screen ">
        <div>
          <Navbar></Navbar>
        </div>
        <div>Add habit</div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default AddHabit;