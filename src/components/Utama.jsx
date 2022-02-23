import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';
import Blog from './Blog';
import Youtube from './Youtube';
import Contact from './Contact';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Youtube" element={<Youtube/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Routes>
)

export default Utama;