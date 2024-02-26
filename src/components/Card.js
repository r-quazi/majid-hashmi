import './Main.css'

const ProductCard=({pro})=>{
return(
<div className="cards">
   
<img className="imgs" src={pro.image} alt='hi'/>
<h1>{pro.productTitle}</h1>
<h2>{pro.mrp}</h2>
<h3>{pro.rate}</h3>
       </div>
        
    
)


}

export default ProductCard;