import 'styles/index.scss';
import '....css';
import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import cn from 'classnames';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../state';
import styled from 'styled-components';
import { use, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { TonConnectUIProvider, useTonConnectUI } from '@tonconnect/ui-react';
import NoticeModal from '@/components/NoticeModal';

const GlobalStyle = createGlobalStyle``;

export async function getServerSideProps(context: any) {
    const { params, query } = context;

    return {
        props: {
            params: params ?? {},
            searchParams: query,
            headers: context.req.headers
        }
    };
}

const ScriptService = ({ children }: any) => {
    const fetchUrlParams = async () => {
        // Logic that is executed immediately after the user enters
    };
    const clacTimes = (id: string) => {
        
    };
    const entry = async () => {
        
    };

    const walletReady = () => {
        
    };

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        fetchUrlParams();
        walletReady();

    }, []);
    return (
        <>
            <LoadLeft className={progress} id="loadLeft" src="https://.../main/load_left..." />
            <LoadRight className={progress} src="https://.../main/load_right..." />

            <Audio className="audio_bg" controls loop>
                <source src="https://.../main/bgmusic.mp3" type="audio/mpeg" />
            </Audio>
            <Audio className="audio_door" controls>
                <source src="https://.../main/door.mp3" type="audio/mpeg" />
            </Audio>
            {isFrist ? (
                <LoadingPage>
                    {
                        <>
                            <img className={cn('...', loading ? '...' : '')} src="https://.../gif/loading..." alt="" />
                            <Entry className={cn('...', loading ? '...' : '')} onClick={() => entry()}>
                                Start Game <img src="/images/entry..." alt="" />
                            </Entry>
                            {loading && <img className="... ..." src="/images/floading..." alt="" />}
                        </>
                    }
                </LoadingPage>
            ) : (
                children
            )}
            <PreImg src="https://.../main/boxback..." />
            <PreImg src="https://.../main/bg2..." />
            <PreImg src="https://.../outside/outsidebg..." />
            <PreImg src="https://.../main/pvpbg..." />
            {noticeInfo.open && <NoticeModal />}
        </>
    );
};
function AiApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo1.ico" />
                <title>Travel Frog</title>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="msapplication-tap-highlight" content="no" />
                <script async src="https://telegram.org/js/telegram-web-app.js"></script>
                <script async src="/jquery.js"></script>
                <script async src="/tonweb.js"></script>
            </Head>
            <GlobalStyle />
            <TonConnectUIProvider
                manifestUrl="https://...//tonconnect-manifest.json"
                actionsConfiguration={{
                    twaReturnUrl: 'https://t.me/travel_frog_bot/start'
                }}
            >
                <Provider store={store}>
                    <Main id="_main">
                        <ScriptService>
                            <Component {...pageProps} />
                        </ScriptService>
                    </Main>
                </Provider>
            </TonConnectUIProvider>
        </>
    );
}

const Main = styled.section`
    max-width: 450px;
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;
`;

const Entry = styled(Button)`
    border-radius: 8px;
    height: 0.4rem;
    line-height: 0.32rem;
    border: 2px solid #555e4b !important;
    text-align: center;
    font-size: 0.2rem;
    margin-right: 0.12rem;
    cursor: pointer;
    background-color: #e6ddc0 !important;
    background-image: url('https://.../main/header-btn-bg...');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #555e4b !important;
    padding: 0 0.2rem;
    display: inline-flex;
    align-items: center;
    margin-top: 0.2rem;
    position: relative;
    z-index: 3;
    img {
        width: 0.2rem;
        margin-left: 0.05rem;
        position: relative;
        top: 0.01rem;
    }
`;

const PreImg = styled.img`
    display: none;
`;
const LoadingPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: url('https://.../main/bg2...') no-repeat;
    background-size: 100%;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        top: 0;
        /* z-index: 99; */
    }
    /* background: #cfd9df; */

    /* background: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99; */
    & > img {
        width: 1.2rem;
        /* margin-bottom: 0.2rem; */
        margin-top: -1rem;
        position: relative;
        z-index: 3;
    }
    .floading {
        height: 1rem;
        animation: rotate 1.5s infinite linear;
    }
`;

const Audio = styled.audio`
    display: none;
`;

const LoadLeft = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 100vh;
    z-index: 99;
    transform: translate3d(-100%, 0, 0);
    &.open {
        animation: LoadLeftOpen 1s linear;
    }
    &.close {
        animation: LoadLeftClose 0.7s linear;
        animation-fill-mode: forwards;
    }
`;

const LoadRight = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    z-index: 99;
    transform: translate3d(100%, 0, 0);
    &.open {
        animation: LoadRightOpen 1s linear;
    }
    &.close {
        animation: LoadRightClose 0.7s linear;
        animation-fill-mode: forwards;
    }
`;

export default AiApp;
