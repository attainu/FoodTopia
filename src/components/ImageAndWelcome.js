import React from 'react'

import MainImage from '../assets/food-plate.jpg'

function ImageAndWelcome() {
    return (
        <React.Fragment>
            <img src={MainImage} width="100%" alt="culinary" />
            <div className="card text-center bg-success text-white" style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div className="card-header"><h1>Welcome to FoodParadise</h1></div>
                <div className="card-body">
                    <h4 className="card-title">The easiest way to find restaurant and food</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, in! Maiores repudiandae dolor facilis quia!</p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, veritatis.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImageAndWelcome;