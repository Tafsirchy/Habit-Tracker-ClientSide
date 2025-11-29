import React from 'react';
import HabitSlider from '../Components/HabitSlider';
import WhyBuild from '../Components/WhyBuild';
import HavitState from '../Components/HavitState';
import Reward from '../Components/Reward';


const Home = () => {
    return (
        <div >
            <HabitSlider></HabitSlider>
            <WhyBuild></WhyBuild>
            <HavitState></HavitState>
            <Reward></Reward>
        </div>
    );
};

export default Home;