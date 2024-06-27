// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoSun } from 'react-icons/go';
import { MdOutlineDarkMode } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import { GiStarsStack } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';

const Header = ({ setBlackTheme, blackTheme }) => {
    const cart = useSelector(state => state.cart);
    const favorites = useSelector(state => state.favorites);

    return (
        <div className='flex justify-between items-center pt-[20px] transition-colors duration-500'>
            <motion.h1
                key='moon'
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                Logo
            </motion.h1>
            <motion.div
                key="moon"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="flex gap-[20px] items-center"
            >
                {blackTheme ? (
                    <motion.span
                        className='border-2 hover:bg-[--b] font-[600] hover:text-[--w] duration-300 border-[--b] px-[10px] rounded-[7px] py-[5px]'
                        key="moon"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                    >
                        <GoSun
                            className="cursor-pointer w-[25px] h-[25px]"
                            onClick={() => setBlackTheme(prev => !prev)}
                        />
                    </motion.span>
                ) : (
                    <motion.span
                        className='border-2 hover:bg-[--b] font-[600] hover:text-[--w] duration-300 border-[--b] px-[10px] rounded-[7px] py-[5px]'
                        key="moon"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <MdOutlineDarkMode
                            className="w-[25px] h-[25px] cursor-pointer"
                            onClick={() => setBlackTheme(prev => !prev)}
                        />
                    </motion.span>
                )}

                <Link to='/login'>
                    <button className="border-2 hover:bg-[--b] font-[600] hover:text-[--w] duration-300 border-[--b] px-[10px] rounded-[7px] py-[5px]">
                        <FaUserCircle className='w-[25px] h-[25px]' />
                    </button>
                </Link>

                <Link to='/basket'>
                    <button className="border-2 hover:bg-[--b] font-[600] hover:text-[--w] duration-300 border-[--b] px-[10px] rounded-[7px] py-[5px] relative">
                        <SlBasket className='w-[25px] h-[25px]' />
                        <span className="absolute text-[10px] bg-[--b] text-[--w] py-[5px] px-[7px] top-[-10px] rounded-[10px] right-[-10px]">
                            {cart.length}
                        </span>
                    </button>
                </Link>

                <Link to='/favourites'>
                    <button className="border-2 hover:bg-[--b] font-[600] hover:text-[--w] duration-300 border-[--b] px-[10px] rounded-[7px] py-[5px] relative">
                        <GiStarsStack className='w-[25px] h-[25px]' />
                        <span className="absolute text-[10px] bg-[--b] text-[--w] py-[5px] px-[7px] top-[-10px] rounded-[10px] right-[-10px]">
                            {favorites.length}
                        </span>
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}

export default Header;
