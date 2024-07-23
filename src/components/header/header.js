import React from 'react'
import styled from 'styled-components'
import { Img1 } from '../images.js'

import './header.css';
const eusorrindo = 'http://localhost:3000/static/img/eusorrindo.jpg'


const VarHeader = styled.div`
    background-color: #5b5b5b;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10vw;
`;

const Title = styled.p`
    font-weight: 400;
    font-size: 48px;

    @media (max-width: 720px){
        font-size: 20px;
    }
`;

const SubTitle = styled.p`
    color: #DE70F0;
    font-size: 56px;
    margin-top: 0vh;

    @media (max-width: 720px){
        font-size: 24px;
    }
`;

export function Header(){
    return(
        <VarHeader>
            <TitleContainer>
                <Title>João Pedro Soares</Title>
                <SubTitle>System Developer</SubTitle>
            </TitleContainer>
            <Img1 src={eusorrindo}></Img1>
        </VarHeader>
    );
}