import React from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"


function CartItem({item}) {
    const {removeFromCart} = React.useContext(Context)
    const [hovered, ref] = useHover()

    

    return (
        <div className="cart-item">
            <i 
                className={hovered ? "ri-delete-bin-fill": "ri-delete-bin-line"} 
                onClick={() => removeFromCart(item)}
                ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem