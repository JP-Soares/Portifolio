import React from "react";
import styled from "styled-components"
import './menu.css'

import { Link as ScrollLink} from "react-scroll";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0 20px; /* Adiciona um preenchimento horizontal uniforme */
`;

const Li = styled.li`
    float: left;
    &:hover{
        // border-bottom: 3px solid #DE70F0;
        border-bottom: 3px solid #FFFAFA;
        border-radius: 5px;
        transition: all 0.3s ease;
        cursor: pointer;
    }
`;

const MenuLink = styled(ScrollLink)`
    text-decoration: none;
`;

const Nav = styled.nav`
    /*background-color: #A540C8;*/
    background-color: transparent;
    position: absolute;
    width: 100vw;
    top: 0;
    z-index: 999;
    padding: 0;
    border-radius: 10px;
`;

export function Menu(){
    return(
        <Nav>
            <Ul>
                <Li>
                    <MenuLink to="sobre"
                        smooth={true}
                        duration={800}>Sobre Mim</MenuLink>
                </Li>
                <Li>
                    <MenuLink to="projetos"
                        smooth={true}
                        duration={800}>Meus Projetos</MenuLink>
                </Li>
                <Li>
                    <MenuLink to="sobre"
                    smooth={true}
                    duration={800}>Contato</MenuLink>
                </Li>
            </Ul>
        </Nav>
    );
}