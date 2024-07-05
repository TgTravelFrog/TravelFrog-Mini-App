import { useLogin } from '@/state/user/hooks';
import styled from 'styled-components';
import { Button, Modal, message } from 'antd';
import { useFishButlerModal, useFishButler2Modal, useNoticeModal } from '@/state/base/hooks';
import { $dealOverTimes, $toFixed } from '@/utils/utils';
let timer: any;

type IProps = {
    harvestnum: number;
};
const FishButler: FC<IProps> = ({ harvestnum }): ReactElement => {
    const [showFishButlerModal, handFishButlerModal] = useFishButlerModal();
    const [, handNoticeModal] = useNoticeModal();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const clacTimes = () => {
        //
    };
    const clacBooster = (_times: any) => {
        //
    };
    const action = async () => {
        //
    };

    useEffect(() => {

    }, []);

    return (
        <>
            <View width="3.5rem" style={{ top: '0.25rem' }} footer={null} open={showFishButlerModal} onOk={() => handFishButlerModal(true)} onCancel={() => handFishButlerModal(false)}>
                <Header>
                    Fish Butler
                    <Right>
                        <Close src="/images/close..." onClick={() => handFishButlerModal(false)} />
                    </Right>
                </Header>
                <Section>
                    <Main>
                        <Banner>
                            <Tip>Your Fish Butler is working for you, keep it working and you will get more clovers</Tip>
                            <BannerImg src="/images/door/..." />
                        </Banner>
                    </Main>
                </Section>
            </View>
            <ConfirmModal width="80%" footer={null} open={show} onOk={() => setShow(true)} onCancel={() => setShow(false)}>
                <ConfirmContent>
                    <h5>Hi:</h5>Are you sure you want to fire the fish steward? Your accumulated boost multiplier will be reset, and the accumulation period will start again the next time you hire.
                </ConfirmContent>
                <ConfirmBtns>
                    <Btn loading={loading} onClick={() => action()}>
                        confirm
                    </Btn>
                </ConfirmBtns>
            </ConfirmModal>
        </>
    );
};
const Banner = styled.div`
    border-radius: 0.12rem;
    border: 0.02rem solid #565f4e;
    background: #ebc874;
    padding: 0.16rem 0.15rem 0.1rem;
    margin-bottom: 0.08rem;
`;
const Tip = styled.p`
    color: #555e4b;
    text-align: center;
    font-size: 0.15rem;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 0.14rem;
`;
const BannerImg = styled.img`
    width: calc(100% - 0.12rem);
    margin-left: 0.06rem;
`;

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
    padding: 0.14rem;
    width: 100%;
    position: relative;
`;
const Main = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #9c7b58;
    padding: 0.12rem 0.1rem 0.1rem;
    width: 100%;
    min-height: 1rem;
    max-height: 6.4rem;
`;
const Title = styled.h4`
    color: #555e4b;
    text-align: center;
    font-size: 0.19rem;
    line-height: 0.24rem;
    text-transform: capitalize;
    margin-bottom: 0.08rem;
`;
const Rewards = styled.div``;
const RewardItem = styled.div`
    border-radius: 0.12rem;
    /* border: 2px solid #565f4e;
    background: #99ab57; */
    width: 100%;
    height: 0.48rem;
    position: relative;
    margin-bottom: 0.05rem;
    &:last-child {
        margin-bottom: 0;
    }
    .content {
        width: calc(100% - 0.29rem);
        height: 100%;
        margin-left: 0.29rem;
        border-radius: 0.12rem;
        border: 2px solid #565f4e;
        background: #e6ddc0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.1rem 0 0.11rem;
        position: relative;
        z-index: 3;
        .left {
            position: relative;
            h5 {
                color: #555e4b;
                font-size: 0.15rem;
                font-weight: 400;
                line-height: 1;
                display: flex;
                align-items: center;
                img {
                    height: 0.14rem;
                    margin-left: 0.06rem;
                }
            }
        }
        .diamond-content {
            display: flex;
            align-items: center;
            color: #20a8a0;
            font-size: 0.2rem;
            font-weight: 400;
            p {
                font-size: 0.12rem;
                margin-top: 0.03rem;
                margin-left: 0.03rem;
            }
        }
    }
`;
const Icon = styled.div`
    border-radius: 0.12rem;
    position: absolute;
    left: 0;
    top: 50%;
    width: 0.5rem;
    height: 100%;
    transform: translateY(-50%);
    border: 2px solid #565f4e;
    background: #99ab57;
    display: flex;
    align-items: center;
    padding-left: 0.04rem;
    
`;

const Dismiss = styled.div`
    display: flex;
    align-items: center;
    height: 0.42rem;
    width: calc(100% - 0.1rem);
    margin-left: 0.05rem;
    line-height: 0.38rem;
    text-align: center;
`
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
    color: #6d260b;
    font-size: 0.16rem;
    line-height: 1.4;
    position: relative;
    z-index: 3;
    min-height: 0.9rem;
    h5 {
        color: #423a37;
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
            width: 60%;
        }
        img {
            /* margin-top: 0.2rem;
            width: 0.6rem;
            height: 0.6rem;
            border: 2px solid rgb(133, 59, 15);
            border-radius: 8px; */
            width: 100%;
        }
    }
`;
const ConfirmDismiss = styled.div`
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
export default FishButler;
