import React from 'react';
import Brand from '../layout/Brand';
import FeaturedProduct from '../layout/FeaturedProduct';
import LatestBlog from '../layout/LatestBlog';
import LatestProducts from '../layout/LatestProducts';
import NewFeatures from '../layout/NewFeatures';
import OfferBox from '../layout/OfferBox';
import SlideSection from '../layout/SlideSection';
import Subscribe from '../layout/Subscribe';
import TopCategories from '../layout/TopCategories';

function Home() {
    return ( 
        <>
         <div class="page-content">
            <SlideSection />
            <FeaturedProduct />
            <LatestProducts />
            <OfferBox />
            <NewFeatures />
            <Brand />
            <TopCategories />
            <Subscribe />
            <LatestBlog />
         </div>
        </>
     );
}

export default Home;