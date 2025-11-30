import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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