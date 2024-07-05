import { ReactNode } from 'react';

export enum toastTypes {
    ERROR = 'error',
    INFO = 'info',
    SUCCESS = 'successs',
    WARNING = 'warning'
}
export interface ToasApi {
    id: string;
    description: ReactNode;
    duration: number | null;
    type: toastTypes;
}
export type ToastSignature = (description?: ToasApi['description'], duration?: ToasApi['duration'], id?: string) => string;

export interface ChainContextApi {}
