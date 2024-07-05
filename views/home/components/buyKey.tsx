import { useFrogdata, useLogin } from '@/state/user/hooks';
import { FC, ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { useKeyModal, useRechargeModal } from '@/state/base/hooks';
import { IconNameEdit, IconReset } from '@/components/Icon';
import { $BigNumber, $dealTimes, $onlyNumber, $toFixed } from '@/utils/utils';
import Server from '@/service';

const BuyContent: FC = (): ReactElement => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const fromBalance = useMemo(() => userInfo.diamond, [userInfo.diamond]);
    const gotBalance = useMemo(() => userInfo.boxkey, [userInfo.boxkey]);

    const handKey = (type: string = 'add') => {
        //
    };

    const handOpen = () => {
        //
    };

    const swap = async () => {
        try {
            //
        } catch (e: any) {
            message.error(e.message || 'error');
        }
    };
    return (
        <>
            <Cont>
                <Change>
                    <img src="/images/clvswap/change..." alt="" />
                </Change>
                <Item>
                    <Top>
                        {got.symbol} <Balance>balance:{$toFixed(gotBalance, 0)}</Balance>
                    </Top>
                    <Content>
                        <Symbol>
                            <Icon src={'/images/' + got.icon + '...'} />
                        </Symbol>
                        <Input value={got.amount} onChange={(e: any) => setGot({ ...got, amount: $onlyNumber(e.target.value) })} />
                        {/* <Input value={got.amount} placeholder="0" onChange={(e: any) => setGot({ ...got, amount: $onlyNumber(e.target.value) })} /> */}
                    </Content>
                </Item>
                <Swap disabled={!got.amount} loading={loading} onClick={() => handOpen()}>
                    Pay now
                </Swap>
            </Cont>
            <ConfirmModal width="80%" footer={null} open={show} onOk={() => setShow(true)} onCancel={() => setShow(false)}>
                <ConfirmContent>
                    <h5>Hi：</h5>Are you sure you can get {got.amount} box key with {got.amount * 100} diamonds?
                </ConfirmContent>
                <ConfirmBtns>
                    <Btn onClick={() => setShow(false)}>cancel</Btn>
                    <Btn loading={loading} onClick={() => swap()}>
                        confirm
                    </Btn>
                </ConfirmBtns>
            </ConfirmModal>
        </>
    );
};


const BuyKey: FC = (): ReactElement => {

    const [showKeyModal, handKeyModal] = useKeyModal();
    const [gotDialog, gotGotDialog] = useState(false);
    const navList = [
        { label: 'Free', value: 'free' },
        { label: 'Buy', value: 'buy' }
    ];
    const handSubmit = async () => {
        try {
            //
        } catch (e: any) {
            message.error(e.message || 'error');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <View width="3.5rem" style={{ top: '0.4rem' }} footer={null} open={showKeyModal} onOk={() => handKeyModal(true)} onCancel={() => handKeyModal(false)}>
                <Header>
                    Box Key
                    <Right>
                        <Close src="/images/close..." onClick={() => handKeyModal(false)} />
                    </Right>
                </Header>
                <Section>
                    <Main>
                        <Nav>
                            {navList.map((ele) => (
                                <NavItem key={ele.value} className={check === ele.value ? 'active' : ''} onClick={() => setCheck(ele.value)}>
                                    {ele.label}
                                </NavItem>
                            ))}
                        </Nav>
                        {check === 'free' && <Free />}
                        {check === 'buy' && <BuyContent />}
                    </Main>
                </Section>
            </View>
        </>
    );
};

const View = styled(Modal)`
    .ant-modal-content {
        background: none;
    }
`;

const Header = styled.header`
    height: 0.36rem;
    border-radius: 0.08rem;
    border: 2px solid #565f4e;
    position: relative;
    text-align: center;
    color: #5e4d2c;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;
    line-height: 0.32rem;
    background-color: #ebc874;
    background-image: url(/images/shop/mylist-nav-bg...);
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;
const Right = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.03rem;
    display: flex;
    align-items: center;
`;
const Close = styled.img`
    height: 0.24rem;
    cursor: pointer;
`;
const Section = styled.div`
    margin-top: 0.06rem;
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #e7dec1;
    padding: 0.16rem;
    width: 100%;
    position: relative;
`;
const Main = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #9c7b58;
    padding: 0.14rem 0.1rem 0.1rem;
    width: 100%;
    min-height: 1rem;
    max-height: 6.4rem;
`;
const Nav = styled.div`
    display: flex;
    padding: 0 0.3rem;
    margin-bottom: 0.1rem;
`;
const NavItem = styled.div`
    flex: 1;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0);
    color: #ebc874;
    font-size: 0.16rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    height: 0.3rem;
    &:first-child {
        flex: 1; //0.7
    }
    &.active {
        color: #5e4d2c;
        border-color: #565f4e;
        background-color: #ebc874;
        background-image: url('/images/shop/mylist-nav-bg...');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`;

// BuyContent
const Cont = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #ebc874;
    padding: 0.38rem 0.24rem 0.5rem;
`;
const Item = styled.div``;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #555e4b;
    font-size: 0.16rem;
    font-style: normal;
    line-height: 0.19rem;
`;
const Symbol = styled.div`
    width: 0.46rem;
    height: 0.46rem;
    border-radius: 8px;
    border: 2px solid #565f4e;
    background: #eedda8;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.img`
    height: 0.32rem;
`;
const Input = styled.input`
    width: calc(100% - 0.6rem);
    height: 100%;
    background: none !important;
    border: none !important;
    text-align: right;
    padding-right: 0.07rem;
    font-family: zixiaohunwennuantongzhiti_trial;
    color: #565f4e;
`;
const Change = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.1rem 0 0;
    img {
        height: 0.24rem;
    }
`;
const Action = styled.div`
    margin-top: 0.04rem;
    display: flex;
    align-items: center;
    justify-content: end;
    div {
        width: 0.35rem;
        height: 0.35rem;
        line-height: 0.28rem;
        border-radius: 8px;
        border: 2px solid #565f4e;
        background: #9c7b58;
        text-align: center;
        color: #ebc874;
        font-size: 0.2rem;
        margin-left: 0.1rem;
        cursor: pointer;
    }
`;
const Swap = styled(Button)`
    margin-top: 0.26rem;
    width: 100%;
    height: 0.4rem;
    border-radius: 8px;
    border: 2px solid #565f4e;
    border-color: #555e4b !important;

    color: #555e4b;
    font-size: 0.2rem;
    font-style: normal;
    font-weight: 400;

    &:disabled {
        color: #737373 !important;
        background-color: #b5b5b5 !important;
        background-image: url(/images/bag/disabled-btn...);
    }
`;

// Free
const FreeContent = styled.div`
    border-radius: 0.1rem;
    background: url(/images/boxKey/free...) no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 4.42rem;
    position: relative;
    padding: 2.23rem 0.2rem;
`;
const Key = styled.div`
    position: absolute;
    top: 0.69rem;
    left: 50%;
    transform: translateX(-50%);
    .key {
        height: 0.6rem;
        width: 0.6rem;
        position: relative;
        z-index: 2;
    }
`;
const GiftImg = styled.img`
    @keyframes rotateGift {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180%;
    max-width: 450px;
    animation: rotateGift 4s infinite linear;
`;
const FreeTip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Tip = styled.div`
    color: #555e4b;
    font-size: 0.14rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
`;
const GotAmount = styled.div`
    margin-left: 0.14rem;
    display: flex;
    align-items: center;
    color: #555e4b;
    font-size: 0.2rem;
    img {
        height: 0.32rem;
        margin-right: 0.08rem;
    }
`;
const Date = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9c7b58;
    font-size: 0.2rem;
    font-weight: 400;
    margin: 0.27rem 0 0.3rem;
    div {
        width: 0.36rem;
        height: 0.36rem;
        line-height: 0.36rem;
        text-align: center;
        border-radius: 8px;
        background: #9c7b58;
        color: #fff;
        font-size: 0.2rem;
        font-weight: 400;
        margin: 0 0.06rem;
    }
`;
const Claim = styled(Button)`
    width: 100%;
    height: 0.4rem;
    border-radius: 8px;
    border: 2px solid #565f4e;
    border-color: #555e4b !important;

    &:disabled {
        /* color: #737373 !important;
        background-color: #b5b5b5 !important;
        background-image: url(/images/bag/disabled-btn...); */

        background-size: cover;
        color: #737373 !important;
        background-color: rgb(196, 196, 196) !important;
        background-image: url('/images/bag/disabled-btn...') !important;
    }
`;

const ConfirmModal = styled(Modal)`
    .ant-modal-content {
        background: none;
        position: relative;
        padding-bottom: 0.7rem;
    }
`;

const ConfirmContent = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #e7dec1;
    padding: 0.12rem 0.14rem;
    color: #555e4b;
    font-size: 0.16rem;
    line-height: 1.4;
    position: relative;
    z-index: 3;
    min-height: 0.9rem;
    h5 {
        font-size: 0.2rem;
    }
`;

const ConfirmBtns = styled.div`
    border: 2px solid #565f4e;
    background: #9c7b58;
    height: 0.78rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border-radius: 0 0 0.12rem 0.12rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &.onok {
        justify-content: center;
    }
`;
const Btn = styled(Button)`
    flex: 1;
    border-radius: 8px;
    height: 0.36rem;
    line-height: 0.32rem;
    border: 2px solid #ebc874 !important;
    text-align: center;
    color: #ebc874 !important;
    font-size: 0.2rem;
    margin-right: 0.12rem;
    cursor: pointer;

    &:last-child {
        border-color: #555e4b !important;
        background-color: #ebc874 !important;
        background-image: url('/images/shop/mylist-nav-bg...');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #555e4b !important;
        margin-right: 0;
    }
    &._disabled {
        color: #737373 !important;
        background-color: rgb(196, 196, 196) !important;
        background-image: url('/images/bag/disabled-btn...') !important;
    }
`;

export default BuyKey;
