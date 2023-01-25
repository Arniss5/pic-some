import React from "react"
import { Context } from "../Context"
import { getClass } from "../utils/utils"

import Image from '../components/Image'

function Photos() {

    const {photos} = React.useContext(Context)

    const photoEls = photos.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {photoEls}
        </main>
    )
}

export default Photos