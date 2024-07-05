import { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';

const Header: FC<any> = (): ReactElement => {
    const pa = {
        name: 'april'
    };
    return (
        <HeaderView id="_header">
            <Section className="_container">eheadr</Section>
        </HeaderView>
    );
};

const HeaderView = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 0.75rem;
    width: 100%;
    background: #111111;
    z-index: 999;
    @media (max-width: 768px) {
        height: 0.4rem;
    }
`;
const Section = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;
const LogoContent = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.23rem;
    font-family: HarmonyOS_Sans_SC_Black;
    color: #ffffff;
    margin-right: 0.99rem;
    @media (max-width: 768px) {
        margin-right: 0rem;
        font-size: 0.13rem;
    }
`;
const Logo = styled.img`
    width: 0.48rem;
    height: 0.48rem;
    margin-right: 0.09rem;
    @media (max-width: 768px) {
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.06rem;
    }
`;
const NavContent = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;
const Nav = styled.div`
    font-size: 0.16rem;
    font-family: HarmonyOS_Sans_SC;
    color: #ffffff;
    margin-right: 0.86rem;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
`;

export default Header;
