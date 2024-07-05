import { createAction } from '@reduxjs/toolkit';

export interface ITgUser {
    id: string;
    name: string;
}

export const setTgUser = createAction<ITgUser>('user/setTgUser');
export const setTonWalletAddress = createAction<string>('user/setTonWalletAddress');

export const setUserInfo = createAction<{ [key: string]: any }>('user/setUserInfo');
export const setUpdateUserInfo = createAction<{ [key: string]: any }>('user/setUpdateUserInfo');

export const setMarketdata = createAction<{ [key: string]: any }>('user/setMarketdata');
export const setUpdateMarketdata = createAction<{ [key: string]: any }>('user/setUpdateMarketdata');

export const setShopitems = createAction<{ [key: string]: any }>('user/setShopitems');
export const setFrogEquip = createAction<string[]>('user/setFrogEquip');
