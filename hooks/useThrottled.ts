import { useEffect, useRef } from 'react';

function useThrottled(defaultDelay: number = 3000): [(FN: Function, delay?: number) => void] {
    const throttleSwitch = useRef<boolean>(true);
    const throttled = (FN: Function, delay: number = defaultDelay): void => {
        if (!throttleSwitch.current) {
            return;
        }
        throttleSwitch.current = false;
        FN && FN();
        setTimeout(() => {
            throttleSwitch.current = true;
        }, delay);
    };

    useEffect(() => {
        return () => {
            throttleSwitch.current = true;
        };
    }, []);
    return [throttled];
}

export default useThrottled;
