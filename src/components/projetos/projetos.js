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
    flex-direction: row;
    align-items: center;
    background-color: #363636;
`;

//Container de cada projeto
const ProjetoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100vw;
    padding: 0;
`;

//Container do carousel
const Carousel = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const Text = styled.p`
    font-size: 20px;
    color: #FFFAFA;
    text-align: justify;
    text-align: left;
`;

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12vw;
    width: 30vw;
    padding: 0;
`;

const Title = styled.p`
    color: #DE70F0;
    font-size: 48px;
    margin-top: 0;
`;

export function Projetos (){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/static/projetos.json').then((response) => response.json()).then(setData).then(console.log)
    },[])

    if(!data || !data.length) return null;

    return(
        <ContainerProjetos id="projetos">
            <Carousel>
                {data.map((items) =>{
                    const {id, url, text, link} = items
                    return(
                        <ProjetoContainer key={id}>
                            <Containerimg3 img={url} link={link}></Containerimg3>
                            <ContainerText>
                                <Title>Projetos:</Title>
                                <Text>{text}</Text>
                            </ContainerText>
                        </ProjetoContainer>
                    );
                })}
            </Carousel>
        </ContainerProjetos>
    );
}