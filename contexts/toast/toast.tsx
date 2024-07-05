import { createContext, FC, ReactElement, useCallback, useState, ReactNode } from 'react';
import styled from 'styled-components';
import { ToastContextApi, ToasApi, toastTypes } from './type';
import { IconError, IconWarning, IconSuccess, IconCancel } from 'components/Icon';

export const ToastsContext = createContext<ToastContextApi | undefined>(undefined);

type ToastProps = {
  children: ReactNode;
};
const Toast: FC<ToastProps> = ({ children }): ReactElement => {
  const [toasts, setToasts] = useState<ToastContextApi['toasts']>([]);
  const times = 4500;

  const toast = useCallback(
    ({ description, duration, id, type }: any) => {
      setToasts((prevToasts) => {
        // Remove any existing toasts with the same id
        const currentToasts = prevToasts.filter((prevToast) => prevToast.id !== id);
        // console.error('----', duration, duration === null)
        duration = duration === null ? null : duration || times;

        autoHide(id, duration);
        return [
          ...currentToasts,
          {
            id,
            description,
            duration,
            type
          }
        ];
      });
    },
    [setToasts]
  );

  const autoHide = (id: string | number, duration: ToasApi['duration']) => {
    if (!duration) return;
    setTimeout(() => {
      setToasts((prevToasts) => {
        // Remove any existing toasts with the same id
        const currentToasts = prevToasts.filter((prevToast) => prevToast.id !== id);
        return [...currentToasts];
      });
    }, duration + 1500);
  };
  const toastError = (description?: ToasApi['description'], duration: ToasApi['duration'] = times) => {
    const id = new Date().getTime().toString();
    toast({ description, duration, id, type: toastTypes.ERROR });
    return id;
  };
  const toastInfo = (description?: ToasApi['description'], duration: ToasApi['duration'] = times) => {
    const id = new Date().getTime().toString();
    toast({ description, duration, id, type: toastTypes.INFO });
    return id;
  };
  const toastSuccess = (description?: ToasApi['description'], duration: ToasApi['duration'] = times) => {
    const id = new Date().getTime().toString();
    toast({ description, duration, id, type: toastTypes.SUCCESS });
    return id;
  };
  const toastWarning = (description?: ToasApi['description'], duration: ToasApi['duration'] = times) => {
    const id = new Date().getTime().toString();
    toast({ description, duration, id, type: toastTypes.WARNING });
    return id;
  };
  const clear = () => setToasts([]);
  const remove = (id: string | number) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
  };

  const getIcon = (type: toastTypes) => {
    switch (type) {
      case toastTypes.SUCCESS:
        return <IconSuccess />;
      case toastTypes.ERROR:
        return <IconError />;
      case toastTypes.WARNING:
        return <IconWarning />;
      default:
        return;
    }
  };

  return (
    <ToastsContext.Provider
      value={{
        toasts,
        clear,
        remove,
        toastError,
        toastInfo,
        toastSuccess,
        toastWarning
      }}
    >
      {children}
      <Content>
        {toasts.map((item, index) => {
          return (
            <ToastModal key={item.id + '_' + index}>
              <ToastModalContent duration={item.duration}>
                <p>
                  <Icon>{getIcon(item.type)}</Icon>
                  {item.description}
                </p>
                <IconCancel onClick={() => remove(item.id)} />
                <AnimationLine duration={item.duration} />
              </ToastModalContent>
            </ToastModal>
          );
        })}
      </Content>
    </ToastsContext.Provider>
  );
};

const Content = styled.div`
  width: auto;
  max-width: 6rem;
  position: fixed;
  top: 1.44rem;
  right: 0;
  z-index: 999999;
  @media screen and (max-width: 768px) {
    top: 0.8rem;
  }
`;

const ToastModal = styled.div`
  padding: 8px;
  font-size: 0.14rem;
  text-align: right;
`;
const ToastModalContent = styled.div.attrs<any>((props: any) => ({
  duration: props.duration
}))`
  padding: 0.22rem 0.65rem 0.22rem 0.2rem;
  position: relative;
  /* line-height: 1.57; */
  text-align: center;
  border-radius: 2px;
  // margin-bottom: 20px;
  transition: all 0.3s;
  opacity: 1;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  pointer-events: all;
  display: inline-block;
  background: linear-gradient(90.16deg, #fa91dc -4.4%, #c580fc 100.52%);
  border-radius: 0.1rem;
  overflow: hidden;
  font-size: 0.18rem;
  line-height: 0.18rem;
  color: #ffffff;
  text-align: left;
  animation: ${(props: any) => (props.duration === null ? '' : `hide 1.5s linear ${props.duration / 1000}s forwards`)};
  // &.hide {
  //     animation: ${(props: any) => (props.duration === null ? '' : `hide 1.5s linear ${props.duration / 1000}s forwards`)};
  // }
  p {
    padding-left: 0.25rem;
  }
  & > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.18rem;
    width: 0.25rem;
    cursor: pointer;
  }
  @keyframes hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const AnimationLine = styled.div.attrs<any>((props: any) => ({
  duration: props.duration
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0.06rem;
  animation: ${(props: any) => (props.duration === null ? '' : `widthFull ${props.duration / 1000}s linear forwards`)};
  background: linear-gradient(90.16deg, #ea69c6 -4.4%, #ac54f1 100.52%);
  @keyframes widthFull {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 0.16rem;
  top: 50%;
  transform: translateY(-50%);
  svg {
    font-size: 0.24rem;
  }
`;
export default Toast;
