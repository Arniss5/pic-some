import React from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
 
function Image({className, img}) {

    const {toggleFavourite, cartItems, addToCart, removeFromCart} = React.useContext(Context)

    const [hovered, ref] = useHover()
    
    function getHeartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavourite(img.id)}></i>
        } else if (hovered) {
           return <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i>
        }
    }

    function getCartIcon() {
        if(cartItems.some(item => item.id === img.id))
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
 
    const heartIcon = getHeartIcon()
    const cartIcon = getCartIcon()

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            {heartIcon}
            {cartIcon}
            <img src={img.url} className="image-grid" alt="img" 
            />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool 
    })
}

export default Image