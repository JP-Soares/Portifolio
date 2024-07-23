import React from "react";
import {Img2} from '../images.js';
import styled from 'styled-components'

const eugenius = 'http://localhost:3000/static/img/eugenius.jpg';

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20vw;
    width: 30vw;
    padding: 0;
    @media (max-width: 768px) {
        margin-left: 5vw;
        width: 100vw;
    }
`;

const ContainerSobre = styled.div`
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

    @media(max-width: 768px){
        font-size: 24px;
    }
`;

const Text = styled.p`
    font-size: 20px;
    color: #FFFAFA;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 16px; /* Reduzindo o tamanho da fonte para telas menores */
        text-align: left; /* Centralizando o texto para telas menores */
        padding: 0 20px; /* Adicionando um espaçamento lateral para evitar que o texto ocupe toda a largura */
        word-break: break-word;
    }
`;

export function Sobre(){
    return(
        <ContainerSobre id="sobre">
            <Img2 src={eugenius}></Img2>
            <ContainerText>
                <Title>Sobre:</Title>
                <Text>Meu nome é João Pedro, e sou um entusiasta da tecnologia com formação em técnico em análise de sistemas, 
                    atualmente cursando engenharia de software. Ao longo da minha trajetória, tive o privilégio de participar de 
                    renomadas feiras tecnológicas, alcançando a posição de finalista por dois anos consecutivos na GeniusCon, 
                    nos anos de 2022 e 2023. Estou constantemente em busca de novos desafios e experiências que possam ampliar 
                    meu conhecimento e aprimorar minhas habilidades.
                    Tenho um interesse particular na área de programação de sistemas web, onde possuo proficiência em diversas tecnologias relevantes.</Text><br></br>
            </ContainerText>
        </ContainerSobre>
    );
}