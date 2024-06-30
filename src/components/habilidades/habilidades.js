import {React, useEffect, useState} from "react";
import styled from "styled-components";

import {ContainerImg4} from './../images.js'

const ContainerHabilidades = styled.div`
    height: 100vh;
    width: 100vw;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #363636;
`;

const ContainerImages = styled.div`
    height: 45vh;
    width: 40vw;
    padding: 5vw 5vw 5vw 5vw;
    margin-left: 25vw;
    border: 1px solid #DE70F0;
    display: grid;
    grid-template-columns: 10vw 10vw 10vw;
    grid-gap: 2vw;
    justify-content: center;
    align-items: center;
`;

export function Habilidades(){

    const [data, setData] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3000/static/habilidades.json').then((response) => response.json()).then(setData)
    },[]);

    if(!data || !data.length) return null;

    return(
        <ContainerHabilidades>
            <ContainerImages>
                {data.map((habilidades) => {
                    const {id, image, description} = habilidades
                    return(
                        <ContainerImg4 key={id} img={image} description={description}></ContainerImg4>
                    );
                })}
            </ContainerImages>
        </ContainerHabilidades>
    );
}