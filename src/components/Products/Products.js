import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = ({ setCartCount }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div className='products container'>
            {
                products.map(product => <Product key={product.id}
                    product={product}
                    setCartCount={setCartCount}>

                </Product>)
            }
        </div>
    );
};

export default Products;