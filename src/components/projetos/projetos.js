import { React, useEffect, useState } from "react";
// import logohelpolder from "../../img/logohelpolder.png"
import { Containerimg3 } from "../images";
import styled from "styled-components";

//Container geral dos projetos
const ContainerProjetos = styled.div`
    height: 100vh;
    width: 100vw;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #363636;
`;

//Container de cada projeto
const ProjetoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100vw;
    padding: 0;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

//Container do carousel
const Carousel = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;

    @media(max-width: 768px){
       flex-direction: column; 
    }
`;

const Text = styled.p`
    font-size: 20px;
    color: #FFFAFA;
    text-align: justify;

    @media(max-width: 768px){
        font-size: 16px; /* Reduzindo o tamanho da fonte para telas menores */
        text-align: left; /* Centralizando o texto para telas menores */
        word-break: break-word;
    }
`;

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10vw;
    width: 30vw;
    padding: 0;

    @media(max-width: 768px){
        width: 90vw;
        margin-left: 5vw;
    }
`;

const Title = styled.p`
    color: #DE70F0;
    font-size: 48px;
    margin-top: 0;
    margin-left: 10vw;

    @media(max-width: 768px){
        font-size: 24px;
        margin-left: -65vw;
    }
`;

export function Projetos (){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/static/projetos.json').then((response) => response.json()).then(setData).then(console.log)
    },[])

    if(!data || !data.length) return null;

    return(
        <ContainerProjetos id="projetos">
            <Title>Projetos:</Title>
            <Carousel>
                {data.map((projetos) =>{
                    const {id, url, text, link} = projetos
                    return(
                        <ProjetoContainer key={id}>
                            <Containerimg3 img={url} link={link}></Containerimg3>
                            <ContainerText>
                                <Text>{text}</Text>
                            </ContainerText>
                        </ProjetoContainer>
                    );
                })}
            </Carousel>
        </ContainerProjetos>
    );
}