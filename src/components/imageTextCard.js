import React from "react"
import "../styles/components/imageTextCard.scss"

const ImageTextCard = ({title, description, border, background, color}) => {
    return (
        <div className="imagetextcard" style={{background: `${background}`, color: `${color}`, border: `${border}`}}>
            <h1 className="imagetextcard-title">{title}</h1>
            <h3 className="imagetextcard-description">{description}</h3>
        </div>
    )
}

export default ImageTextCard