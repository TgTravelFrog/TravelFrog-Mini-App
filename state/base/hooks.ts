import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    setBagModal,
    setFoodsModal,
    setPropsModal,
    setWaterModal,
    setshowMyListModal,
    setTransferModal,
    setNoticeModal,
    setShowLogModal,
    setShowConfirmModal,
    setBuyedMarketIds,
    setProgress,
    setFristHome,
    setRechargeModal,
    setClvModal,
    setKeyModal,
    setTeamModal,
    setClaimFrogModal,
    setClaimGiftModal,
    setShowTravelsModal,
    setShowWarnModal,
    setTaskModal,
    setMarketReloadTime,
    setFishButlerModal,
    setRedeemGiftModal,
    setFishButler2Modal
} from './actions';
import { AppState, useAppDispatch } from '../index';

export function useFoodsModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showFoodsModal = useSelector<AppState, AppState['base']['showFoodsModal']>((state: AppState) => state.base.showFoodsModal);
    const handFoodsModal = useCallback(
        (open: boolean) => {
            dispatch(setFoodsModal(open));
        },
        [dispatch]
    );

    return [showFoodsModal, handFoodsModal];
}

export function usePropsModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showPropsModal = useSelector<AppState, AppState['base']['showPropsModal']>((state: AppState) => state.base.showPropsModal);
    const handPropsModal = useCallback(
        (open: boolean) => {
            dispatch(setPropsModal(open));
        },
        [dispatch]
    );

    return [showPropsModal, handPropsModal];
}

export function useBagModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showBagModal = useSelector<AppState, AppState['base']['showBagModal']>((state: AppState) => state.base.showBagModal);
    const handBagModal = useCallback(
        (open: boolean) => {
            dispatch(setBagModal(open));
        },
        [dispatch]
    );

    return [showBagModal, handBagModal];
}

export function useFishButlerModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showFishButlerModal = useSelector<AppState, AppState['base']['showFishButlerModal']>((state: AppState) => state.base.showFishButlerModal);
    const handFishButlerModal = useCallback(
        (open: boolean) => {
            dispatch(setFishButlerModal(open));
        },
        [dispatch]
    );

    return [showFishButlerModal, handFishButlerModal];
}

export function useFishButler2Modal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showFishButler2Modal = useSelector<AppState, AppState['base']['showFishButler2Modal']>((state: AppState) => state.base.showFishButler2Modal);
    const handFishButler2Modal = useCallback(
        (open: boolean) => {
            dispatch(setFishButler2Modal(open));
        },
        [dispatch]
    );

    return [showFishButler2Modal, handFishButler2Modal];
}
export function useRedeemGiftModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showRedeemGiftModal = useSelector<AppState, AppState['base']['showRedeemGiftModal']>((state: AppState) => state.base.showRedeemGiftModal);
    const handRedeemGiftModal = useCallback(
        (open: boolean) => {
            dispatch(setRedeemGiftModal(open));
        },
        [dispatch]
    );

    return [showRedeemGiftModal, handRedeemGiftModal];
}

export function useClaimGiftModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showClaimGiftModal = useSelector<AppState, AppState['base']['showClaimGiftModal']>((state: AppState) => state.base.showClaimGiftModal);
    const handClaimGiftModal = useCallback(
        (open: boolean) => {
            dispatch(setClaimGiftModal(open));
        },
        [dispatch]
    );

    return [showClaimGiftModal, handClaimGiftModal];
}
export function useClaimFrogModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showClaimFrogModal = useSelector<AppState, AppState['base']['showClaimFrogModal']>((state: AppState) => state.base.showClaimFrogModal);
    const handClaimFrogModal = useCallback(
        (open: boolean) => {
            dispatch(setClaimFrogModal(open));
        },
        [dispatch]
    );

    return [showClaimFrogModal, handClaimFrogModal];
}

export function useRechargeModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showRechargeModal = useSelector<AppState, AppState['base']['showRechargeModal']>((state: AppState) => state.base.showRechargeModal);
    const handRechargeModal = useCallback(
        (open: boolean) => {
            dispatch(setRechargeModal(open));
        },
        [dispatch]
    );

    return [showRechargeModal, handRechargeModal];
}
export function useTeamModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showTeamModal = useSelector<AppState, AppState['base']['showTeamModal']>((state: AppState) => state.base.showTeamModal);
    const handTeamModal = useCallback(
        (open: boolean) => {
            dispatch(setTeamModal(open));
        },
        [dispatch]
    );

    return [showTeamModal, handTeamModal];
}

export function useClvSwapModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showClvModal = useSelector<AppState, AppState['base']['showClvModal']>((state: AppState) => state.base.showClvModal);
    const handClvModal = useCallback(
        (open: boolean) => {
            dispatch(setClvModal(open));
        },
        [dispatch]
    );

    return [showClvModal, handClvModal];
}

export function useTaskModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showTaskModal = useSelector<AppState, AppState['base']['showTaskModal']>((state: AppState) => state.base.showTaskModal);
    const handTaskModal = useCallback(
        (open: boolean) => {
            dispatch(setTaskModal(open));
        },
        [dispatch]
    );

    return [showTaskModal, handTaskModal];
}

export function useKeyModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showKeyModal = useSelector<AppState, AppState['base']['showKeyModal']>((state: AppState) => state.base.showKeyModal);
    const handKeyModal = useCallback(
        (open: boolean) => {
            dispatch(setKeyModal(open));
        },
        [dispatch]
    );

    return [showKeyModal, handKeyModal];
}

export function useTransferModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showTransferModal = useSelector<AppState, AppState['base']['showTransferModal']>((state: AppState) => state.base.showTransferModal);
    const handTransferModal = useCallback(
        (open: boolean) => {
            dispatch(setTransferModal(open));
        },
        [dispatch]
    );

    return [showTransferModal, handTransferModal];
}

export function useWaterModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showWaterModal = useSelector<AppState, AppState['base']['showWaterModal']>((state: AppState) => state.base.showWaterModal);
    const handWaterModal = useCallback(
        (open: boolean) => {
            dispatch(setWaterModal(open));
        },
        [dispatch]
    );

    return [showWaterModal, handWaterModal];
}

export function useShowMyListModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showMyListModal = useSelector<AppState, AppState['base']['showMyListModal']>((state: AppState) => state.base.showMyListModal);
    const handShowMyListModal = useCallback(
        (open: boolean) => {
            dispatch(setshowMyListModal(open));
        },
        [dispatch]
    );

    return [showMyListModal, handShowMyListModal];
}

export function useShowLogModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showLogModal = useSelector<AppState, AppState['base']['showLogModal']>((state: AppState) => state.base.showLogModal);
    const handShowLogModal = useCallback(
        (open: boolean) => {
            dispatch(setShowLogModal(open));
        },
        [dispatch]
    );

    return [showLogModal, handShowLogModal];
}

export function useShowConfirmModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showConfirmModal = useSelector<AppState, AppState['base']['showConfirmModal']>((state: AppState) => state.base.showConfirmModal);
    const handShowConfirmModal = useCallback(
        (open: boolean) => {
            dispatch(setShowConfirmModal(open));
        },
        [dispatch]
    );

    return [showConfirmModal, handShowConfirmModal];
}

export function useFristHome(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const fristHome = useSelector<AppState, AppState['base']['fristHome']>((state: AppState) => state.base.fristHome);
    const handFristHome = useCallback(
        (open: boolean) => {
            dispatch(setFristHome(open));
        },
        [dispatch]
    );

    return [fristHome, handFristHome];
}

export function useShowTravelsModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showTravelsModal = useSelector<AppState, AppState['base']['showTravelsModal']>((state: AppState) => state.base.showTravelsModal);
    const handShowTravelsModal = useCallback(
        (open: boolean) => {
            dispatch(setShowTravelsModal(open));
        },
        [dispatch]
    );

    return [showTravelsModal, handShowTravelsModal];
}
export function useShowWarnModal(): [boolean, (open: boolean) => void] {
    const dispatch = useAppDispatch();
    const showWarnModal = useSelector<AppState, AppState['base']['showWarnModal']>((state: AppState) => state.base.showWarnModal);
    const handShowWarnModal = useCallback(
        (open: boolean) => {
            dispatch(setShowWarnModal(open));
        },
        [dispatch]
    );

    return [showWarnModal, handShowWarnModal];
}

export function useBuyedMarketIds(): [string[], (id: string) => void] {
    const dispatch = useAppDispatch();
    const buyedMarketIds = useSelector<AppState, AppState['base']['buyedMarketIds']>((state: AppState) => state.base.buyedMarketIds);
    const handBuyedMarketIds = useCallback(
        (id: string) => {
            dispatch(setBuyedMarketIds(id));
        },
        [dispatch]
    );

    return [buyedMarketIds, handBuyedMarketIds];
}

export function useNoticeModal(): [{ [key: string]: any }, (data: { [key: string]: any }) => void] {
    const dispatch = useAppDispatch();
    const showNoticeModal = useSelector<AppState, AppState['base']['showNoticeModal']>((state: AppState) => state.base.showNoticeModal);
    const noticeInfo = useSelector<AppState, AppState['base']['noticeInfo']>((state: AppState) => state.base.noticeInfo);
    const handNoticeModal = useCallback(
        (data: { [key: string]: any }) => {
            dispatch(setNoticeModal(data));
        },
        [dispatch]
    );

    return [{ open: showNoticeModal, info: noticeInfo }, handNoticeModal];
}

export function useProgress(): [string, (data: string) => void] {
    const dispatch = useAppDispatch();
    const progress = useSelector<AppState, AppState['base']['progress']>((state: AppState) => state.base.progress);
    const handProgress = useCallback(
        (data: string) => {
            dispatch(setProgress(data));
        },
        [dispatch]
    );

    return [progress, handProgress];
}

export function useMarketReloadTime(): [Number, (diff: Number) => void] {
    const dispatch = useAppDispatch();
    const marketReloadTime = useSelector<AppState, AppState['base']['marketReloadTime']>((state: AppState) => state.base.marketReloadTime);
    const handMarketReloadTime = useCallback(
        (diff: Number) => {
            dispatch(setMarketReloadTime(diff));
        },
        [dispatch]
    );

    return [marketReloadTime, handMarketReloadTime];
}
