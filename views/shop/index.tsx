import { FC, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header, Market, MyList, Shop } from './components';
import { Modal } from 'antd';
import { useRouter } from 'next/router';

const ShopContent: FC = (): ReactElement => {
    const router = useRouter();

    const navs = [
        { title: 'Market', key: 'market', icon: 'market-icon' },
        { title: 'Shop', key: 'shop', icon: 'shop-icon' },
        { title: 'Mylist', key: 'mylist', icon: 'mylist-icon' }
    ];

    useEffect(() => {
        if (router.query && navs.map((ele) => ele.key).includes(router.query.shop as string)) {
            setCheck(router.query.shop as string);
        }
    }, [router]);
    return (
        <>
            <Header />
            <Section>
                <Nav>
                    {navs.map((ele) => (
                        <Item key={ele.key} className={cn(check === ele.key ? 'active' : '')} onClick={() => setCheck(ele.key)}>
                            <img src={check === ele.key ? `/images/shop/${ele.icon}-active...` : `/images/shop/${ele.icon}...`} alt="" />
                            <span>{ele.title}</span>
                        </Item>
                    ))}
                </Nav>
                <Content>
                    <View>{check === 'market' ? <Market /> : check === 'shop' ? <Shop /> : <MyList />}</View>
                </Content>
            </Section>
        </>
    );
};

const Content = styled.div`
    width: 100%;
    margin-top: 0.08rem;
    padding: 0.1rem;
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #e7dec1;
`;
const View = styled.div`
    width: 100%;
    min-height: 5rem;
    padding: 0.1rem 0.1rem;
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #9c7b58;
`;
const Section = styled.section`
    background: #d0e691;
    width: 100%;
    min-height: calc(100% - 0.92rem);
    padding: 0.1rem 0.1rem 0.4rem;
`;
const Nav = styled.div`
    height: 0.46rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 0.04rem;
`;
const Item = styled.div`
    flex: 1;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 0.12rem;
    border: 2px solid rgba(0, 0, 0, 0);

    color: #5e4d2c;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.18rem;
    font-style: normal;
    font-weight: 400;
    transition: all 0.3s;
    background: none;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #9fb560;
    transition: all 0.2s;
    color: #d0e691;
    span {
        position: relative;
        z-index: 3;
    }
    img {
        height: 0.18rem;
        margin-right: 0.05rem;
        position: relative;
        z-index: 3;
    }

    &.active {
        border-color: #985603;
        color: #985602;
        -webkit-text-stroke-color: #5e4d2c;
        -webkit-text-stroke-width: 2;
        background: #9c7b58;
        background: rgb(233, 226, 207);
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background: url('/images/shop/nav-bg...') no-repeat;
            background-size: 100% 100%;
            border-radius: 0.12rem;
        }
    }
`;
export default ShopContent;
