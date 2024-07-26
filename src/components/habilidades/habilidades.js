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

    @media (max-width: 720px){
        flex-direction: column;
    }
`;

const ContainerImages = styled.div`
    height: 45vh;
    width: 40vw;
    padding: 5vw 5vw 5vw 5vw;
    margin-left: 15vw;
    // border: 1px solid #DE70F0;
    display: grid;
    grid-template-columns: 10vw 10vw 10vw;
    grid-gap: 2vw;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        margin-left: 5vw;
        grid-template-columns: 20vw 20vw 20vw;
    }
`;

const Title = styled.p`
    color: #DE70F0;
    font-size: 48px;
    margin-top: 0;
    margin-left: 10vw;

    @media (max-width: 768px){
        font-size: 24px;
        margin-left: -55vw;
    }
`;

export function Habilidades(){

    const [data, setData] = useState([])

    useEffect(() =>{
        fetch('https://joaopedrosoares.netlify.app/static/habilidades.json').then((response) => response.json()).then(setData)
    },[]);

    if(!data || !data.length) return null;

    return(
        <ContainerHabilidades id="habilidades">
            <Title>Habilidades:</Title>
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