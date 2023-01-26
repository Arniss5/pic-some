import React from 'react'
const Context = React.createContext()

function ContextProvider(props) {

    const [photos, setPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    React.useEffect(()=> {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    function addToCart(img) {
        setCartItems(prevCartItems => {
            return [...prevCartItems, img]
        })
    }
    function removeFromCart(img) {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== img.id))
    }

    console.log(cartItems)
    function toggleFavourite(id) {
        setPhotos(oldPhotos => {
            return oldPhotos.map(photo => {
                if(photo.id === id) {
                    return {
                        ...photo,
                        isFavorite: !photo.isFavorite
                    }
                } else {
                    return photo
                }
            })
        })
    }

    
    return(
        <Context.Provider value={{photos, toggleFavourite, cartItems, addToCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}