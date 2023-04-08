import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricing = () => {

    const [prices,setPrices] = useState([])

useEffect(() => {
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data))
},[])
    return (
        <div>
            <h1 className='text-center mt-6 pt-6 font-semibold text-4xl text-purple-700'>Awesome Affordable Prices</h1>


<div className='grid md:grid-cols-3 gap-4 mx-12'>
    {
        prices.map(price => <PriceCard
        key = {price.id}
        price = {price}
        ></PriceCard>)
    }
</div>

        </div>
    );
};

export default Pricing;