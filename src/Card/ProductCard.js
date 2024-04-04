import React from 'react'
import "./productcard.css"
const ProductCard = ({ data }) => {
    // console.log(data)
    return (
        <div className='productcard'>
            <img src={data.image} />

            <p>{data.title}</p>
            <p>{data.price}</p>
        </div>
    )
}

export default ProductCard