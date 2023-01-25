import React from 'react'
const Context = React.createContext()

function ContextProvider(props) {

    const [photos, setPhotos] = React.useState([])

    React.useEffect(()=> {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    
    return(
        <Context.Provider value={{photos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}