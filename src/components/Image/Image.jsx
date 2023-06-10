import React from "react"
import "./Image.css";

function Image(props) {
    const { classes, src, ...rest} = props
    return (
            <img className="img" src={src.includes("http") ? src : `/${src}`} alt="test" {...rest}/>
    )
}

export default Image