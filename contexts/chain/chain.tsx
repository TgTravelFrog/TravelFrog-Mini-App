import { createContext, FC, ReactElement, useCallback, useState, ReactNode } from 'react';
import styled from 'styled-components';
import { ChainContextApi, ToasApi, toastTypes } from './type';
import { IconError, IconWarning, IconSuccess, IconCancel } from 'components/Icon';

export const ChainContext = createContext<ChainContextApi | undefined>(undefined);

type ChainProps = {
    children: ReactNode;
};
const Chain: FC<ChainProps> = ({ children }): ReactElement => {
    return <ChainContext.Provider value={{}}>{children}</ChainContext.Provider>;
};

export default Chain;
