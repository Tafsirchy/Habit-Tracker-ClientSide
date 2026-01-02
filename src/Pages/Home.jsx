import React from 'react';
import HabitSlider from '../Components/HabitSlider';
import WhyBuild from '../Components/WhyBuild';
import HavitState from '../Components/HavitState';
import Reward from '../Components/Reward';
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

            {/* Section 4: Features (HavitState) - Full Width, Outside Spaced Container */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-20 md:pt-24 lg:pt-28 pb-20 overflow-hidden bg-gradient-to-br from-blue-900/70 via-blue-900/40 to-blue-900/70">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=1920&q=80"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <HavitState />
            </div>

            <div className="">
                {/* Section 5: Featured Categories */}
                <div className="w-full bg-white dark:bg-[var(--color-bg-primary)] relative z-10">
                    <FeaturedCategories />
                </div>
                
                {/* Section 6: Gamification (Reward) */}
                <div className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-[var(--color-bg-secondary)] dark:to-[var(--color-bg-primary)] relative z-10">
                    <Reward />
                </div>
                
                {/* Section 7: Testimonials */}
                <div className="w-full bg-[var(--color-accent)] dark:bg-[var(--color-bg-secondary)] relative z-10">
                    <Testimonials />
                </div>
                
                {/* Section 8: FAQ */}
                <div className="w-full bg-white dark:bg-[var(--color-bg-primary)] relative z-10">
                    <FAQ />
                </div>
                
                {/* Section 9: Newsletter */}
                <div className="w-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] relative z-10">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default Home;