import { createAction } from '@reduxjs/toolkit';

export const setTaskModal = createAction<boolean>('base/setTaskModal');
export const setClaimFrogModal = createAction<boolean>('base/setClaimFrogModal');
export const setClaimGiftModal = createAction<boolean>('base/setClaimGiftModal');
export const setKeyModal = createAction<boolean>('base/setKeyModal');
export const setFoodsModal = createAction<boolean>('base/setFoodsModal');
export const setRechargeModal = createAction<boolean>('base/setRechargeModal');
export const setWaterModal = createAction<boolean>('base/setWaterModal');
export const setPropsModal = createAction<boolean>('base/setPropsModal');
export const setShowWarnModal = createAction<boolean>('base/setShowWarnModal');
export const setNoticeModal = createAction<{ [key: string]: any }>('base/setNoticeModal');
export const setBuyedMarketIds = createAction<string>('base/setBuyedMarketIds');
export const setProgress = createAction<string>('base/setProgress');
export const setMarketReloadTime = createAction<Number>('base/setMarketReloadTime');
export const setFishButler2Modal = createAction<boolean>('base/setFishButler2Modal');
export const setRedeemGiftModal = createAction<boolean>('base/setRedeemGiftModal');
