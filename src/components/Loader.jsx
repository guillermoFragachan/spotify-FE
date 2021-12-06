import React from 'react'
import Spinner from "react-bootstrap/Spinner"

function Loader() {
    return (
        <div className="spinner-container">
            <Spinner animation="grow" className="spinner-logo"/>
        </div>
    )
}


export default Loader