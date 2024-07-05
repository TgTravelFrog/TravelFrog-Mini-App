'use client';

import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Footer: FC<any> = (): ReactElement => {
    const links = [
        { icon: 'facebook', href: '' },
        { icon: 'tw', href: '' },
        { icon: 'youtube', href: '' },
        { icon: 'q', href: '' },
        { icon: 'in', href: '' },
        { icon: 'tiktok', href: '' },
        { icon: 'ins', href: '' }
    ];
    return (
        <FooterView>
            {links.map((ele) => (
                <Link key={ele.icon} href={ele.href}>
                    <Logo src={`/images/${ele.icon}...`} />
                </Link>
            ))}
        </FooterView>
    );
};

const FooterView = styled.footer`
    width: 100%;
    height: 2.78rem;
    background: #111111;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    @media (max-width: 768px) {
        padding: 0.76rem 0.15rem 0;
        height: 2.36rem;
        display: block;
    }
`;
const Link = styled.a`
    margin-right: 0.23rem;
    &:last-child {
        margin-right: 0;
    }
    @media (max-width: 768px) {
        display: inline-block;
        margin-right: 0.3rem;
        margin-bottom: 0.24rem;
        &:nth-last-of-type(4n + 4) {
            margin-right: 1.1rem;
        }
    }
`;
const Logo = styled.img`
    width: 0.23rem;
    height: 0.23rem;
    @media (max-width: 768px) {
        width: 0.3rem;
        height: 0.3rem;
    }
`;

export default Footer;
