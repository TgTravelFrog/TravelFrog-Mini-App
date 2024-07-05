import { useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { setTgUser, ITgUser, setUserInfo, setUpdateUserInfo, setFrogdata, setMarketdata, setShopitems, setFrogEquip, setUpdateFrogdata, setUpdateMarketdata, setUpdatShopitems, setTonWalletAddress } from './actions';
import { AppState, useAppDispatch } from '../index';
import { Storage } from '@/utils/storage';
import Server from '@/service';
import { $sleep } from '@/utils/utils';
import { message } from 'antd';
import { useFristHome } from '../base/hooks';

export function useLogin(): [{ [key: string]: any }, { login: (info: ITgUser) => void; fetchUser: () => void; updateUser: (info: { [key: string]: any }) => void }] {
    const dispatch = useAppDispatch();
    const login = useCallback(
        async (info: ITgUser) => {
            try {
                //your logic

            } catch (e: any) {
                message.error(e.message || 'error');
            }
        },
        [dispatch]
    );

    return [];
}

export function useFrogdata(): [{ [key: string]: any }, (userid?: string) => void, (info: { [key: string]: any }) => void] {
    const dispatch = useAppDispatch();
    const getFrogdata = useCallback(
        async (userid?: string) => {
            try {
                //your logic
            } catch (e: any) {
                message.error(e.message || 'error');
            }
        },
        [dispatch]
    );
    const updateFrogdata = useCallback(
        //your logic
    );
    return [];
}

export function useShopitems(): [{ [key: string]: any[] }, (userid?: string) => void, (info: { [key: string]: any }) => void] {
    const dispatch = useAppDispatch();
    const getShopitems = useCallback(
        async (userid?: string) => {
            try {
                //your logic
                dispatch(setShopitems(data));
            } catch (e: any) {
                message.error(e.message || 'error');
            }
        },
        [dispatch]
    );
    const updateShopitems = useCallback(
        async (info: { [key: string]: any }) => {
            //your logic
        },
        [dispatch]
    );
    return [];
}

export function useTonWalletAddress(): [string, (address: string) => void] {
    const dispatch = useAppDispatch();
    const handTonWalletAddress = useCallback(
        //your logic
    );
    return [];
}

export function useFrogEquip(): [string[], (info: string[]) => void] {
    const dispatch = useAppDispatch();
    const handFrogEquip = useCallback(
        //your logic
    );

    return [];
}
