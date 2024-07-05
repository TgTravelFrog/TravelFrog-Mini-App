declare module 'react-lifecycle-hoc' {
  import { ComponentType } from 'react';

  type HOC = <TProps>(Component: ComponentType<TProps>) => ComponentType<TProps>;

  export const withLifecycle: HOC;
}
