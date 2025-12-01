import React from 'react';
import HabitSlider from '../Components/HabitSlider';
import WhyBuild from '../Components/WhyBuild';
import HavitState from '../Components/HavitState';
import Reward from '../Components/Reward';
import Habits from '../Components/Habits';


const Home = () => {
    return (
        <div >
            <HabitSlider></HabitSlider>
            <Habits></Habits>
            <WhyBuild></WhyBuild>
            <HavitState></HavitState>
            <Reward></Reward>
        </div>
    );
};

export default Home;