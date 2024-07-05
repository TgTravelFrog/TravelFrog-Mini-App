import { useClvSwapModal, useKeyModal, useRechargeModal, useTransferModal } from '@/state/base/hooks';
import { useLogin } from '@/state/user/hooks';
import { $copy, $hash } from '@/utils/utils';
import { FC, ReactElement, memo, useEffect, useState } from 'react';
import styled from 'styled-components';

type IProps = {
    disableClick?: boolean;
};
const Header: FC<IProps> = ({ disableClick }): ReactElement => {
    const [, handClvModal] = useClvSwapModal();
    const [, handKeyModal] = useKeyModal();
    const [isFristLoad, setFristLoad] = useState(true);
    const { state, open, close } = useTonConnectModal();
    const [mute, setMute] = useState<boolean>(false);

    const connect = async () => {
        try {
            //
        } catch (e: any) {
            //
        }
    };

    const disconnect = async () => {
        try {
            await tonConnectUI.disconnect();
        } catch (e: any) {
            // message.error('disconnect error:::::', e.message);
        }
    };

    const TonConnectTask = async () => {
        try {
            //
        } catch (e: any) {
            message.error(e.message || 'error');
        }
    };

    const handVoice = async () => {
        try {
            //
        } catch (e) {}
    };

    const checkVoice = () => {
        //
    };

    useEffect(() => {
        if (isFristLoad) {
            checkVoice();
        }
    }, []);

    return (
        <View>
            <Left>
                <Balance onClick={() => !disableClick && handClvModal(true)}>
                    <Icon src="/images/clv3..."></Icon>
                    {userInfo.id ? <CountUp end={userInfo.clover} separator="" /> : '--'}
                    {!disableClick && <Icons src="/images/transfer1..." />}
                    {disableClick && <Icons src="/images/inactive..." />}
                </Balance>
                <Balance onClick={() => !disableClick && handKeyModal(true)}>
                    <Icon src="/images/key..."></Icon>
                    {userInfo.id ? <CountUp end={userInfo.boxkey} separator="" /> : '--'}
                    {!disableClick && <Icons src="/images/buy..." />}
                    {disableClick && <Icons src="/images/inactive..." />}
                </Balance>
            </Left>
            <Right>
                <Voice onClick={() => handVoice()} src={`/images/${mute ? 'mute' : 'close_mute'}...`} />
            </Right>
        </View>
    );
};

const View = styled.header`
    position: absolute;
    top: 0.4rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 0.2rem);
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    z-index: 3;
`;

const Balance = styled.div`
    min-width: 1.12rem;
    height: 0.36rem;
    border-radius: 5px;
    border: 2px solid #565f4e;
    background: #e6ddc0;
    padding: 0 0.3rem 0 0.15rem;
    display: flex;
    align-items: center;

    color: #555e4b;
    font-size: 0.2rem;
    font-weight: 400;
    position: relative;
    margin-bottom: 0.08rem;

    &:last-child {
        margin-bottom: 0rem;
    }
    &::after {
        content: '';
        width: 80%;
        height: 0.015rem;
        border-radius: 0.05rem;
        background: #fff;
        position: absolute;
        bottom: 0.04rem;
        left: 50%;
        transform: translateX(-50%);
    }
`;
const Right = styled.div`
    display: flex;
    position: relative;
`;
const Voice = styled.img`
    height: 0.26rem;
    position: absolute;
    left: -0.3rem;
    top: -0.02rem;
`;
const Block = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: end; */
`;

const WalletContent = styled.div`
    min-width: 1.3rem;
    height: 0.36rem;
    line-height: 0.32rem;
    border-radius: 0.2rem;
    border: 2px solid #008dd9;
    color: #008dd9;
    font-size: 0.14rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* align-items: center; */
    /* justify-content: center; */
    background-color: #e6ddc0;
    background-image: url('https://.../main/header-btn-bg...');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 2;
`;

const DisWallet = styled(Wallet)`
    display: inline-block;
    margin-top: 0.08rem;
    float: right;
    /* display: flex;
    justify-content: end; */
    /* position: relative;
    left: 50%;
    transform: translateX(-50%); */
`;

const Content = styled.div`
    min-width: 1.32rem;
    height: 0.36rem;
    border-radius: 5px;
    border: 2px solid #565f4e;
    color: #555e4b;
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    padding-left: 0.12rem;
    background-color: #e6ddc0;
    background-image: url('https://.../main/header-btn-bg...');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 2;
`;

const DisWalletContent = styled.div`
    height: 0.2rem;
    border-radius: 0.15rem;
    border: 2px solid #96584c;
    color: #96584c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.14rem;
    background-color: #e6ddc0;
    background-image: url('https://.../main/header-btn-bg...');
    background-size: cover;
    background-position: center;
    font-size: 0.11rem;
    font-family: zixiaohunwennuantongzhiti_trial;
    position: relative;
    z-index: 2;
    img {
        height: 0.1rem;
        margin-left: 0.08rem;
    }
`;
const Copy = styled.img`
    position: absolute;
    right: 0.08rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 0.14rem;
`;
export default Header;
