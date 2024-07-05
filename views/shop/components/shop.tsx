import Server from '@/service';
import { useNoticeModal } from '@/state/base/hooks';
import { useLogin, useShopitems } from '@/state/user/hooks';
import { Button, Modal, message } from 'antd';
import { FC, ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

type IProps = {
    data: any[];
};
const Item: FC<IProps> = ({ data }): ReactElement => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

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
            <Block>
                <Left>
                    <Img src={`https://.../item/${data[0]}...`} />
                    <Amount>x1</Amount>
                </Left>
                <BuyButton onClick={() => setShow(true)}>buy</BuyButton>
            </Block>
            <ConfirmModal width="80%" footer={null} open={show} onOk={() => setShow(true)} onCancel={() => setShow(false)}>
                <ConfirmContent>
                    <h5>Hi：</h5>Are you sure you want to spend {data[2] * amount} clovers to buy {amount} {data[1]}?
                    <Action>
                        <Line>
                            <Label>Quantity</Label>
                        </Line>
                    </Action>
                </ConfirmContent>

                <ConfirmBtns>
                    <Btn onClick={() => setShow(false)}>cancel</Btn>
                    <Btn loading={loading} onClick={() => handSubmit()}>
                        confirm
                    </Btn>
                </ConfirmBtns>
            </ConfirmModal>
        </>
    );
};

const Action = styled.div`
    margin-top: 0.28rem;
    padding: 0 0.03rem;
`;
const Line = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.05rem;
`;
const Label = styled.div`
    color: #555e4b;
    font-size: 0.18rem;
    font-weight: 400;
    line-height: 1;
    img {
        width: 0.22rem;
        margin-left: 0rem;
        margin-bottom: 0.04rem;
        vertical-align: middle;
    }
    ,
    h5 {
        font-size: 0.1rem;
        color: #b98075;
    }
    &.Price {
        margin-top: 0.07rem;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 0.12rem;
    svg {
        width: 0.18rem;
        cursor: pointer;
    }
`;
const Sub = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #9c7b58;
    width: 0.4rem;
    height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #ebc874;
    font-size: 0.2rem;
`;
const Add = styled(Sub)``;
const Input = styled.input`
    width: 0.75rem;
    height: 0.4rem;
    border-radius: 0.12rem;
    border: 2px solid #555e4b;
    background: #ebc874;
    text-align: center;
    padding: 0.04rem;
    margin: 0 0.04rem;
    color: #555e4b;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;
    font-weight: 400;
    &::placeholder {
        color: #5e4d2c;
        opacity: 0.8;
    }
`;

const Section = styled.section``;
const Nav = styled.div`
    height: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const NavItem = styled.div`
    flex: 1;
    height: 0.48rem;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.15rem;
    cursor: pointer;
    border-radius: 0.12rem;
    background-color: rgba(114, 92, 69, 0.6);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05) inset;
    transition: all 0.2s;
    border: 2px solid rgba(0, 0, 0, 0);

    &.active {
        border-radius: 0.08rem;
        background-color: #ebc874;
        border-color: #565f4e;
        background-image: url('/images/shop/shop-nav-bg...');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    &:last-child {
        margin-right: 0;
    }
`;
const NavIcon = styled.img`
    height: 0.32rem;
`;

const Block = styled.div`
    position: relative;
    width: 100%;
    height: 0.88rem;
    display: flex;
    align-items: center;
    border-radius: 0.1rem;
    border: 2px solid #565f4e;
    background-color: #ebc874;
    background-image: url('/images/shop/shop-item-bg...');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 0.12rem;
    padding: 0 0.15rem;
`;
const Left = styled.div`
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.08rem;
    background: #eae2cd;
    border: 2px solid #565f4e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 0.12rem;
`;
const Img = styled.img`
    height: 100%;
`;
const Amount = styled.span`
    position: absolute;
    right: 0.04rem;
    bottom: 0.03rem;
    color: #555e4b;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.14rem;
    line-height: 1;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Name = styled.div`
    color: #555e4b;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;
    line-height: 1.5;
    & > img {
        width: 0.15rem;
        height: 0.15rem;
        opacity: 0.75rem;
    }
`;
const Info = styled.div`
    margin-top: 0.07rem;
    display: flex;
    align-items: center;

    color: #5e4d2c;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;
    font-weight: 400;
`;
const Icon = styled.img`
    height: 0.22rem;
    margin-right: 0.1rem;
`;
const BuyButton = styled.div`
    min-width: 0.7rem;
    height: 0.34rem;
    line-height: 0.3rem;

    color: #555e4b;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;
    font-weight: 400;

    border-radius: 0.08rem;
    border: 2px solid #565f4e;
    display: inline-block;
    background-color: #eae2cd;
    background-image: url('/images/shop/confirm-bg...');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    padding: 0 0.12rem;

    position: absolute;
    right: 0.15rem;
    top: 50%;
    transform: translateY(-50%);
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
    h5 {
        font-size: 0.2rem;
    }
    &...t_content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 0.32rem;
        padding-top: 0.28rem;
        p {
            text-align: center;
            margin-bottom: 0.2rem;
        }
        img {
            width: 0.6rem;
            height: 0.6rem;
            border: 2px solid rgb(133, 59, 15);
            border-radius: 8px;
        }
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
`;
export default Shop;
