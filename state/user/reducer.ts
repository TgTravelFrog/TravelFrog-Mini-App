import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: '',
    info: {},
    tonWalletAddress: '',
    frogEquip: ['', '', ''],
    frogdata: {},
    marketdata: {},
    marketdataFristLoading: true,
    shopitems: {}
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}  
});

export default UserSlice.reducer;
