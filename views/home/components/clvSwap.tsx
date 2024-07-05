import { useFrogdata, useLogin } from '@/state/user/hooks';
import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, message } from 'antd';
import { useBagModal, useClvSwapModal, useRechargeModal } from '@/state/base/hooks';
import { IconNameEdit, IconReset } from '@/components/Icon';
import { $onlyNumber, $toFixed } from '@/utils/utils';
import Server from '@/service';

const ClvSwap: FC = (): ReactElement => {
    const [showClvModal, handClvModal] = useClvSwapModal();
    const [labelindex, setLabelindex] = useState(2);
    const rateList = [
        { label: '25%', value: 0.25 },
        { label: '50%', value: 0.5 },
        { label: '100%', value: 1 }
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
            <View width="3.5rem" style={{ top: '0.4rem' }} footer={null} open={showClvModal} onOk={() => handClvModal(true)} onCancel={() => handClvModal(false)}>
                <Header>
                    Clover Swap
                    <Right>
                        <Close src="/images/close..." onClick={() => handClvModal(false)} />
                    </Right>
                </Header>
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
    padding: 0.1rem;
    width: 100%;
    min-height: 1rem;
    max-height: 6.4rem;
`;
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
const Balance = styled.span``;
const Content = styled.div`
    margin-top: 0.11rem;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #565f4e;
    background: #e6ddc0;
    padding: 0.09rem;
    display: flex;
    justify-content: space-between;
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
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.28rem;
    font-weight: 400;

    &::placeholder {
        color: rgba(85, 94, 75, 0.2);
        font-family: zixiaohunwennuantongzhiti_trial;
        font-size: 0.28rem;
        font-weight: 400;
    }
`;
const Btns = styled.div`
    margin: 0.05rem 0 0.04rem;
    display: flex;
    justify-content: end;
`;
const Rate = styled.div`
    height: 0.2rem;
    width: 0.4rem;
    border-radius: 4px;
    border: 2px solid #565f4e;
    background: #e6ddc0;
    line-height: 0.17rem;
    text-align: center;
    color: #555e4b;
    font-size: 0.11rem;
    margin-left: 0.03rem;
    &.active {
        background: #565f4e;
        color: #fff;
    }
`;
const Change = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.05rem 0 0;
    img {
        height: 0.24rem;
    }
`;

const Swap = styled(Button)`
    margin-top: 0.33rem;
    width: 100%;
    height: 0.4rem;
    border-radius: 8px;
    border: 2px solid #565f4e;
    border-color: #555e4b !important;

    color: #555e4b;
    font-size: 0.2rem;
    font-style: normal;
    font-weight: 400;

    background-color: #eae2cd !important;
    background-image: url('/images/clvswap/btn...') !important;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    &:disabled {
        color: #737373 !important;
        background-color: #b5b5b5 !important;
    }
`;

export default ClvSwap;
