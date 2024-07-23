import React from "react";
import styled from "styled-components";

import { ContainerImg4 } from "../images";

const imgLinkedin = '/static/img/linkedin-svgrepo-com.svg'
const imgGitHub = '/static/img/github-142-svgrepo-com.svg'

const ContainerContato = styled.div`
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

const Title = styled.p`
    color: #DE70F0;
    font-size: 48px;
    margin-top: 0;
    margin-left: 10vw;

    @media (max-width: 768px){
        font-size: 24px;
    }
`;

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20vw;
    width: 30vw;
    padding: 0;
`;

const Link = styled.a`
    text-decoration: none;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
`;

export function Contato(){
    return(
        <ContainerContato id="contato">
            <Title>Contato:</Title>
            <ContainerText>
                <Link href="https://www.linkedin.com/in/jo%C3%A3o-pedro-soares-da-costa/" target="_blank"><ContainerImg4 key='1' img={imgLinkedin} description="Linkedin"></ContainerImg4></Link>
                <Link href="https://github.com/JP-Soares" target="_blank"><ContainerImg4 key='1' img={imgGitHub} description="GitHub"></ContainerImg4></Link>
            </ContainerText>
        </ContainerContato>
    );
}