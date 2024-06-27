import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const ProductDetail = () => {
    const getProducts = JSON.parse(localStorage.getItem('reduxState')) || { cart: [] };
    const [quantities, setQuantities] = useState(
        getProducts.cart.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (productId, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, prevQuantities[productId] + delta),
        }));
    };

    const calculateTotalPrice = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };

    const calculateGrandTotal = () => {
        return getProducts.cart.reduce((total, product) => {
            return total + product.price * quantities[product.id];
        }, 0).toFixed(2);
    };

    return (
        <div className='overflow-x-hidden relative pt-[70px]'>
            <div className='fixed top-0 text-center left-0 w-[100%] bg-[#00ffff] text-[--w] py-[10px] z-10'>
                <motion.h5
                    key='moon'
                    initial={{ opacity: 0, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                >Thanks for buying</motion.h5>
                <div>
                    <motion.span
                        key='moon'
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ ease: 'easeInOut', duration: 0.6 }}
                    >You have {getProducts.cart.length} products</motion.span>
                    <motion.p
                        key='moon'
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ ease: 'easeInOut', duration: 0.9 }}
                    >The total sum: <span className='text-[orange]'>{calculateGrandTotal()} kgs</span></motion.p>
                </div>
            </div>

            {getProducts.cart.map(product => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                    className='w-[100vw] h-[100vh] bg-[--w] px-[10%] flex items-center justify-center'
                >
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper border-2 border-[--b]"
                    >
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index} className='p-3'>
                                <motion.img
                                    initial={{ opacity: 0, filter: 'blur(60px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ ease: 'easeInOut', duration: 1.4 }}
                                    src={image.image} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='w-full border-2 relative border-[--b] h-[80%] text-[--b] px-[20px] py-[30px]'>
                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ ease: 'easeInOut', duration: 0.7 }}
                            className='flex justify-between items-end mb-[20px]'
                        >
                            <span className='text-[orange]'>Name product:</span>
                            <span className='w-[200px] border-b-2 border-dashed'></span>
                            <span>{product.name}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ ease: 'easeInOut', duration: 0.9 }}
                            className='flex justify-between items-end mb-[20px]'
                        >
                            <span className='text-[orange]'>Price product:</span>
                            <span className='w-[200px] border-b-2 border-dashed'></span>
                            <span>{product.price} kgs</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ ease: 'easeInOut', duration: 1.3 }}
                            className='flex flex-wrap gap-[30px]'
                        >
                            <span className='text-[orange]'>Description product:</span>
                            <span>{product.description}</span>
                        </motion.div>

                        <div className='absolute bottom-0 left-0 flex flex-col w-full gap-[10px]'>
                            <div className='flex gap-[10px] justify-center mb-[10px] items-center'>
                                <button
                                    className='w-full bg-[orange] rounded-[5px] py-[10px] text-[--w]'
                                    onClick={() => handleQuantityChange(product.id, -1)}
                                >
                                    -
                                </button>
                                <span>{quantities[product.id]}</span>
                                <button
                                    className='w-full bg-[orange] rounded-[5px] py-[10px] text-[--w]'
                                    onClick={() => handleQuantityChange(product.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <div className='w-full bg-[green] py-[10px] flex justify-center'>
                                <span>{calculateTotalPrice(product.price, quantities[product.id])} kgs</span>
                            </div>
                            <div className='w-full bg-[red] py-[10px] flex justify-center'>
                                <span>Remove from basket</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductDetail;
