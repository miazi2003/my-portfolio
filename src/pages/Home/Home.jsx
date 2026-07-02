import React from 'react';
import Banner from './banner/Banner';
import AboutMe from '../../component/about me/AboutMe';
import SkillSection from '../../component/skillsSec/SkillSection';
import Project from '../../component/projects/Project';
import ContactMe from '../../component/contact/ContactMe';
import BlogSection from '../../component/blog/BlogSection';

const Home = () => {
    return (
        <div className=' mx-auto scroll-mt-20' id="home" >
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillSection></SkillSection>
            <Project></Project>
            <BlogSection></BlogSection>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;