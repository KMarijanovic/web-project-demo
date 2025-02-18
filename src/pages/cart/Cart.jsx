import { allindoors } from "../../data/data"
import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import CartItem from "../../pages/cart/CartItem"
import "./Cart.css"
import { useNavigate, Link } from "react-router-dom"

import allindoorsLINK from "../../images/cart-pics/allindoors-001.jpg"
import alloutdoorsLINK from "../../images/cart-pics/alloutdoors-001.jpg"
import potsLINK from "../../images/cart-pics/pots.jpg"

const Cart = () => {

    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()

    let shippingCost = 15;
    if (totalAmount <= 60) {
        shippingCost = 15
    } else {
        shippingCost = 0
    }

    const invoiceAmount = totalAmount + shippingCost;

    return (
        <div className="cart">
            <div className="cart-wrapper">
                <div className="cartItems">
                    {allindoors.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <div key={product.id}>
                                <CartItem data={product} />
                            </div>
                        }
                        return false;
                    })}
                </div>

                {totalAmount > 0 ? (
                    <div className="checkout">
                        <h1>Summary</h1>
                        <p>Total: <b>{totalAmount}€</b></p>
                        <p>Shipping costs: <b>{shippingCost}€</b></p>
                        <p className="note">Spend over 60€ to get free shipping!</p>
                        <hr />
                        <p className="invoice-amount">Invoice amount <span>incl. VAT</span>: <b>{invoiceAmount}€</b></p>
                        <div className="checkout-bttns">
                            <button onClick={() => navigate("/")}>Continue Shopping</button>
                            <button>Checkout</button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <div className="empty-cart-one">
                            <h1>Shopping cart <span style={{ marginLeft: "10px", fontSize: "35px" }}>0 article(s)</span></h1>
                            <p style={{ fontWeight: "bold" }}>Your shopping cart is still empty.</p>
                            <p>Discover what we have for you!</p>
                            <button onClick={() => navigate("/")}>Shop Now</button>
                        </div>
                        <div className="empty-cart-two">
                            <Link to={"/allindoors"}><img src={allindoorsLINK} alt="plants" /><span>ALL INDOORS</span></Link>
                            <Link><img src={potsLINK} alt="pots" /><span>POTS & CARE</span></Link>
                            <Link><img src={alloutdoorsLINK} alt="plants" /><span>ALL OUTDOORS</span></Link>
                        </div>


                    </div>
                )}
            </div>
        </div>
    )
}
export default Cart