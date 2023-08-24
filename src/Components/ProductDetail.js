import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import { Link, useParams } from 'react-router-dom';
import style from './ProductDetails.module.css'


const ProductDetail = (props) => {
    let { id } = useParams(); 
    const data = useContext(ProductsContext); 
    const product = data [id - 1];
    const {image, title, desctription, price, category} = product;
    return (
        <div className={style.container}>
            <img className={style.image} src={image} alt='product'/>  
        <div className={style.textContainer}>
            <h3>{title}</h3>
            <p className={style.desctription}>{desctription}</p>
            <p className={style.category}><span>category:</span>{category}</p>
            <div className={style.buttonContainer}>
                <span>{price}</span>
               <Link to="/products"> Back to shop</Link>
            </div>
        </div>
        </div>
    );
};

export default ProductDetail;