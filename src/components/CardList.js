import ProductCard from "./Card";
import { useState,useEffect } from "react";
import './Main.css'
import kimia from "./../images/kimia.jpeg"

const productData =[{
    image:`${kimia}`,
    productTitle:"kimia",
    rate:"300",
    mrp:"500",
    weight:""
}, {
    image:`${kimia}`,
    productTitle:"kimia",
    rate:"300",
    mrp:"500",
    weight:""
},{
    image:`${kimia}`,
    productTitle:"kimia",
    rate:"300",
    mrp:"500",
    weight:""
},{
    image:`${kimia}`,
    productTitle:"kimia",
    rate:"300",
    mrp:"500",
    weight:""
},{
    image:`${kimia}`,
    productTitle:"kimia",
    rate:"300",
    mrp:"500",
    weight:""
},]


const ProductList = () => {



    const [product,setProduct] = useState(productData);


    return (

        <div className='card-container'>
            {
                product.map(prod => (

                    <ProductCard pro={prod} />
                ))
            }



        </div>
    );
}

export default ProductList;