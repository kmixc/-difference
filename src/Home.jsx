import React from 'react'
import Gallery from './index/gallery.jsx';
import Content from './index/content';
import Spacer from './index/spacer';
import './App.css';

export default function Home() {
    return (
        <div>
            <Gallery></Gallery>
            <Spacer></Spacer>
            <Content></Content>
        </div>
    )
}
