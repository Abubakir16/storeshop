import React from 'react'

const Favs = () => {
    const getProducts = JSON.parse(localStorage.getItem('reduxState'))
    console.log(getProducts);
    return (
        <div className='w-full h-[100vh] bg-[--w] xl:px-[9%] px-[10%]'>
            {
                getProducts.favorites.map(item => (
                    <div className='text-[--b] ' key={item.id}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Favs
