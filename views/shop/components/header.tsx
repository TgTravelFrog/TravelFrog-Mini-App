import { useProgress } from '@/state/base/hooks';
import { useLogin } from '@/state/user/hooks';
import { $sleep,$toFixed } from '@/utils/utils';
import { useRouter } from 'next/router';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Header: FC = (): ReactElement => {
    const router = useRouter();
    const [, setProgress] = useProgress();

    return (
        <>
            <Main>
                <Bg>
                    {new Array(7).fill(0).map((ele, index) => (
                        <Mask key={index}></Mask>
                    ))}
                </Bg>
                <Balance>
                    <Frog src="/images/clv3..." />
                    {userInfo.clover ? $toFixed(userInfo.clover,0) : '--'}
                </Balance>
            </Main>
        </>
    );
};

const Main = styled.header`
    width: 100%;
    height: 0.8rem;
    position: relative;
`;
const Bg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const Mask = styled.div`
    flex: 1;
    background: #b9dee4;
    &:first-child,
    &:last-child {
        flex: 0.6;
    }
    &:nth-of-type(2n + 2) {
        background: #73b7c4;
    }
`;
const Back = styled.div`
    position: absolute;
    left: 0.24rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.53rem;
    height: 0.53rem;
    border-radius: 0.1rem;
    background: #fff;
    padding: 0.03rem;
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #e9c671;
        width: calc(100% - 0.09rem);
        height: calc(100% - 0.09rem);
        border-radius: 0.1rem;
    }
`;
const Icon = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
    z-index: 3;
`;
const Balance = styled.div`
    min-width: 1.12rem;
    height: 0.36rem;
    border-radius: 5px;
    padding: 0 0.15rem;
    border: 2px solid #565f4e;
    background: #e6ddc0;
    display: flex;
    align-items: center;
    color: #555e4b;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    right: 0.24rem;
    top: 50%;
    transform: translateY(-50%);
    &::before {
        content: '';
        width: calc(100% - 0.2rem);
        height: 2px;
        border-radius: 0.05rem;
        background: #fff;
        position: absolute;
        bottom: 0.06rem;
        left: 50%;
        transform: translateX(-50%);
    }
`;
const Frog = styled.img`
    height: 0.2rem;
    margin-right: 0.1rem;
`;

export default Header;
