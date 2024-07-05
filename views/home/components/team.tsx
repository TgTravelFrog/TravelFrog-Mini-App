import { useLogin } from '@/state/user/hooks';
import { FC, ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { useNoticeModal, useTeamModal } from '@/state/base/hooks';
import { $copy, $hash, $toFixed } from '@/utils/utils';

const Team: FC = (): ReactElement => {
    const [, handNoticeModal] = useNoticeModal();

    const inviteLink = useMemo(() => {
        return {};
    }, [userInfo.id]);

    const shareTwitter = async () => {
        const content = `I just got some $Frog tokens for free in the #TravelFrog game, like $NOT and #Hamster, you just open the telegram to adopt your frog for free, sign in through my link and you can also get an extra 20% of my daily earnings🐸🐸🐸 @ton_blockchain @DWFLabs \n https://t.me/travel_frog_bot?start=sl_${userInfo.id}`;
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`;
        (window as any).Telegram?.WebApp?.openLink(twitterShareUrl);
    };
    return (
        <>
            <View width="3.5rem" style={{ top: '0.4rem' }} footer={null} open={showTeamModal} onOk={() => handTeamModal(true)} onCancel={() => handTeamModal(false)}>
                <Header>
                    Team
                    <Right>
                        <Close src="/images/close..." onClick={() => handTeamModal(false)} />
                    </Right>
                </Header>
                <Section>
                    <Main>
                        <Content>
                            <Title>Reward Data</Title>
                            <Rewards>
                                <RewardItem>
                                    <Icon className="clv-color">
                                        <img src="/images/clv3..." alt="" />
                                    </Icon>
                                    <div className="content">
                                        <div className="left">
                                            <h5>
                                                InviterReward
                                                <img src="/images/team/wenhao..." alt="" onClick={() => handNoticeModal({ open: true, info: { name: 'Inviter Reward(Clover)', describe: 'When your inviter harvests clover, you will also receive a 20% clover reward' } })} />
                                            </h5>
                                            <p>my inviter id: {userInfo.inviterid}</p>
                                        </div>
                                        <span>+ {$toFixed(userInfo.inviter_clover_reward, 0)}</span>
                                    </div>
                                </RewardItem>
                                <RewardItem>
                                    <Icon className="clv-color">
                                        <img src="/images/clv3..." alt="" />
                                    </Icon>
                                    <div className="content">
                                        <div className="left">
                                            <h5>
                                                TeamReward
                                                <img src="/images/team/wenhao..." alt="" onClick={() => handNoticeModal({ open: true, info: { name: 'Team Reward(Clover)', describe: 'When the user you invite harvests clover, you will also receive 20% of the clover reward.' } })} />
                                            </h5>
                                        </div>
                                        <span>+ {$toFixed(userInfo.team_clover_reward, 0)}</span>
                                    </div>
                                </RewardItem>
                                <RewardItem>
                                    <Icon className="zuanshi-color">
                                        <img src="/images/zuanshi..." alt="" />
                                    </Icon>
                                    <div className="content">
                                        <div className="left">
                                            <h5>
                                                TeamReward
                                                <img
                                                    src="/images/team/wenhao..."
                                                    alt=""
                                                    onClick={() => handNoticeModal({ open: true, info: { name: 'Team Reward(Diamond)', describe: 'When the user you invite recharges diamonds, you will also receive a diamond reward of 10% of the corresponding recharge amount.' } })}
                                                />
                                            </h5>
                                        </div>
                                        <span className="team-diamond">+ {$toFixed(userInfo.team_diamond_reward, 0)}</span>
                                    </div>
                                </RewardItem>
                            </Rewards>
                        </Content>
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
const Main = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #9c7b58;
    padding: 0.14rem 0.1rem 0.1rem;
    width: 100%;
    min-height: 1rem;
    max-height: 6.4rem;
`;
const Content = styled.div`
    padding: 0.08rem 0.12rem 0.12rem;
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background-color: #ebc874;
    background-image: url('/images/team/bg1...');
    background-repeat: repeat;
    margin-bottom: 0.08rem;
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
                font-size: 0.16rem;
                font-weight: 400;
                line-height: 1;
                display: flex;
                align-items: center;
                img {
                    height: 0.14rem;
                    margin-left: 0.06rem;
                }
            }
            p {
                /* position: absolute;
                top: 0.18rem;
                left: 0; */
                color: #7c8a46;
                font-size: 0.09rem;
                margin-top: 0.03rem;
                line-height: 1;
            }
        }
        span {
            color: #6a840e;
            /* text-shadow: 0.5px 0 #575e4d; */
            /* -webkit-text-stroke-width: 0.75;
            -webkit-text-stroke-color: #555e4b; */
            font-size: 0.19rem;
            font-weight: 400;
            &.team-font {
                color: #9e781e;
                text-align: center;
                /* text-shadow: 1.5px 0 #575e4d;*/
                /* -webkit-text-stroke-width: 0.75; */
                /* -webkit-text-stroke-color: #575e4d; */
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                display: block;
            }
            &.team-diamond {
                color: #0b8bbe;
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
    &.clv-color {
        background: #99ab57;
    }
    &.zuanshi-color {
        background: #94cbc8;
    }
    &.team-color {
        background: #ebc874;
    }
    img {
        width: 0.22rem;
    }
`;
const Invite = styled.div`
    display: flex;
    align-items: center;
    .right {
        display: flex;
        align-items: center;
        div {
            margin-right: 0.04rem;
            border-radius: 8px;
            background: #9c7b58;
            width: 0.36rem;
            height: 0.36rem;
            display: flex;
            align-items: center;
            justify-content: center;
            &:last-child {
                margin: 0;
            }
            img {
                height: 0.16rem;
            }
        }
    }
`;
const InviteLink = styled.div`
    border-radius: 8px;
    border: 2px solid #565f4e;
    background: #e6ddc0;
    flex: 1;
    height: 0.36rem;
    line-height: 0.3rem;
    margin-right: 0.04rem;
    text-align: center;

    color: #555e4b;
    font-size: 0.14rem;
`;
const TeamUsers = styled.div`
    border-radius: 12px;
    border: 2px solid #565f4e;
    background: #e6ddc0;
    width: 100%;
    padding: 0.14rem;
    margin-top: 0.07rem;
    h5 {
        color: #555e4b;
        font-family: zixiaohunwennuantongzhiti_trial;
        font-size: 16px;
        font-weight: 400;
        line-height: 0.19rem;
        text-transform: capitalize;
        margin-bottom: 0.08rem;
    }
`;
const UserContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-height: 12vh;
    overflow-y: auto;
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2px;
    border-bottom: 1px solid rgba(94, 77, 44, 0.15);
    color: #555e4b;
    font-size: 0.15rem;
    line-height: 1.8;
    text-transform: lowercase;
    img {
        height: 0.11rem;
        cursor: pointer;
    }
    &:nth-child(even) {
        padding-left: 0.07rem;
    }
    &:nth-child(odd) {
        padding-right: 0.07rem;
    }
`;
export default Team;
