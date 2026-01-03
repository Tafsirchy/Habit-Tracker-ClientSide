import React from 'react';
import HabitSlider from '../Components/HabitSlider';
import WhyBuild from '../Components/WhyBuild';
import HavitState from '../Components/HavitState';
import HabitProcess from '../Components/HabitProcess';
import DailyHabitChallenge from '../Components/DailyHabitChallenge';
import Habits from '../Components/Habits';
import Statistics from '../Components/Statistics';
import FeaturedCategories from '../Components/FeaturedCategories';
import Testimonials from '../Components/Testimonials';
import FAQ from '../Components/FAQ';
import Newsletter from '../Components/Newsletter';
import ScrollEnhancements from '../Components/ScrollEnhancements';

const Home = () => {
    return (
        <div className="w-full">
            {/* Scroll Progress & Back to Top */}
            <ScrollEnhancements />
            
            {/* Hero Section - Full Width */}
            <div className="w-full">
                <HabitSlider />
            </div>
            
            {/* All Content Sections - Consistent Spacing */}
            <div className="">
                {/* Section 1: Popular Habits */}
                <div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-[var(--color-bg-secondary)] dark:to-[var(--color-bg-primary)] relative z-10">
                    <Habits />
                </div>
                
                {/* Section 2: Why Build Habits */}
                <div className="w-full bg-[var(--color-accent)] dark:bg-[var(--color-bg-secondary)] relative z-10">
                    <WhyBuild />
                </div>
                
                {/* Section 3: Statistics - Dark Section */}
                <div className="w-full bg-gradient-to-br from-[#1a1f2e] via-[#2d3748] to-[#1a1f2e] relative z-10">
                    <Statistics />
                </div>
            </div>

            {/* Section 4: Features (HavitState) - Full Width */}
            <HavitState />

            <div className="">
                {/* Section 5: Featured Categories */}
                <div className="w-full bg-white dark:bg-[var(--color-bg-primary)] relative z-10">
                    <FeaturedCategories />
                </div>
                
                {/* Section 6: How Habit Building Works */}
                <div className="w-full bg-white dark:bg-[var(--color-bg-primary)] relative z-10">
                    <HabitProcess />
                </div>
                
                {/* Section 7: Daily Habit Challenge */}
                <div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-[var(--color-bg-secondary)] dark:to-[var(--color-bg-primary)] relative z-10">
                    <DailyHabitChallenge />
                </div>
                
                {/* Section 8: Testimonials */}
                <div className="w-full bg-[var(--color-accent)] dark:bg-[var(--color-bg-secondary)] relative z-10">
                    <Testimonials />
                </div>
                
                {/* Section 9: FAQ */}
                <div className="w-full bg-white dark:bg-[var(--color-bg-primary)] relative z-10">
                    <FAQ />
                </div>
                
                {/* Section 10: Newsletter */}
                <div className="w-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] relative z-10">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default Home;