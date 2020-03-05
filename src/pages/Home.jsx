import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Streams from '../components/Streams';
import Updates from '../components/Updates';
import Teams from '../components/Teams';
import Footer from '../components/Footer';
import Championships from '../components/Championships';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Streams />
            <Updates />
            <div className="col-md-9 mx-auto">
                <Championships />
            </div>
            <Teams />
            <Footer />
        </>
    );
}

export default Home;
