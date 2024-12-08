// import React from 'react';

import Blogs from "../Components/Blogs";
import Custom from "../Components/custom";
import Form from "../Components/Form";
import Hero from "../Components/Hero";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Blogs/>
            <Custom/>
            <Form/>
        </>
    );
};

export default HomePage;