import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from '../Banner/Banner';
import NewArrival from '../NewArrival/NewArrival';
import HotDeals from '../HotDeals/HotDeals';



const Home = () => {
    return (
        <div >
         <Banner></Banner>
          <Inventory></Inventory>
          <NewArrival></NewArrival>
          <HotDeals></HotDeals>
        </div>
    );
};

export default Home;