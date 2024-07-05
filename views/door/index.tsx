import { FC, ReactElement, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import cn from 'classnames';
import Server from '@/service';
import { $dealTimes, $sleep, $toFixed } from '@/utils/utils';
import { useLogin, useFrogdata } from '@/state/user/hooks';
import { Modal, message } from 'antd';
import { Header } from '../home/components';
import { Storage } from '@/utils/storage';
import { useFishButlerModal, useRedeemGiftModal, useProgress, useFishButler2Modal } from '@/state/base/hooks';
import Notice from '../home/components/notice';
import FishButler from './components/fishButler';

declare var $: any;
let timer: any;

const Home: FC = (): ReactElement => {
    const [userInfo, { updateUser }] = useLogin();
    const router = useRouter();
    const [, setProgress] = useProgress();
    const [showFishButlerModal, handFishButlerModal] = useFishButlerModal();
    const [showRedeemGiftModal, handRedeemGiftModal] = useRedeemGiftModal();
    const [hidden, setHidden] = useState(false);
    const [loading, setLoading] = useState(false);
    const [harvestnum, setHarvestnum] = useState(0);
    const [harvestinterval, setHarvestinterval] = useState(0);

    const leave = useRef(false);
    const isFire = useRef(false);

    const [times, setTimes] = useState({ days: 0, hours: 0, minutes: 0, seconds: 1 });

    const isTimeEnd = useMemo(() => {
        return Object.values(times).reduce((acc: any, cur: any) => acc + cur) === 0;
    }, [times]);
    const clacTimes = () => {
        
    };
    const addClover = async () => {
        
    };

    const claimClv = async () => {
        
    };

    const renderRain = () => {
        
    };

    const updataharvest = () => {
        
    };
    useEffect(() => {
        if (timer) return;
         updataharvest();
    }, [userInfo.lastharvesttime, harvestinterval]);

    useEffect(() => {
        
    }, [userInfo]);

    useEffect(() => {
        
    }, []);

    useLayoutEffect(() => {
        renderRain();
    }, []);

    return (
        <View id="rain">
            <Notice />
            <Header disableClick={true} />
            <DoorContent>
                <Door>
                    <img src="https://.../main/door..."/>
                </Door>
                <div className="content">
                    <div className="mask" style={{ background: `rgba(0,0,0,${userInfo.raininfo[1]})` }}></div>
                    <Bg src="https://.../outside/..."></Bg>
                    {isTimeEnd && (
                        <>
                            <div className="">
                                <Outnumtag className={cn('...', hidden ? '..' : '')}>
                                    <span>{$toFixed(harvestnum, 0)}</span>
                                    <img src="/images/clv3..." alt="" />
                                </Outnumtag>
                            </div>
                            <div className="clv">
                                <Clv onClick={() => claimClv()} className={cn('...', hidden ? '...' : '')} src="https://.../outside/..." />
                            </div>
                        </>
                    )}
                    <GiftMachie onClick={() => handRedeemGiftModal(true)} src="https://.../outside/..." />
                    <Tags>
                        {loading ? (
                            <img src="/images/loading..." alt="" />
                        ) : !isTimeEnd || userInfo?.userautomsg?.userid ? (
                            <span>
                                {times.hours}h:{times.minutes}m:{times.seconds}s
                            </span>
                        ) : (
                            <span>harvest</span>
                        )}
                    </Tags>
                    {!userInfo?.userautomsg && (
                        <img
                            onClick={() => {
                                handFishButler2Modal(true);
                            }}
                            className="unemployedfish"
                            src="https://.../gif/unemployed..."
                            alt=""
                        />
                    )}
                    {userInfo?.userautomsg && (
                        <>
                            <img className="employed_fish" onClick={() => handFishButlerModal(true)} src="https://.../gif/employed_left..." alt="" />
                            <img className="employed_clover1" onClick={() => handFishButlerModal(true)} src="https://.../gif/clover..." alt="" />
                            <img id="_clv_icon" className="... twoclover" src="/images/oneclover..." alt="" />
                        </>
                    )}
                </div>
            </DoorContent>
            {showFishButlerModal && <FishButler harvestnum={harvestnum} />}
            {showRedeemGiftModal && <RedeemGift />}
        </View>
    );
};

const View = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const DoorContent = styled.div`
    width: 100%;
    height: auto;
    max-height: 100vh;
    overflow-y: auto;
    .content {
        height: auto;
        position: relative;
    }
`;
const Door = styled.div`
    width: 0.52rem;
    padding-top: 55vh;
    position: absolute !important;
    right: 0.22rem;
    bottom: 0.25rem;
    z-index: 3;
    img {
        width: 100%;
        height: 0.52rem;
    }
    /* border: 2px solid red;
    border-radius: 10px; */
`;
const Bg = styled.img`
    width: 100%;
    height: auto;
`;
const GiftMachie = styled.img`
    position: absolute;
    right: 40%;
    top: 49.9%;
    width: 0.37rem;
    z-index: 4;
`;
export default Home;
