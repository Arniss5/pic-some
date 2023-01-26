import React from "react"
import {Context} from "../Context"
 
function Image({className, img}) {
    const {toggleFavourite} = React.useContext(Context)

    const [hovered, setHovered] = React.useState(false)
    console.log(img)
    
    function getHeart() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavourite(img.id)}></i>
        } else if (hovered) {
           return <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i>
        }
    }
    // const heartLogic = img.isFavorited ? console.log("yes"): console.log("nope")
        // <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i>:
        // <i className="ri-heart-fill favorite" onClick={() => toggleFavourite(img.id)}></i>
    const heartIcon = getHeart()

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