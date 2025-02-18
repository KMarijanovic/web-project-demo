// rendering product on site

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"

const Product = (props) => {
    const { id, title, desc, price, img } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return (
        <>
            <img src={img} alt="product" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <p><b>{price} €</b></p>

            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </>
    )
}
export default Product