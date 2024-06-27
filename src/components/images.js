import styled from "styled-components"

export const Img1 = styled.img`
    height:  30vh;
    width: 30vh;
    border-radius: 50%;
    object-fit: cover;
    aspect-ratio: 1/1;
    margin-left: 30vw;
    border: 1px solid #DE70F0;

    @media (max-width: 720px){
        margin-left: 0;
        margin-right: 1vw;
    }
`;

export const Img2 = styled.img`
    height: 70vh;
    width: 20vw;
    margin-top: 15vh;
    object-fit: cover;
    margin-left: 10vw;
    border: 1px solid #DE70F0;
    border-radius: 10px;
`;

export const Img3 = styled.img`
    height: 45vh;
    width: 30vw;
    margin-top: 15vh;
    object-fit: cover;
    margin-left: 10vw;
    border: 1px solid #DE70F0;
    border-radius: 10px;

    &:hover{
        opacity: 0.4;
        transition: 1.5s;
        cursor: pointer;
    }
`;