import React from "react";
import Header from '../../components/home/Header';
import Content from  '../../components/home/Content';
import Service from '../../components/home/Service';
import Servicebottom from '../../components/home/Servicebottom';
import Projectandfooter from '../../components/home/Projectandfooter';

function Home(){
    return(
        <>
        <Header />
        <Content />
        <Service/>
        <Servicebottom/>
        <Projectandfooter/>
        </>
    )
}
export default Home;
