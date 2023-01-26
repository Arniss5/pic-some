import React, {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = React.useState("Place Order")

    const {cartItems, setCartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalPrice = cartItems.length * 5.99
    const totalPriceInDollars = totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    function placeOrder() {
        
        setButtonText("Ordering...")
        setTimeout(()=> {
            setButtonText("Place Order")
            setCartItems([])
            console.log("Order placed!")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPriceInDollars}</p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={placeOrder}>{buttonText}</button>}
            </div>
        </main>
    )
}

export default Cart