import React from 'react';
import Banner from './banner/Banner';
import AboutMe from '../../component/about me/AboutMe';
import SkillSection from '../../component/skillsSec/SkillSection';
import Project from '../../component/projects/Project';
import ContactMe from '../../component/contact/ContactMe';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto scroll-mt-20' id="home" >
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillSection></SkillSection>
            <Project></Project>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;