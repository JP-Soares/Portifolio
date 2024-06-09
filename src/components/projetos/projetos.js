import { React, useEffect, useState } from "react";
import logohelpolder from "../../img/logohelpolder.png"
import { Img1 } from "../images";
import styled from "styled-components";

const ProjetosContainer = styled.div`
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
    return(
        <ContainerProjetos id="projetos">
            <Carousel>
                <Img1 src={logohelpolder}></Img1>
            </Carousel>
        </ContainerProjetos>
    );
}