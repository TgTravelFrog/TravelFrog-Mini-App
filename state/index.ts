import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import base from './base/reducer';
import user from './user/reducer';

const store = configureStore({
    reducer: {
        user,
        base
    },
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: true
        }),
    devTools: process.env.NODE_ENV === 'development'
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
