import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Header, Foods, Props, Water, Bag, Log, TravelsModal, UserWarnModel, Recharge, ClvSwap, BuyKey, Task } from './components';
import { useBagModal, useClaimFrogModal, useClaimGiftModal, useClvSwapModal, useFishButlerModal, useFoodsModal, useFristHome, useKeyModal, useProgress, usePropsModal, useRechargeModal, useShowLogModal, useTaskModal, useTeamModal, useTransferModal, useWaterModal } from '@/state/base/hooks';
import { useRouter } from 'next/router';
import Server from '@/service';
import { useFrogEquip, useFrogdata, useLogin } from '@/state/user/hooks';
import { Button, Modal, message } from 'antd';
import Transfer from './components/transfer';
import { $sleep } from '@/utils/utils';
import { Storage } from '@/utils/storage';
import { useTonConnectUI } from '@tonconnect/ui-react';
import Team from './components/team';
import ClaimFrog from './components/claimFrog';
import ClaimGift from './components/claimGift';
import Notice from './components/notice';

const Home: FC = (): ReactElement => {
    const [, setProgress] = useProgress();
    const [fristHome, setFristHome] = useFristHome();
    const [showLogModal, handLogModal] = useShowLogModal();
    const [showFoodsModal, handFoodsModal] = useFoodsModal();
    const [showPropsModal, handPropsModal] = usePropsModal();
    const [showWaterModal, handWaterModal] = useWaterModal();
    const [showTeamModal, handTeamModal] = useTeamModal();
    const [showClaimFrogModal, handClaimFrogModal] = useClaimFrogModal();
    const [showClaimGiftModal, handClaimGiftModal] = useClaimGiftModal();
    const [showTravelsModal, setShowTravelsModal] = useState(false);
    const [showWarnModal, setShowWarnModal] = useState(false);
    const [giftindex, setGiftindex] = useState(0);

    const actions = [
        { icon: 'pvp', key: 'pvp' },
        { icon: 'bag', key: 'bag' },
        { icon: 'log', key: 'log' },
        { icon: 'shop', key: 'shop' },
        { icon: 'door', key: 'door' }
    ];

    const showFirstModal: boolean = useMemo(() => {
        return !!fristHome && frogdata.traveltime > 0;
    }, [fristHome, frogdata.traveltime]);

    const showFirstWarnModal: boolean = useMemo(() => {
        return !!fristHome && (userInfo.iswarn || frogdata.state === 12);
    }, [fristHome, userInfo.iswarn]);

    const handJump = async (key: string, path?: string) => {
        // Logic
    };

    const handAction = async () => {
        // Logic
    };

    const openGift = (index: number) => {
        // Logic
    };

    const handOpenConfirmModal = () => {
        // Logic
    };


    return (
        <View>
            <Notice />
            <Header />

            <Actions>
                {actions.map((ele) => (
                    <ActionsItem src={`https://.../main/${ele.icon}...`} key={ele.key} onClick={() => handJump(ele.key)} />
                ))}
            </Actions>

            <ActionsLeft>
                <ActionsIcon onClick={() => handTeamModal(true)} src="https://.../main/team..." />
                <ActionsIcon onClick={() => handClaimFrogModal(true)} src="https://.../main/claimfrog..." />
                <ActionsIcon onClick={() => handTaskModal(true)} src="images/task..." />
            </ActionsLeft>
            <ConfirmModal width="80%" footer={null} open={showConfirm} onOk={() => setShowConfirm(true)} onCancel={() => setShowConfirm(false)}>
                <ConfirmContent>
                    <h5>Hi：</h5>
                    {frogdata.travelstate === 'ready' && 'After confirming ready, your frog will start traveling within 15 minutes'}
                    {frogdata.travelstate === 'cancel' && 'After canceling ready, the items carried will be returned to bag'}
                    {frogdata.travelstate === 'emergency recall' && 'Emergency recall requires 200 clovers. Your frog will immediately return home with increased experience points but no rewards. At the same time, your frog will also be at risk of dying from fatigue.'}
                </ConfirmContent>
                <ConfirmBtns>
                    <Btn onClick={() => setShowConfirm(false)}>cancel</Btn>
                    <Btn loading={loading} onClick={() => handAction()}>
                        confirm
                    </Btn>
                </ConfirmBtns>
            </ConfirmModal>

            {showFoodsModal && <Foods handJump={handJump} />}
            {showPropsModal && <Props handJump={handJump} />}
            {showWaterModal && <Water handJump={handJump} />}
            {showBagModal && <Bag />}
            {showTransferModal && <Transfer />}
            {showLogModal && <Log />}
            {(showFirstModal || showTravelsModal) && <TravelsModal show={showTravelsModal} close={() => setShowTravelsModal(false)} />}
            {showFirstWarnModal && <UserWarnModel show={showWarnModal} close={() => setShowWarnModal(false)} />}
            {showRechargeModal && <Recharge />}
            {showClvModal && <ClvSwap />}
            {showKeyModal && <BuyKey />}
            {showTeamModal && <Team />}
            {showClaimFrogModal && <ClaimFrog />}
            {userInfo.usergiftmsg.map((ele: any, index: number) => showClaimGiftModal && giftindex === index && <ClaimGift key={ele.code} index={index} />)}

            {showTaskModal && <Task />}

            <Audio className="audio_shop" controls>
                <source src="https://.../main/....mp3" type="audio/mpeg" />
            </Audio>
        </View>
    );
};

const View = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

const Bg = styled.img`
    width: 100%;
    height: auto;
`;

const Actions = styled.div`
    position: absolute;
    width: 0.52rem;
    right: 0.22rem;
    bottom: 0.25rem;
    z-index: 3;
`;
const ActionsItem = styled.img`
    width: 100%;
    margin-bottom: 0.06rem;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
`;

const ActionsLeft = styled.div`
    width: 0.52rem;
    position: absolute;
    left: 0.1rem;
    bottom: 1.45rem;
    z-index: 5;
`;
const ActionsIcon = styled.img`
    width: 0.52rem;
    cursor: pointer;
    margin-bottom: 0.05rem;
`;

const Footer = styled.footer`
    width: 2.04rem;
    position: absolute;
    left: 0.1rem;
    bottom: 0.25rem;
    padding-top: 50vh;
    z-index: 4;
    & > div {
        width: 100%;
        height: 0.52rem;
        /* overflow-x: auto; */
        display: flex;
        align-items: center;
        padding-left: 0.16rem;
        background: url('https://.../main/footerbg1...') no-repeat;
        /* background: url('/images/home/footerbg1...') no-repeat; */
        background-size: 100% 100%;
        /* border: 2px solid red; */
        /* &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    } */
    }
`;
const Emergency = styled.div`
    background-color: #ebc874;
    background-image: url(/images/shop/mylist-nav-bg...);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 0.08rem;
    border: 2px solid #565f4e;
    height: 0.36rem;
    color: #5e4d2c;
    font-size: 0.16rem;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeIcon = styled.img`
    width: 0.34rem;
    height: 0.34rem;
    margin-left: 0.11rem;
    position: absolute;
    right: -0.41rem;
    bottom: 0.1rem;
`;

const WarnModel = styled.img`
    width: 0.14rem;
    margin-right: 0.06rem;
`;
const PlusBock = styled.div`
    width: 0.36rem;
    height: 0.36rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 0.04rem;
    background: url('https://.../main/plus-bg...') no-repeat;
    background-size: 100% 100%;
`;
const PlusIcon = styled.img`
    width: 0.18rem;
    &.props {
        width: 100%;
    }
`;

const Status = styled.div`
    margin-left: 0.02rem;
    width: 0.64rem;
    height: 0.36rem;
    background: url('https://.../main/readybg...') no-repeat;
    background-size: 100% 100%;
    color: #5e4d2c;
    font-size: 0.16rem;
    display: flex;
    line-height: 0.3rem;
    justify-content: center;
    &.cancel {
        background: url('https://.../main/cancelbg...') no-repeat;
        background-size: 100% 100%;
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
    /* line-height: 0.32rem; */
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

const Audio = styled.audio`
    display: none;
`;

export default Home;
