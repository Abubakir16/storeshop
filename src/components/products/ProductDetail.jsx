import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa6';
import { CiStar } from 'react-icons/ci';

const ProductDetail = () => {
    let { id } = useParams()
    const [product, setProduct] = useState([])
    const [lading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const favorites = useSelector(state => state.favorites);

    const handleClick = () => {
        if (cart.some(cartItem => cartItem.id === product.id)) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: product });
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: product });
        }
    };

    const handleFavoritesClick = () => {
        if (favorites.some(favItem => favItem.id === product.id)) {
            dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
        } else {
            dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
        }
    };


    useEffect(() => {
        const getProduct = async () => {
            setLoading((prev) => !prev)
            try {
                const response = await fetch(`https://hadzhi2003.pythonanywhere.com/api/v1/product/${id}/`)
                const data = await response.json()
                if (response.status == 200) {
                    setProduct(data)
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading((prev) => !prev)
            }
        }
        getProduct()
    }, [])


    const isInCart = cart.some(cartItem => cartItem.id === product.id);
    const isInFavs = favorites.some(favItem => favItem.id === product.id);
    return (
        <>
            {
                lading ? (
                    <div className='w-[100vw] h-[100vh] bg-[--w] flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ ease: 'easeInOut', duration: 0.1 }} className='w-[5%]' src="https://i.gifer.com/ZKZg.gif" alt="" />
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ ease: 'easeInOut', duration: 0.3 }}
                        className='w-[100vw] h-[100vh] bg-[--w] px-[10%] flex items-center justify-center'>
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
                            {
                                product?.images?.map((image, index) => (
                                    <SwiperSlide key={index} className='p-3'><motion.img
                                        initial={{ opacity: 0, filter: 'blur(60px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        transition={{ ease: 'easeInOut', duration: 1.4 }}
                                        src={image.image} alt="" /></SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <div className='w-full border-2 relative border-[--b] h-[80%] text-[--b] px-[20px] py-[30px]'>
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ ease: 'easeInOut', duration: 0.7 }}
                                className='flex justify-between items-end mb-[20px]'>
                                <span className='text-[orange]'>Name product:</span>
                                <span className='w-[200px] border-b-2 border-dashed'></span>
                                <span >{product.name}</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ ease: 'easeInOut', duration: 0.9 }}
                                className='flex justify-between items-end mb-[20px]'>
                                <span className='text-[orange]'>Price product:</span>
                                <span className='w-[200px] border-b-2 border-dashed'></span>
                                <span >{product.price}</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ ease: 'easeInOut', duration: 1.1 }}
                                className='flex justify-between items-end mb-[20px]'>
                                <span className='text-[orange]'>Max quantity product:</span>
                                <span className='w-[200px] border-b-2 border-dashed'></span>
                                <span >{product.quantity}</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ ease: 'easeInOut', duration: 1.3 }}
                                className='flex flex-wrap gap-[30px]'>
                                <span className='text-[orange]'>Description product:</span>
                                <span>{product.description}</span>
                            </motion.div>
                            <div className='absolute bottom-0 left-0 flex flex-col w-full gap-[10px]'>
                                <motion.button initial={{ opacity: 0, filter: 'blur(20px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                                    onClick={handleClick}
                                    className='w-full py-[10px] bg-[orange] rounded-[5px]'> {isInCart ? 'Remove from Cart' : 'Add to Cart'}</motion.button>
                                <motion.button initial={{ opacity: 0, filter: 'blur(20px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ ease: 'easeInOut', duration: 1.7 }}
                                    onClick={handleFavoritesClick}
                                    className='w-full text-center flex justify-center items-center py-[10px] bg-[green] rounded-[5px]'>{isInFavs ? <FaStar className='w-[30px] h-[25px]' /> : <CiStar className='w-[30px] h-[25px]' />}</motion.button>
                                <Link to={'/'}>
                                    <motion.button initial={{ opacity: 0, filter: 'blur(20px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                                        transition={{ ease: 'easeInOut', duration: 1.9 }}
                                        className='w-full py-[10px] bg-[red] rounded-[5px]'>Go Home</motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </>
    )
}

export default ProductDetail
