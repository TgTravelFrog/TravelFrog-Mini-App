import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showNoticeModal: false,
    noticeInfo: {
        title: '',
        info: {
            name: '',
            describe: ''
        }
    },
    progress: '', // open close
    showClaimFrogModal: false,
    showClaimGiftModal: false,
    showTeamModal: false,
    showFoodsModal: false,
    showWaterModal: false,
    showPropsModal: false,
    showConfirmModal: false,
    showBagModal: false,
    buyedMarketIds: [] as string[],
    fristHome: true,
    showTravelsModal: false,
    showWarnModal: false,
    showTaskModal: false,
    showFishButlerModal: false,
};

const BaseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setFoodsModal(state, { payload: open }) {
            state.showFoodsModal = open;
        },
        setFishButlerModal(state, { payload: open }) {
            state.showFishButlerModal = open;
        },
        setFishButler2Modal(state, { payload: open }) {
            state.showFishButler2Modal = open;
        },
        setTaskModal(state, { payload: open }) {
            state.showTaskModal = open;
        },
        setClaimFrogModal(state, { payload: open }) {
            state.showClaimFrogModal = open;
        },
        setClaimGiftModal(state, { payload: open }) {
            state.showClaimGiftModal = open;
        },
        setKeyModal(state, { payload: open }) {
            state.showKeyModal = open;
        },
        setClvModal(state, { payload: open }) {
            state.showClvModal = open;
        },
        setWaterModal(state, { payload: open }) {
            state.showWaterModal = open;
        },
        setTransferModal(state, { payload: open }) {
            state.showTransferModal = open;
        },
        setShowLogModal(state, { payload: open }) {
            state.showLogModal = open;
        },
        setProgress(state, { payload: open }) {
            state.progress = open;
        },
        setFristHome(state, { payload: open }) {
            state.fristHome = open;
        },
        setBuyedMarketIds(state, { payload: id }) {
            state.buyedMarketIds = state.buyedMarketIds.concat(id);
        },
        setMarketReloadTime(state, { payload: diff }) {
            state.marketReloadTime = diff;
        }
    }
});
export default BaseSlice.reducer;
