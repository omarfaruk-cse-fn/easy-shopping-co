import React from 'react';
import ReactModal from '../../ReactModal/ReactModal';
import './Product.css'


const Product = (props) => {
    const { setCartCount } = props
    const { category, description, id, image, price, rating } = props.product
    return (
        <div className='card product'>

            <div className="product-cart">
                <div className='w-50 m-auto'>
                    <img src={image} alt="" />
                </div>

                <div className="info">
                    <h5>Catagory: {category}</h5>
                    <h5>Price: ${price}</h5>
                    <h5>Reting: {rating.rate}</h5>
                </div>
                <div className="btn btn-cart d-flex">
                    <button onClick={setCartCount} className='btn btn-success'>Add to cart</button>
                    <button className='btn btn-danger'> delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>

            </div>


        </div>
    );
};

export default Product;