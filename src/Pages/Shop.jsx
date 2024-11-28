import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
// import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter/>
    {/* <ProductDisplay/> */}
      {/* <Breadcrum/>  */}
    </div>
  );
}

export default Shop;
