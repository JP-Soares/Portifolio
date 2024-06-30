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




//Imagens dos projetos
const ContainerImg = styled.div`
    position: relative;
    height: 45vh;
    width: 30vw;
    margin-top: 10vh;
    margin-left: 10vw;
    text-align: center;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover img {
        opacity: 0.4;
    }
`;

const MsgImg = styled.a`
    color: #FFFAFA;
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    text-align: center;
    text-decoration: none;
    z-index: 1;
    transition: visibility 1.5s ease-in-out;

    ${ContainerImg}:hover & {
        visibility: visible;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const Img3 = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: relative;
    z-index: 0;
    transition: opacity 0.4s ease;
`;


export const Containerimg3 = ({ img, link}) => {
    return (
        <ContainerImg>
            <Img3 src={img} alt="Imagem do projeto" />
            <MsgImg href={link} target="_blank">Acessar Projeto!</MsgImg>
        </ContainerImg>
    );
};



//Images habilidades
const ContainerImgHabilidades = styled.div`
    height: 5vh;
    width: 5vw;
`;

const Img4 = styled.img`
    height: 10vh;
    width: 10vw;

    &:hover{
        transition: 0.4s;
        transform: scale(1.5);
    }
`;

//Mensagem da descrição
const MsgDescription = styled.span`
    font-size: 16px;
    color: #FFFAFA;
    position: relative;
    left: 10vw;
    top: -5vh;
    visibility: hidden;
    background-color: #363636;
    font-family: "Chakra Petch", sans-serif;

    ${ContainerImgHabilidades}:hover & {
        visibility: visible;
    }
`;

export const ContainerImg4 = ({id, img, description}) => {
    return(
        <ContainerImgHabilidades key={id}>
            <Img4 src={img}></Img4>
            <MsgDescription>{description}</MsgDescription>
        </ContainerImgHabilidades>
    );
}