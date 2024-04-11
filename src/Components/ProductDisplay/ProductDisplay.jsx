import React from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-img-main' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(120)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">
                        Rs {product.old_price * 20}
                    </div>
                    <div className="productdisplay-right-price-new">
                        Rs {product.new_price * 20}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                It facilitates the transaction between a buyer and seller.
                 It is the virtual space where you showcase products, and online
                 customers make selections
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span> Women, T-Shirt, Crop Top </p>
                <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest </p>

            </div>
        </div>
    )
}

export default ProductDisplay