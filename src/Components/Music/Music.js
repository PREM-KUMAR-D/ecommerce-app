import React from "react";
import BasicCard from "../Card/BasicCard";
import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const productsArr = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

]




const Music = (props) => {

    productsArr.map((prod)=>{})

    return (
        <Container className="d-flex  flex-column justify-content-center align-items-center">

            <h2 className="metal-mania text-center">Music </h2>

            {productsArr.map((prod)=>{
                return (

                    <BasicCard
                        image={prod.imageUrl}
                        title={prod.title}
                        price={prod.price}
                        key={Math.random().toString()}
                     />
                )
                
            })}


        </Container>
    )


}

export default Music;