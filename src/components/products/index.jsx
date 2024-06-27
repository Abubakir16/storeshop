// Index.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product_item from './Product_item';

const Index = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                let response = await fetch('https://hadzhi2003.pythonanywhere.com/api/v1/product/');
                let data = await response.json();
                if (response.status === 200) {
                    setData(data.results);
                    console.log(data.results);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);



    return (
        <div className='mt-[50px] flex flex-wrap justify-center gap-[20px]'>
            {loading ? (
                <div className='w-[100vw] h-[100vh] bg-[--w] flex justify-center items-center'>
                    <img className='w-[5%]' src="https://i.gifer.com/ZKZg.gif" alt="" />
                </div>
            ) : (
                data.map((item) => (
                    <Product_item key={item.id} item={item} />
                ))
            )}
        </div>
    );
};

export default Index;
