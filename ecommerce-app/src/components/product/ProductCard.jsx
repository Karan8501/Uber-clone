import React from 'react'
import { useEffect } from 'react';

const ProductCard = ({ name, description, price, category, Stock }) => {

    console.log(name)
    return (
        <div className=''>
            {name}
        </div>
    )
}

export default ProductCard
