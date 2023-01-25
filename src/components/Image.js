import React from "react"
import {Context} from "../Context"
 
function Image({className, img}) {
    const {toggleFavourite} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false)
    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon}
            {cartIcon}
            <img src={img.url} className="image-grid" alt="img" 
            />
        </div>
    )
}

export default Image