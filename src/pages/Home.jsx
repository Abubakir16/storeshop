import React from 'react'
import Header from '../components/header'
import Catigories from '../components/catigories'
import Products from '../components/products'
import { motion } from 'framer-motion'

const Home = ({ blackTheme, setBlackTheme }) => {
    return (
        <div className='xl:px-[9%] px-[10%]  bg-[--w] text-[--b]'>
            <motion.div
                key='moon'
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                <Header blackTheme={blackTheme} setBlackTheme={setBlackTheme} />

                <div>
                    <Catigories />
                    <Products />
                </div>
            </motion.div>
        </div>
    )
}

export default Home
