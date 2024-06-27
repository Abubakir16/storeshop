// ProductItem.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Product_item = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const favorites = useSelector(state => state.favorites);

    const handleClick = () => {
        if (cart.some(cartItem => cartItem.id === item.id)) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: item });
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: item });
        }
    };

    const handleFavoritesClick = () => {
        if (favorites.some(favItem => favItem.id === item.id)) {
            dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: item });
        } else {
            dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
        }
    };

    const isInCart = cart.some(cartItem => cartItem.id === item.id);
    const isInFavs = favorites.some(favItem => favItem.id === item.id);

    return (
        <motion.div
            key='moon'
            initial={{ opacity: 0, y: 0, filter: 'blur(60px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className='w-[250px] relative group border-2 duration-300 border-[--b] rounded-[10px] overflow-hidden'
        >
            <Link to={`/${item.id}`}>
                <div className='h-[300px] cursor-pointer p-[10px] mb-[20px]'>
                    <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
                </div>
            </Link>
            <div className='p-[20px]'>
                <h3 className='my-[10px]'>{item.name}</h3>
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: 'auto', opacity: 1 }}
                    className='overflow-hidden'
                >
                    <p>{item.description}</p>
                </motion.div>
                <div className='flex gap-[20px]'>
                    <button className='w-full bg-[orange] text-[--b] py-[5px] rounded-[5px]' onClick={handleClick}>
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                    <button onClick={handleFavoritesClick}>
                        {isInFavs ? <FaStar className='w-[25px] h-[25px]' /> : <CiStar className='w-[25px] h-[25px]' />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Product_item;
