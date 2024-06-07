import React from "react";
import {Img2} from '../images.js'
import eugenius from '../../img/eugenius.jpg'
import styled from 'styled-components'

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30vw;
    width: 30vw;
    padding: 0;
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
`;

const Text = styled.p`
    font-size: 24px;
    color: #FFFAFA;
    text-align: justify;
`;

export function Sobre(){
    return(
        <ContainerSobre>
            <Img2 src={eugenius}></Img2>
            <ContainerText>
                <Title>Sobre:</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.</Text>
            </ContainerText>
        </ContainerSobre>
    );
}