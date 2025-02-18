import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"

const CartItem = (props) => {
    const { id, title, desc, price, img } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteFromCart } = useContext(ShopContext)

    return (
        <div className="cartItem">
            <img src={img} alt="item" />

            <div className="description">
                <div className="basicInfo">
                    <p className="basicInfoTitle">{title}</p>
                    <p className="basicInfoDesc">"{desc}"</p>
                    <p className="basicInfoPrice">{price} €</p>
                </div>

                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} name="amount" />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>

                <div className="deleteItem">
                    <button className="deleteItemBttn" onClick={() => deleteFromCart(id)}><FontAwesomeIcon icon={faTrashCan} className="faTrashCanItem" /></button>
                </div>
            </div>
        </div>
    )
}
export default CartItem