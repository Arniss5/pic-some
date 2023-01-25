import React from "react"
import { Context } from "../Context"
import { getClass } from "../utils/utils"

import Image from '../components/Image'

function Photos() {

    const allPhotos = React.useContext(Context)

    console.log(allPhotos.photos)
    const photoEls = allPhotos.photos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {photoEls}
        </main>
    )
}

export default Photos