import React from "react";
import styled from "styled-components"
import './menu.css'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
`;

const Li = styled.li`
    float: left;
    &:hover{
        // border-bottom: 3px solid #DE70F0;
        border-bottom: 3px solid #FFFAFA;;
        border-radius: 5px;
        transition: 0.3s;
    }
`;

const Link = styled.a`
    text-decoration: none;

`;

const Nav = styled.nav`
    background-color: #A540C8;
    position: fixed;
    width: 70vw;
    top: 0;
    margin-left: 13vw;
    z-index: 999;
    padding: 0;
    border-radius: 10px;
`;

export function Menu(){
    return(
        <Nav>
            <Ul>
                <Li>
                    <Link href="#">Sobre Mim</Link>
                </Li>
                <Li>
                    <Link href="#">Meus Projetos</Link>
                </Li>
                <Li>
                    <Link href="#">Contato</Link>
                </Li>
            </Ul>
        </Nav>
    );
}