import React,{useContext} from "react"
import { ProductsContext } from "../Global/ProductsContext";

const Products = () => {
    const {Products} = useContext(ProductsContext);
    return(
        
        <div className="products">
            {Products.map((product) =>(
                <div className="product" key={product.id}>
                
                <div className="product-image">
                    <img src={product.image} />
                </div>
                <div className="product-details">
                    <div className="product-name">
                    {product.name}
                    </div>
                    <div className="product-price">
                        {product.price}.00
                    </div>
                </div>
                <div className="add-to-cart">add to cart</div>
                </div>
            ))}
        </div>
        
    )
}

export default Products;