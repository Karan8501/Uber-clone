import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es';
import { useSelector } from 'react-redux/es';
import { getproduts } from '../../redux/actions/productAction';
import ProductCard from './ProductCard';
const Products = () => {
    const { products, isLoading } = useSelector((state) => state.productState);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getproduts());

    }, [dispatch])
    console.log(products)
    return (
        <section className=''>
            <div>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))}
            </div>


        </section >
    )
}

export default Products
