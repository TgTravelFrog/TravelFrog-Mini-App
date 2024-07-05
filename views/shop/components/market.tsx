import { FC, ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { IconDown, IconPriceDown, IconPriceUp, IconSearch } from '@/components/Icon';
import { useLogin, useMarketdata } from '@/state/user/hooks';
import { useBuyedMarketIds, useMarketReloadTime, useNoticeModal, useShowConfirmModal } from '@/state/base/hooks';
import { message } from 'antd';
import Server from '@/service';
import { Confirm } from '@/components';
import { useThrottled } from '@/hooks';

type IProps = {
    data: Record<any, any>;
};
const Item: FC<IProps> = ({ data }): ReactElement => {
    const [, handNoticeModal] = useNoticeModal();
    const [showConfirmModal, handShowConfirmModal] = useShowConfirmModal();
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

    const handOpen = () => {
        //
    };
    return (
        <Block>
            <Top>
                <User>
                    <Avatar src="/images/avatar..."></Avatar>
                    {data.sellerid === userInfo.id ? 'You' : data.sellerid}
                </User>
                {data.type === 'item' && <img src="/images/wenhao-round..." alt="" onClick={() => handNoticeModal({ open: true, info: { name: data.name, describe: data.describe } })} />}
            </Top>
            <MainContent>
                <Left>
                    <Img src={`https://.../item/${data.propsid}...`} />
                    <Amount>x{data.quantity}</Amount>
                </Left>

                <Content>
                    <Name>{data.type === 'item' ? data.name : `LV:${data.level}`}</Name>
                    <Info>
                        <Icon src="/images/clv3..." />
                        {data.price}
                    </Info>
                </Content>
            </MainContent>
            {showConfirmModal && show && <Confirm loading={loading} notice={`Are you sure you want to spend ${data.price} clovers to buy ${data.propsid === 'frog' ? '1 frog' : data.quantity + ' ' + data.name}?`} onOk={() => handSubmit()} />}
        </Block>
    );
};

const Market: FC = (): ReactElement => {
    const [check, setCheck] = useState('item');
    const [marketReloadTime] = useMarketReloadTime();
    const [showNumber, setShowNumber] = useState<number>(50);
    const [presearchVal, setpreSearchVal] = useState<string>('');
    const [searchVal, setSearchVal] = useState<string>('');

    const nav = [
        { key: 'item', tag: 'item' },
        { key: 'frog', tag: 'frog' }
    ];

    const filterList = [
        { title: 'newest', key: 'newest' },
        { title: 'no-box', key: 'noboxup' },
        { title: 'no-box', key: 'noboxdown' },
        { title: 'price', key: 'up' },
        { title: 'price', key: 'down' }
    ];

    const showList: any[] = useMemo(() => {
        let _list = list;
        if (Number(searchVal)) {
            _list = _list.filter((item) => item.sellerid == searchVal);
        } else if (searchVal) {
            _list = _list.filter((item) => item.name == searchVal);
        }
        if (filter === 'newest') {
            _list = (_list || []).sort((cur: any, next: any) => {
                if (cur.listtime > next.listtime) {
                    return -1;
                }
                if (cur.listtime < next.listtime) {
                    return 1;
                }
                return 0;
            });
        } else if (filter === 'up') {
            _list = _list.sort((cur: any, next: any) => {
                if (cur.price > next.price) {
                    return 1;
                }
                if (cur.price < next.price) {
                    return -1;
                }
                return 0;
            });
        } else if (filter === 'down') {
            _list = _list.sort((cur: any, next: any) => {
                if (cur.price > next.price) {
                    return -1;
                }
                if (cur.price < next.price) {
                    return 1;
                }
                return 0;
            });
        } else if (filter === 'noboxdown') {
            _list = _list
                .filter((item) => item.propsid != 'p_g_b')
                .sort((cur: any, next: any) => {
                    if (cur.price > next.price) {
                        return -1;
                    }
                    return 0;
                });
        } else if (filter === 'noboxup') {
            _list = _list
                .filter((item) => item.propsid != 'p_g_b')
                .sort((cur: any, next: any) => {
                    if (cur.price < next.price) {
                        return -1;
                    }
                    return 0;
                });
        }
        return _list.slice(0, showNumber);
    }, [list, searchVal, check, filter, showNumber, buyedMarketIds]);

    const selectNav = (key: string) => {
        //
    };

    const scrollTop = () => {
        
    };

    const scrollFn = () => {
        //
    };

    return (
        <>
            <Section>
                <Nav>
                    {nav.map((ele, index) => (
                        <NavItem key={ele.key} className={cn(check === ele.key ? 'active' : '', index === nav.length - 1 ? '_last' : '')} onClick={() => selectNav(ele.key)}>
                            {ele.key}
                        </NavItem>
                    ))}
                    <Once>
                        <img className={marketReloadTime === 0 ? 'rate' : ''} src={`/images/task/once...`} alt="" />
                        {String(marketReloadTime)}
                    </Once>
                    <Filter onClick={() => setOpenFilter(!openFilter)}>
                        <span>{filterList.find((ele) => ele.key === filter)!.title}</span> <img src="/images/down..." alt="" />
                        {openFilter && (
                            <Select>
                                {filterList.map((ele) => (
                                    
                                ))}
                            </Select>
                        )}
                    </Filter>
                </Nav>
                <ShopContent>
                    {check !== 'frog' && (
                        <>
                            <ShopItemContent>
                                {(showList || [])
                                    // .filter((ele) => !buyedMarketIds.includes(ele._id))
                                    .map((ele, index) => (
                                        <Item key={index} data={{ ...ele, type: check }} />
                                    ))}
                            </ShopItemContent>

                            {showList.length >= 50 && showList.length < list.length && (
                                <LoadMore
                                    onClick={() => {
                                        setShowNumber((pre) => pre + 50);
                                    }}
                                >
                                    load more
                                </LoadMore>
                            )}
                            {showList.length === 0 && <ComingSoon>not found ..</ComingSoon>}
                        </>
                    )}
                </ShopContent>
            </Section>
        </>
    );
};

const Section = styled.section``;
const TopIcon = styled.img`
    position: fixed;
    bottom: 0.2rem;
    left: 0.3rem;
    height: 0.53rem;
`;
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
    margin-right: 0.08rem;
    cursor: pointer;
    border-radius: 0.12rem;
    background-color: rgba(114, 92, 69, 0.6);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05) inset;
    transition: all 0.2s;
    border: 2px solid rgba(0, 0, 0, 0);

    color: #ebc874;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.2rem;

    &.active {
        border-radius: 0.08rem;
        background-color: #ebc874;
        border-color: #565f4e;
        color: #555e4b;

        background-image: url('/images/shop/shop-nav-bg...');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    &._last {
        margin-right: 0.06rem;
    }
`;

const Once = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.06rem;
    width: 0.24rem;
    height: 0.21rem;
    color: #ffedbf;
    font-size: 0.08rem;
    position: relative;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        &.rate {
            animation: rotate 2s linear infinite;
        }
    }
`;

const Filter = styled.div`
    flex: 1;
    height: 0.32rem;
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ebc874;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05) inset;

    color: #ebc874;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.16rem;
    position: relative;
    z-index: 9;
    span {
        position: relative;
        top: -0.02rem;
    }
    img {
        margin-left: 0.03rem;
        width: 0.12rem;
        height: 0.12rem;
    }
`;

const Select = styled.div`
    border-radius: 0.08rem;
    border: 2px solid #565f4e;
    background: #ebc874;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05) inset;
    padding: 0.1rem;
    min-width: 125%;
    position: absolute;
    top: 0.35rem;
    right: 0;
`;
const FilterItem = styled.div`
    color: #565f4e;
    font-size: 0.16rem;
    height: 0.2rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.06rem;
    span {
        position: relative;
        top: -0.02rem;
    }
    svg {
        width: 0.12rem;
        height: 0.12rem;
        margin-left: 0.05rem;
    }
    &.active {
        color: #fff;
    }
`;

const Search = styled.div`
    width: 100%;
    height: 0.32rem;
    border-radius: 0.1rem;
    border: 0.025rem solid #ebc874;
    background: rgba(235, 200, 116, 0.3);
    position: relative;
    margin-top: 0.08rem;
    padding: 0 0.1rem;
    img {
        position: absolute;
        right: 0.14rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        height: 0.16rem;
        &.reset {
            position: absolute;
            right: 0.4rem;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            height: 0.2rem;
        }
    }
`;
const Input = styled.input`
    width: 100%;
    height: 100%;
    background: none !important;
    border: none !important;
    font-size: 0.16rem;
    font-family: zixiaohunwennuantongzhiti_trial;
    color: #ebc874;
    &::placeholder {
        font-size: 0.16rem;
        color: rgba(255, 255, 255, 0.3);
        justify-content: center;
    }
`;

const ShopContent = styled.div`
    margin-top: 0.12rem;
    position: relative;
`;
const ShopItemContent = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.04rem 0.04rem;
    margin-top: 0.12rem;
`;

const ComingSoon = styled.div`
    position: absolute;
    top: 0.7rem;
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    color: #fff;
`;

const LoadMore = styled.div`
    text-align: center;
    border: 2px solid #565f4e;
    background: #ebc874;
    height: 0.28rem;
    line-height: 0.22rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0.1rem;
    display: inline-block;
    padding: 0 0.3rem;
    border-radius: 0.2rem;
    color: #565f4e;
    font-size: 0.15rem;
    cursor: pointer;
`;

const Block = styled.div`
    position: relative;
    width: 100%;
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #ebc874;

    padding: 0.1rem 0.05rem;
    overflow: hidden;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > img {
        width: 0.15rem;
        height: 0.15rem;
        opacity: 0.75rem;
    }
`;
const User = styled.div`
    display: flex;
    align-items: center;
    color: #555e4b;
    font-size: 0.12rem;
`;
const Avatar = styled.img`
    margin-right: 0.07rem;
    width: 0.16rem;
    height: 0.16rem;
`;
const MainContent = styled.div`
    margin: 0.08rem 0;
    display: flex;
    align-items: center;
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
    margin-right: 0.07rem;
`;
const Img = styled.img`
    height: 100%;
    position: relative;
    top: -0.03rem;
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
    font-size: 0.18rem;
    line-height: 1.5;
`;
const Info = styled.div`
    margin-top: 0.03rem;
    display: flex;
    align-items: center;

    color: #5e4d2c;
    font-family: zixiaohunwennuantongzhiti_trial;
    font-size: 0.16rem;
    font-weight: 400;
`;
const Icon = styled.img`
    height: 0.18rem;
    margin-right: 0.03rem;
`;
const Button = styled.div`
    width: 0100%;
    height: 0.38rem;
    line-height: 0.34rem;

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
    &.disabled {
        opacity: 0.5;
    }

    /* position: absolute;
    right: 0.15rem;
    top: 50%;
    transform: translateY(-50%); */
`;

export default Market;
