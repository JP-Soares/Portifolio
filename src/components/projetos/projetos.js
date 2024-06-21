import { React, useEffect, useState } from "react";
// import logohelpolder from "../../img/logohelpolder.png"
import { Img1 } from "../images";
import styled from "styled-components";

const ProjetoContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: #363636;
`;

const ContainerProjetos = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #363636;
    display: flex;
    flex-direction: row;
`;

const Carousel = styled.div`
    width: 40vw;
    height: 70vh;
    margin-left: 10vw;
    align-items: flex-start;
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
                    const {id, url} = items
                    return(
                        <ProjetoContainer key={id}>
                            <Img1 src={url}></Img1>
                        </ProjetoContainer>
                    );
                })}
            </Carousel>
        </ContainerProjetos>
    );
}